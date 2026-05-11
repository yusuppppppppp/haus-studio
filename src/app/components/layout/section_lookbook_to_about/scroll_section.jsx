"use client"
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "../../ui/button";

export default function Section_scroll({ data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#F5F5F5", "#000000"],
  );

  const invert = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const filter = useMotionTemplate`invert(${invert})`;

  return (
    <>
      <motion.div
        ref={ref}
        style={{ backgroundColor }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
        }}
        className="relative w-full h-[300vh]"
      >
        <section className="sticky top-0 overflow-hidden px-section h-screen">
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
              <div className="flex flex-col justify-center items-center gap-10">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-center 2xl:max-w-125 xl:max-w-125 lg:max-w-125 md:max-w-125 sm:max-w-110 max-w-110">
                  {data.lookbooktoabout_paragraph1}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-center">
                  {data.lookbooktoabout_paragraph2}
                </p>
              </div>
              <Button link={data.lookbooktoabout_link}>
                {data.button_text}
              </Button>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
