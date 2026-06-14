"use client";
import Collection_item from "./collection_item";
import Stagger_heading from "@/animations/stagger_heading/stagger_heading";
import Stagger_word from "@/animations/stagger_word/stagger_word";

const MARGINS = [
  "lg:ml-[100%]",
  "lg:ml-[85%]",
  "lg:ml-[70%]",
  "lg:ml-[55%]",
  "lg:ml-[40%]",
  "lg:ml-[25%]",
  "lg:ml-[10%]",
  "lg:ml-[-5%]",
  "lg:ml-[-20%]",
  "lg:ml-[-35%]",
];


const PARAGRAPH_STYLES = "font-secondary font-body-secondary text-b-m leading-relaxed"

export default function Section_collection({ collection }) {
  const {
    subtitles = [],
    paragraphs = [],
    items: collectionItems = [],
    title_paragraph,
    label,
  } = collection || {};

  const items = [...collectionItems].reverse();

  return (
    <>
      <section
        id="section_collection"
        className="px-section pt-50 pb-40 overflow-hidden"
      >
        <div className="w-full h-full mx-auto max-w-400">
          <div className="max-w-205 flex flex-col lg:gap-45 sm:gap-25 gap-15 mx-auto pb-50 mix-blend-screen">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <p className={`${PARAGRAPH_STYLES} sm:max-w-100 max-w-65 uppercase`}>
                  {subtitles[0]}
                </p>
                <p className={`${PARAGRAPH_STYLES} sm:max-w-150 max-w-65 uppercase sm:pl-25 pl-0`}>
                  {subtitles[1]}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-25 gap-5 justify-end sm:pl-0 pl-20">
              <p className={`${PARAGRAPH_STYLES} uppercase`}>
                {title_paragraph}
              </p>
              <div className="flex flex-col justify-start max-w-77 gap-6.5">
                {paragraphs.map((paragraph, index) =>
                  paragraph ? (
                    <Stagger_word
                      as="p"
                      delay={0.2 + index * 0.1}
                      key={index}
                      className={PARAGRAPH_STYLES}
                    >
                      {paragraph}
                    </Stagger_word>
                  ) : null,
                )}
              </div>
            </div>
          </div>
        </div>

        {/* collection main content */}

        <div
          id="collection_main"
          className="w-full h-full max-w-primary mx-auto flex flex-col justify-stretch lg:gap-50 sm:gap-30 gap-20 lg:pb-80 pb-0 pt-10"
        >
          <Stagger_heading
            delay={0.2}
            as="h2"
            className="font-primary font-heading text-h6 uppercase leading-tightest self-start"
          >
            {label}
          </Stagger_heading>
          <div className="relative lg:flex grid lg:flex-row sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[121%] md:w-full sm:w-full w-full lg:max-w-450 md:max-w-full sm:max-w-full max-w-full lg:h-40 md:h-auto sm:h-auto h-auto lg:-skew-y-15 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 ml-0 lg:pt-70 pt-0 sm:gap-y-8 gap-y-5">
            {items.map((item, index) =>
              item?.image_url && item?.name ? (
                <div
                  key={item.id || index}
                  className={`lg:absolute block items-start ${MARGINS[index] || ""} ml-0 lg:skew-y-30 skew-y-0`}
                >
                  <Collection_item
                    images_path={item.image_url}
                    collection_name={item.name}
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
    </>
  );
}
