"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/deos", label: "DEOS Framework" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)} aria-label="Riverways home">
          <img src="/riverways-mark.jpg" alt="Riverways" width="36" height="36" className="nav-mark" />
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book a growth audit
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(11, 23, 50, 0.82);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--navy-700);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif);
          font-weight: 300;
          font-size: 21px;
          letter-spacing: 0.03em;
        }
        .nav-mark {
          border-radius: 6px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          font-size: 14.5px;
          color: var(--ink-300);
        }
        .nav-links a {
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--ink-100);
        }
        .nav-cta {
          margin-left: 4px;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }
        .nav-toggle span {
          width: 22px;
          height: 2px;
          background: var(--ink-100);
          border-radius: 2px;
        }

        @media (max-width: 860px) {
          .nav-toggle {
            display: flex;
          }
          .nav-links {
            position: fixed;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--navy-900);
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 32px var(--edge);
            gap: 26px;
            font-size: 20px;
            transform: translateX(100%);
            transition: transform 0.35s ease;
          }
          .nav-links.is-open {
            transform: translateX(0);
          }
          .nav-cta {
            margin-top: 12px;
          }
        }
      `}</style>
    </header>
  );
}
