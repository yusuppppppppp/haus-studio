"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({
  children,
  link,
  target,
  variant = "primary",
  hovered = false,
  type = "button",
  disable,
  ...props
}) {
  const Wrapper = link ? Link : "button";

  return (
    <Wrapper
      {...(link
        ? {
          href: link,
          target,
        }
        : {
          type,
          disable,
        })}
      {...props}
    >
      {variant === "primary" && (
        <motion.div
          className="flex flex-row justify-start items-start gap-1.5 overflow-hidden h-5"
          initial="rest"
          whileHover={!hovered ? "hover" : undefined}
          animate={hovered ? "hover" : "rest"}
        >
          <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
            [
          </p>
          <motion.div
            className="flex flex-col md:gap-1 sm:gap-0.7 gap-2 -translate-y-[1.5em]"
            variants={{
              rest: { y: "1.5em" },
              hover: { y: "0em" },
            }}
            transition={{
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1],
            }}
          >
            <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
              {children}
            </p>
            <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
              {children}
            </p>
          </motion.div>
          <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
            ]
          </p>
        </motion.div>
      )}

      {variant === "secondary" && (
        <motion.div
          initial="rest"
          whileHover={!hovered ? "hover" : undefined}
          animate={hovered ? "hover" : "rest"}
          className="relative isolate bg-n-200 p-2.5 flex flex-row sm:justify-between justify-end">
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
            {children}
          </p>
          <img
            src="/assets/icons/arrow.svg"
            alt="icon-lookbook-arrow"
            width={24}
            height={24}
            className="relative z-10 mix-blend-difference invert"
          />
        </motion.div>
      )}
    </Wrapper>
  );
}
