"use client";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "../ease_in_out/ease_in_out";

export default function Reveal_up({
  children,
  delay = 0,
  duration = 0.7,
  className,
  controlled = false,
  animate = false,
}) {

  const REVEAL_UP = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const triggerProps = controlled
    ? { initial: "hidden", animate: animate ? "visible" : "hidden" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
      };

  return (
    <motion.div
      className={className}
      variants={REVEAL_UP}
      {...triggerProps}
      transition={{
        delay,
        duration,
        ease: EASE_IN_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
