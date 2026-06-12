import Stagger_word from "@/animations/stagger_word/stagger_word";

export default function Hero_about({ aboutTitle, aboutDescription }) {
  return (
    <div className="sm:flex hidden flex-col justify-end items-start 2xl:max-w-130 lg:max-w-95 max-w-45 gap-5 2xl:pr-35 pr-0">
      <Stagger_word
        delay={3}
        as="p"
        className="font-primary font-body-secondary text-b-l leading-tight uppercase"
      >
        {aboutTitle}
      </Stagger_word>
      <Stagger_word
        delay={3.2}
        as="p"
        className="font-secondary font-body-secondary text-b-m leading-relaxed"
      >
        {aboutDescription}
      </Stagger_word>
    </div>
  );
}
