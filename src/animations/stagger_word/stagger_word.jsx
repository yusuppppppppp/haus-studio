"use client";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "../ease_in_out/ease_in_out";

const CHILD_VARIANT = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
  },
};

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
              variants={CHILD_VARIANT}
              transition={{
                duration,
                ease: EASE_IN_OUT,
              }}
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
