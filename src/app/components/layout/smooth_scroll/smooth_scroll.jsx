"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Smooth_scroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.7,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
}