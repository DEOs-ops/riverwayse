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
    e.preventDefault();
    fireRipple(e.clientX, e.clientY);
    setTimeout(() => {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else if (navigate) {
        router.push(href);
      }
    }, 480);
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
          transition: transform 180ms ease;
          will-change: transform;
        }
        .portal-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at var(--mx, 50%) var(--my, 50%),
            rgba(201, 168, 76, 0.22),
            transparent 55%
          );
          opacity: 0;
          transition: opacity 200ms ease;
          pointer-events: none;
        }
        .portal-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
