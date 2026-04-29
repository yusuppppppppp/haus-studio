"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ children, link }) {
  return (
    <Link href={link} target="_blank">
      <motion.div
        className="flex flex-row justify-start items-start gap-1.5 overflow-hidden h-5"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
          [
        </p>
        <motion.div
          className="flex flex-col 2xl:gap-1 xl:gap-1 lg:gap-1 md:gap-1 sm:gap-0.7 gap-2 -translate-y-[1.5em]"
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
    </Link>
  );
}
