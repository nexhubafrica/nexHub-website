"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type LenisScrollProviderProps = {
  children: ReactNode;
};

export function LenisScrollProvider({ children }: LenisScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1, // slightly firm, infrastructure‑like feel
      easing: (t) => 1 - Math.pow(1 - t, 3), // smooth but decisive
      smoothWheel: true,
      touchMultiplier: 1.2,
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
