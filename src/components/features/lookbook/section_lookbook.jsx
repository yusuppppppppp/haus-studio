"use client";

import Lookbook_item from "./lookbook_item";
import Stagger_heading from "@/animations/stagger_heading/stagger_heading";
import Stagger_word from "@/animations/stagger_word/stagger_word";

const STYLES = {
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

export default function Section_lookbook({ lookbook }) {
  const {
    items = [],
    button_text: buttonText,
    heading,
    subheading,
    paragraph,
  } = lookbook || {};

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
                {heading}
              </Stagger_heading>
              <div className="flex flex-col justify-stretch item-center gap-10 max-w-90 self-center">
                <Stagger_word
                  delay={0.2}
                  as="p"
                  className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center uppercase">
                  {subheading}
                </Stagger_word>
                <Stagger_word delay={0.2} as="p" className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center">
                  {paragraph}
                </Stagger_word>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-stretch items-start 2xl:pt-60 lg:pt-45 md:pt-40 sm:pt-35 pt-30 overflow-hidden">
            <div className="flex flex-col justify-stretch items-stretch w-full">

              {/* Row 1 */}
              <div className={STYLES.row}>
                <Lookbook_item item={items[0]} variant="span-1" button_text={buttonText} className={`${STYLES.cardNormal} ${ STYLES.card}`} />
                <Lookbook_item item={items[1]} variant="span-1" button_text={buttonText} className={`${STYLES.cardNormal} ${ STYLES.card}`} />
                <div className={ STYLES.spacerDesktop}></div>
                <Lookbook_item item={items[2]} variant="span-1" button_text={buttonText} className={`${STYLES.cardDesktop} ${STYLES.card}`} />
              </div>

              {/* Row 2 */}
              <div className={ STYLES.row}>
                <Lookbook_item item={items[3]} variant="span-2" button_text={buttonText} className={`${STYLES.cardWide} ${ STYLES.card}`} />
                <div className={ STYLES.wrapperSpan2}>
                  <div className={ STYLES.cols2}>
                    <Lookbook_item item={items[4]} variant="span-1" button_text={buttonText} className={`${STYLES.responsiveSpan} ${ STYLES.card}`} />
                    <div className={ STYLES.spacerTablet}></div>
                    <div className={ STYLES.spacerTablet}></div>
                    <Lookbook_item item={items[5]} variant="span-1" button_text={buttonText} className={`${STYLES.cardTablet} ${ STYLES.card}`} />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className={ STYLES.row}>
                <Lookbook_item item={items[6]} variant="span-1" button_text={buttonText} className={`${STYLES.cardDesktop} ${STYLES.card}`} />
                <div className={ STYLES.spacerDesktop}></div>
                <Lookbook_item item={items[7]} variant="span-1" button_text={buttonText} className={`${STYLES.cardNormal} ${ STYLES.card}`} />
                <Lookbook_item item={items[8]} variant="span-1" button_text={buttonText} className={`${STYLES.cardNormal} ${ STYLES.card}`} />
              </div>

              {/* Row 4 */}
              <div className={ STYLES.row}>
                <div className={ STYLES.wrapperSpan2}>
                  <div className={ STYLES.cols2}>
                    <div className={ STYLES.spacerTablet}></div>
                    <Lookbook_item item={items[9]} variant="span-1" button_text={buttonText} className={`${STYLES.responsiveSpan} ${ STYLES.card}`} />
                    <Lookbook_item item={items[10]} variant="span-1" button_text={buttonText} className={`${ STYLES.cardTablet} ${STYLES.card}`} />
                    <div className={ STYLES.spacerTablet}></div>
                  </div>
                </div>
                <Lookbook_item item={items[11]} variant="span-2" button_text={buttonText} className={`${ STYLES.cardWide} ${STYLES.card}`} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}