"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

import Stagger_word from "../../ui/stragger_word/stragger_word";
import Stockists_card from "../../ui/stockists_card/stockists_card";

export default function Section_stockists({ stockists }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["#000000", "#F5F5F5"],
  );

  const stockistsCard1Raw = useTransform(
    scrollYProgress,
    [0.05, 0.4],
    [500, 40],
  );

  const stockistsCard2Raw = useTransform(scrollYProgress, [0, 0.4], [250, 120]);

  const stockistsCard3Raw = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [600, -20],
  );

  const stockistsCard4Raw = useTransform(scrollYProgress, [0, 0.4], [0, 400]);

  const stockistsCard1 = useSpring(stockistsCard1Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard2 = useSpring(stockistsCard2Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard3 = useSpring(stockistsCard3Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard4 = useSpring(stockistsCard4Raw, {
    stiffness: 60,
    damping: 20,
  });

  const invertRaw = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const invert = useSpring(invertRaw, {
    stiffness: 60,
    damping: 20,
  });

  const filter = useMotionTemplate`invert(${invert})`;

  const cards = [
    {
      y: stockistsCard1,

      imageWidth: 200,
      imageHeight: 200,

      label: stockists.stockists_item_label1,
      number: stockists.stockists_number1,
      alt: "number_1",

      heading: stockists.stockists_heading1,

      paragraph1: stockists.stockists_item1_paragraph1,
      paragraph2: stockists.stockists_item1_paragraph2,

      cardClassName: "2xl:w-50 xl:w-50 lg:w-50 md:w-full sm:w-full w-full",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-65 h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5",

      imageClassName:
        "2xl:pr-10 xl:pr-10 lg:pr-10 md:pr-10 sm:pr-0 pr-0 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15 self-end",
    },

    {
      y: stockistsCard2,

      imageWidth: 240,
      imageHeight: 240,

      label: stockists.stockists_item_label2,
      number: stockists.stockists_number2,
      alt: "number_2",

      heading: stockists.stockists_heading2,

      paragraph1: stockists.stockists_item2_paragraph1,
      paragraph2: stockists.stockists_item2_paragraph2,

      cardClassName:
        "2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-92 w-full pb-5",

      imageClassName:
        "2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15",
    },

    {
      y: stockistsCard3,

      imageWidth: 240,
      imageHeight: 240,

      label: stockists.stockists_item_label3,
      number: stockists.stockists_number3,
      alt: "number_3",

      heading: stockists.stockists_heading3,

      paragraph1: stockists.stockists_item3_paragraph1,
      paragraph2: stockists.stockists_item3_paragraph2,

      cardClassName:
        "2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5",

      imageClassName:
        "2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15",
    },

    {
      y: stockistsCard4,

      imageWidth: 240,
      imageHeight: 240,

      label: stockists.stockists_item_label4,
      number: stockists.stockists_number4,
      alt: "number_4",

      heading: stockists.stockists_heading4,

      paragraph1: stockists.stockists_item4_paragraph1,
      paragraph2: stockists.stockists_item4_paragraph2,

      cardClassName:
        "2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-70 w-full pb-5",

      imageClassName:
        "2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15",
    },
  ];

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="relative 2xl:h-[600vh] xl:h-[600vh] lg:h-[600vh] md:h-[600vh] sm:h-auto h-auto pb-40"
    >
      <section
        id="section_stockists"
        className="px-section overflow-hidden pb-25 pt-8 2xl:h-[130vh] xl:h-[165vh] lg:h-[165vh] md:h-[135vh] sm:h-auto h-auto 2xl:sticky xl:sticky lg:sticky md:sticky sm:relative relative top-0"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <motion.div
            style={{ filter }}
            className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-start w-full 2xl:gap-40 xl:gap-13 lg:gap-20 md:gap-20 sm:gap-30 gap-30"
          >
            <div className="flex flex-col justify-end item-start 2xl:max-w-75 xl:max-w-85 lg:max-w-75 md:max-w-75 sm:max-w-72 max-w-70">
              <Stagger_word
                delay={0.3}
                as="p"
                className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 text-end 2xl:pl-23 xl:pl-10 lg:pl-0 md:pl-23 sm:pl-23 pl-23"
              >
                {stockists.stockists_label1}
              </Stagger_word>

              <Stagger_word
                delay={0.4}
                as="p"
                className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100"
              >
                {stockists.stockists_label2}
              </Stagger_word>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-stretch items-start gap-5 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto w-full">
              {cards.map((card, index) => (
                <Stockists_card
                  key={index}
                  y={card.y}
                  label={card.label}
                  number={card.number}
                  numberAlt={card.alt}
                  heading={card.heading}
                  paragraph1={card.paragraph1}
                  paragraph2={card.paragraph2}
                  imageWidth={card.imageWidth}
                  imageHeight={card.imageHeight}
                  cardClassName={card.cardClassName}
                  imageWrapperClassName={card.imageWrapperClassName}
                  imageClassName={card.imageClassName}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
