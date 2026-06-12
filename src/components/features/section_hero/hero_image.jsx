"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageAnimation = {
  initial: { opacity: 0.1, rotate: -25, scale: 2 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  viewport: { once: true },
  transition: {
    delay: 2.5,
    duration: 1.4,
    ease: [0.65, 0, 0.35, 1],
  },
};

export default function Hero_image({ image }) {
  return (
    <div className="absolute sm:self-center self-start md:top-75 sm:top-40 top-105">
      <div className="relative 2xl:w-107 xl:w-100 lg:w-90 md:w-80 sm:w-60 w-65 md:h-125 sm:h-80 h-120 sm:self-center self-start overflow-hidden z-10 2xl:mr-25 xl:mr-10 lg:mr-17 mr-0 sm:ml-0 ml-5">
        {image && (
          <motion.div
            {...imageAnimation}
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
