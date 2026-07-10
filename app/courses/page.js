import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Courses — Riverways",
};

const COURSES = [
  {
    n: "01",
    name: "Introduction to Digital Marketing",
    desc: "The foundations: how demand actually moves online, and where most Nigerian businesses lose it before they ever get to a campaign.",
  },
  {
    n: "02",
    name: "Paid Ads",
    desc: "Meta, Google, and TikTok — built around System 1 activation and frictionless conversion, not just budget and boosting.",
  },
  {
    n: "03",
    name: "Email Marketing",
    desc: "Sequences and lists that build trust before they sell — the 95% content architecture applied to your inbox.",
  },
  {
    n: "04",
    name: "Web Design",
    desc: "Sites built to convert intent, not just look presentable — structure, copy, and speed working together.",
  },
  {
    n: "05",
    name: "Copywriting",
    desc: "Words that pass the Stranger Test — clear enough that a cold reader gets it in three seconds.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="section courses-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">100% Virtual</p>
            <h1>Learn the system, not just the tools.</h1>
          </Reveal>
          <Reveal>
            <p className="courses-lede">
              Riverways courses teach the same DEOS thinking behind every client engagement —
              taught live, entirely online. No travel, no in-person cohort required.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section courses-list">
        <div className="container">
          <ol className="course-grid">
            {COURSES.map((c) => (
              <Reveal as="li" key={c.n} className="course-card">
                <span className="course-n">{c.n}</span>
                <h2>{c.name}</h2>
                <p>{c.desc}</p>
                <span className="course-tag">Virtual · Live sessions</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section courses-cta">
        <div className="container courses-cta-inner">
          <Reveal>
            <h2>Dates and enrolment details are being finalised.</h2>
            <p>
              Leave your details and you'll be the first to know when registration opens —
              including schedule, format, and pricing for each course.
            </p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Get notified
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .courses-hero h1 {
          margin-top: 16px;
          font-size: clamp(34px, 5vw, 54px);
          max-width: 16ch;
        }
        .courses-lede {
          margin-top: 22px;
          max-width: 620px;
          color: var(--ink-300);
          font-size: 17px;
          line-height: 1.6;
        }
        .course-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .course-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .course-grid { grid-template-columns: 1fr; }
        }
        .course-card {
          padding: 28px;
          border: 1px solid var(--navy-700);
          border-radius: 14px;
          background: var(--navy-800);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .course-n {
          font-family: var(--font-display);
          font-size: 12px;
          color: var(--gold);
          letter-spacing: 0.08em;
        }
        .course-card h2 {
          font-size: 21px;
        }
        .course-card p {
          font-size: 14px;
          color: var(--ink-500);
          line-height: 1.55;
          flex: 1;
        }
        .course-tag {
          font-family: var(--font-display);
          font-size: 11px;
          color: var(--ink-500);
          letter-spacing: 0.04em;
        }
        .courses-cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          max-width: 560px;
          margin: 0 auto;
        }
        .courses-cta-inner h2 {
          font-size: clamp(24px, 3.4vw, 32px);
        }
        .courses-cta-inner p {
          color: var(--ink-300);
          font-size: 15px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
