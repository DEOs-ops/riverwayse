"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Atmosphere from "@/components/Atmosphere";
import { AUDIT_QUESTIONS, HORIZON_LABELS } from "./questions";

const DIM_FEEDBACK = {
  0: "This is an open gap — likely the fastest place to find improvement.",
  1: "There's a foundation here, but it isn't systematic yet.",
  2: "This is a genuine strength — worth protecting as you grow.",
};

export default function AuditPage() {
  const [step, setStep] = useState(0); // 0..8 questions, 9 = results
  const [answers, setAnswers] = useState([]);
  const [unlocked, setUnlocked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const total = AUDIT_QUESTIONS.length;
  const atResults = step >= total;

  function selectAnswer(option) {
    const q = AUDIT_QUESTIONS[step];
    const next = [...answers];
    next[step] = { dim: q.dim, name: q.name, horizon: q.horizon, label: option.label, score: option.score };
    setAnswers(next);
    setTimeout(() => setStep((s) => s + 1), 180);
  }

  const strongCount = answers.filter((a) => a?.score === 2).length;
  const horizonTotals = { H1: 0, H2: 0, H3: 0 };
  answers.forEach((a) => a && (horizonTotals[a.horizon] += a.score));
  const weakestHorizon = Object.entries(horizonTotals).sort((a, b) => a[1] - b[1])[0]?.[0] || "H1";

  async function handleUnlock(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/audit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          answers,
          strongCount,
          weakestHorizon: `${weakestHorizon} · ${HORIZON_LABELS[weakestHorizon]}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setUnlocked(true);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="section audit-section" style={{ position: "relative", overflow: "hidden" }}>
      <Atmosphere monumentalWord="audit" />
      <div className="container audit-container" style={{ position: "relative", zIndex: 1 }}>
        {!atResults && (
          <Reveal key={step}>
            <p className="eyebrow">
              Question {step + 1} of {total} · {AUDIT_QUESTIONS[step].horizon} · {HORIZON_LABELS[AUDIT_QUESTIONS[step].horizon]}
            </p>
            <h1 className="audit-q">{AUDIT_QUESTIONS[step].question}</h1>
            <div className="audit-options">
              {AUDIT_QUESTIONS[step].options.map((o) => (
                <button key={o.label} className="audit-option" onClick={() => selectAnswer(o)}>
                  {o.label}
                </button>
              ))}
            </div>
            <div className="audit-progress">
              <div className="audit-progress-fill" style={{ width: `${(step / total) * 100}%` }} />
            </div>
          </Reveal>
        )}

        {atResults && (
          <>
            <Reveal>
              <p className="eyebrow">Your teaser result</p>
              <h1 className="audit-q">
                You're strong in {strongCount} of {total} dimensions.
              </h1>
              <p className="audit-lede">
                Your weakest horizon right now is <strong>{HORIZON_LABELS[weakestHorizon]}</strong> ({weakestHorizon}) —
                that's usually where the fastest improvement is available.
              </p>
            </Reveal>

            {!unlocked && (
              <Reveal>
                <form className="audit-unlock" onSubmit={handleUnlock}>
                  <p className="audit-unlock-label">Get your full dimension-by-dimension breakdown</p>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="Business name (optional)"
                    value={form.business}
                    onChange={(e) => setForm((f) => ({ ...f, business: e.target.value }))}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                  <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? "Unlocking…" : "Unlock full breakdown"}
                  </button>
                  {status === "error" && <p className="audit-error">{errorMsg}</p>}
                </form>
              </Reveal>
            )}

            {unlocked && (
              <Reveal>
                <div className="audit-breakdown">
                  {answers.map((a) => (
                    <div key={a.dim} className="audit-dim-row">
                      <span className="audit-dim-n">{a.dim}</span>
                      <div>
                        <h3>{a.name}</h3>
                        <p>{DIM_FEEDBACK[a.score]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="audit-human-note">
                  This is an AI-assisted, conceptual self-read — not a scored audit. Every real DEOS Audit report is
                  reviewed by a human before any recommendation is made.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Book a 20-minute call to walk through this →
                </Link>
              </Reveal>
            )}
          </>
        )}
      </div>

      <style>{`
        .audit-container { max-width: 680px; }
        .audit-q {
          margin-top: 14px;
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.2;
        }
        .audit-lede {
          margin-top: 16px;
          color: var(--ink-300);
          font-size: 16px;
          line-height: 1.6;
        }
        .audit-options {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .audit-option {
          text-align: left;
          padding: 16px 20px;
          border: 1px solid var(--navy-700);
          border-radius: 12px;
          background: rgba(28, 51, 80, 0.4);
          color: var(--ink-100);
          font-family: var(--font-body);
          font-size: 15px;
          cursor: pointer;
          transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        }
        .audit-option:hover {
          border-color: var(--gold);
          background: rgba(28, 51, 80, 0.7);
          transform: translateX(4px);
        }
        .audit-progress {
          margin-top: 32px;
          height: 3px;
          background: var(--navy-700);
          border-radius: 2px;
          overflow: hidden;
        }
        .audit-progress-fill {
          height: 100%;
          background: var(--gradient-current);
          transition: width 300ms ease;
        }
        .audit-unlock {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 420px;
        }
        .audit-unlock-label {
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink-500);
          margin-bottom: 4px;
        }
        .audit-unlock input {
          padding: 12px 14px;
          border: 1px solid var(--navy-700);
          border-radius: 10px;
          background: var(--navy-800);
          color: var(--ink-100);
          font-family: var(--font-body);
          font-size: 14px;
        }
        .audit-error {
          color: #e6685f;
          font-size: 13px;
        }
        .audit-breakdown {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .audit-dim-row {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 16px;
          padding: 16px 0;
          border-top: 1px solid var(--navy-700);
        }
        .audit-dim-row h3 {
          font-size: 17px;
          margin-bottom: 4px;
        }
        .audit-dim-row p {
          font-size: 14px;
          color: var(--ink-300);
        }
        .audit-dim-n {
          font-family: var(--font-display);
          font-size: 12px;
          color: var(--gold);
        }
        .audit-human-note {
          margin: 24px 0;
          font-size: 13px;
          color: var(--ink-500);
          font-style: italic;
          max-width: 56ch;
        }
      `}</style>
    </section>
  );
}
