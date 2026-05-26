"use client"
import { useRef } from "react";
import { useScroll, useTransform, useSpring} from "framer-motion";

export default function useImageParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageMoveRaw = useTransform(scrollYProgress, [0, 1], [200, -3500]);

  const imageMove = useSpring(imageMoveRaw, {
    stiffness: 60,
    damping: 20,
  });

  return {
    ref,
    scrollYProgress,
    imageMove,
  };
}
