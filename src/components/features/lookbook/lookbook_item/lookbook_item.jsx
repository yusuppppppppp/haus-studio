"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Lookbook_item({
  variant = "span-1",
  item,
  button_text,
  className,
}) {

  const lookbook_image = item?.image_url;
  const lookbook_name = item?.title;
  const lookbook_link = item?.link;


  const lookbookVariant = {
    "span-1": "h-100",
    "span-2": "md:h-200 h-100",
  };

  return (
    <>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={className}
      >
        <motion.a
          href={lookbook_link}
          target="_blank"
          className="w-full h-full flex flex-col gap-13 justify-between"
        >
          <div className="flex flex-col justify-stretch items-start gap-5 w-full">
            <div
              className={`w-full ${lookbookVariant[variant]} overflow-hidden relative`}
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.2 },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="relative w-full h-full"
              >
                {lookbook_image && (
                  <Image
                    src={lookbook_image}
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
              {lookbook_name}
            </p>
          </div>
          <div className="w-full">
            <div className="relative isolate bg-n-200 p-2.5 flex flex-row sm:justify-between justify-end">
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%" },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="inset-0 z-0 absolute bg-n-500"
              ></motion.div>
              <p className="font-secondary font-body-primary text-b-m leading-tight uppercase sm:block hidden mix-blend-difference text-n-100 relative  z-10">
                {button_text}
              </p>
              {lookbook_image && (
                <img
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
    </>
  );
}
