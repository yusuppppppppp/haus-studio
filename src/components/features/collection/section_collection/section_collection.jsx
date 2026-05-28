"use client";
import Collection_item from "../collection_item/collection_item";
import Stagger_heading from "@/animations/stagger_heading/stagger_heading";
import Stagger_word from "@/animations/stagger_word/stagger_word";
import {
  collectionParagraphs,
  collectionItems,
} from "@/data/sectionCollection";

export default function Section_collection({ collection }) {
  return (
    <>
      <section
        id="section_collection"
        className="bg-background px-section pt-50 pb-40 overflow-hidden"
      >
        <div className="w-full h-full mx-auto max-w-400">
          <div className="max-w-205 flex flex-col lg:gap-45 sm:gap-25 gap-15  mx-auto pb-50 ">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed sm:max-w-100 max-w-65 uppercase">
                  {collection.collection_subtitle1}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed sm:max-w-150 max-w-65 uppercase sm:pl-25 pl-0">
                  {collection.collection_subtitle2}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-25 gap-5 justify-end sm:pl-0 pl-20">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed uppercase">
                {collection.collection_title_paragraph}
              </p>
              <div className="flex flex-col justify-start max-w-77 gap-6.5">
                {collectionParagraphs(collection).map(
                  (paragraph, index) =>
                    paragraph && (
                      <Stagger_word
                        as="p"
                        delay={paragraph.delay}
                        key={index}
                        className="font-secondary font-body-secondary text-b-m leading-relaxed"
                      >
                        {paragraph.text}
                      </Stagger_word>
                    ),
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
            {collection.collection_label}
          </Stagger_heading>
          <div className="relative lg:flex grid lg:flex-row sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[121%] md:w-full sm:w-full w-full lg:max-w-450 md:max-w-full sm:max-w-full max-w-full lg:h-40 md:h-auto sm:h-auto h-auto lg:-skew-y-15 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 ml-0 lg:pt-70 pt-0 sm:gap-y-8 gap-y-5">
            {collectionItems(collection).map((items, index) => (
              <div
                key={index}
                className={`lg:absolute block items-start ${items.margin} ml-0 lg:skew-y-30 skew-y-0`}
              >
                <Collection_item
                  images_path={items.image}
                  collection_name={items.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
