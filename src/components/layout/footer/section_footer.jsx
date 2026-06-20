"use client";
import Image from "next/image";
import Footer_nav from "./footer_nav";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import { motion, AnimatePresence } from "framer-motion";
import useFooterImage from "@/hooks/useFooterImage";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";

const PARAGRAPH_STYLES = {
  medium: "font-secondary font-body-secondary text-b-m leading-relaxed",
  small: "font-secondary font-body-secondary text-b-s leading-tight"
}

const IMAGE_TRANSITION = {
  duration: 0.8,
  ease: EASE_IN_OUT,
}

const IMAGE_HOVER_TRANSITION = {
  duration: 2,
  ease: EASE_IN_OUT,
}

export default function Section_footer({ footer }) {
  const {
    logo_icon,
    paragraphs = [],
    labels = [],
    nav_links = [],
    nav_icon,
    copyright,
    left_image,
    right_images = [],
  } = footer || {};

  const { currentImage, setCurrentImage, setIsHovering } =
    useFooterImage(right_images);

  function handleMouseEnter() {
    setIsHovering(true);
    setCurrentImage(1);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    setCurrentImage(0);
  }

  return (
    <>
      <section
        id="section_footer"
        className="relative px-section overflow-hidden 2xl:pt-0 pt-30 pb-7"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-stretch gap-10">
            {logo_icon && (
              <Image
                src={logo_icon}
                alt="logo"
                width={55}
                height={45}
                className="self-center w-auto h-auto"
                priority
              />
            )}
            <div className="flex flex-row justify-between w-full lg:gap-10 gap-5">
              <div className="flex flex-col justify-stretch items-end gap-10">
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className={PARAGRAPH_STYLES.medium}
                >
                  {paragraphs[0]}
                </Stragger_word>
                <div className="flex flex-col justify-between items-end w-full lg:h-150 md:h-145 sm:h-150 h-180">
                  <div className="flex flex-row justify-between items-stretch w-full lg:pt-25 sm:pt-70 pt-20">
                    {labels.map((label, index) => (
                      <div key={index} className="sm:block hidden">
                        <Stragger_word
                          delay={0.5}
                          as="p"
                          className={`${PARAGRAPH_STYLES.medium} capitalize`}
                        >
                          {label}
                        </Stragger_word>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row justify-end items-start gap-10 self-end">
                    <p className={PARAGRAPH_STYLES.small}>
                      {nav_icon}
                    </p>
                    <div className="flex flex-col justify-stretch items-end gap-2.5">
                      {nav_links.map((item, index) =>
                        item.link && item?.text ? (
                          <Footer_nav key={index} footer_nav_link={item.link}>
                            {item.text}
                          </Footer_nav>
                        ) : null,
                      )}
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-col-reverse w-full gap-5">
                    <div className="overflow-hidden relative sm:h-150 h-110 max-w-200 w-full sm:hidden block">
                      <AnimatePresence mode="wait">
                        {right_images[currentImage] && (
                          <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={IMAGE_TRANSITION}
                            className="absolute inset-0"
                          >
                            <Image
                              src={right_images[currentImage]}
                              alt="footer-img-right"
                              fill
                              className="w-full h-full object-cover"
                              sizes="(max-width: 800px) 100vw, 800px"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex flex-row justify-between items-end w-full">
                      {left_image && (
                        <Image
                          src={left_image}
                          alt="footer-img-left"
                          width={210}
                          height={250}
                          className="lg:flex sm:hidden hidden w-auto h-auto"
                        />
                      )}
                      <Stragger_word
                        delay={0.5}
                        as="p"
                        className={`${PARAGRAPH_STYLES.small} justify-end w-full`}
                      >
                        {copyright}
                      </Stragger_word>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex hidden flex-col justify-stretch items-start gap-10">
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className={PARAGRAPH_STYLES.medium}
                >
                  {paragraphs[1]}
                </Stragger_word>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative h-150 max-w-200 w-full overflow-hidden"
                >
                  {right_images.map((image, index) =>
                    image && (
                      <motion.div
                        key={index}
                        animate={{
                          opacity: currentImage === index ? 1 : 0,
                        }}
                        transition={IMAGE_HOVER_TRANSITION}
                        className="absolute inset-0"
                      >
                        <Image
                          src={image}
                          alt={`footer-img-${index}`}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
