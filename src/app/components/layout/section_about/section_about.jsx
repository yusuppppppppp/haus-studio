"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Section_about() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("sectionabout")
        .select("*")
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setAbout(data);
    }

    fetchData();
  }, []);

  if (!about) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h2 className="font-body-secondary font-primary text-h5">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section
        id="section_about"
        className="bg-foreground overflow-hidden px-section py-25 2xl:pb-50 xl:pb-30 lg:pb-30 md:pb-30 sm:pb-25 pb-30"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-start 2xl:gap-50 xl:gap-50 lg:gap-50 md:gap-55 sm:gap-20 gap-30">
            <div className="flex flex-row justify-stretch items-start self-end 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-10 sm:gap-10 gap-7">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 max-w-114">
                {about.about_paragraph1}
              </p>
              <div className="flex flex-col justify-stretch items-start 2xl:max-w-114 xl:max-w-114 lg:max-w-114 md:max-w-100 sm:max-w-80 max-w-40 self-end gap-3">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100">
                  {about.about_paragraph2}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-0">
                  {about.about_paragraph3}
                </p>
              </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-15 sm:gap-15 gap-15 ">
              <div className="flex flex-col justify-stretch items-start gap-5">
                <p className="2xl:max-w-45 xl:max-w-45 lg:max-w-45 md:max-w-45 sm:max-w-45 max-w-25 font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-12">
                  {about.about_decoration_text1}
                </p>
                <h2 className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase break-all 2xl:max-w-full xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full max-w-40">
                  {about.about_heading1}
                </h2>
                <div className="flex flex-row justify-start item-start 2xl:self-end xl:self-end lg:self-end md:self-end sm:self-start self-start 2xl:gap-70 xl:gap-70 lg:gap-70 md:gap-35 sm:gap-22 gap-10">
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-12 xl:pl-12 lg:pl-12 md:pl-0 sm:pl-0 pl-0">
                    {about.about_decoration_text2}
                  </p>
                  <h2 className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase">
                    {about.about_heading2}
                  </h2>
                </div>
              </div>
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row justify-end 2xl:items-start xl:items-start lg:items-start md:items-end sm:items-end items-end 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-5 sm:gap-5 gap-5">
                <p className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase text-right 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14">
                  {about.about_label1}
                </p>
                <p className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase text-right 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14">
                  {about.about_label2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
