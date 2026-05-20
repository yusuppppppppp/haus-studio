"use client";
import Stragger_heading from "../../ui/stragger_heading/stragger_heading";
import { Collection_item } from "../../ui/collection_item"

export default function Section_collection({ collection }) {
  return (
    <>
      <section
        id="section_collection"
        className="bg-background px-section pt-50 pb-40 overflow-hidden"
      >
        <div className="w-full h-full mx-auto max-w-400">
          <div className="max-w-205 flex flex-col 2xl:gap-45 xl:gap-45 lg:gap-45 md:gap-25 sm:gap-25 gap-15  mx-auto pb-50 ">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-100 xl:max-w-100 lg:max-w-100 md:max-w-100 sm:max-w-100 max-w-65 uppercase">
                  {collection.collection_subtitle1}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-150 xl:max-w-150 lg:max-w-150 md:max-w-150 sm:max-w-150 max-w-65 uppercase 2xl:pl-25 xl:pl-25 lg:pl-25 md:pl-25 sm:pl-25 pl-0">
                  {collection.collection_subtitle2}
                </p>
              </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:gap-25 xl:gap-25 lg:gap-25 md:gap-25 sm:gap-25 gap-5 justify-end 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 pl-20">
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
          className="w-full h-full max-w-primary mx-auto flex flex-col justify-stretch 2xl:gap-50 xl:gap-50 lg:gap-50 md:gap-30 sm:gap-30 gap-20 2xl:pb-80 xl:pb-80 lg:pb-80 md:pb-0 sm:pb-0 pb-0 pt-10"
        >
          <Stragger_heading
            delay={0.2}
            as="h2"
            className="font-primary font-heading text-h6 uppercase leading-tightest self-start"
          >
            {collection.collection_label}
          </Stragger_heading>
          <div className="relative 2xl:flex xl:flex lg:flex md:grid sm:grid grid 2xl:flex-row xl:flex-row lg:flex-row md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[121%] md:w-full sm:w-full w-full 2xl:max-w-450 xl:max-w-450 lg:max-w-450 md:max-w-full sm:max-w-full max-w-full 2xl:h-40 xl:h-40 lg:h-40 md:h-auto sm:h-auto h-auto 2xl:-skew-y-15 xl:-skew-y-15 lg:-skew-y-15 md:skew-y-0 sm:skew-y-0 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 md:ml-0 sm:ml-0 ml-0 2xl:pt-70 xl:pt-70 lg:pt-70 md:pt-0 sm:pt-0 pt-0 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-8 gap-y-5">
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[100%] xl:ml-[100%] lg:ml-[100%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image10}
                collection_name={collection.collection_name10}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[85%] xl:ml-[85%] lg:ml-[85%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image9}
                collection_name={collection.collection_name9}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[70%] xl:ml-[70%] lg:ml-[70%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image8}
                collection_name={collection.collection_name8}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[55%] xl:ml-[55%] lg:ml-[55%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image7}
                collection_name={collection.collection_name7}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[40%] xl:ml-[40%] lg:ml-[40%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image6}
                collection_name={collection.collection_name6}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[25%] xl:ml-[25%] lg:ml-[25%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image5}
                collection_name={collection.collection_name5}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[10%] xl:ml-[10%] lg:ml-[10%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image4}
                collection_name={collection.collection_name4}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-5%] xl:ml-[-5%] lg:ml-[-5%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image3}
                collection_name={collection.collection_name3}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-20%] xl:ml-[-20%] lg:ml-[-20%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item
                images_path={collection.collection_image2}
                collection_name={collection.collection_name2}
              />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-35%] xl:ml-[-35%] lg:ml-[-35%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
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
