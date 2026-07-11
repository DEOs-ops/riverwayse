import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, business, answers, strongCount, weakestHorizon } = body || {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@riverwayse.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "hello@riverwayse.com";

    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured.");
      return NextResponse.json({ ok: true, warning: "Email not sent — no API key configured." });
    }

    const escapeHtml = (str = "") =>
      String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

    const answerRows = (answers || [])
      .map((a) => `<li><strong>${escapeHtml(a.name)}</strong>: ${escapeHtml(a.label)}</li>`)
      .join("");

    const htmlContent = `
      <h2>New DEOS Audit lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name || "—")}</p>
      <p><strong>Business:</strong> ${escapeHtml(business || "—")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Strong dimensions:</strong> ${escapeHtml(strongCount)} / 9</p>
      <p><strong>Weakest horizon:</strong> ${escapeHtml(weakestHorizon)}</p>
      <p><strong>Answers:</strong></p>
      <ul>${answerRows}</ul>
    `;

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "Riverways Site", email: fromEmail },
        to: [{ email: toEmail }],
        replyTo: { email, name: name || email },
        subject: `DEOS Audit lead — ${business || name || email}`,
        htmlContent,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error("Brevo send failed:", brevoRes.status, errText);
      return NextResponse.json({ error: "Could not record your result right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit lead error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
