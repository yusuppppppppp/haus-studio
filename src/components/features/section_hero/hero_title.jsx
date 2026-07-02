"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";
import { usePageReady } from "@/context/loading_context";

const TEXT_STYLES = "font-primary font-display text-fd-l leading-tightest"

const TITLE_ANIMATION = {
  hidden: { y: "130%", rotate: 20, opacity: 0 },
  visible: { y: "0%", rotate: 0, opacity: 1 },
};

export default function Hero_title({ right, left, icon }) {
  const { isReady } = usePageReady();
  
  const TITLE_REVEAL = {
    variants: TITLE_ANIMATION,
    initial: "hidden",
    animate: isReady ? "visible" : "hidden",
    transition: {
      duration: 1,
      ease: EASE_IN_OUT,
    },
  };

  return (
    <div className="flex flex-row justify-between w-full uppercase lg:gap-50 gap-0 lg:pt-2.5 pt-4.5 z-20 text-n-100 mix-blend-difference">
      <div className="flex flex-row items-start overflow-hidden 2xl:w-auto xl:w-full lg:w-full md:w-auto sm:w-auto w-full lg:h-65 sm:pr-0 pr-25">
        <motion.div
          {...TITLE_REVEAL}
          className="flex flex-row items-start"
        >
          <h1 className={TEXT_STYLES}>
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
          {...TITLE_REVEAL}
          className={TEXT_STYLES}
        >
          {right}
        </motion.h1>
      </div>
    </div>
  );
}
