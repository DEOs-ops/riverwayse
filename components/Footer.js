"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-word">Riverways</div>
          <p className="footer-tag">
            Growth consultancy for Lagos businesses ready to move like a current, not a splash.
          </p>
        </div>

        <div className="footer-cols">
          <div>
            <div className="footer-heading">Site</div>
            <Link href="/about">About Femi</Link>
            <Link href="/deos">DEOS Framework</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <div className="footer-heading">Get in touch</div>
            <a href="mailto:hello@riverwayse.com">hello@riverwayse.com</a>
            <span className="footer-note">Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Riverways. All rights reserved.</span>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--navy-700);
          padding: 64px 0 28px;
          margin-top: 40px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
          padding-bottom: 48px;
        }
        .footer-word {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
        }
        .footer-tag {
          margin-top: 12px;
          max-width: 320px;
          color: var(--ink-500);
          font-size: 14.5px;
        }
        .footer-cols {
          display: flex;
          gap: 64px;
          flex-wrap: wrap;
        }
        .footer-cols > div {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-heading {
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-500);
          margin-bottom: 4px;
        }
        .footer-cols a,
        .footer-note {
          color: var(--ink-300);
          font-size: 14.5px;
        }
        .footer-cols a:hover {
          color: var(--ink-100);
        }
        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid var(--navy-700);
          color: var(--ink-700);
          font-size: 13px;
        }
      `}</style>
    </footer>
  );
}
