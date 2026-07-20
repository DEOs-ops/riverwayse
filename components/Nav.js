"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fireRipple } from "./pageTransitionBus";

const LINKS = [
  { href: "/audit", label: "DEOS Audit" },
  { href: "/about", label: "About" },
  { href: "/deos", label: "DEOS Framework" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Mirrors PortalCard's passage transition so every primary navigation
  // path — card click or nav link — gets the same water-ripple veil
  // instead of only card-initiated navigation getting it.
  function handleNavClick(e, href) {
    setOpen(false);

    // Let modifier-key clicks (new tab, new window) and non-left clicks
    // through untouched — intercepting those breaks expected browser behavior.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    e.preventDefault();
    fireRipple(e.clientX, e.clientY);
    setTimeout(() => router.push(href), 480);
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link
          href="/"
          className="nav-brand"
          onClick={(e) => handleNavClick(e, "/")}
          aria-label="Riverways home"
        >
          <img src="/riverways-mark.jpg" alt="Riverways" width="36" height="36" className="nav-mark" />
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary nav-cta"
            onClick={(e) => handleNavClick(e, "/contact")}
          >
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
          transition: color var(--dur-response) var(--ease-response);
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
            transition: transform var(--dur-standard) var(--ease-arrival);
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
