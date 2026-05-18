"use client";
import { motion } from "framer-motion";

export default function Stragger_heading({
  children,
  className = "",
  as = "div",
  stragger = 0.01,
  duration = 1,
  delay = 0,
  amount = 0,
}) {
  const MotionTag = motion[as];

  const text = typeof children === "string" ? children : "";

  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stragger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "130%",
      rotate: 20,
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <>
      <MotionTag
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: { amount },
        }}
        className={`flex flex-wrap ${className}`}
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden mr-[0.25em]">
            <motion.span
              variants={child}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    </>
  );
}
