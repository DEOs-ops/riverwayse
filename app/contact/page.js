"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", business: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please email hello@riverwayse.com directly.");
    }
  }

  return (
    <section className="section contact">
      <div className="container contact-grid">
        <Reveal as="div">
          <p className="eyebrow">Contact</p>
          <h1>Let's look at where your growth is stuck.</h1>
          <p className="contact-lede">
            Tell us a bit about the business. We'll come back with a clear read on where DEOS
            would start.
          </p>

          <div className="contact-direct">
            <a href="mailto:hello@riverwayse.com" className="contact-direct-link">
              hello@riverwayse.com
            </a>
            <span className="contact-direct-note">Lagos, Nigeria</span>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required value={form.name} onChange={handleChange} />
          </label>
          <label>
            Business name
            <input type="text" name="business" value={form.business} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} />
          </label>
          <label>
            What's the main growth challenge right now?
            <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
          </label>

          {/* Honeypot: hidden from real users, catches basic bots */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hp-field"
            aria-hidden="true"
          />

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send & book my audit"}
          </button>

          {status === "success" && (
            <p className="form-status form-status-success">
              Thanks — we've got it. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status-error">{errorMsg}</p>
          )}
        </Reveal>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: start;
        }
        .contact h1 {
          margin-top: 16px;
          font-size: clamp(32px, 4.4vw, 46px);
          max-width: 460px;
        }
        .contact-lede {
          margin-top: 20px;
          max-width: 420px;
          color: var(--ink-300);
          font-size: 15.5px;
        }
        .contact-direct {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact-direct-link {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 18px;
          color: var(--teal);
        }
        .contact-direct-note {
          color: var(--ink-500);
          font-size: 13.5px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: var(--navy-800);
          border: 1px solid var(--navy-700);
          border-radius: 18px;
          padding: 32px;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13.5px;
          color: var(--ink-300);
          font-family: var(--font-display);
          font-weight: 500;
        }
        .contact-form input,
        .contact-form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink-100);
          background: var(--navy-900);
          border: 1px solid var(--navy-600);
          border-radius: 10px;
          padding: 12px 14px;
          resize: vertical;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--teal);
        }
        .contact-form button {
          margin-top: 6px;
          align-self: flex-start;
        }
        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .hp-field {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }
        .form-status {
          font-size: 14px;
          margin-top: 4px;
        }
        .form-status-success {
          color: var(--teal);
        }
        .form-status-error {
          color: #e6685f;
        }
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
