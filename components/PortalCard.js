"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { fireRipple } from "./pageTransitionBus";

export default function PortalCard({ href, className = "", children, navigate = true }) {
  const router = useRouter();
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    el.style.setProperty("--mx", `${px}%`);
    el.style.setProperty("--my", `${py}%`);
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  function handleClick(e) {
    if (!href) return;

    // Let modifier-key clicks (new tab, new window) and non-left clicks
    // through untouched — intercepting those breaks expected browser behavior.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function go() {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      } else if (navigate) {
        router.push(href);
      }
    }

    if (prefersReduced) {
      go();
      return;
    }

    fireRipple(e.clientX, e.clientY);
    setTimeout(go, 480);
  }

  return (
    <div
      ref={ref}
      className={`portal-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
      onKeyDown={(e) => {
        if (href && (e.key === "Enter" || e.key === " ")) handleClick(e);
      }}
    >
      {children}
      <style jsx>{`
        .portal-card {
          position: relative;
          cursor: ${href ? "pointer" : "default"};
          transition: transform var(--dur-response) var(--ease-response);
          will-change: transform;
        }
        .portal-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at var(--mx, 50%) var(--my, 50%),
            rgba(120, 220, 255, 0.12),
            rgba(201, 168, 76, 0.2) 40%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity var(--dur-response) var(--ease-response);
          pointer-events: none;
        }
        .portal-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
