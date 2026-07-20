"use client";

import { Children, useEffect, useState } from "react";

/**
 * Stagger-reveals its children on mount — pass one child per line/clause
 * of a headline, not per word. Meant for above-the-fold titles that need
 * a composed entrance (paired with the passage veil) rather than
 * scroll-triggered reveal, which is what Reveal.js is for.
 *
 * <h1>
 *   <Arrival>
 *     <span>Growth that moves</span>
 *     <span>like a <em>current</em>,</span>
 *     <span>not a splash.</span>
 *   </Arrival>
 * </h1>
 */
export default function Arrival({ children, stagger = 90, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    // Double rAF so the initial opacity:0 state paints before we flip it,
    // otherwise the transition can get skipped when it lands in the same frame.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const items = Children.toArray(children);

  return items.map((child, i) => (
    <span
      key={i}
      className={`arrival-item ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay + i * stagger}ms` }}
    >
      {child}
    </span>
  ));
}
