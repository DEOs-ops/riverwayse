export default function RLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rlogo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a84c">
            <animate
              attributeName="stop-color"
              values="#c9a84c;#e8622a;#c9a84c"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#e8622a">
            <animate
              attributeName="stop-color"
              values="#e8622a;#c9a84c;#e8622a"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            values="0 50 60; 360 50 60"
            dur="18s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <path d="M12 10 L12 110" stroke="url(#rlogo-gradient)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M16 10 L16 110" stroke="url(#rlogo-gradient)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M12 10 L60 10 Q88 10 88 38 Q88 62 60 66 L12 66" stroke="url(#rlogo-gradient)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M16 14 L60 14 Q82 14 82 38 Q82 60 60 62 L16 62" stroke="url(#rlogo-gradient)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M54 66 L88 110" stroke="url(#rlogo-gradient)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M50 66 L84 110" stroke="url(#rlogo-gradient)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}
