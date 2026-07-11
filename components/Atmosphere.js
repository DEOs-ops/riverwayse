"use client";

import { useMemo } from "react";
import "./atmosphere.css";

// Deterministic pseudo-random generator, seeded by index. A plain
// Math.random() here would produce different values on the server vs.
// the client and throw a Next.js hydration mismatch — this keeps every
// particle identical across both renders while still looking organic.
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildParticles(count) {
  return Array.from({ length: count }).map((_, i) => {
    const rand = (offset) => seededRandom(i * 7.13 + offset);
    return {
      id: i,
      left: rand(1) * 100,
      top: rand(2) * 100,
      size: 1.5 + rand(3) * 2.5,
      opacity: 0.12 + rand(4) * 0.38,
      duration: 14 + rand(5) * 18,
      delay: rand(6) * -20,
      color: rand(7) > 0.5 ? "var(--gold)" : "var(--ember)",
    };
  });
}

/**
 * Drop this in as the FIRST child inside the existing hero container,
 * behind the mountain/river SVG and the headline. The parent needs
 * `position: relative` (or similar stacking context) for the absolute
 * layers here to sit correctly behind existing hero content — give the
 * mountain/river/headline layers a higher z-index than this component's
 * root (z-index: 0) if they aren't already stacked above it.
 *
 * `showMonumentalType` renders one word at extreme scale, very low
 * opacity, as a background typographic layer — the "type as visual
 * object" treatment. Turn it off per-page if it fights with a
 * different headline layout.
 */
export default function AtmosphereLayer({
  particleCount = 70,
  showMonumentalType = true,
  monumentalWord = "current",
  showBg = true,
}) {
  const particles = useMemo(() => buildParticles(particleCount), [particleCount]);

  return (
    <div className="atmosphere-layer" aria-hidden="true">
      {showBg && <div className="atmosphere-bg" />}
      {showMonumentalType && <div className="atmosphere-monumental-type">{monumentalWord}</div>}
      <div className="atmosphere-mist atmosphere-mist--low" />
      <div className="atmosphere-mist atmosphere-mist--mid" />
      <svg className="atmosphere-light-shaft" viewBox="0 0 400 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lightShaftGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#c9a84c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
          <filter id="lightShaftBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <polygon points="170,0 230,0 320,800 80,800" fill="url(#lightShaftGradient)" filter="url(#lightShaftBlur)" />
      </svg>
      <div className="atmosphere-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="atmosphere-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
