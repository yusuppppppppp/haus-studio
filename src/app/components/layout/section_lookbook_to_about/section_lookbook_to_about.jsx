"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Button from "../../ui/button/button";
import Stragger_word from "../../ui/stragger_word/stragger_word";
import Reveal_up from "../../ui/reveal_up/reveal_up";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";

export default function Section_lookbook_to_about({ lookbook_transition }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["#F5F5F5", "#000000"],
  );

  const invertRaw = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const invert = useSpring(invertRaw, {
    stiffness: 60,
    damping: 20,
  });

  const filter = useMotionTemplate`invert(${invert})`;

  return (
    <>
      <motion.div
        ref={ref}
        style={{ backgroundColor }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
        }}
        className="relative w-full h-[400vh]"
      >
        <Smooth_sticky
          scrollYProgress={scrollYProgress}
          offsetY={120}
          className="sticky top-0 overflow-hidden px-section h-screen"
        >
          <div className="w-full h-full mx-auto max-w-400">
            <motion.div
              style={{
                filter,
              }}
              transition={{
                ease: [0.65, 0, 0.35, 1],
              }}
              className="flex flex-col justify-center items-center w-full h-full gap-20"
            >
              <div className="flex flex-col justify-center items-center gap-10 ">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-125 xl:max-w-125 lg:max-w-125 md:max-w-125 sm:max-w-110 max-w-110 justify-center"
                >
                  {lookbook_transition.lookbooktoabout_paragraph1}
                </Stragger_word>
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center"
                >
                  {lookbook_transition.lookbooktoabout_paragraph2}
                </Stragger_word>
              </div>
              <Reveal_up delay={0.3}>
                <Button link={lookbook_transition.lookbooktoabout_link}>
                  {lookbook_transition.button_text}
                </Button>
              </Reveal_up>
            </motion.div>
          </div>
        </Smooth_sticky>
      </motion.div>
    </>
  );
}
