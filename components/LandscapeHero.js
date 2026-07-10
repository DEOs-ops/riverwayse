export default function LandscapeHero() {
  return (
    <svg
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
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#e8622a" stopOpacity="0.9" />
        </linearGradient>

        <filter id="lh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#lh-sky)" />
      <ellipse cx="800" cy="900" rx="700" ry="420" fill="url(#lh-sun)" />

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
        d="M0,520 L120,430 L230,500 L360,380 L480,470 L620,360 L760,460 L900,390 L1040,480 L1180,400 L1320,470 L1460,410 L1600,470 L1600,900 L0,900 Z"
        fill="#1c3350"
        opacity="0.55"
      />

      {/* Mid mountain layer */}
      <path
        d="M0,610 L150,520 L280,590 L420,500 L560,600 L700,510 L860,610 L1000,530 L1150,620 L1300,540 L1460,620 L1600,560 L1600,900 L0,900 Z"
        fill="#16293e"
        opacity="0.8"
      />

      {/* River, winding from the horizon to the foreground */}
      <path
        d="M760,540 C 740,610 820,650 800,720 C 780,790 860,820 840,900 L960,900 C 940,820 1000,790 980,720 C 960,650 900,610 880,540 Z"
        fill="url(#lh-river)"
        opacity="0.9"
      />
      {/* Shimmer overlay on the river */}
      <path
        d="M760,540 C 740,610 820,650 800,720 C 780,790 860,820 840,900"
        fill="none"
        stroke="#f5f1ea"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 22"
        opacity="0.55"
      >
        <animate attributeName="stroke-dashoffset" values="0; -320" dur="5s" repeatCount="indefinite" />
      </path>

      {/* Near foreground ridge, darkest and closest */}
      <path
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
        }
      `}</style>
    </svg>
  );
}
