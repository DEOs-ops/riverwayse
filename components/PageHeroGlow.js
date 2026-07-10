export default function PageHeroGlow() {
  return (
    <svg
      className="page-glow-svg"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pg-shaft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dff5ff" stopOpacity="0.42" />
          <stop offset="55%" stopColor="#78dcff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#78dcff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pg-vignette" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="#1c3350" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1c3350" stopOpacity="0" />
        </radialGradient>
        <filter id="pg-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1600" height="700" fill="url(#pg-vignette)" />

      <path d="M700,0 L900,0 L830,520 L770,520 Z" fill="url(#pg-shaft)">
        <animate attributeName="opacity" values="0.55;1;0.55" dur="8s" repeatCount="indefinite" />
      </path>

      <g filter="url(#pg-blur)">
        <circle cx="760" cy="420" r="8" fill="#78dcff" opacity="0.35">
          <animate attributeName="opacity" values="0.15;0.5;0.15" dur="6s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 18 -40; 0 -70" dur="15s" repeatCount="indefinite" />
        </circle>
        <circle cx="880" cy="480" r="6" fill="#dff5ff" opacity="0.3">
          <animate attributeName="opacity" values="0.12;0.42;0.12" dur="7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; -14 -46; 0 -80" dur="17s" repeatCount="indefinite" />
        </circle>
      </g>

      <style>{`
        .page-glow-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          pointer-events: none;
        }
      `}</style>
    </svg>
  );
}
