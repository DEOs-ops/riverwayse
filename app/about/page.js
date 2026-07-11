import Reveal from "@/components/Reveal";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import PhotoHero from "@/components/PhotoHero";

export const metadata = {
  title: "About Femi — Riverways",
};

const STOP_PHOTOS = ["/photos/misty-valley-mountains.jpg", "/photos/forest-sunbeams.jpg", "/photos/river-valley-hero.jpg"];

const STOPS = [
  {
    name: "Plusworld & Subsidiaries",
    note: "Growth Marketing Lead across four subsidiaries. Contributed to ₦4.5Bn+ in revenue and 4,000+ app downloads for Dandy's, through paid acquisition across Meta, Google, and TikTok.",
  },
  {
    name: "DevCenter Innovation & Subsidiaries",
    note: "Digital Marketing Manager. Delivered 25% ROI improvement on ₦15M+ monthly ad spend across four subsidiaries, and a 40% increase in qualified pipeline.",
  },
  {
    name: "Brit Properties Nigeria",
    note: "Interim Communications Manager & Brand Strategist. Drove 60% growth in organic traffic and doubled mobile app engagement time in Lagos real estate.",
  },
  {
    name: "XGO Finance",
    note: "Digital Marketing Specialist. Doubled fintech app engagement time while cutting user drop-off by 30%, where trust has to be earned in every asset.",
  },
  {
    name: "Opera Ads",
    note: "Digital Marketing Specialist across one of the continent's largest ad platforms. Held a 95% client retention rate across multiple industry accounts.",
  },
];

const CERTIFICATIONS = [
  { name: "Google Ads Certified Professional", note: "Advanced Search, Display, Video Advertising" },
  { name: "Google Analytics Certified", note: "Advanced Analytics and Conversion Tracking" },
  { name: "Facebook Blueprint Certified", note: "Facebook and Instagram Advertising" },
  { name: "HubSpot Inbound Marketing Certified", note: "Content Marketing and Lead Generation" },
];

const EDUCATION = {
  degree: "Bachelor of Science, Political Science",
  school: "Madonna University, Okija, Anambra State, Nigeria",
  years: "2009 – 2013",
};

export default function AboutPage() {
  return (
    <>
      <section className="section about-hero" style={{ position: "relative", overflow: "hidden" }}>
        <PhotoHero src="/photos/forest-sunbeams.jpg" position="center 30%" />
        <Atmosphere monumentalWord="about" showMonumentalType={false} particleCount={35} showBg={false} />
        <div className="container about-hero-grid" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <Reveal>
              <p className="eyebrow">About</p>
              <h1>Oluwafemi Akintola</h1>
            </Reveal>
            <Reveal>
              <p className="about-lede">
                Founder of Riverways. 8+ years leading performance marketing across Nigerian
                fintech, real estate, e-commerce, and technology — before deciding the agencies
                he'd worked with, and worked for, weren't built to make clients' growth actually
                compound.
              </p>
            </Reveal>
          </div>
          <Reveal className="about-portrait">
            <img src="/femi-headshot.png" alt="Oluwafemi Akintola, founder of Riverways" />
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
              {STOPS.map((s, i) => (
                <li key={s.name}>
                  <div
                    className="track-thumb"
                    style={{
                      backgroundImage: `url(${STOP_PHOTOS[i % STOP_PHOTOS.length]})`,
                      filter: `hue-rotate(${i * 28}deg) saturate(1.1) brightness(0.6)`,
                    }}
                  />
                  <div>
                    <span className="track-name">{s.name}</span>
                    <span className="track-note">{s.note}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="about-section-spacer">Certifications</h2>
            <ul className="cert-list">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-note">{c.note}</span>
                </li>
              ))}
            </ul>

            <h2 className="about-section-spacer">Education</h2>
            <p className="edu-line">
              {EDUCATION.degree} — {EDUCATION.school} ({EDUCATION.years})
            </p>
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
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }
        .about-portrait {
          justify-self: center;
        }
        .about-portrait img {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid var(--navy-700);
          box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 760px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
          }
          .about-portrait {
            order: -1;
            max-width: 220px;
          }
        }
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
          display: flex;
          gap: 14px;
          padding: 18px 20px;
          border: 1px solid var(--navy-700);
          border-radius: 14px;
          background: var(--navy-800);
        }
        .track-thumb {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }
        .about-section-spacer {
          margin-top: 36px;
        }
        .cert-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cert-list li {
          padding: 14px 18px;
          border: 1px solid var(--navy-700);
          border-radius: 12px;
          background: var(--navy-800);
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .cert-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink-100);
        }
        .cert-note {
          font-size: 12.5px;
          color: var(--ink-500);
        }
        .edu-line {
          font-size: 14px;
          color: var(--ink-300);
          line-height: 1.6;
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
