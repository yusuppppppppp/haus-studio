"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal_up from "@/animations/reveal_up/reveal_up";

export default function Footer_nav({ children, footer_nav_link }) {
  const textVariant = {
    rest: { y: "0em" },
    hover: { y: "-1em" },
  };

  const textTransition = {
    duration: 0.4,
    ease: [0.65, 0, 0.35, 1],
  };

  const textStyle =
    "font-secondary font-body-primary text-b-s leading-tightest uppercase w-full text-end";

  return (
    <Reveal_up delay={0.5}>
      <Link href={footer_nav_link}>
        <motion.div
          className="overflow-hidden lg:h-3 md:h-3.5 h-3"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <div className="overflow-hidden h-[1em]">
            <motion.div
              className="flex flex-col lg:gap-0.2 md:gap-0.5 gap-1"
              variants={textVariant}
              transition={textTransition}
            >
              <p className={textStyle}>{children}</p>
              <p className={textStyle}>{children}</p>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </Reveal_up>
  );
}
