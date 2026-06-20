"use client";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "../ease_in_out/ease_in_out";

export default function Reveal_up({
  children,
  delay = 0,
  duration = 0.7,
  className,
}) {
  return (
      <motion.div
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{
          once: true,
        }}
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
