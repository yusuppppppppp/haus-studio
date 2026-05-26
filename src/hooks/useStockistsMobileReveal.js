"use client"
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function useStockistsMobileReveal(cardRef) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const matches = window.matchMedia("(min-width: 767px)").matches;
    setIsMobile(!matches);
  }, []);

  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isMobile === true && isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isInView, hasAnimated]);

  return {
   hasAnimated, 
   isMobileReady: isMobile === true,
   isDesktopReady:  isMobile === false,
  };
}
