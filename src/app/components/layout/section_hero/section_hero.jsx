"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Stragger_heading from "../../ui/stragger_heading/stragger_heading";
import Stragger_word from "../../ui/stragger_word/stragger_word";
import { Button } from "../../ui/button";
import Reveal_up from "../../ui/reveal_up/reveal_up";

export default function Section_hero({ hero }) {
  return (
    <>
      <section
        id="section_hero"
        className="bg-background w-full overflow-hidden"
      >
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full uppercase 2xl:gap-50 xl:gap-50 lg:gap-50 md:gap-0 sm:gap-0 gap-0 2xl:pt-2.5 xl:pt-2.5 lg:pt-2.5 md:pt-4.5 pt-4.5 ">
              <div className="flex flex-row items-start overflow-hidden 2xl:w-auto xl:w-full lg:w-full md:w-auto sm:w-auto w-full 2xl:h-65 xl:h-65 lg:h-65 2xl:pr-0 xl:pr-0 lg:pr-10 md:pr-0 sm:pr-0 pr-25">
                <motion.div
                  initial={{ y: "130%", rotate: 20, opacity: 0 }}
                  whileInView={{ y: "0%", rotate: 0, opacity: 1 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 2.7,
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="flex flex-row items-start"
                >
                  <h1 className=" font-primary font-display text-fd-l leading-tightest">
                    {hero.hero_title_left}
                  </h1>
                  <div className="relative 2xl:w-20 xl:w-20 lg:w-20 md:w-15 sm:w-10 w-10 2xl:h-20 xl:h-20 lg:h-20 md:h-15 sm:h-10 h-10">
                    <Image
                      className="object-contain 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-2 sm:pt-2 pt-2"
                      src={hero.hero_title_icon}
                      alt="®"
                      fill
                      sizes="(max-width: 640px) 40px,(max-width: 768px) 60px,80px"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row items-start overflow-hidden 2xl:h-65 xl:h-65 lg:h-65">
                <motion.h1
                  initial={{ y: "130%", rotate: 20, opacity: 0 }}
                  whileInView={{ y: "0%", rotate: 0, opacity: 1 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 2.7,
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className=" font-primary font-display text-fd-l leading-tightest"
                >
                  {hero.hero_title_right}
                </motion.h1>
              </div>
            </div>
            <div className="max-w-400 w-full mx-auto px-section 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-40 sm:pt-10 pt-10">
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col-reverse gap-15 justify-between items-center relative isolate">
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start 2xl:pl-[33%] xl:pl-[32%] lg:pl-[30%] md:pl-[30%] sm:pl-[35%] pl-[0%] w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-5">
                  <Stragger_word
                    delay={3}
                    as="p"
                    className="font-primary font-body-secondary text-b-l leading-tight uppercase text-end 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-35 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-end justify-end"
                  >
                    {hero.hero_subtitle}
                  </Stragger_word>
                  <div className="relative 2xl:w-107 xl:w-130 lg:w-130 md:w-100 sm:w-60 w-65 2xl:h-125 xl:h-125 lg:h-125 md:h-125 sm:h-80 h-120 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0.1, rotate: -25, scale: 2 }}
                      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 2.5,
                        duration: 1.4,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      className="will-change-transform 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute block 2xl:z-0 xl:z-0 lg:z-0 md:z-0 sm:z-0 z-0 w-full h-full"
                    >
                      <Image
                        className="object-cover object-center"
                        src={hero.hero_image}
                        alt="hero_image"
                        fill
                        priority
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 240px, (max-width: 1024px) 400px, 520px"
                      />
                    </motion.div>
                  </div>
                  <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col justify-end items-start 2xl:max-w-120 xl:max-w-105 lg:max-w-110 md:max-w-55 sm:max-w-45 max-w-45 gap-5 2xl:pl-23 xl:pl-10 lg:pl-15 md:pl-10 sm:pl-5 pl-0">
                    <Stragger_word
                      delay={3}
                      as="p"
                      className="font-primary font-body-secondary text-b-l leading-tight uppercase"
                    >
                      {hero.about_title}
                    </Stragger_word>
                    <Stragger_word
                      delay={3.2}
                      as="p"
                      className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed"
                    >
                      {hero.about_description}
                    </Stragger_word>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between z-1 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute ">
                  <div className="flex flex-col justify-start items-start 2xl:gap-40 xl:gap-35 lg:gap-35 md:gap-28 sm:gap-13 gap-13">
                    <div className="2xl:block xl:block lg:block md:block sm:block hidden">
                      <Stragger_word
                        delay={3}
                        as="p"
                        className="font-primary font-body-secondary text-b-l leading-tight uppercase 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-30"
                      >
                        {hero.hero_subtitle}
                      </Stragger_word>
                    </div>
                    <div className="flex flex-col justify-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-3 gap-3 2xl:max-w-165 xl:max-w-130 lg:max-w-115 md:max-w-75 sm:max-w-73 max-w-full">
                      <div className="flex flex-row justify-between 2xl:w-120 xl:w-90 lg:w-80 md:w-50 sm:w-55 w-full">
                        <Stragger_word
                          delay={3}
                          as="p"
                          className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 "
                        >
                          {hero.heading_hero_description}
                        </Stragger_word>
                        <Stragger_word
                          delay={3}
                          as="p"
                          className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 "
                        >
                          {hero.heading_hero_number}
                        </Stragger_word>
                      </div>
                      <Stragger_word
                        delay={3.2}
                        as="p"
                        className="mix-blend-difference font-secondary font-body-secondary text-b-m leading-relaxed"
                      >
                        {hero.hero_description}
                      </Stragger_word>
                    </div>
                    <div className="2xl:block xl:block lg:block md:block sm:block hidden overflow-hidden h-[1.5em]">
                      <Reveal_up delay={3.2}>
                        <Button link={hero.button_link} target="_self">
                          {hero.button_text}
                        </Button>
                      </Reveal_up>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
