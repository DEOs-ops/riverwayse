"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#c9a84c", "#e8622a", "#c9a84c", "#e8622a"];

export default function LivingCurrent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const STRAND_COUNT = 5;
    const strands = Array.from({ length: STRAND_COUNT }, (_, i) => ({
      color: COLORS[i % COLORS.length],
      baseY: (i + 1) / (STRAND_COUNT + 1),
      amp: 40 + i * 14,
      speed: 0.00018 + i * 0.00004,
      phase: Math.random() * Math.PI * 2,
      width: 1.4 + (i % 3) * 0.5,
    }));

    let particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      strandIdx: Math.floor(Math.random() * STRAND_COUNT),
      speed: 0.15 + Math.random() * 0.35,
      r: 1 + Math.random() * 1.6,
    }));

    let raf;
    function drawStrand(strand, t) {
      const { baseY, amp, speed, phase, color, width: sw } = strand;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = sw;
      for (let x = 0; x <= width; x += 8) {
        const y =
          baseY * height +
          Math.sin(x * 0.0025 + t * speed + phase) * amp +
          Math.sin(x * 0.006 - t * speed * 1.7 + phase) * (amp * 0.35);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      return strand;
    }

    function yForStrand(strand, x, t) {
      const { baseY, amp, speed, phase } = strand;
      return (
        baseY * height +
        Math.sin(x * 0.0025 + t * speed + phase) * amp +
        Math.sin(x * 0.006 - t * speed * 1.7 + phase) * (amp * 0.35)
      );
    }

    function frame(t) {
      ctx.clearRect(0, 0, width, height);
      strands.forEach((s) => drawStrand(s, t));

      ctx.globalAlpha = 0.55;
      particles.forEach((p) => {
        const strand = strands[p.strandIdx];
        p.x += p.speed;
        if (p.x > width + 20) p.x = -20;
        const y = yForStrand(strand, p.x, t);
        ctx.beginPath();
        ctx.fillStyle = strand.color;
        ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      if (!prefersReduced) raf = requestAnimationFrame(frame);
    }

    if (prefersReduced) {
      frame(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}
