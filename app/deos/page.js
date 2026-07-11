import Reveal from "@/components/Reveal";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import PhotoHero from "@/components/PhotoHero";

export const metadata = {
  title: "DEOS — The Demand Engineering Operating System — Riverways",
};

const HORIZONS = [
  {
    id: "H1",
    name: "Capture",
    timeframe: "0–90 days",
    question: "How do we convert existing intent with maximum efficiency?",
  },
  {
    id: "H2",
    name: "Creation",
    timeframe: "90 days – 2 years",
    question: "How do we build mental availability so we're chosen before search begins?",
  },
  {
    id: "H3",
    name: "Category",
    timeframe: "2–10 years",
    question: "How do we define the problem so our solution becomes the only logical answer?",
  },
];

const DIM_PHOTOS = ["/photos/misty-valley-mountains.jpg", "/photos/forest-sunbeams.jpg", "/photos/river-valley-hero.jpg"];

const DIMENSIONS = [
  {
    n: "D1",
    horizon: "H1",
    name: "Intent Signal Precision",
    sub: "+ Job Trigger Identification",
    hardStop: true,
    desc: "Know exactly which awareness stage a prospect occupies — and the specific life circumstance that moved them — before a single message is written.",
  },
  {
    n: "D2",
    horizon: "H1",
    name: "Frictionless Conversion Architecture",
    desc: "Every unnecessary step between intent and action is a leak. We find them and close them.",
  },
  {
    n: "D3",
    horizon: "H1",
    name: "System 1 Activation",
    desc: "Win the instant, emotional response before rational comparison ever begins.",
  },
  {
    n: "D4",
    horizon: "H2",
    name: "Mental Availability Engineering",
    desc: "Build the distinctive assets and category associations that make a brand the one people retrieve first — not just the one they'd pick if they compared.",
  },
  {
    n: "D5",
    horizon: "H2",
    name: "95% Content Architecture",
    desc: "Serve the 95% of the market that isn't buying today, so the brand is already trusted the moment they are.",
  },
  {
    n: "D6",
    horizon: "H2",
    name: "Shareability & Social Signal",
    desc: "Engineer content people forward on their own. Earned attention compounds paid attention.",
  },
  {
    n: "D7",
    horizon: "H3",
    name: "Category Design Clarity",
    hardStop: true,
    desc: "Could a stranger name the category you're building, in under three seconds? If not, nothing else in the stack matters yet.",
  },
  {
    n: "D8",
    horizon: "H3",
    name: "Trust & Credibility Architecture",
    hardStop: true,
    desc: "In high-distrust markets, trust isn't a supporting asset — it's the gate everything else has to pass through first.",
  },
  {
    n: "D9",
    horizon: "H3",
    name: "Temporal Orientation Balance",
    desc: "The discipline of investing in tomorrow's demand while still funding today's — the 60:40 principle, applied.",
  },
];

const VERDICTS = [
  { range: "85–100", name: "Category King", action: "Launch immediately." },
  { range: "70–84", name: "Capture Optimised", action: "Launch H1. Revise H2/H3 next cycle." },
  { range: "55–69", name: "Creation Gap", action: "Don't launch H1 yet. Rebuild H2 first." },
  { range: "40–54", name: "Architectural Failure", action: "Stop. Return to category design." },
  { range: "Below 40", name: "Anti-Demand", action: "This creative destroys value. Full audit required." },
];

export default function DeosPage() {
  return (
    <>
      <section className="section deos-hero" style={{ position: "relative", overflow: "hidden" }}>
        <PhotoHero src="/photos/misty-valley-mountains.jpg" />
        <Atmosphere monumentalWord="deos" showMonumentalType={false} particleCount={35} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p className="eyebrow">The operating system</p>
            <h1>
              <span className="gradient-text">DEOS</span> — the Demand Engineering
              Operating System
            </h1>
          </Reveal>
          <Reveal>
            <p className="deos-lede">
              You cannot buy your way out of a positioning problem. But you can engineer
              your way out of a category problem. DEOS is not a framework to adopt — it's
              an operating system to run: nine dimensions, three horizons, one weighted
              score out of 100.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section deos-horizons">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Three Horizon Architecture</p>
            <h2>Not stages. Simultaneous operating layers.</h2>
            <p className="deos-sub">
              H1 funds H2. H2 enables H3. H3 makes H1 cheaper. Run only H1 and
              acquisition costs rise forever — a predictable failure DEOS calls
              Horizon Collapse.
            </p>
          </Reveal>
          <div className="horizon-grid">
            {HORIZONS.map((h) => (
              <Reveal as="div" key={h.id} className="horizon-card">
                <span className="horizon-id">{h.id}</span>
                <h3>{h.name}</h3>
                <p className="horizon-time">{h.timeframe}</p>
                <p className="horizon-q">{h.question}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section deos-list">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The nine dimensions</p>
            <h2>Every dimension scored. Three carry hard-stop status.</h2>
            <p className="deos-sub">
              A score below 5 on D1, D7, or D8 triggers an automatic Do Not Launch
              verdict — regardless of the aggregate score. Execution quality is
              evaluated last, not first.
            </p>
          </Reveal>
          <ol className="dim-list">
            {DIMENSIONS.map((d, i) => (
              <Reveal as="li" key={d.n} className="dim-row">
                <div
                  className="dim-thumb"
                  style={{
                    backgroundImage: `url(${DIM_PHOTOS[i % DIM_PHOTOS.length]})`,
                    filter: `hue-rotate(${i * 22}deg) saturate(1.1) brightness(0.6)`,
                  }}
                />
                <span className="dim-n">
                  {d.n}
                  <span className="dim-horizon">{d.horizon}</span>
                </span>
                <div>
                  <h3>
                    {d.name}
                    {d.sub && <span className="dim-name-sub"> {d.sub}</span>}
                    {d.hardStop && <span className="hard-stop-badge">Hard stop</span>}
                  </h3>
                  <p>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section deos-verdict">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The verdict matrix</p>
            <h2>Every audit ends in a number, and the number ends in an action.</h2>
          </Reveal>
          <div className="verdict-list">
            {VERDICTS.map((v) => (
              <Reveal as="div" key={v.name} className="verdict-row">
                <span className="verdict-range">{v.range}</span>
                <span className="verdict-name">{v.name}</span>
                <span className="verdict-action">{v.action}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section deos-cta">
        <div className="container deos-cta-inner">
          <Reveal>
            <h2>Find out where your demand architecture actually scores.</h2>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Book your DEOS audit
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .deos-hero h1 {
          margin-top: 16px;
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.08;
        }
        .deos-lede {
          margin-top: 22px;
          max-width: 680px;
          color: var(--ink-300);
          font-size: 17px;
          line-height: 1.6;
        }
        .deos-sub {
          margin-top: 14px;
          max-width: 640px;
          color: var(--ink-300);
          font-size: 15px;
          line-height: 1.6;
        }
        .horizon-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) {
          .horizon-grid { grid-template-columns: 1fr; }
        }
        .horizon-card {
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 12px;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .horizon-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: 0 20px 40px -20px rgba(201, 168, 76, 0.3);
        }
        .horizon-id {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--teal);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .horizon-card h3 {
          font-size: 22px;
          margin-bottom: 4px;
        }
        .horizon-time {
          font-size: 13px;
          color: var(--ink-400);
          margin-bottom: 14px;
        }
        .horizon-q {
          font-size: 14px;
          color: var(--ink-300);
          line-height: 1.55;
        }
        .dim-list {
          margin-top: 40px;
          list-style: none;
        }
        .dim-row {
          display: grid;
          grid-template-columns: 56px 60px 1fr;
          gap: 16px;
          align-items: flex-start;
          padding: 22px 0;
          border-top: 1px solid var(--line);
          transition: padding-left 220ms ease, background 220ms ease;
          border-radius: 8px;
        }
        .dim-thumb {
          width: 56px;
          height: 56px;
          border-radius: 10px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }
        .dim-row:hover {
          padding-left: 14px;
          background: rgba(201, 168, 76, 0.05);
        }
        @media (max-width: 560px) {
          .dim-row {
            grid-template-columns: 44px 1fr;
          }
          .dim-thumb {
            grid-row: span 2;
          }
        }
        .dim-row:last-child { border-bottom: 1px solid var(--line); }
        .dim-n {
          font-weight: 700;
          font-size: 15px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dim-horizon {
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-400);
        }
        .dim-row h3 {
          font-size: 18px;
          margin-bottom: 6px;
        }
        .dim-name-sub {
          font-size: 14px;
          font-weight: 400;
          color: var(--ink-400);
        }
        .hard-stop-badge {
          display: inline-block;
          margin-left: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #e6685f;
          border: 1px solid #e6685f;
          border-radius: 20px;
          padding: 2px 8px;
          vertical-align: middle;
        }
        .dim-row p {
          font-size: 14px;
          color: var(--ink-300);
          line-height: 1.55;
          max-width: 60ch;
        }
        .verdict-list {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
        }
        .verdict-row {
          display: grid;
          grid-template-columns: 90px 200px 1fr;
          gap: 20px;
          align-items: baseline;
          padding: 16px 0;
          border-top: 1px solid var(--line);
        }
        .verdict-row:last-child { border-bottom: 1px solid var(--line); }
        @media (max-width: 640px) {
          .verdict-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
        .verdict-range {
          font-size: 13px;
          font-weight: 600;
          color: var(--teal);
        }
        .verdict-name {
          font-size: 15px;
          font-weight: 600;
        }
        .verdict-action {
          font-size: 14px;
          color: var(--ink-300);
        }
      `}</style>
    </>
  );
}
