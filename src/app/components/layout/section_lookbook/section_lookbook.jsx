"use client";
import Lookbook_item from "../../ui/lookbook_item/lookbook_item";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Section_lookbook() {
  const [lookbook, setLookbook] = useState(null);

  useEffect(() => {
  async function fetchData() {
    const { data, error } = await supabase
      .from("sectionlookbook")
      .select("*")
      .single();

    if (error) {
      console.log(error);
      return;
    }

    setLookbook(data);
  }

  fetchData();
}, []);

  if (!lookbook) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h2 className="font-body-secondary font-primary text-h5">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section
        id="section_lookbook"
        className="bg-background overflow-hidden px-section pt-10"
      >
        <div className="w-full h-full mx-auto max-w-400 flex flex-col justify-stretch items-start">
          <div className="flex flex-col justify-stretch items-start self-center">
            <div className="flex flex-col justify-stretch items-start 2xl:gap-30 xl:gap-30 lg:gap-30 md:gap-30 sm:gap-20 gap-15 self-center">
              <h2 className="font-primary font-heading text-h2 leading-tightest uppercase 2xl:max-w-130 xl:max-w-130 lg:max-w-130 md:max-w-150 sm:max-w-90 max-w-50 self-center text-center">
                {lookbook.lookbook_heading}
              </h2>
              <div className="flex flex-col justify-stretch item-center gap-10 max-w-90 text-center self-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed uppercase">
                  {lookbook.lookbook_subheading}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {lookbook.lookbook_paragraph}
                </p>
              </div>
            </div>
          </div>

          {/* section lookbook main content */}

          <div className="w-full flex flex-col justify-stretch items-start 2xl:pt-60 xl:pt-45 lg:pt-45 md:pt-40 sm:pt-35 pt-30 overflow-hidden">
            <div className="flex flex-col justify-stretch items-stretch w-full">
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image1}
                    lookbook_name={lookbook.lookbook_name1}
                    lookbook_link={lookbook.lookbook_link1}
                  />
                </div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image2}
                    lookbook_name={lookbook.lookbook_name2}
                    lookbook_link={lookbook.lookbook_link2}
                  />
                </div>
                <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></div>
                <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image3}
                    lookbook_name={lookbook.lookbook_name3}
                    lookbook_link={lookbook.lookbook_link3}
                  />
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image={lookbook.lookbook_image4}
                    lookbook_name={lookbook.lookbook_name4}
                    lookbook_link={lookbook.lookbook_link4}
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image5}
                        lookbook_name={lookbook.lookbook_name5}
                        lookbook_link={lookbook.lookbook_link5}
                      />
                    </div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image6}
                        lookbook_name={lookbook.lookbook_name6}
                        lookbook_link={lookbook.lookbook_link6}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image7}
                    lookbook_name={lookbook.lookbook_name7}
                    lookbook_link={lookbook.lookbook_link7}
                  />
                </div>
                <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image8}
                    lookbook_name={lookbook.lookbook_name8}
                    lookbook_link={lookbook.lookbook_link8}
                  />
                </div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image={lookbook.lookbook_image9}
                    lookbook_name={lookbook.lookbook_name9}
                    lookbook_link={lookbook.lookbook_link9}
                  />
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image10}
                        lookbook_name={lookbook.lookbook_name10}
                        lookbook_link={lookbook.lookbook_link10}
                      />
                    </div>
                    <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image={lookbook.lookbook_image11}
                        lookbook_name={lookbook.lookbook_name11}
                        lookbook_link={lookbook.lookbook_link11}
                      />
                    </div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                  </div>
                </div>
                <div className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image={lookbook.lookbook_image12}
                    lookbook_name={lookbook.lookbook_name12}
                    lookbook_link={lookbook.lookbook_link12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
