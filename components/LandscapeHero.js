"use client";

import { useEffect, useRef } from "react";

export default function LandscapeHero() {
  const svgRef = useRef(null);
  const farRef = useRef(null);
  const midRef = useRef(null);
  const riverRef = useRef(null);
  const shimmerRef = useRef(null);
  const nearRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;

    function update() {
      ticking = false;
      const el = svgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);

      if (farRef.current) farRef.current.style.transform = `translateY(${progress * 24}px)`;
      if (midRef.current) midRef.current.style.transform = `translateY(${progress * 46}px)`;
      if (nearRef.current) nearRef.current.style.transform = `translateY(${progress * 70}px)`;

      if (riverRef.current) {
        riverRef.current.style.transform = `translateY(${progress * 60}px) rotate(${progress * 6}deg)`;
        riverRef.current.style.transformOrigin = "820px 900px";
      }
      if (shimmerRef.current) {
        shimmerRef.current.style.transform = `translateY(${progress * 60}px) rotate(${progress * 6}deg)`;
        shimmerRef.current.style.transformOrigin = "820px 900px";
      }
      if (el) el.style.opacity = String(1 - progress * 0.55);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="landscape-hero-svg"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lh-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0b1826" />
          <stop offset="55%" stopColor="#16293e" />
          <stop offset="82%" stopColor="#3a3320" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.55" />
        </linearGradient>

        <radialGradient id="lh-sun" cx="50%" cy="100%" r="65%">
          <stop offset="0%" stopColor="#e8622a" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#c9a84c" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="lh-river" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78dcff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#2b6fb0" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="lh-shaft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dff5ff" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#78dcff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#78dcff" stopOpacity="0" />
        </linearGradient>

        <filter id="lh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#lh-sky)" />
      <ellipse cx="800" cy="900" rx="700" ry="420" fill="url(#lh-sun)" />

      {/* Bioluminescent light shaft, descending toward the river source */}
      <path d="M660,0 L960,0 L860,560 L780,560 Z" fill="url(#lh-shaft)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="7s" repeatCount="indefinite" />
      </path>

      {/* Twinkling stars, upper sky */}
      <g fill="#f5f1ea">
        <circle cx="180" cy="90" r="1.6" opacity="0.6">
          <animate attributeName="opacity" values="0.15;0.75;0.15" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="60" r="1.2" opacity="0.5">
          <animate attributeName="opacity" values="0.7;0.15;0.7" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="100" r="1.4" opacity="0.55">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1100" cy="70" r="1.8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="120" r="1.2" opacity="0.45">
          <animate attributeName="opacity" values="0.15;0.65;0.15" dur="5.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="1500" cy="80" r="1.4" opacity="0.5">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Drifting clouds */}
      <g opacity="0.16" filter="url(#lh-blur)">
        <ellipse cx="260" cy="180" rx="160" ry="34" fill="#f5f1ea">
          <animateTransform attributeName="transform" type="translate" values="0 0; 60 0; 0 0" dur="42s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="980" cy="120" rx="220" ry="40" fill="#f5f1ea">
          <animateTransform attributeName="transform" type="translate" values="0 0; -80 0; 0 0" dur="55s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="1350" cy="230" rx="140" ry="30" fill="#f5f1ea">
          <animateTransform attributeName="transform" type="translate" values="0 0; 50 0; 0 0" dur="38s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Far mountain layer */}
      <path
        ref={farRef}
        d="M0,520 L120,430 L230,500 L360,380 L480,470 L620,360 L760,460 L900,390 L1040,480 L1180,400 L1320,470 L1460,410 L1600,470 L1600,900 L0,900 Z"
        fill="#1c3350"
        opacity="0.55"
      />

      {/* Soft mist band, dreamlike depth between far and mid layers */}
      <rect x="0" y="470" width="1600" height="90" fill="#f5f1ea" opacity="0.06" filter="url(#lh-blur)">
        <animate attributeName="opacity" values="0.04;0.09;0.04" dur="10s" repeatCount="indefinite" />
      </rect>

      {/* Mid mountain layer */}
      <path
        ref={midRef}
        d="M0,610 L150,520 L280,590 L420,500 L560,600 L700,510 L860,610 L1000,530 L1150,620 L1300,540 L1460,620 L1600,560 L1600,900 L0,900 Z"
        fill="#16293e"
        opacity="0.8"
      />

      {/* Soft mist band, ground fog near the river */}
      <rect x="0" y="600" width="1600" height="70" fill="#f5f1ea" opacity="0.05" filter="url(#lh-blur)">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="8s" repeatCount="indefinite" />
      </rect>

      {/* River, winding from the horizon toward the foreground, swivels on scroll */}
      <path
        ref={riverRef}
        d="M760,540 C 740,610 820,650 800,720 C 780,790 860,820 840,900 L960,900 C 940,820 1000,790 980,720 C 960,650 900,610 880,540 Z"
        fill="url(#lh-river)"
        opacity="0.9"
      />
      {/* Shimmer overlay on the river */}
      <path
        ref={shimmerRef}
        d="M760,540 C 740,610 820,650 800,720 C 780,790 860,820 840,900"
        fill="none"
        stroke="#dff5ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 22"
        opacity="0.7"
      >
        <animate attributeName="stroke-dashoffset" values="0; -320" dur="5s" repeatCount="indefinite" />
      </path>

      {/* Drifting bioluminescent glow particles, near the river */}
      <g filter="url(#lh-blur)">
        <circle cx="720" cy="700" r="10" fill="#78dcff" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 20 -40; 0 -70" dur="14s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="760" r="7" fill="#dff5ff" opacity="0.45">
          <animate attributeName="opacity" values="0.15;0.55;0.15" dur="6.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; -16 -50; 0 -90" dur="16s" repeatCount="indefinite" />
        </circle>
        <circle cx="840" cy="640" r="6" fill="#78dcff" opacity="0.4">
          <animate attributeName="opacity" values="0.15;0.5;0.15" dur="5.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 12 -35; 0 -60" dur="12s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Near foreground ridge, darkest and closest */}
      <path
        ref={nearRef}
        d="M0,720 L200,660 L400,710 L620,650 L760,700 L880,700 L1020,655 L1220,705 L1420,665 L1600,715 L1600,900 L0,900 Z"
        fill="#0b1826"
      />

      <style>{`
        .landscape-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          will-change: opacity;
        }
        .landscape-hero-svg path {
          will-change: transform;
        }
      `}</style>
    </svg>
  );
}

