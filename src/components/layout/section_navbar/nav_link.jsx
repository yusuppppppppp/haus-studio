"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";

const HOVER_VARIANT = {
  rest: { height: "0%" },
  hover: { height: "100%" },
}

const HOVER_TRANSITION = {
  duration: 0.5,
  ease: EASE_IN_OUT,
}

const BASE_STYLE =
  "flex flex-row justify-start items-end overflow-hidden bg-n-200 rounded-sm border border-n-300";


const SIZE_STYLE = {
  icon: "p-1.5",
  text: "p-2.5 sm:w-90 w-65 md:h-20 sm:h-12 h-20",
  "text-icon": "p-2.5 sm:w-90 w-65 md:h-20 sm:h-12 h-20",
};

export default function Nav_link({
  nav_link,
  nav_text,
  nav_icon,
  variant = "text",
  setOpen,
}) {
  const sizeStyle = SIZE_STYLE[variant];

  function handleClick(e) {
    if (nav_link?.includes("#")) {
      const [path, hash] = nav_link.split("#");

      if (!path || path === "") {
        e.preventDefault();
        const el = document.querySelector(`#${hash}`);
        if (el) {
          window.lenis?.scrollTo(el);
        }
      }
    }

    if (setOpen) setOpen(false);
  };

  return (
    <motion.a
      href={nav_link}
      onClick={handleClick}
      className={`${BASE_STYLE} relative flex flex-col justify-end`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className={`${BASE_STYLE} ${sizeStyle}`}>
        <div className="flex flex-row justify-start items-center gap-2">
          {(variant === "text" || variant === "text-icon") && nav_text && (
            <h2 className="font-secondary font-body-primary text-h6 leading-tight capitalize relative z-10 text-n-100 mix-blend-difference">
              {nav_text}
            </h2>
          )}

          {(variant === "icon" || variant === "text-icon") && nav_icon && (
            <Image
              src={nav_icon}
              alt="icon_nav"
              width={12}
              height={12}
              className="relative z-10 mix-blend-difference invert"
            />
          )}
        </div>
      </div>
      <motion.div
        className="z-0 absolute bg-n-500 w-full"
        variants={HOVER_VARIANT}
        transition={HOVER_TRANSITION}
      ></motion.div>
    </motion.a>
  );
}
