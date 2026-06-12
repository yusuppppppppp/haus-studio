"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 80, y: -10 },
};

const labelVariants = {
  rest: { opacity: 0, y: 50 },
  hover: { opacity: 1, y: 0 },
};

export default function Collection_item({ images_path, collection_name }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(media.matches);

    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <motion.div
      className="lg:w-55 w-full lg:h-85 md:h-130 h-110 will-change-transform"
      initial="rest"
      animate="rest"
      whileHover={isDesktop ? "hover" : undefined}
    >
      <motion.div
        className="relative w-full h-full"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {images_path && (
          <Image
            className="object-contain"
            src={images_path}
            alt="collection_item_image"
            fill
            sizes="(max-width: 1024px) 280px, 220px"
          />
        )}
      </motion.div>
      <motion.div
        className="absolute flex items-end justify-end ml-45 -mt-40 "
        variants={labelVariants}
        transition={{
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        <div className="px-2.5 py-1.5 bg-n-500/45">
          <p className="font-body-primary font-secondary text-b-l leading-tight text-n-100 uppercase whitespace-nowrap">
            {collection_name}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
