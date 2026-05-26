"use client";
import Stragger_heading from "@/animations/stagger_heading/stagger_heading";
import Collection_item from "../collection_item/collection_item";

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
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {collection.collection_paragraph1}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {collection.collection_paragraph2}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {collection.collection_paragraph3}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {collection.collection_paragraph4}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {collection.collection_paragraph5}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* collection main content */}

        <div
          id="collection_main"
          className="w-full h-full max-w-primary mx-auto flex flex-col justify-stretch lg:gap-50 sm:gap-30 gap-20 lg:pb-80 pb-0 pt-10"
        >
          <Stragger_heading
            delay={0.2}
            as="h2"
            className="font-primary font-heading text-h6 uppercase leading-tightest self-start"
          >
            {collection.collection_label}
          </Stragger_heading>
          <div className="relative lg:flex grid lg:flex-row sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[121%] md:w-full sm:w-full w-full lg:max-w-450 md:max-w-full sm:max-w-full max-w-full lg:h-40 md:h-auto sm:h-auto h-auto lg:-skew-y-15 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 ml-0 lg:pt-70 pt-0 sm:gap-y-8 gap-y-5">
            <div className="lg:absolute block items-start lg:ml-[100%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image10}
                collection_name={collection.collection_name10}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[85%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image9}
                collection_name={collection.collection_name9}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[70%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image8}
                collection_name={collection.collection_name8}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[55%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image7}
                collection_name={collection.collection_name7}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[40%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image6}
                collection_name={collection.collection_name6}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[25%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image5}
                collection_name={collection.collection_name5}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[10%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image4}
                collection_name={collection.collection_name4}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[-5%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image3}
                collection_name={collection.collection_name3}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[-20%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image2}
                collection_name={collection.collection_name2}
              />
            </div>
            <div className="lg:absolute block items-start lg:ml-[-35%] ml-0 lg:skew-y-30 skew-y-0">
              <Collection_item
                images_path={collection.collection_image1}
                collection_name={collection.collection_name1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
