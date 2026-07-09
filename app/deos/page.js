import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "The DEOS Framework — Riverways",
};

const DIMENSIONS = [
  { n: "01", name: "Discover", desc: "Audit the real state of the business — market position, customer truth, and the numbers behind both." },
  { n: "02", name: "Define", desc: "Sharpen positioning until the business has one story it can defend, not five it's guessing at." },
  { n: "03", name: "Design", desc: "Build the visual and verbal identity that makes premium pricing believable." },
  { n: "04", name: "Build", desc: "Ship the website and digital infrastructure the brand actually deserves." },
  { n: "05", name: "Launch", desc: "Take the repositioned brand to market with a real plan, not a hope." },
  { n: "06", name: "Optimize", desc: "Tighten every funnel and channel until it converts instead of just existing." },
  { n: "07", name: "Scale", desc: "Extend what's working across new channels, audiences, and formats." },
  { n: "08", name: "Systemize", desc: "Turn manual wins into repeatable systems — so growth doesn't depend on any one person." },
  { n: "09", name: "Sustain", desc: "Protect and compound what's been built, quarter over quarter." },
];

export default function DeosPage() {
  return (
    <>
      <section className="section deos-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Methodology</p>
            <h1>
              The <span className="gradient-text">DEOS</span> Framework
            </h1>
          </Reveal>
          <Reveal>
            <p className="deos-lede">
              DEOS is how Riverways moves a business from invisible to inevitable — nine
              dimensions, run in sequence, each one built on the last. Not a menu of services.
              A current.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section deos-list">
        <div className="container">
          <ol className="dim-list">
            {DIMENSIONS.map((d) => (
              <Reveal as="li" key={d.n} className="dim-row">
                <span className="dim-n">{d.n}</span>
                <div>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section deos-cta">
        <div className="container deos-cta-inner">
          <Reveal>
            <h2>See where your business sits in the current.</h2>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Book your free growth audit
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .deos-hero h1 {
          margin-top: 16px;
          font-size: clamp(38px, 5.6vw, 60px);
        }
        .deos-lede {
          margin-top: 22px;
          max-width: 640px;
          color: var(--ink-300);
          font-size: 17px;
        }
        .dim-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .dim-row {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 28px;
          padding: 30px 0;
          border-bottom: 1px solid var(--navy-700);
          align-items: start;
        }
        .dim-row:first-child {
          border-top: 1px solid var(--navy-700);
        }
        .dim-n {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          background: var(--gradient-current);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .dim-row h3 {
          font-size: 21px;
        }
        .dim-row p {
          margin-top: 8px;
          color: var(--ink-500);
          font-size: 15px;
          max-width: 560px;
        }
        .deos-cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .deos-cta-inner h2 {
          font-size: clamp(26px, 3.6vw, 36px);
          max-width: 560px;
        }
        @media (max-width: 640px) {
          .dim-row {
            grid-template-columns: 48px 1fr;
            gap: 16px;
          }
          .dim-n {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
