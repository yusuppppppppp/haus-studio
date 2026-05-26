"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/lenis";

export default function Smooth_scroll({ children }) {
  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    let frame;

    function raf(time) {
      lenisInstance.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenisInstance.destroy();
    };
  }, []);

  return children;
}