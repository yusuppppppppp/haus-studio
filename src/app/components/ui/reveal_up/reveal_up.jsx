"use client";
import { motion } from "framer-motion";

export default function Reveal_up({
  children,
  delay = 0,
  duration = 0.7,
  className,
}) {
  return (
    <>
      <motion.div
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          delay,
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
