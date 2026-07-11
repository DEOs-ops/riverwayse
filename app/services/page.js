import Reveal from "@/components/Reveal";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export const metadata = {
  title: "Services & Pricing — Riverways",
};

const TIERS = [
  {
    name: "Starter",
    price: "₦300,000",
    period: "/month",
    who: "Small businesses, startups, solopreneurs",
    photo: "/photos/river-valley-hero.jpg",
    hue: "0deg",
    items: [
      "Brand identity design (logo + variations)",
      "Social media management (3 platforms)",
      "Content creation — 12 posts/month",
      "Basic website (5 pages, mobile responsive)",
      "Monthly analytics report",
    ],
  },
  {
    name: "Growth",
    price: "₦650,000",
    period: "/month",
    who: "Established SMEs, growing companies",
    photo: "/photos/misty-valley-mountains.jpg",
    hue: "0deg",
    items: [
      "Complete brand guidelines & asset suite",
      "Professional website — up to 10 pages",
      "Social media management (5 platforms)",
      "Content strategy — 20 posts + 4 videos/month",
      "SEO (on-page + local) and email marketing",
      "Monthly strategy call",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "₦1,200,000",
    period: "/month",
    who: "Medium to large businesses",
    photo: "/photos/forest-sunbeams.jpg",
    hue: "0deg",
    items: [
      "Full brand ecosystem & asset library",
      "Custom website development",
      "Multi-channel campaign management",
      "Video production — 4 professional videos/month",
      "Advanced SEO & SEM, marketing automation",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    price: "₦3,000,000+",
    period: "/month",
    who: "Large corporations, multinationals",
    photo: "/photos/river-valley-hero.jpg",
    hue: "-40deg",
    items: [
      "Strategic brand consulting (C-level advisory)",
      "Enterprise-level digital solutions",
      "Omnichannel marketing execution",
      "Advanced analytics & BI dashboards",
      "PR & media relations",
      "Dedicated team — account director + specialists",
    ],
  },
];

const PROJECTS = [
  { name: "Logo design", price: "from ₦150,000" },
  { name: "Brand guidelines", price: "from ₦300,000" },
  { name: "Website development", price: "from ₦400,000" },
  { name: "E-commerce website", price: "from ₦1,200,000" },
  { name: "Marketing strategy document", price: "from ₦500,000" },
  { name: "Video production", price: "from ₦250,000/video" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section services-hero" style={{ position: "relative", overflow: "hidden" }}>
        <Atmosphere monumentalWord="services" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1>A package for wherever you're growing from.</h1>
          </Reveal>
          <Reveal>
            <p className="services-lede">
              Every tier runs on the DEOS framework — the difference is scope and speed. Not sure
              which fits? A growth audit will tell you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section tiers">
        <div className="container tier-grid-full">
          {TIERS.map((t) => (
            <Reveal key={t.name} className={`tier-card-full ${t.featured ? "is-featured" : ""}`}>
              <div
                className="tier-photo"
                style={{ backgroundImage: `url(${t.photo})`, filter: `hue-rotate(${t.hue}) saturate(1.1) brightness(0.65)` }}
              />
              {t.featured && <span className="tier-badge">Most popular</span>}
              <h3>{t.name}</h3>
              <p className="tier-who-full">{t.who}</p>
              <p className="tier-price-full">
                {t.price}
                <span>{t.period}</span>
              </p>
              <ul>
                {t.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-ghost tier-btn">
                Enquire
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Project-based work</p>
              <h2>Need one thing done well, not a retainer?</h2>
            </Reveal>
          </div>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <Reveal key={p.name} className="project-row">
                <span>{p.name}</span>
                <span className="project-price">{p.price}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container services-cta-inner">
          <Reveal>
            <h2>Not sure which tier fits? Start with a free audit.</h2>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Book your free growth audit
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .services-hero h1 {
          margin-top: 16px;
          font-size: clamp(34px, 4.8vw, 52px);
          max-width: 760px;
        }
        .services-lede {
          margin-top: 20px;
          max-width: 560px;
          color: var(--ink-300);
          font-size: 16px;
        }
        .tier-grid-full {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .tier-card-full {
          position: relative;
          background: var(--navy-800);
          border: 1px solid var(--navy-700);
          border-radius: 18px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
        }
        .tier-photo {
          margin: -30px -24px 20px -24px;
          height: 110px;
          border-radius: 18px 18px 0 0;
          background-size: cover;
          background-position: center;
        }
        .tier-card-full.is-featured {
          border-color: var(--teal);
          box-shadow: 0 0 0 1px var(--teal);
        }
        .tier-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          background: var(--gradient-current);
          color: var(--navy-950);
          font-family: var(--font-display);
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 100px;
          letter-spacing: 0.03em;
        }
        .tier-card-full h3 {
          font-size: 21px;
          margin-top: 6px;
        }
        .tier-who-full {
          margin-top: 8px;
          color: var(--ink-500);
          font-size: 13px;
          min-height: 32px;
        }
        .tier-price-full {
          margin-top: 16px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
        }
        .tier-price-full span {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-500);
          margin-left: 4px;
        }
        .tier-card-full ul {
          margin: 20px 0 24px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }
        .tier-card-full li {
          font-size: 13.5px;
          color: var(--ink-300);
          padding-left: 18px;
          position: relative;
        }
        .tier-card-full li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 7px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
        }
        .tier-btn {
          text-align: center;
          justify-content: center;
        }

        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .project-row {
          display: flex;
          justify-content: space-between;
          padding: 18px 22px;
          border: 1px solid var(--navy-700);
          border-radius: 12px;
          background: var(--navy-800);
          font-size: 14.5px;
        }
        .project-price {
          color: var(--teal);
          font-family: var(--font-display);
          font-weight: 600;
        }

        .services-cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .services-cta-inner h2 {
          font-size: clamp(24px, 3.2vw, 34px);
          max-width: 560px;
        }

        @media (max-width: 980px) {
          .tier-grid-full {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .tier-grid-full,
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
