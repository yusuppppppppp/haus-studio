"use client";
import Image from "next/image";
import Footer_nav from "../footer_nav/footer_nav";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import { motion, AnimatePresence } from "framer-motion";
import useFooterImage from "@/hooks/useFooterImage";

export default function Section_footer({ footer }) {
  const footerImage = [
    footer.footer_right_image1,
    footer.footer_right_image2,
    footer.footer_right_image3,
  ];

  const { currentImage, setCurrentImage, setIsHovering, isHovering } =
    useFooterImage(footerImage);

  return (
    <>
      <section
        id="section_footer"
        className="px-section overflow-hidden pt-30 pb-7"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-stretch gap-10">
            <Image
              src={footer.footer_icon}
              alt="logo"
              width={55}
              height={45}
              className="self-center"
              priority
            />
            <div className="flex flex-row justify-between w-full lg:gap-10 gap-5">
              <div className="flex flex-col justify-stretch items-end gap-10">
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed"
                >
                  {footer.footer_paragraph1}
                </Stragger_word>
                <div className="flex flex-col justify-between items-end w-full lg:h-150 md:h-145 sm:h-150 h-180">
                  <div className="flex flex-fow justify-between items-stretch w-full lg:pt-25 sm:pt-70 pt-20">
                    <div className="sm:block hidden">
                      <Stragger_word
                        delay={0.5}
                        as="p"
                        className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize"
                      >
                        {footer.footer_label1}
                      </Stragger_word>
                    </div>
                    <div className="sm:block hidden">
                      <Stragger_word
                        delay={0.5}
                        as="p"
                        className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize"
                      >
                        {footer.footer_label2}
                      </Stragger_word>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-start gap-10 self-end">
                    <p className="font-secondary font-body-secondary text-b-s leading-tight">
                      {footer.footer_nav_icon}
                    </p>
                    <div className="flex flex-col justify-stretch items-end gap-2.5">
                      <Footer_nav footer_nav_link={footer.footer_nav_link1}>
                        {footer.footer_nav_text1}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link2}>
                        {footer.footer_nav_text2}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link3}>
                        {footer.footer_nav_text3}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link4}>
                        {footer.footer_nav_text4}
                      </Footer_nav>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-col-reverse w-full gap-5">
                    <div className="overflow-hidden relative sm:h-150 h-110 max-w-200 w-full sm:hidden block">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.65, 0, 0.35, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={footerImage[currentImage]}
                            alt="footer-img-right"
                            fill
                            className="w-full h-full object-cover"
                            sizes="(max-width: 800px) 100vw, 800px"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="flex flex-row justify-between items-end w-full">
                      <Image
                        src={footer.footer_left_image}
                        alt="footer-img-left"
                        width={210}
                        height={250}
                        className="lg:flex sm:hidden hidden"
                      />
                      <Stragger_word
                        delay={0.5}
                        as="p"
                        className="font-secondary font-body-secondary text-b-s leading-tight justify-end w-full"
                      >
                        {footer.footer_copyright}
                      </Stragger_word>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex hidden flex-col justify-stretch items-start gap-10">
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed"
                >
                  {footer.footer_paragraph2}
                </Stragger_word>
                <div
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setCurrentImage(1);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setCurrentImage(0);
                  }}
                  className="relative h-150 max-w-200 w-full overflow-hidden"
                >
                  {footerImage.map((image, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        opacity: currentImage === index ? 1 : 0,
                      }}
                      transition={{
                        duration: 2,
                        ease: [0.65, 0, 0.35, 1],
                      }}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
