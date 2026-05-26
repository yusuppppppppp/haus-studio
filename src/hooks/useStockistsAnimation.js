"use client";
import { useRef, useState, useEffect } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function useStockistsAnimation() {
  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const matches = window.matchMedia("(min-width: 768px)").matches;
    setIsMobile(!matches);
  }, []);

  const enableInteraction = isMobile === false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColorRaw = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    ["#000000", "#F5F5F5"],
  );

  const backgroundColor = enableInteraction ? backgroundColorRaw : "#000000";

  const stockistsCard1Raw = useTransform(
    scrollYProgress,
    [0.05, 0.4],
    [500, 40],
  );

  const stockistsCard2Raw = useTransform(scrollYProgress, [0, 0.4], [250, 120]);

  const stockistsCard3Raw = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [600, -20],
  );

  const stockistsCard4Raw = useTransform(scrollYProgress, [0, 0.4], [0, 400]);

  const stockistsCard1Spring = useSpring(stockistsCard1Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard2Spring = useSpring(stockistsCard2Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard3Spring = useSpring(stockistsCard3Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard4Spring = useSpring(stockistsCard4Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard1 = enableInteraction ? stockistsCard1Spring : 0;
  const stockistsCard2 = enableInteraction ? stockistsCard2Spring : 0;
  const stockistsCard3 = enableInteraction ? stockistsCard3Spring : 0;
  const stockistsCard4 = enableInteraction ? stockistsCard4Spring : 0;

  const invertRaw = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const invertSpring = useSpring(invertRaw, {
    stiffness: 60,
    damping: 20,
  });

  const filterMotion = useMotionTemplate`invert(${invertSpring})`;

  const filter = enableInteraction ? filterMotion : "invert(0)";

  return {
    ref,
    scrollYProgress,
    backgroundColor,
    stockistsCard1,
    stockistsCard2,
    stockistsCard3,
    stockistsCard4,
    filter,
  };
}
