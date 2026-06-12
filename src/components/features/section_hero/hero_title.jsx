"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const titleAnimation = {
  initial: { y: "130%", rotate: 20, opacity: 0 },
  whileInView: { y: "0%", rotate: 0, opacity: 1 },
  viewport: {
    once: true,
  },
  transition: {
    delay: 2.7,
    duration: 1,
    ease: [0.65, 0, 0.35, 1],
  },
};

export default function Hero_title({ right, left, icon }) {
  return (
    <div className="flex flex-row justify-between w-full uppercase lg:gap-50 gap-0 lg:pt-2.5 pt-4.5 z-20 text-n-100 mix-blend-difference">
      <div className="flex flex-row items-start overflow-hidden 2xl:w-auto xl:w-full lg:w-full md:w-auto sm:w-auto w-full lg:h-65 sm:pr-0 pr-25">
        <motion.div {...titleAnimation} className="flex flex-row items-start">
          <h1 className=" font-primary font-display text-fd-l leading-tightest">
            {left}
          </h1>

          {icon && (
            <div className="relative lg:w-20 md:w-15 w-10 lg:h-20 md:h-15 h-10 invert">
              <Image
                className="object-contain lg:pt-3 pt-2"
                src={icon}
                alt="®"
                fill
                sizes="(max-width: 640px) 40px,(max-width: 768px) 60px,80px"
              />
            </div>
          )}
        </motion.div>
      </div>
      <div className="flex flex-row items-start overflow-hidden lg:h-65">
        <motion.h1
          {...titleAnimation}
          className=" font-primary font-display text-fd-l leading-tightest"
        >
          {right}
        </motion.h1>
      </div>
    </div>
  );
}
