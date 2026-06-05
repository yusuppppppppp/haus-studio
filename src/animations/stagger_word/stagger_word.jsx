"use client";
import { motion } from "framer-motion";

export default function Stagger_word({
  children,
  className = "",
  as = "div",
  stragger = 0.01,
  duration = 0.5,
  delay = 0,
  amount = 0,
  ...props
}) {
  const MotionTag = 
  
  typeof as === "string" ? motion[as] : as;

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
      y: "100%",
    },
    visible: {
      y: "0%",
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
          amount,
        }}
        className={`flex flex-wrap ${className}`}
        {...props}
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
