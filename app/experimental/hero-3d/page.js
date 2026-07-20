import HeroScene3D from "@/components/experimental/HeroScene3D";

export const metadata = {
  title: "Hero 3D Prototype — Riverways (internal)",
  robots: { index: false, follow: false },
};

export default function HeroScene3DPreview() {
  return (
    <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      <HeroScene3D />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--ink-300)" }}>
          Internal prototype — not linked from production
        </p>
        <h1 className="hero-title hero-title-center" style={{ marginTop: 12 }}>
          Real-time lit shaft, depth-layered valley
        </h1>
        <p className="hero-sub hero-sub-center" style={{ color: "var(--ink-300)" }}>
          Move your cursor to see the camera parallax. Compare against the live
          homepage hero (SVG/CSS) to judge whether the lighting reads better
          here. See VISUAL-SYSTEM.md §5 before promoting this anywhere near
          production.
        </p>
      </div>
    </div>
  );
}
