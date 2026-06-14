"use client";
import Stragger_word from "@/animations/stagger_word/stagger_word";
import Stragger_heading from "@/animations/stagger_heading/stagger_heading";
import Sketchable from "./sketchable";

const TEXT_STYLES = {
  paragraph: "font-secondary font-body-secondary text-b-m leading-relaxed text-n-100",
  heading: "font-primary font-display text-fd-s leading-tightest text-n-100 uppercase",
  label: "font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase justify-end md:max-w-17.5 max-w-14",
}

export default function Section_about({ about }) {
  const {
    about_paragraph1: paragraph1,
    about_paragraph2: paragraph2,
    about_paragraph3: paragraph3,
    about_decoration_text1: decorationText1,
    about_decoration_text2: decorationText2,
    about_heading1: heading1,
    about_heading2: heading2,
    about_label1: label1,
    about_label2: label2,
  } = about || {};

  return (
    <div id="section_about">
      <Sketchable className="bg-foreground overflow-hidden px-section pt-8 2xl:pb-50 md:pb-30 sm:pb-25 pb-30">
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-start 2xl:gap-40 lg:gap-30 md:gap-55 sm:gap-20 gap-30">
            <div className="flex flex-row justify-stretch items-start self-end 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-10 sm:gap-10 gap-7">
              <Stragger_word
                delay={0.1}
                as="p"
                className={`${TEXT_STYLES.paragraph} max-w-114`}
              >
                {paragraph1}
              </Stragger_word>
              <div className="flex flex-col justify-stretch items-start lg:max-w-114 md:max-w-100 sm:max-w-80 max-w-40 self-end gap-3">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className={TEXT_STYLES.paragraph}
                >
                  {paragraph2}
                </Stragger_word>
                <Stragger_word
                  delay={0.3}
                  as="p"
                  className={`${TEXT_STYLES.paragraph} sm:pl-30 pl-0`}
                >
                  {paragraph3}
                </Stragger_word>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between w-full lg:gap-0 sm:gap-15 gap-15 ">
              <div className="flex flex-col justify-stretch items-start gap-5">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className={`sm:max-w-45 max-w-25 ${TEXT_STYLES.paragraph} sm:pl-30 pl-12`}
                >
                  {decorationText1}
                </Stragger_word>
                <Stragger_heading
                  as="h2"
                  className={`${TEXT_STYLES.heading} break-all sm:max-w-full max-w-40`}
                >
                  {heading1}
                </Stragger_heading>
                <div className="flex flex-row justify-start item-start md:self-end self-start lg:gap-70 md:gap-7 sm:gap-4 gap-10">
                  <Stragger_word
                    delay={0.2}
                    as="p"
                    className={`${TEXT_STYLES.paragraph} lg:pl-12 pl-0 lg:w-auto w-40`}
                  >
                    {decorationText2}
                  </Stragger_word>
                  <Stragger_heading
                    as="h2"
                    className={TEXT_STYLES.heading}
                  >
                    {heading2}
                  </Stragger_heading>
                </div>
              </div>
              <div className="flex lg:flex-col flex-row justify-end lg:items-start items-end lg:gap-8 gap-5">
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className={TEXT_STYLES.label}
                >
                  {label1}
                </Stragger_word>
                <Stragger_word
                  delay={0.2}
                  as="p"
                  className={TEXT_STYLES.label}
                >
                  {label2}
                </Stragger_word>
              </div>
            </div>
          </div>
        </div>
      </Sketchable>
    </div>
  );
}
