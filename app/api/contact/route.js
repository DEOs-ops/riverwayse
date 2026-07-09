import { NextResponse } from "next/server";

// Very small in-memory rate limiter (per server instance). Good enough to
// blunt basic bot spam; for stricter limits, move this to a shared store.
const submissions = new Map();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = submissions.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  submissions.set(ip, entry);

  return entry.count > MAX_PER_WINDOW;
}

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, business, email, message, company } = body || {};

    // Honeypot field: real users never fill this in. If it's populated,
    // silently pretend success so bots don't learn anything.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@riverwayse.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "hello@riverwayse.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Contact form is not configured yet. Please email hello@riverwayse.com directly." },
        { status: 500 }
      );
    }

    const escapeHtml = (str = "") =>
      str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

    const htmlContent = `
      <h2>New growth audit request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business || "—")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Riverways Site", email: fromEmail },
        to: [{ email: toEmail }],
        replyTo: { email, name },
        subject: `Growth audit request — ${business || name}`,
        htmlContent,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error("Brevo send failed:", brevoRes.status, errText);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please email hello@riverwayse.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
