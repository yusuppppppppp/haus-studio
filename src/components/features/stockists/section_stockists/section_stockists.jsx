"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Stagger_word from "@/animations/stagger_word/stagger_word";
import Stockists_card from "../stockists_card/stockists_card";
import Smooth_sticky from "../../../ui/smooth_sticky/smooth_sticky";
import useStockistsAnimation from "@/hooks/useStockistsAnimation";
import useStockistsMobileReveal from "@/hooks/useStockistsMobileReveal";
import { stockistsCardConfig } from "@/data/stockistsCardConfig";

function AnimatedCard({ card, index }) {
  const cardRef = useRef(null);

  const {
    hasAnimated,
    isDesktopReady,
    isMobileReady,
  } = useStockistsMobileReveal(cardRef);

  return (
    <motion.div
      ref={cardRef}
      style={isDesktopReady ? { y: card.y } : undefined}
      animate={
        isMobileReady
          ? hasAnimated
            ? { y: 0, opacity: 1 }
            : { y: 120, opacity: 0 }
          : undefined
      }
      initial={isMobileReady ? { y: 120, opacity: 0 } : false}
      transition={{
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
        delay: isMobileReady ? index * 0.15 : 0,
      }}
      className="will-change-[transform,opasity]"
    >
      <Stockists_card
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
    </motion.div>
  );
}

export default function Section_stockists({ stockists }) {
  const {
    ref,
    scrollYProgress,
    backgroundColor,
    stockistsCard1,
    stockistsCard2,
    stockistsCard3,
    stockistsCard4,
    filter,
  } = useStockistsAnimation();

  const mounted = isMobile !== null;

  const cards = [
    {
      ...stockistsCardConfig[0],
      y: stockistsCard1,
      label: stockists.stockists_item_label1,
      number: stockists.stockists_number1,
      heading: stockists.stockists_heading1,
      paragraph1: stockists.stockists_item1_paragraph1,
      paragraph2: stockists.stockists_item1_paragraph2,
    },

    {
      ...stockistsCardConfig[1],
      y: stockistsCard2,
      label: stockists.stockists_item_label2,
      number: stockists.stockists_number2,
      heading: stockists.stockists_heading2,
      paragraph1: stockists.stockists_item2_paragraph1,
      paragraph2: stockists.stockists_item2_paragraph2,
    },

    {
      ...stockistsCardConfig[2],
      y: stockistsCard3,
      label: stockists.stockists_item_label3,
      number: stockists.stockists_number3,
      heading: stockists.stockists_heading3,
      paragraph1: stockists.stockists_item3_paragraph1,
      paragraph2: stockists.stockists_item3_paragraph2,
    },

    {
      ...stockistsCardConfig[3],
      y: stockistsCard4,
      label: stockists.stockists_item_label4,
      number: stockists.stockists_number4,
      heading: stockists.stockists_heading4,
      paragraph1: stockists.stockists_item4_paragraph1,
      paragraph2: stockists.stockists_item4_paragraph2,
    },
  ];

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="relative md:h-[600vh] h-auto md:pb-40 pb-0"
    >
      <Smooth_sticky
        id="section_stockists"
        scrollYProgress={scrollYProgress}
        offsetY={120}
        className="px-section overflow-hidden pb-25 pt-8 2xl:h-[135vh] xl:h-[170vh] lg:h-[165vh] md:h-[140vh] h-auto md:sticky relative top-0"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <motion.div
            style={{ filter }}
            className="flex lg:flex-row flex-col justify-between items-start w-full 2xl:gap-40 xl:gap-13 md:gap-20 gap-30"
          >
            <div className="flex flex-col justify-end item-start 2xl:max-w-75 xl:max-w-85 md:max-w-75 sm:max-w-72 max-w-70">
              <Stagger_word
                delay={0.3}
                as="p"
                className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 text-end 2xl:pl-23 xl:pl-10 lg:pl-0 pl-23"
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
            <div className="flex md:flex-row flex-col justify-stretch items-start gap-5 sm:w-auto w-full">
              {cards.map((card, index) => (
                <AnimatedCard key={index} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </Smooth_sticky>
    </motion.div>
  );
}
