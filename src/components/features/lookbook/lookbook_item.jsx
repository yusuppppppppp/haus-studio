"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGE_VARIANT = {
  rest: { scale: 1 },
  hover: { scale: 1.2 },
}

const BUTTON_VARIANT = {
  rest: { width: "0%" },
  hover: { width: "100%" },
}

const BASE_TRANSITION = {
  duration: 0.6,
  ease: [0.65, 0, 0.35, 1],
}

const LOOKBOOK_VARIANT = {
  "span-1": "h-100",
  "span-2": "md:h-200 h-100",
};

export default function Lookbook_item({
  variant = "span-1",
  item,
  button_text,
  className,
}) {

  const {
    image_url: image,
    title,
    link,
  } = item || {};

  return (
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={className}
      >
        <motion.a
          href={link}
          target="_blank"
          className="w-full h-full flex flex-col gap-13 justify-between"
        >
          <div className="flex flex-col justify-stretch items-start gap-5 w-full">
            <div
              className={`w-full ${LOOKBOOK_VARIANT[variant]} overflow-hidden relative`}
            >
              <motion.div
                variants={IMAGE_VARIANT}
                transition={BASE_TRANSITION}
                className="relative w-full h-full"
              >
                {image && (
                  <Image
                    src={image}
                    alt="lookbook-item"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                  />
                )}
              </motion.div>
            </div>
            <p className="font-secondary font-body-primary text-b-l leading-relaxed capitalize max-w-95">
              {title}
            </p>
          </div>
          <div className="w-full">
            <div className="relative isolate bg-n-200 p-2.5 flex flex-row sm:justify-between justify-end">
              <motion.div
                variants={BUTTON_VARIANT}
                transition={BASE_TRANSITION}
                className="inset-0 z-0 absolute bg-n-500"
              ></motion.div>
              <p className="font-secondary font-body-primary text-b-m leading-tight uppercase sm:block hidden mix-blend-difference text-n-100 relative  z-10">
                {button_text}
              </p>
              {image && (
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="icon-lookbook-arrow"
                  width={24}
                  height={24}
                  className="relative z-10 mix-blend-difference invert"
                />
              )}
            </div>
          </div>
        </motion.a>
      </motion.div>
  );
}
