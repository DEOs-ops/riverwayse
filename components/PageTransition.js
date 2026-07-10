"use client";

import { useEffect, useState } from "react";
import { subscribeRipple } from "./pageTransitionBus";

export default function PageTransition() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const unsub = subscribeRipple((x, y) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x, y }]);
      setTimeout(() => {
        setRipples((r) => r.filter((rp) => rp.id !== id));
      }, 900);
    });
    return unsub;
  }, []);

  return (
    <>
      {ripples.map((r) => (
        <span key={r.id} className="water-ripple" style={{ left: r.x, top: r.y }} />
      ))}
      <style jsx>{`
        .water-ripple {
          position: fixed;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          margin-top: -9px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 98, 42, 0.95) 0%,
            rgba(201, 168, 76, 0.85) 35%,
            rgba(11, 24, 38, 0.97) 70%
          );
          z-index: 9999;
          pointer-events: none;
          animation: ripple-grow-fade 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes ripple-grow-fade {
          0% {
            width: 18px;
            height: 18px;
            margin-left: -9px;
            margin-top: -9px;
            opacity: 1;
          }
          50% {
            width: 300vmax;
            height: 300vmax;
            margin-left: -150vmax;
            margin-top: -150vmax;
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
