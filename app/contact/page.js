"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Growth audit request — ${form.business || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@riverwayse.com?subject=${subject}&body=${body}`;
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
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} />
          </label>
          <button type="submit" className="btn btn-primary">
            Send & book my audit
          </button>
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
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
