"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer_nav({ children, footer_nav_link }) {
  return (
    <Link href={footer_nav_link}>
      <motion.div
        className="overflow-hidden h-3.5"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="overflow-hidden h-[1em]">
          <motion.div
            className="flex flex-col  2xl:gap-0.2 xl:gap-0.2 lg:gap-0.2 md:gap-0.2 sm:gap-0.2 gap-0.5"
            variants={{
              rest: { y: "0em" },
              hover: { y: "-0.8em" },
            }}
            transition={{
              duration: 0.4,
              ease: [0.645, 0.045, 0.355, 1],
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
