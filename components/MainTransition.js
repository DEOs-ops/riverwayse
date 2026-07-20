"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Wraps page content and fades it in on every route change.
 *
 * PortalCard and Nav both cover route changes they initiate with the
 * ripple veil, so this fade plays underneath and is invisible in that
 * case. But browser back/forward, direct URL loads, and bookmarks never
 * trigger the ripple — for those, this is the only arrival beat the
 * page gets, so content settles in instead of popping in unannounced.
 */
export default function MainTransition({ children }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    setVisible(false);
    // Double rAF so the browser commits the opacity:0 state before we
    // flip it — otherwise the transition can get skipped on fast route
    // changes where both states land in the same paint.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    firstRender.current = false;
    return () => cancelAnimationFrame(raf1);
  }, [pathname]);

  return (
    <div className={`main-transition ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
