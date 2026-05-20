"use client";
import Stragger_word from "../../ui/stragger_word/stragger_word";
import Stragger_heading from "../../ui/stragger_heading/stragger_heading";
import Sketchable from "../../ui/sketchable/sketchable";

export default function Section_about({ about }) {
  return (
    <>
      <div id="section_about">
        <Sketchable className="bg-foreground overflow-hidden px-section pt-8 2xl:pb-50 xl:pb-30 lg:pb-30 md:pb-30 sm:pb-25 pb-30">
          <div className="w-full h-full max-w-400 mx-auto">
            <div className="flex flex-col justify-stretch items-start 2xl:gap-40 xl:gap-30 lg:gap-30 md:gap-55 sm:gap-20 gap-30">
              <div className="flex flex-row justify-stretch items-start self-end 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-10 sm:gap-10 gap-7">
                <Stragger_word
                  delay={0.1}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 max-w-114"
                >
                  {about.about_paragraph1}
                </Stragger_word>
                <div className="flex flex-col justify-stretch items-start 2xl:max-w-114 xl:max-w-114 lg:max-w-114 md:max-w-100 sm:max-w-80 max-w-40 self-end gap-3">
                  <Stragger_word
                    delay={0.2}
                    as="p"
                    className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100"
                  >
                    {about.about_paragraph2}
                  </Stragger_word>
                  <Stragger_word
                    delay={0.3}
                    as="p"
                    className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-0"
                  >
                    {about.about_paragraph3}
                  </Stragger_word>
                </div>
              </div>
              <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-15 sm:gap-15 gap-15 ">
                <div className="flex flex-col justify-stretch items-start gap-5">
                  <Stragger_word
                    delay={0.2}
                    as="p"
                    className="2xl:max-w-45 xl:max-w-45 lg:max-w-45 md:max-w-45 sm:max-w-45 max-w-25 font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-12"
                  >
                    {about.about_decoration_text1}
                  </Stragger_word>
                  <Stragger_heading
                    as="h2"
                    className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase break-all 2xl:max-w-full xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full max-w-40"
                  >
                    {about.about_heading1}
                  </Stragger_heading>
                  <div className="flex flex-row justify-start item-start 2xl:self-end xl:self-end lg:self-end md:self-end sm:self-start self-start 2xl:gap-70 xl:gap-70 lg:gap-70 md:gap-7 sm:gap-4 gap-10">
                    <Stragger_word
                      delay={0.2}
                      as="p"
                      className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-12 xl:pl-12 lg:pl-12 md:pl-0 sm:pl-0 pl-0 2xl:w-auto xl:w-auto lg:w-auto md:w-40 sm:w-40 w-40"
                    >
                      {about.about_decoration_text2}
                    </Stragger_word>
                    <Stragger_heading
                      as="h2"
                      className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase"
                    >
                      {about.about_heading2}
                    </Stragger_heading>
                  </div>
                </div>
                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row justify-end 2xl:items-start xl:items-start lg:items-start md:items-end sm:items-end items-end 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-5 sm:gap-5 gap-5">
                  <Stragger_word
                    delay={0.2}
                    as="p"
                    className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase justify-end 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14"
                  >
                    {about.about_label1}
                  </Stragger_word>
                  <Stragger_word
                    delay={0.2}
                    as="p"
                    className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase justify-end 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14"
                  >
                    {about.about_label2}
                  </Stragger_word>
                </div>
              </div>
            </div>
          </div>
        </Sketchable>
      </div>
    </>
  );
}
