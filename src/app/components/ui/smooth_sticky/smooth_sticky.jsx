"use client";

import {
  motion,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Smooth_sticky({
  children,
  scrollYProgress,
  offsetY = 120,
  top = "0px",
  className = "",
  id,
}) {

  const yRaw = useTransform(
    scrollYProgress,
    [0, 0.12],
    [offsetY, 0]
  );

  const y = useSpring(yRaw, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <motion.section
      id={id}  
      style={{
        y,
      }}
      className={className}
    >
      <div
        className="w-full h-full"
        style={{ top }}
      >
        {children}
      </div>
    </motion.section>
  );
}