"use client";
import { motion, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function Custom_cursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useSpring(0, {
    stiffness: 400,
    damping: 30,
  });

  const cursorY = useSpring(0, {
    stiffness: 400,
    damping: 30,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none z-9999 fixed top-0 left-0 w-5 h-5 bg-background will-change-transform mix-blend-difference"
        style={{ translateX: cursorX, translateY: cursorY }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}
