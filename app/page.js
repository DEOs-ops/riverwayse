import Link from "next/link";
import Reveal from "@/components/Reveal";
import CurrentRule from "@/components/CurrentRule";
import LandscapeHero from "@/components/LandscapeHero";
import PortalCard from "@/components/PortalCard";

const CREDENTIALS = ["Plusworld & Subsidiaries", "DevCenter Innovation", "Brit Properties", "XGO Finance", "Opera Ads"];

const DEOS_PREVIEW = [
  { n: "D1", name: "Intent Signal Precision", desc: "Know exactly which awareness stage a prospect occupies — before a message is written." },
  { n: "D4", name: "Mental Availability Engineering", desc: "Become the brand people retrieve first, not just the one they'd choose if they compared." },
  { n: "D7", name: "Category Design Clarity", desc: "Could a stranger name your category in three seconds? Nothing else matters until this is true." },
  { n: "D8", name: "Trust & Credibility Architecture", desc: "In high-distrust markets, trust is the gate everything else has to pass through first." },
];

const SERVICE_PREVIEW = [
  { tier: "Starter", price: "₦300,000/mo", who: "Small businesses & startups" },
  { tier: "Growth", price: "₦650,000/mo", who: "Established SMEs" },
  { tier: "Scale", price: "₦1,200,000/mo", who: "Medium–large businesses" },
  { tier: "Enterprise", price: "₦3,000,000+/mo", who: "Large corporations" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-fullbleed">
        <LandscapeHero />
        <div className="container hero-fullbleed-inner">
          <p className="eyebrow">Riverways · Growth Consultancy, Lagos</p>
          <h1 className="hero-title hero-title-center">
            Growth that moves
            <br />
            like a <span className="gradient-text">current</span>,
            <br />
            not a splash.
          </h1>
          <p className="hero-sub hero-sub-center">
            Riverways runs every engagement through DEOS — the Demand Engineering
            Operating System. Nine dimensions, three horizons, one weighted score.
            Not a menu of services. An operating system for demand.
          </p>
          <div className="hero-actions hero-actions-center">
            <Link href="/audit" className="btn btn-primary">
              Start your free DEOS Audit
            </Link>
            <Link href="/deos" className="btn btn-ghost">
              Explore the DEOS framework
            </Link>
          </div>
        </div>
      </section>

      <div className="hero-divider" aria-hidden="true">
        <svg viewBox="0 0 1600 90" preserveAspectRatio="none">
          <path
            d="M0,0 C 400,90 1200,0 1600,60 L1600,90 L0,90 Z"
            fill="var(--navy-900)"
          />
        </svg>
      </div>

      <section className="section proof">
        <div className="container">
          <Reveal>
            <p className="proof-label">Built on experience with</p>
          </Reveal>
          <Reveal as="div" className="proof-row">
            {CREDENTIALS.map((name) => (
              <span key={name} className="proof-chip">
                {name}
              </span>
            ))}
          </Reveal>
          <Reveal>
            <p className="proof-note">
              Led by Oluwafemi Akintola, six years deep in Nigerian digital marketing before founding
              Riverways.{" "}
              <Link href="/about" className="proof-link">
                Read the story →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section deos-teaser">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">The DEOS Framework</p>
              <h2>Nine dimensions. Three horizons. One score.</h2>
            </Reveal>
            <Reveal>
              <p className="section-sub">
                Capture, Creation, Category — every engagement is scored across all three
                horizons. A sample of four dimensions below; the full architecture is on the
                DEOS page.
              </p>
            </Reveal>
          </div>

          <div className="deos-grid">
            {DEOS_PREVIEW.map((d) => (
              <Reveal key={d.n}>
                <PortalCard href="/deos" className="deos-card">
                  <span className="deos-n">{d.n}</span>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </PortalCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link href="/deos" className="btn btn-ghost">
              See all 9 dimensions
            </Link>
          </Reveal>
        </div>
      </section>

      <CurrentRule style={{ margin: "0 auto", maxWidth: "var(--container)" }} />

      <section className="section track-record">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Femi's track record</p>
              <h2>Eight years of paid acquisition, before Riverways existed.</h2>
              <p className="section-sub">
                Individual career results across fintech, real estate, and e-commerce — the
                experience DEOS was built to systematise.
              </p>
            </Reveal>
          </div>
          <div className="track-grid">
            <Reveal className="track-metric">
              <span className="track-num">₦4.5Bn+</span>
              <span className="track-label">Revenue contributed via performance marketing at Plusworld</span>
            </Reveal>
            <Reveal className="track-metric">
              <span className="track-num">60%</span>
              <span className="track-label">Organic traffic growth delivered at Brit Properties</span>
            </Reveal>
            <Reveal className="track-metric">
              <span className="track-num">95%</span>
              <span className="track-label">Client retention rate held across accounts at Opera Ads</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section services-teaser">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2>A package for wherever you're growing from.</h2>
            </Reveal>
          </div>

          <div className="tier-grid">
            {SERVICE_PREVIEW.map((s) => (
              <Reveal key={s.tier}>
                <PortalCard href="/services" className="tier-card">
                  <h3>{s.tier}</h3>
                  <p className="tier-price">{s.price}</p>
                  <p className="tier-who">{s.who}</p>
                </PortalCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link href="/services" className="btn btn-ghost">
              See full service breakdown
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container cta-final-inner">
          <Reveal>
            <h2>
              Ready to stop <span className="gradient-text">guessing</span> and start compounding?
            </h2>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Book your free growth audit
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .hero {
          padding: clamp(56px, 10vw, 96px) 0 clamp(40px, 6vw, 64px);
          overflow: hidden;
        }
        .hero-divider {
          position: relative;
          z-index: 2;
          margin-top: -2px;
          line-height: 0;
        }
        .hero-divider svg {
          display: block;
          width: 100%;
          height: 70px;
        }
        .hero-fullbleed {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding-top: clamp(96px, 14vw, 140px);
        }
        .hero-fullbleed-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-title-center {
          margin-top: 20px;
          font-size: clamp(38px, 5.8vw, 68px);
          max-width: 16ch;
        }
        .hero-sub-center {
          margin-top: 24px;
          max-width: 620px;
        }
        .hero-actions-center {
          justify-content: center;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        .hero-title {
          margin-top: 20px;
          font-size: clamp(38px, 5.4vw, 64px);
        }
        .hero-sub {
          margin-top: 24px;
          max-width: 480px;
          color: var(--ink-300);
          font-size: 17px;
        }
        .hero-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-visual {
          position: relative;
          aspect-ratio: 1;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--navy-700);
        }
        .hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .proof-label {
          color: var(--ink-500);
          font-size: 13.5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .proof-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }
        .proof-chip {
          padding: 10px 18px;
          border: 1px solid var(--navy-700);
          border-radius: 100px;
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--ink-300);
        }
        .proof-note {
          margin-top: 28px;
          color: var(--ink-300);
          font-size: 15px;
        }
        .proof-link {
          color: var(--teal);
          font-weight: 600;
        }

        .track-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .track-metric {
          padding: 32px;
          border-left: 1px solid var(--navy-700);
        }
        .track-metric:first-child {
          border-left: none;
          padding-left: 0;
        }
        .track-num {
          display: block;
          font-family: var(--font-serif);
          font-weight: 300;
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          color: var(--gold);
          line-height: 1;
          margin-bottom: 12px;
        }
        .track-label {
          display: block;
          font-size: 14px;
          color: var(--ink-500);
          max-width: 28ch;
          line-height: 1.5;
        }
        @media (max-width: 760px) {
          .track-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .track-metric {
            border-left: none;
            border-top: 1px solid var(--navy-700);
            padding: 24px 0;
          }
          .track-metric:first-child {
            border-top: none;
            padding-top: 0;
          }
        }
        .section-head {
          max-width: 620px;
          margin-bottom: 48px;
        }
        .section-head h2 {
          margin-top: 14px;
          font-size: clamp(26px, 3.4vw, 38px);
        }
        .section-sub {
          margin-top: 16px;
          color: var(--ink-300);
          font-size: 15.5px;
        }

        .deos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .deos-card {
          background: var(--navy-800);
          border: 1px solid var(--navy-700);
          border-radius: 16px;
          padding: 26px 22px;
        }
        .deos-n {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--teal);
          letter-spacing: 0.08em;
        }
        .deos-card h3 {
          margin-top: 14px;
          font-size: 19px;
        }
        .deos-card p {
          margin-top: 10px;
          color: var(--ink-500);
          font-size: 14px;
        }

        .tier-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .tier-card {
          background: var(--navy-800);
          border: 1px solid var(--navy-700);
          border-radius: 16px;
          padding: 28px 22px;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .tier-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: 0 20px 40px -20px rgba(201, 168, 76, 0.35);
        }
        .tier-card h3 {
          font-size: 20px;
        }
        .tier-price {
          margin-top: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 17px;
          background: var(--gradient-current);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tier-who {
          margin-top: 8px;
          color: var(--ink-500);
          font-size: 13.5px;
        }

        .cta-final-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .cta-final-inner h2 {
          font-size: clamp(28px, 4vw, 42px);
          max-width: 640px;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-visual {
            max-width: 320px;
          }
          .deos-grid,
          .tier-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .deos-grid,
          .tier-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
