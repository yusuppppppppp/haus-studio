"use client";
import Lookbook_item from "../lookbook_item/lookbook_item";
import Stragger_heading from "@/animations/stagger_heading/stagger_heading";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import { motion } from "framer-motion";

export default function Section_lookbook({ lookbook }) {
  return (
    <>
      <section
        id="section_lookbook"
        className="bg-background overflow-hidden px-section pt-10"
      >
        <div className="w-full h-full mx-auto max-w-400 flex flex-col justify-stretch items-start">
          <div className="flex flex-col justify-stretch items-start self-center">
            <div className="flex flex-col justify-stretch items-start md:gap-30 sm:gap-20 gap-15 self-center">
              <Stragger_heading
                as="h2"
                className="font-primary font-heading text-h2 leading-tightest uppercase lg:max-w-130 md:max-w-150 sm:max-w-90 max-w-50 self-center justify-center"
              >
                {lookbook.lookbook_heading}
              </Stragger_heading>
              <div className="flex flex-col justify-stretch item-center gap-10 max-w-90 self-center">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center uppercase"
                >
                  {lookbook.lookbook_subheading}
                </Stragger_word>
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center"
                >
                  {lookbook.lookbook_paragraph}
                </Stragger_word>
              </div>
            </div>
          </div>

          {/* section lookbook main content */}

          <div className="w-full flex flex-col justify-stretch items-start 2xl:pt-60 lg:pt-45 md:pt-40 sm:pt-35 pt-30 overflow-hidden">
            <div className="flex flex-col justify-stretch items-stretch w-full">
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="lg:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image1}
                    lookbook_name={lookbook.lookbook_name1}
                    lookbook_link={lookbook.lookbook_link1}
                  />
                </motion.div>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="lg:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image2}
                    lookbook_name={lookbook.lookbook_name2}
                    lookbook_link={lookbook.lookbook_link2}
                  />
                </motion.div>
                <div className="bg-background col-span-1 h-130 w-100 lg:block hidden"></div>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="col-span-1 p-2 lg:flex sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image3}
                    lookbook_name={lookbook.lookbook_name3}
                    lookbook_link={lookbook.lookbook_link3}
                  />
                </motion.div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image={lookbook.lookbook_image4}
                    lookbook_name={lookbook.lookbook_name4}
                    lookbook_link={lookbook.lookbook_link4}
                  />
                </motion.div>
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="md:col-span-1 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                    >
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image5}
                        lookbook_name={lookbook.lookbook_name5}
                        lookbook_link={lookbook.lookbook_link5}
                      />
                    </motion.div>
                    <div className="bg-background col-span-1 h-130 w-100 md:block hidden"></div>
                    <div className="bg-background col-span-1 h-130 w-100 md:block hidden"></div>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="col-span-1 p-2 md:flex hidden flex-col gap-13 justify-between items-start border-n-300 border"
                    >
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image6}
                        lookbook_name={lookbook.lookbook_name6}
                        lookbook_link={lookbook.lookbook_link6}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="col-span-1 p-2 lg:flex hidden flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image7}
                    lookbook_name={lookbook.lookbook_name7}
                    lookbook_link={lookbook.lookbook_link7}
                  />
                </motion.div>
                <div className="bg-background col-span-1 h-130 w-100 lg:block sm:hidden hidden"></div>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="lg:col-span-1 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image8}
                    lookbook_name={lookbook.lookbook_name8}
                    lookbook_link={lookbook.lookbook_link8}
                  />
                </motion.div>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="lg:col-span-1 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image9}
                    lookbook_name={lookbook.lookbook_name9}
                    lookbook_link={lookbook.lookbook_link9}
                  />
                </motion.div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="bg-background col-span-1 h-130 w-100 md:block hidden"></div>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="md:col-span-1 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                    >
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image10}
                        lookbook_name={lookbook.lookbook_name10}
                        lookbook_link={lookbook.lookbook_link10}
                      />
                    </motion.div>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="col-span-1 p-2 md:flex hidden flex-col gap-13 justify-between items-start border-n-300 border"
                    >
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image11}
                        lookbook_name={lookbook.lookbook_name11}
                        lookbook_link={lookbook.lookbook_link11}
                      />
                    </motion.div>
                    <div className="bg-background col-span-1 h-130 w-100 md:block hidden"></div>
                  </div>
                </div>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border"
                >
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image={lookbook.lookbook_image12}
                    lookbook_name={lookbook.lookbook_name12}
                    lookbook_link={lookbook.lookbook_link12}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
