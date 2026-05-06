"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nav_link({
  nav_link,
  nav_text,
  nav_icon,
  variant = "text",
  setOpen,
}) {
  const baseStyle =
    "flex flex-row justify-start items-end overflow-hidden bg-n-200 rounded-sm border border-n-300";

  const sizeStyle =
    variant === "icon"
      ? "p-1.5"
      : "p-2.5 2xl:w-90 xl:w-90 lg:w-90 md:w-90 sm:w-90 w-67 2xl:h-20 xl:h-20 lg:h-20 md:h-20 sm:h-12 h-20";

  const handleClick = (e) => {
    if (nav_link.includes("#")) {
      const [path, hash] = nav_link.split("#");

      if (!path || path === "") {
        e.preventDefault();
        const el = document.querySelector(`#${hash}`);
        if (el && lenis) {
          lenis.scrollTo(el);
        }
      }
    }

    if (setOpen) setOpen(false);
  };

  return (
    <motion.a
      href={nav_link}
      onClick={handleClick}
      className={`${baseStyle} relative flex flex-col justify-end`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className={`${baseStyle} ${sizeStyle}`}>
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
        variants={{
          rest: { height: "0%" },
          hover: { height: "100%" },
        }}
        transition={{
          duration: 0.5,
          ease: [0.65, 0, 0.35, 1],
        }}
      ></motion.div>
    </motion.a>
  );
}
