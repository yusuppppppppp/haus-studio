"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Stragger_heading from "../stragger_heading/stragger_heading";
import Stragger_word from "../stragger_word/stragger_word";

export default function Stockists_card({
  y,
  label,
  number,
  numberAlt,
  heading,
  paragraph1,
  paragraph2,

  imageWidth,
  imageHeight,

  cardClassName = "",
  imageWrapperClassName = "",
  imageClassName = "",
}) {
  return (
    <motion.div
      style={{ y }}
      className={`flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 overflow-hidden ${cardClassName}`}
    >
      <div
        className={`flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background pb-5 ${imageWrapperClassName}`}
      >
        <Stragger_heading
          delay={0.2}
          as="p"
          className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5"
        >
          {label}
        </Stragger_heading>
        <Image
          src={number}
          alt={numberAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
      </div>
      <div className="flex flex-col justify-stretch items-start gap-5">
        <Stragger_word
          as="p"
          className="font-secondary font-body-primary text-b-l leading-tight text-n-100"
        >
          {heading}
        </Stragger_word>
        <div className="flex flex-col justify-stretch items-start gap-3.5">
          <Stragger_word
            as="p"
            className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80"
          >
            {paragraph1}
          </Stragger_word>
          <Stragger_word
            as="p"
            className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80"
          >
            {paragraph2}
          </Stragger_word>
        </div>
      </div>
    </motion.div>
  );
}
