"use client";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

export default function useLookbookTransition() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["#F5F5F5", "#000000"],
  );

  const invertRaw = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const invert = useSpring(invertRaw, {
    stiffness: 60,
    damping: 20,
  });

  const filter = useMotionTemplate`invert(${invert})`;

  return {
    ref,
    scrollYProgress,
    backgroundColor,
    filter,
  };
}
