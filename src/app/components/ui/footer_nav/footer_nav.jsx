"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer_nav({ children, footer_nav_link }) {
  return (
    <Link href={footer_nav_link}>
      <motion.div
        className="overflow-hidden 2xl:h-3 xl:h-3 lg:h-3 md:h-3.5 sm:h-3 h-3"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="overflow-hidden h-[1em]">
          <motion.div
            className="flex flex-col  2xl:gap-0.2 xl:gap-0.2 lg:gap-0.2 md:gap-0.5 sm:gap-1 gap-1"
            variants={{
              rest: { y: "0em" },
              hover: { y: "-1em" },
            }}
            transition={{
              duration: 0.4,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <p className="font-secondary font-body-primary text-b-s leading-tightest uppercase w-full text-end">
              {children}
            </p>
            <p className="font-secondary font-body-primary text-b-s leading-tightest uppercase w-full text-end">
              {children}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
