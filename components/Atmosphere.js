const PARTICLES = [
  { top: "18%", left: "12%", size: 3, color: "rgba(201,168,76,0.5)", dur: "9s", delay: "0s" },
  { top: "34%", left: "28%", size: 2, color: "rgba(232,98,42,0.45)", dur: "11s", delay: "-2s" },
  { top: "22%", left: "48%", size: 4, color: "rgba(201,168,76,0.4)", dur: "13s", delay: "-5s" },
  { top: "58%", left: "18%", size: 2, color: "rgba(232,98,42,0.4)", dur: "10s", delay: "-3s" },
  { top: "64%", left: "62%", size: 3, color: "rgba(201,168,76,0.45)", dur: "12s", delay: "-7s" },
  { top: "42%", left: "72%", size: 2, color: "rgba(232,98,42,0.5)", dur: "9.5s", delay: "-1s" },
  { top: "76%", left: "40%", size: 3, color: "rgba(201,168,76,0.35)", dur: "14s", delay: "-6s" },
  { top: "12%", left: "82%", size: 2, color: "rgba(232,98,42,0.4)", dur: "10.5s", delay: "-4s" },
  { top: "50%", left: "8%", size: 2, color: "rgba(201,168,76,0.4)", dur: "11.5s", delay: "-8s" },
  { top: "30%", left: "92%", size: 3, color: "rgba(232,98,42,0.35)", dur: "13.5s", delay: "-2.5s" },
];

export default function Atmosphere({ typeText = "riverways" }) {
  return (
    <div className="atmosphere-layer" aria-hidden="true">
      <div className="atmosphere-bg" />
      <div className="atmosphere-monumental-type">{typeText}</div>
      <div className="atmosphere-mist atmosphere-mist--low" />
      <div className="atmosphere-mist atmosphere-mist--mid" />
      <div className="atmosphere-light-shaft" />
      <div className="atmosphere-particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="atmosphere-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
