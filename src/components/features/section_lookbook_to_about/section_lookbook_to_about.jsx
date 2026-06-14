"use client";
import { motion } from "framer-motion";
import Button from "../../ui/button/button";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import Reveal_up from "@/animations/reveal_up/reveal_up";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";
import useLookbookTransition from "@/hooks/useLookbookTransition";

const BASE_TRANSITION = {
  ease: [0.65, 0, 0.35, 1],
}

const PARAGRAPH_STYLES = "font-secondary font-body-secondary text-b-m leading-relaxed justify-center"

export default function Section_lookbook_to_about({ lookbook_transition }) {
  const { ref, scrollYProgress, backgroundColor, filter } = useLookbookTransition();

  const {
    paragraphs = [],
    button,
  } = lookbook_transition || {};

  const {
    link: buttonLink,
    text: buttonText,
  } = button || {};

  return (
    <>
      <motion.div
        ref={ref}
        style={{ backgroundColor }}
        transition={BASE_TRANSITION}
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
              transition={BASE_TRANSITION}
              className="flex flex-col justify-center items-center w-full h-full gap-20"
            >
              <div className="flex flex-col justify-center items-center gap-10 ">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className={`${PARAGRAPH_STYLES} md:max-w-125 max-w-110`}
                >
                  {paragraphs[0]}
                </Stragger_word>
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className={PARAGRAPH_STYLES}
                >
                  {paragraphs[1]}
                </Stragger_word>
              </div>
              <Reveal_up delay={0.3}>
                <Button link={buttonLink}>
                  {buttonText}
                </Button>
              </Reveal_up>
            </motion.div>
          </div>
        </Smooth_sticky>
      </motion.div>
    </>
  );
}
