"use client";

import Stagger_word from "@/animations/stagger_word/stagger_word";
import Button from "@/components/ui/button/button";
import Reveal_up from "@/animations/reveal_up/reveal_up";
import { usePageReady } from "@/context/loading_context";

const UPPERCASE_PARAGRAPH =
  "font-primary font-body-secondary text-b-l leading-tight uppercase";

export default function Hero_content({
  subtitle,
  headingDescription,
  headingNumber,
  description,
  buttonLink,
  buttonText,
}) {
  const { isReady } = usePageReady();

  return (
    <div className="flex flex-col-reverse sm:flex-col justify-start items-center">
      <div className="flex flex-col justify-between items-stretch md:h-125 sm:h-80 h-120">
        <div className="sm:block hidden">
          <Stagger_word
            controlled
            delay={0.4}
            animate={isReady}
            as="p"
            className={`${UPPERCASE_PARAGRAPH} md:max-w-47.5 sm:max-w-30 max-w-30`}
          >
            {subtitle}
          </Stagger_word>
        </div>
        <div className="flex flex-col justify-center sm:gap-3 gap-3 2xl:max-w-165 xl:max-w-130 lg:max-w-115 sm:max-w-73 max-w-full">
          <div className="flex flex-row justify-between 2xl:w-120 xl:w-90 lg:w-80 md:w-50 sm:w-45 w-full">
            <Stagger_word
              controlled
              delay={0.4}
              animate={isReady}
              as="p"
              className={`${UPPERCASE_PARAGRAPH} max-w-47.5`}
            >
              {headingDescription}
            </Stagger_word>
            <Stagger_word
              controlled
              delay={0.4}
              animate={isReady}
              as="p"
              className={`${UPPERCASE_PARAGRAPH} max-w-47.5`}
            >
              {headingNumber}
            </Stagger_word>
          </div>
          <Stagger_word
            delay={0.6}
            controlled
            animate={isReady}
            as="p"
            className="font-secondary font-body-secondary text-b-m leading-relaxed"
          >
            {description}
          </Stagger_word>
          <Stagger_word
            controlled
            delay={0.4}
            animate={isReady}
            as="p"
            className={`${UPPERCASE_PARAGRAPH} text-end md:max-w-47.5 sm:max-w-30 max-w-35 sm:hidden block sm:self-center self-end justify-end pt-10`}
          >
            {subtitle}
          </Stagger_word>
        </div>
        <div className="sm:block hidden overflow-hidden h-[1.5em]">
          <Reveal_up controlled animate={isReady} delay={0.6}>
            <Button link={buttonLink} target="_self">
              {buttonText}
            </Button>
          </Reveal_up>
        </div>
      </div>
    </div>
  );
}
