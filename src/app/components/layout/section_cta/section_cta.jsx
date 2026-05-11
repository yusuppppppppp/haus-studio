"use client"
import Image from "next/image";
import { Button } from "../../ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Section_cta() {
  const [ cta, setCta ] = useState(null)

    useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("sectioncta")
        .select("*")
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setCta(data);
    }

    fetchData();
  }, []);

  if (!cta) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h2 className="font-body-secondary font-primary text-h5">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section
        id="section_CTA"
        className="bg-background pt-50 pb-50 overflow-hidden"
      >
        <div className="w-full h-full mx-auto">
          <div className="flex flex-col justify-stretch items-start">
            <div className="flex flex-col justify-stretch items-stretch max-w-400 mx-section self-center 2xl:gap-30 xl:gap-30 lg:gap-30 md:gap-45 sm:gap-10 gap-25 w-full pb-35">
              <div className="flex flex-col justify-center items-center gap-8">
                <p className="font-body-secondary font-secondary text-b-m leading-relaxed 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                  {cta.cta_label}
                </p>
                <Button link={cta.cta_button_link}>
                  {cta.cta_button_text}
                </Button>
              </div>
              <div className="flex flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-center w-full px-section">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start text-center">
                  {cta.cta_paragraph1}
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 text-end 2xl:block xl:block lg:block md:block sm:block hidden">
                  {cta.cta_paragraph2}
                </p>
              </div>
              <h2 className="font-primary font-display text-fd-l leading-tightest text-center uppercase 2xl:w-300 xl:w-300 lg:w-300 md:w-100 sm:w-100 w-100 self-center">
                {cta.cta_heading}
              </h2>
            </div>
            <div className="relative w-full 2xl:h-[150vh] xl:h-[130vh] lg:h-[130vh] md:h-[70vh] sm:h-[150vh] h-[110vh]">
              <Image
                src={cta.cta_image}
                alt="cta-bg"
                fill
                className="object-cover 2xl:object-center xl:object-center lg:object-center md:object-center sm:object-center object-[15%_50%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
