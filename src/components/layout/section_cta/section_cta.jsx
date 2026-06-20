"use client";
import Image from "next/image";
import Button from "../../ui/button/button";
import { motion } from "framer-motion";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import Reveal_up from "@/animations/reveal_up/reveal_up";
import Stragger_heading from "@/animations/stagger_heading/stagger_heading";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";
import useImageParallax from "@/hooks/useImageParallax";

const PARAGRAPH_STYLES = "font-body-secondary font-secondary text-b-m leading-relaxed"

export default function Section_cta({ cta }) {
  const { ref, scrollYProgress, imageMove } = useImageParallax();

  const {
    label,
    heading,
    image,
    paragraphs = [],
    button,
  } = cta || {};

  const {
    link: buttonLink,
    text: buttonText,
  } = button || {};

  return (
    <>
      <motion.div
        ref={ref}
        className="relative h-[500vh]"
      >
        <Smooth_sticky
          id="section_CTA"
          scrollYProgress={scrollYProgress}
          offsetY={120}
          className="bg-background 2xl:pt-10 lg:pt-5 md:pt-30 sm:pt-10 pt-20 pb-50 overflow-hidden sticky top-0 2xl:h-[145vh] md:h-screen sm:h-[165vh] h-screen"
        >
          <div className="w-full h-full mx-auto">
            <div className="flex flex-col justify-stretch items-start">
              <div className="relative text-n-100 mix-blend-difference z-20 flex flex-col justify-stretch items-stretch max-w-400 mx-section self-center 2xl:gap-30 lg:gap-10 md:gap-45 sm:gap-10 gap-25 w-full pb-35">
                <div className="flex flex-col justify-center items-center gap-8">
                  <div className="lg:block hidden">
                    <Stragger_word
                      delay={0.4}
                      as="p"
                      className={PARAGRAPH_STYLES}
                    >
                      {label}
                    </Stragger_word>
                  </div>
                  <Reveal_up delay={0.4}>
                    <Button link={buttonLink}>
                      {buttonText}
                    </Button>
                  </Reveal_up>
                </div>
                <div className="flex flex-row sm:justify-between justify-center w-full px-section">
                  <Stragger_word
                    delay={0.6}
                    as="p"
                    className={`${PARAGRAPH_STYLES} lg:max-w-85 max-w-60 sm:justify-start justify-center`}
                  >
                    {paragraphs[0]}
                  </Stragger_word>
                  <div className="sm:block hidden">
                    <Stragger_word
                      delay={0.6}
                      as="p"
                      className={`${PARAGRAPH_STYLES} lg:max-w-85 max-w-60 justify-end`}
                    >
                      {paragraphs[1]}
                    </Stragger_word>
                  </div>
                </div>
                <Stragger_heading
                  delay={0.7}
                  as="h2"
                  className="font-primary font-display text-fd-l leading-tightest justify-center uppercase 2xl:w-312 xl:w-full lg:w-312 w-100 self-center text-n-100 mix-blend-difference 2xl:ml-0 xl:ml-20 lg:ml-15 sm:ml-10 ml-8"
                >
                  {heading}
                </Stragger_heading>
              </div>
              <motion.div
                style={{ y: imageMove }}
                className="relative will-change-transform w-full 2xl:h-[150vh] lg:h-[130vh] md:h-screen sm:h-[150vh] h-[110vh] z-10"
              >
                {image ? (
                  <Image
                    src={image}
                    alt="cta-bg"
                    fill
                    className="object-cover sm:object-center object-[15%_50%]"
                    sizes="100vw"
                  />
                ) : null}
              </motion.div>
            </div>
          </div>
        </Smooth_sticky>
      </motion.div>
    </>
  );
}
