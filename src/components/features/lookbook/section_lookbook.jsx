"use client";

import Lookbook_item from "./lookbook_item";
import Stagger_heading from "@/animations/stagger_heading/stagger_heading";
import Stagger_word from "@/animations/stagger_word/stagger_word";

export default function Section_lookbook({ lookbook }) {
  const items = lookbook?.items || [];
  const btn = lookbook?.button_text;

  const styles = {
    row: "grid sm:grid-cols-4 grid-cols-1",

    cols2: "w-full h-full grid grid-cols-2",

    card:
      "p-2 flex flex-col gap-13 justify-between items-start border border-n-300",

    cardNormal:
      "lg:col-span-1 col-span-2",

    cardWide:
      "col-span-2",

    cardDesktop:
      "col-span-1 lg:flex hidden",

    cardTablet:
      "col-span-1 md:flex hidden",

    spacerTablet:
      "bg-background col-span-1 h-130 w-100 md:block hidden",

    spacerDesktop:
      "bg-background col-span-1 h-130 w-100 lg:block hidden",

    responsiveSpan:
      "md:col-span-1 col-span-2",

    wrapperSpan2:
      "col-span-2 flex flex-col justify-stretch items-stretch",
  }

  return (
    <>
      <section
        id="section_lookbook"
        className="bg-background overflow-hidden px-section pt-10"
      >
        <div className="w-full h-full mx-auto max-w-400 flex flex-col justify-stretch items-start">
          <div className="flex flex-col justify-stretch items-start self-center">
            <div className="flex flex-col justify-stretch items-start md:gap-30 sm:gap-20 gap-15 self-center">
              <Stagger_heading
                as="h2"
                className="font-primary font-heading text-h2 leading-tightest uppercase lg:max-w-130 md:max-w-150 sm:max-w-90 max-w-50 self-center justify-center"
              >
                {lookbook?.heading}
              </Stagger_heading>
              <div className="flex flex-col justify-stretch item-center gap-10 max-w-90 self-center">
                <Stagger_word
                  delay={0.2}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center uppercase">
                  {lookbook?.subheading}
                </Stagger_word>
                <Stagger_word delay={0.2} as="p" className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center">
                  {lookbook?.paragraph}
                </Stagger_word>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-stretch items-start 2xl:pt-60 lg:pt-45 md:pt-40 sm:pt-35 pt-30 overflow-hidden">
            <div className="flex flex-col justify-stretch items-stretch w-full">

              {/* Row 1 */}
              <div className={`${styles.row}`}>
                <Lookbook_item item={items[0]} variant="span-1" button_text={btn} className={`${styles.cardNormal} ${styles.card}`} />
                <Lookbook_item item={items[1]} variant="span-1" button_text={btn} className={`${styles.cardNormal} ${styles.card}`} />
                <div className={`${styles.spacerDesktop}`}></div>
                <Lookbook_item item={items[2]} variant="span-1" button_text={btn} className={`${styles.cardDesktop} ${styles.card}`} />
              </div>

              {/* Row 2 */}
              <div className={`${styles.row}`}>
                <Lookbook_item item={items[3]} variant="span-2" button_text={btn} className={`${styles.cardWide} ${styles.card}`} />
                <div className={`${styles.wrapperSpan2}`}>
                  <div className={`${styles.cols2}`}>
                    <Lookbook_item item={items[4]} variant="span-1" button_text={btn} className={`${styles.responsiveSpan} ${styles.card}`} />
                    <div className={`${styles.spacerTablet}`}></div>
                    <div className={`${styles.spacerTablet}`}></div>
                    <Lookbook_item item={items[5]} variant="span-1" button_text={btn} className={`${styles.cardTablet} ${styles.card}`} />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className={`${styles.row}`}>
                <Lookbook_item item={items[6]} variant="span-1" button_text={btn} className={`${styles.cardDesktop} ${styles.card}`} />
                <div className={`${styles.spacerDesktop}`}></div>
                <Lookbook_item item={items[7]} variant="span-1" button_text={btn} className={`${styles.cardNormal} ${styles.card}`} />
                <Lookbook_item item={items[8]} variant="span-1" button_text={btn} className={`${styles.cardNormal} ${styles.card}`} />
              </div>

              {/* Row 4 */}
              <div className={`${styles.row}`}>
                <div className={`${styles.wrapperSpan2}`}>
                  <div className={`${styles.cols2}`}>
                    <div className={`${styles.spacerTablet}`}></div>
                    <Lookbook_item item={items[9]} variant="span-1" button_text={btn} className={`${styles.responsiveSpan} ${styles.card}`} />
                    <Lookbook_item item={items[10]} variant="span-1" button_text={btn} className={`${styles.cardTablet} ${styles.card}`} />
                    <div className={`${styles.spacerTablet}`}></div>
                  </div>
                </div>
                <Lookbook_item item={items[11]} variant="span-2" button_text={btn} className={`${styles.cardWide} ${styles.card}`} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}