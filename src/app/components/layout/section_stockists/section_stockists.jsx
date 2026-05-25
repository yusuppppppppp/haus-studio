"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  useInView,
} from "framer-motion";
import Stagger_word from "../../ui/stragger_word/stragger_word";
import Stockists_card from "../../ui/stockists_card/stockists_card";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";

function AnimatedCard({ card, index}) {
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const matches = window.matchMedia("(min-width: 767px)").matches;
    setIsMobile(!matches);
  }, []);

  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isMobile === true && isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isInView, hasAnimated]);

  const isMobileReady = isMobile === true;
  const isDesktopReady = isMobile === false;

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
  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const matches = window.matchMedia("(min-width: 768px)").matches;
    setIsMobile(!matches);
  }, []);

  const enableInteraction = isMobile === false;
  const mounted = isMobile !== null;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundColorRaw = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    ["#000000", "#F5F5F5"],
  );

  const backgroundColor = enableInteraction ? backgroundColorRaw : "#000000";

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

  const stockistsCard1Spring = useSpring(stockistsCard1Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard2Spring = useSpring(stockistsCard2Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard3Spring = useSpring(stockistsCard3Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard4Spring = useSpring(stockistsCard4Raw, {
    stiffness: 60,
    damping: 20,
  });

  const stockistsCard1 = enableInteraction ? stockistsCard1Spring : 0;
  const stockistsCard2 = enableInteraction ? stockistsCard2Spring : 0;
  const stockistsCard3 = enableInteraction ? stockistsCard3Spring : 0;
  const stockistsCard4 = enableInteraction ? stockistsCard4Spring : 0;

  const invertRaw = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const invertSpring = useSpring(invertRaw, {
    stiffness: 60,
    damping: 20,
  });

  const filterMotion = useMotionTemplate`invert(${invertSpring})`;

  const filter = enableInteraction ? filterMotion : "invert(0)";

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

      cardClassName: "lg:w-50 w-full",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 md:h-auto sm:h-65 h-50 md:w-auto sm:w-85 w-full pb-5",

      imageClassName:
        "md:pr-10 pr-0 md:pl-0 sm:pl-10 pl-0 sm:w-full w-15 self-end",
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
        "lg:w-53 w-full sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-92 w-full pb-5",

      imageClassName:
        "sm:pl-10 pl-0 self-end sm:w-full w-15",
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
        "lg:w-53 w-full sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 sm:h-auto h-50 md:w-auto sm:w-85 w-full pb-5",

      imageClassName:
        "sm:pl-10 pl-0 self-end sm:w-full w-15",
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
        "lg:w-53 w-full sm:pt-0 pt-10",

      imageWrapperClassName:
        "flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background lg:h-110 h-auto lg:w-auto md:w-44 sm:w-70 w-full pb-5",

      imageClassName:
        "md:pl-0 sm:pl-10 pl-0 self-end sm:w-full w-15",
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
                <AnimatedCard
                  key={index}
                  card={card}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Smooth_sticky>
    </motion.div>
  );
}
