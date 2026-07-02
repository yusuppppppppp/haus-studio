"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePageReady } from "@/context/loading_context";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";

const IMAGE_ANIMATION = {
  hidden: { opacity: 0.1, rotate: -25, scale: 2 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

export default function Hero_image({ image }) {
  const { isReady } = usePageReady();

  const IMAGE_REVEAL = {
    variants: IMAGE_ANIMATION,
    initial: "hidden",
    animate: isReady ? "visible" : "hidden",
    transition: {
      duration: 1.5,
      ease: EASE_IN_OUT,
    }
  }

  return (
    <div className="absolute sm:self-center self-start md:top-75 sm:top-40 top-105">
      <div className="relative 2xl:w-107 xl:w-100 lg:w-90 md:w-80 sm:w-60 w-65 md:h-125 sm:h-80 h-120 sm:self-center self-start overflow-hidden z-10 2xl:mr-25 xl:mr-10 lg:mr-17 mr-0 sm:ml-0 ml-5">
        {image && (
          <motion.div
            {...IMAGE_REVEAL}
            className="will-change-transform sm:absolute block w-full h-full"
          >
            <Image
              className="object-cover object-center"
              src={image}
              alt="hero_image"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 240px, (max-width: 1024px) 400px, 520px"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
