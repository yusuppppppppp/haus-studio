"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Smooth_scroll({ children }) {
  useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.07,
    smoothWheel: true,
  });

  let frame;

  function raf(time) {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  }

  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
  };
}, []);

  return children;
} 