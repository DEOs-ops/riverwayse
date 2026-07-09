import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "About Femi — Riverways",
};

const STOPS = [
  {
    name: "Opera Ads",
    note: "Digital advertising strategy at scale, across one of the continent's largest ad platforms.",
  },
  { name: "Miniso", note: "Retail brand marketing for a global lifestyle retailer entering the Nigerian market." },
  { name: "Revolution Plus", note: "Growth marketing inside a fast-moving Nigerian property & lifestyle group." },
  { name: "Brit Properties", note: "Brand and demand generation in Lagos real estate." },
  { name: "Xgo Finance", note: "Marketing for a Nigerian fintech, where trust has to be earned in every asset." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section about-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1>Oluwafemi Akintola</h1>
          </Reveal>
          <Reveal>
            <p className="about-lede">
              Founder of Riverways. Six years in Nigerian digital marketing before deciding the
              agencies he'd worked with — and worked for — weren't built to make their clients'
              growth actually compound.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-body">
        <div className="container about-grid">
          <Reveal as="div" className="about-copy">
            <h2>Why Riverways exists</h2>
            <p>
              Most Lagos businesses have been sold marketing. Posts, boosted ads, a logo, a
              website — pieces, sold separately, rarely working together. Femi spent years inside
              agencies and brand teams watching that pattern repeat: real budget spent, real
              effort put in, and growth that never quite compounded.
            </p>
            <p>
              Riverways was built to fix the pattern, not just the pieces. That's what the DEOS
              framework is — a single current running from brand, to offer, to systems, instead
              of four separate vendors pulling in four separate directions.
            </p>
            <Link href="/deos" className="btn btn-ghost about-cta">
              How DEOS works
            </Link>
          </Reveal>

          <Reveal as="div" className="about-track">
            <h2>Track record</h2>
            <ul className="track-list">
              {STOPS.map((s) => (
                <li key={s.name}>
                  <span className="track-name">{s.name}</span>
                  <span className="track-note">{s.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section about-cta-final">
        <div className="container about-cta-inner">
          <Reveal>
            <h2>Want to talk to Femi directly?</h2>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Book a growth audit
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-hero h1 {
          margin-top: 16px;
          font-size: clamp(38px, 5.4vw, 58px);
        }
        .about-lede {
          margin-top: 22px;
          max-width: 620px;
          color: var(--ink-300);
          font-size: 17px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
        }
        .about-copy h2,
        .about-track h2 {
          font-size: 24px;
          margin-bottom: 18px;
        }
        .about-copy p {
          color: var(--ink-300);
          font-size: 15.5px;
          margin-bottom: 16px;
        }
        .about-cta {
          margin-top: 12px;
        }
        .track-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .track-list li {
          padding: 18px 20px;
          border: 1px solid var(--navy-700);
          border-radius: 14px;
          background: var(--navy-800);
        }
        .track-name {
          display: block;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15.5px;
          margin-bottom: 6px;
        }
        .track-note {
          display: block;
          color: var(--ink-500);
          font-size: 13.5px;
        }
        .about-cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .about-cta-inner h2 {
          font-size: clamp(26px, 3.6vw, 36px);
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
