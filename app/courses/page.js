import Reveal from "@/components/Reveal";
import Link from "next/link";
import PortalCard from "@/components/PortalCard";
import Atmosphere from "@/components/Atmosphere";
import PhotoHero from "@/components/PhotoHero";
import { COURSES } from "./data";

export const metadata = {
  title: "Courses — Riverways",
};

const COURSES_FAQ = [
  {
    q: "Do I need prior experience to join?",
    a: "No prior experience is required for Introduction to Digital Marketing. The other four courses assume the foundations from that first course, or equivalent working knowledge.",
  },
  {
    q: "Is there a certificate on completion?",
    a: "Yes — every course ends with a completion certificate, though the real value is the work you actually ship during live sessions, not the certificate itself.",
  },
  {
    q: "What if I miss a live session?",
    a: "Sessions are recorded and shared with enrolled students, so missing one live doesn't mean missing the content — though live participation is where most of the value comes from.",
  },
  {
    q: "How much do the courses cost?",
    a: "Pricing per course is being finalised ahead of the Saturday launch. Join the waitlist and you'll get pricing and dates before public registration opens.",
  },
  {
    q: "Can my team enrol together?",
    a: "Yes — group enrolment is available. Mention your team size when you join the waitlist and we'll follow up with group pricing.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="section courses-hero" style={{ position: "relative", overflow: "hidden" }}>
        <PhotoHero src="/photos/forest-sunbeams.jpg" position="center 60%" />
        <Atmosphere monumentalWord="courses" showMonumentalType={false} particleCount={35} showBg={false} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
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
              <Reveal as="li" key={c.slug}>
                <PortalCard href={`/courses/${c.slug}`} className="course-card">
                  <div
                    className="course-card-bg"
                    style={{ backgroundImage: `url(${c.photo})`, filter: `hue-rotate(${c.hue}) saturate(1.1) brightness(0.6)` }}
                  />
                  <div className="course-card-wash" />
                  <span className="course-card-badge">→</span>
                  <div className="course-card-content">
                    <span className="course-n">{c.n}</span>
                    <h2>{c.name}</h2>
                    <span className="course-tag">Virtual · Live sessions</span>
                  </div>
                </PortalCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section courses-faq">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Common questions</p>
            <h2>Before you enrol</h2>
          </Reveal>
          <div className="faq-list">
            {COURSES_FAQ.map((f) => (
              <Reveal as="div" key={f.q} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: COURSES_FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
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
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .course-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 24px 50px -18px rgba(201, 168, 76, 0.4);
        }
        .course-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 400ms ease;
        }
        .course-card:hover .course-card-bg {
          transform: scale(1.06);
        }
        .course-card-wash {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 24, 38, 0.15) 0%, rgba(11, 24, 38, 0.55) 55%, rgba(11, 24, 38, 0.92) 100%);
        }
        .course-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(11, 24, 38, 0.6);
          border: 1px solid rgba(201, 168, 76, 0.4);
          display: grid;
          place-items: center;
          color: var(--gold);
          font-size: 15px;
          backdrop-filter: blur(6px);
        }
        .course-card-content {
          position: relative;
          z-index: 1;
          padding: 22px;
        }
        .course-n {
          display: block;
          font-family: var(--font-display);
          font-size: 12px;
          color: var(--gold);
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .course-card h2 {
          font-size: clamp(20px, 2.4vw, 24px);
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .course-tag {
          display: block;
          font-family: var(--font-display);
          font-size: 11px;
          color: var(--ink-300);
          letter-spacing: 0.04em;
        }
        .faq-list {
          margin-top: 32px;
          max-width: 760px;
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          padding: 22px 0;
          border-top: 1px solid var(--navy-700);
        }
        .faq-item:last-child {
          border-bottom: 1px solid var(--navy-700);
        }
        .faq-item h3 {
          font-size: 17px;
          margin-bottom: 8px;
        }
        .faq-item p {
          font-size: 14.5px;
          color: var(--ink-300);
          line-height: 1.6;
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
