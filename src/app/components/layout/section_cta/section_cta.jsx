"use client";
import Image from "next/image";
import { Button } from "../../ui/button";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Stragger_word from "../../ui/stragger_word/stragger_word";
import Reveal_up from "../../ui/reveal_up/reveal_up";
import Stragger_heading from "../../ui/stragger_heading/stragger_heading";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";

export default function Section_cta({ cta }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageMoveRaw = useTransform(scrollYProgress, [0, 1], [200, -3500]);

  const imageMove = useSpring(imageMoveRaw, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <>
      <motion.div
        ref={ref}
        transition={{
          ease: [0.65, 0, 0.35, 1],
        }}
        className="relative h-[500vh]"
      >
        <Smooth_sticky
          id="section_CTA"
          scrollYProgress={scrollYProgress}
          offsetY={120}
          className="bg-background 2xl:pt-10 xl:pt-5 lg:pt-5 md:pt-30 sm:pt-10 pt-20 pb-50 overflow-hidden sticky top-0 2xl:h-screen xl:h-screen lg:h-screen md:h-screen sm:h-[165vh] h-screen"
        >
          <div className="w-full h-full mx-auto">
            <div className="flex flex-col justify-stretch items-start">
              <div className="relative text-n-100 mix-blend-difference z-20 flex flex-col justify-stretch items-stretch max-w-400 mx-section self-center 2xl:gap-30 xl:gap-10 lg:gap-10 md:gap-45 sm:gap-10 gap-25 w-full pb-35">
                <div className="flex flex-col justify-center items-center gap-8">
                  <div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                    <Stragger_word
                      delay={0.4}
                      as="p"
                      className="font-body-secondary font-secondary text-b-m leading-relaxed "
                    >
                      {cta.cta_label}
                    </Stragger_word>
                  </div>
                  <Reveal_up delay={0.4}>
                    <Button link={cta.cta_button_link}>
                      {cta.cta_button_text}
                    </Button>
                  </Reveal_up>
                </div>
                <div className="flex flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-center w-full px-section">
                  <Stragger_word
                    delay={0.6}
                    as="p"
                    className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start justify-center"
                  >
                    {cta.cta_paragraph1}
                  </Stragger_word>
                  <div className="2xl:block xl:block lg:block md:block sm:block hidden">
                    <Stragger_word
                      delay={0.6}
                      as="p"
                      className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 justify-end"
                    >
                      {cta.cta_paragraph2}
                    </Stragger_word>
                  </div>
                </div>
                <Stragger_heading
                  delay={0.7}
                  as="h2"
                  className="font-primary font-display text-fd-l leading-tightest justify-center uppercase 2xl:w-312 xl:w-full lg:w-312 md:w-100 sm:w-100 w-100 self-center text-n-100 mix-blend-difference 2xl:ml-0 xl:ml-20 lg:ml-15 md:ml-10 sm:ml-10 ml-8"
                >
                  {cta.cta_heading}
                </Stragger_heading>
              </div>
              <motion.div
                style={{ y: imageMove }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="relative will-change-transform w-full 2xl:h-[150vh] xl:h-[130vh] lg:h-[130vh] md:h-screen sm:h-[150vh] h-[110vh] z-10"
              >
                <Image
                  src={cta.cta_image}
                  alt="cta-bg"
                  fill
                  className="object-cover 2xl:object-center xl:object-center lg:object-center md:object-center sm:object-center object-[15%_50%]"
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </Smooth_sticky>
      </motion.div>
    </>
  );
}
