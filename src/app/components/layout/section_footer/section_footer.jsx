"use client";
import Image from "next/image";
import { Footer_nav } from "../../ui/footer_nav";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Section_footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("sectionfooter")
        .select("*")
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setFooter(data);
    }

    fetchData();
  }, []);

  if (!footer) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h2 className="font-body-secondary font-primary text-h5">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section id="section_footer" className="px-section overflow-hidden pb-7">
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-stretch gap-10">
            <Image
              src={footer.footer_icon}
              alt="logo"
              width={55}
              height={45}
              className="self-center"
            />
            <div className="flex flex-row justify-between w-full 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-5 sm:gap-5 gap-5">
              <div className="flex flex-col justify-stretch items-end gap-10">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {footer.footer_paragraph1}
                </p>
                <div className="flex flex-col justify-between items-end w-full 2xl:h-150 xl:h-150 lg:h-150 md:h-150 sm:h-150 h-180">
                  <div className="flex flex-fow justify-between items-stretch w-full 2xl:pt-25 xl:pt-25 lg:pt-25 md:pt-70 sm:pt-70 pt-20">
                    <p className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize 2xl:block xl:block lg:block md:block sm:block hidden">
                      {footer.footer_label1}
                    </p>
                    <p className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize 2xl:block xl:block lg:block md:block sm:block hidden">
                      {footer.footer_label2}
                    </p>
                  </div>
                  <div className="flex flex-row justify-end items-start gap-10 self-end">
                    <p className="font-secondary font-body-secondary text-b-s leading-tight">
                      {footer.footer_nav_icon}
                    </p>
                    <div className="flex flex-col justify-stretch items-end gap-2.5">
                      <Footer_nav footer_nav_link={footer.footer_nav_link1}>
                        {footer.footer_nav_text1}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link2}>
                        {footer.footer_nav_text2}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link3}>
                        {footer.footer_nav_text3}
                      </Footer_nav>
                      <Footer_nav footer_nav_link={footer.footer_nav_link4}>
                        {footer.footer_nav_text4}
                      </Footer_nav>
                    </div>
                  </div>
                  <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col-reverse w-full gap-5">
                    <div className="relative 2xl:h-150 xl:h-150 lg:h-150 md:h-150 sm:h-150 h-110 max-w-200 w-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block">
                      <Image
                        src={footer.footer_right_image1}
                        alt="footer-img-right"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-end w-full">
                      <Image
                        src={footer.footer_left_image}
                        alt="footer-img-left"
                        width={210}
                        height={250}
                        className="2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden"
                      />
                      <p className="font-secondary font-body-secondary text-b-s leading-tight text-end w-full">
                        {footer.footer_copyright}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col justify-stretch items-start gap-10">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  {footer.footer_paragraph2}
                </p>
                <div className="relative h-150 max-w-200 w-full">
                  <Image
                    src={footer.footer_right_image1}
                    alt="footer-img-right"
                    fill
                    className="w-full h-full object-cover"
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
