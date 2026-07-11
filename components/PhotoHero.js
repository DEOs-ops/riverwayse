export default function PhotoHero({ src, position = "center" }) {
  return (
    <div className="photo-hero" aria-hidden="true">
      <div
        className="photo-hero-img"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      />
      <div className="photo-hero-wash" />
      <div className="photo-hero-fade" />

      <style>{`
        .photo-hero {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .photo-hero-img {
          position: absolute;
          inset: -4%;
          background-size: cover;
          background-repeat: no-repeat;
          filter: saturate(0.85) brightness(0.7);
          animation: photo-ken-burns 26s ease-in-out infinite alternate;
        }
        @keyframes photo-ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
        .photo-hero-wash {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(11,24,38,0.75) 0%, rgba(11,24,38,0.35) 40%, rgba(11,24,38,0.55) 100%),
            radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.16) 0%, transparent 60%);
          mix-blend-mode: multiply;
        }
        .photo-hero-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 30%;
          background: linear-gradient(180deg, transparent 0%, var(--navy-900) 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .photo-hero-img { animation: none; }
        }
      `}</style>
    </div>
  );
}
