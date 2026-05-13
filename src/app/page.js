"use client";
import "./globals.css";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { Collection_item } from "./components/ui/collection_item";
import Navbar from "./components/layout/navbar/navbar";
import { motion } from "framer-motion";
import Section_lookbook_to_about from "./components/layout/section_lookbook_to_about/section_lookbook_to_about";
import Section_lookbook from "./components/layout/section_lookbook/section_lookbook";
import Section_about from "./components/layout/section_about/section_about";
import Section_stockists from "./components/layout/section_stockists/section_stockists";
import Section_cta from "./components/layout/section_cta/section_cta";
import Section_footer from "./components/layout/section_footer/section_footer";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Section_preload from "./components/layout/section_preload/section_preload";
import Stragger_word from "./components/ui/stragger_word/stragger_word";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({
    preload: null,
    navbar: null,
    hero: null,
    collection: null,
    about: null,
    lookbook: null,
    lookbook_transition: null,
    stockists: null,
    cta: null,
    footer: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          preloadRes,
          navbarRes,
          heroRes,
          collectionRes,
          aboutRes,
          lookbookRes,
          lookbook_transitionRes,
          stockistsRes,
          ctaRes,
          footerRes,
        ] = await Promise.all([
          supabase.from("sectionpreload").select("*").single(),
          supabase.from("sectionnav").select("*").single(),
          supabase.from("sectionhero").select("*").single(),
          supabase.from("sectioncollection").select("*").single(),
          supabase.from("sectionabout").select("*").single(),
          supabase.from("sectionlookbook").select("*").single(),
          supabase.from("lookbooktoabout").select("*").single(),
          supabase.from("sectionstockists").select("*").single(),
          supabase.from("sectioncta").select("*").single(),
          supabase.from("sectionfooter").select("*").single(),
        ]);

        if (preloadRes.error) console.log(preloadRes.error);
        if (navbarRes.error) console.log(navbarRes.error);
        if (heroRes.error) console.log(heroRes.error);
        if (collectionRes.error) console.log(collectionRes.error);
        if (aboutRes.error) console.log(aboutRes.error);
        if (lookbookRes.error) console.log(lookbookRes.error);
        if (lookbook_transitionRes.error)
          console.log(lookbook_transitionRes.error);
        if (stockistsRes.error) console.log(lookbookRes.error);
        if (ctaRes.error) console.log(ctaRes.error);
        if (footerRes.error) console.log(footerRes.error);

        setData({
          preload: preloadRes.data,
          navbar: navbarRes.data,
          hero: heroRes.data,
          collection: collectionRes.data,
          about: aboutRes.data,
          lookbook: lookbookRes.data,
          lookbook_transition: lookbook_transitionRes.data,
          stockists: stockistsRes.data,
          cta: ctaRes.data,
          footer: footerRes.data,
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      } catch (error) {
        console.log(error);

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }
    fetchData();
  }, []);

  {
    return (
      <>
        {/* section preload */}

        <Section_preload isLoading={isLoading} preload={data.preload} />

        {/* section preload end */}

        {!isLoading && (
          <main>
            {/* section navbar */}

            <Navbar navbar={data.navbar} />

            {/* section navbar end */}

            {/* section hero */}

            <section
              id="section_hero"
              className="bg-background w-full overflow-hidden"
            >
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between w-full uppercase 2xl:gap-50 xl:gap-50 lg:gap-50 md:gap-0 sm:gap-0 gap-0 2xl:pt-2.5 xl:pt-2.5 lg:pt-2.5 md:pt-4.5 pt-4.5 ">
                    <div className="flex flex-row items-start overflow-hidden 2xl:w-auto xl:w-full lg:w-full md:w-auto sm:w-auto w-full 2xl:h-65 xl:h-65 lg:h-65 2xl:pr-0 xl:pr-0 lg:pr-10 md:pr-0 sm:pr-0 pr-25">
                      <motion.div
                        initial={{ y: "130%", rotate: 20, opacity: 0 }}
                        whileInView={{ y: "0%", rotate: 0, opacity: 1 }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 2.7,
                          duration: 1,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className="flex flex-row items-start"
                      >
                        <h1 className=" font-primary font-display text-fd-l leading-tightest">
                          {data.hero.hero_title_left}
                        </h1>
                        <div className="relative 2xl:w-20 xl:w-20 lg:w-20 md:w-15 sm:w-10 w-10 2xl:h-20 xl:h-20 lg:h-20 md:h-15 sm:h-10 h-10">
                          <Image
                            className="object-contain 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-2 sm:pt-2 pt-2"
                            src={data.hero.hero_title_icon}
                            alt="®"
                            fill
                            sizes="(max-width: 640px) 40px,(max-width: 768px) 60px,80px"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex flex-row items-start overflow-hidden 2xl:h-65 xl:h-65 lg:h-65">
                      <motion.h1
                        initial={{ y: "130%", rotate: 20, opacity: 0 }}
                        whileInView={{ y: "0%", rotate: 0, opacity: 1 }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 2.7,
                          duration: 1,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className=" font-primary font-display text-fd-l leading-tightest"
                      >
                        {data.hero.hero_title_right}
                      </motion.h1>
                    </div>
                  </div>
                  <div className="max-w-400 w-full mx-auto px-section 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-40 sm:pt-10 pt-10">
                    <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col-reverse gap-15 justify-between items-center relative isolate">
                      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start 2xl:pl-[33%] xl:pl-[32%] lg:pl-[30%] md:pl-[30%] sm:pl-[35%] pl-[0%] w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-5">
                        <Stragger_word
                          delay={3}
                          as="p"
                          className="font-primary font-body-secondary text-b-l leading-tight uppercase text-end 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-35 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-end justify-end"
                        >
                          {data.hero.hero_subtitle}
                        </Stragger_word>
                        <div className="relative 2xl:w-107 xl:w-130 lg:w-130 md:w-100 sm:w-60 w-65 2xl:h-125 xl:h-125 lg:h-125 md:h-125 sm:h-80 h-120 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start overflow-hidden">
                          <motion.div
                          initial={{ opacity: 0.10, rotate: -25, scale: 2 }}
                          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 2.5,
                            duration: 1.4,
                            ease: [0.65, 0, 0.35, 1],
                          }} 
                          className="will-change-transform 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute block 2xl:z-0 xl:z-0 lg:z-0 md:z-0 sm:z-0 z-0 w-full h-full"
                          >
                          <Image
                            className="object-cover object-center"
                            src={data.hero.hero_image}
                            alt="hero_image"
                            fill
                            priority
                            sizes="(max-width: 640px) 260px, (max-width: 768px) 240px, (max-width: 1024px) 400px, 520px"
                          />
                          </motion.div>
                        </div>
                        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col justify-end items-start 2xl:max-w-120 xl:max-w-105 lg:max-w-110 md:max-w-55 sm:max-w-45 max-w-45 gap-5 2xl:pl-23 xl:pl-10 lg:pl-15 md:pl-10 sm:pl-5 pl-0">
                          <Stragger_word
                            delay={3}
                            as="p"
                            className="font-primary font-body-secondary text-b-l leading-tight uppercase"
                          >
                            {data.hero.about_title}
                          </Stragger_word>
                          <Stragger_word
                            delay={3.2}
                            as="p"
                            className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed"
                          >
                            {data.hero.about_description}
                          </Stragger_word>
                        </div>
                      </div>
                      <div className="w-full flex flex-row justify-between z-1 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute ">
                        <div className="flex flex-col justify-start items-start 2xl:gap-40 xl:gap-35 lg:gap-35 md:gap-28 sm:gap-13 gap-13">
                          <div className="2xl:block xl:block lg:block md:block sm:block hidden">
                            <Stragger_word
                              delay={3}
                              as="p"
                              className="font-primary font-body-secondary text-b-l leading-tight uppercase 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-30"
                            >
                              {data.hero.hero_subtitle}
                            </Stragger_word>
                          </div>
                          <div className="flex flex-col justify-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-3 gap-3 2xl:max-w-165 xl:max-w-130 lg:max-w-115 md:max-w-75 sm:max-w-73 max-w-full">
                            <div className="flex flex-row justify-between 2xl:w-120 xl:w-90 lg:w-80 md:w-50 sm:w-55 w-full">
                              <Stragger_word
                                delay={3}
                                as="p"
                                className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 "
                              >
                                {data.hero.heading_hero_description}
                              </Stragger_word>
                              <Stragger_word
                                delay={3}
                                as="p"
                                className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 "
                              >
                                {data.hero.heading_hero_number}
                              </Stragger_word>
                            </div>
                            <Stragger_word
                              delay={3.2}
                              as="p"
                              className="mix-blend-difference font-secondary font-body-secondary text-b-m leading-relaxed"
                            >
                              {data.hero.hero_description}
                            </Stragger_word>
                          </div>
                          <div className="2xl:block xl:block lg:block md:block sm:block hidden overflow-hidden h-[1.5em]">
                            <motion.div
                            initial={{ y: "100%", opacity: 0, }}
                            whileInView={{ y: "0%", opacity: 1, }}
                            viewport={{ 
                              once: true,
                            }}
                            transition={{
                              delay: 3.2,
                              duration: 0.7,
                              ease: [0.65, 0, 0.35, 1],
                            }}
                            >
                            <Button link={data.hero.button_link} target="_self">
                              {data.hero.button_text}
                            </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* section hero end */}

            {/*  section collection */}

            <section
              id="section_collection"
              className="bg-background px-section pt-50 pb-40 overflow-hidden"
            >
              <div className="w-full h-full mx-auto max-w-400">
                <div className="max-w-205 flex flex-col 2xl:gap-45 xl:gap-45 lg:gap-45 md:gap-25 sm:gap-25 gap-15  mx-auto pb-50 ">
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-100 xl:max-w-100 lg:max-w-100 md:max-w-100 sm:max-w-100 max-w-65 uppercase">
                        {data.collection.collection_subtitle1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-150 xl:max-w-150 lg:max-w-150 md:max-w-150 sm:max-w-150 max-w-65 uppercase 2xl:pl-25 xl:pl-25 lg:pl-25 md:pl-25 sm:pl-25 pl-0">
                        {data.collection.collection_subtitle2}
                      </p>
                    </div>
                  </div>
                  <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:gap-25 xl:gap-25 lg:gap-25 md:gap-25 sm:gap-25 gap-5 justify-end 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 pl-20">
                    <p className="font-secondary font-body-secondary text-b-m leading-relaxed uppercase">
                      {data.collection.collection_title_paragraph}
                    </p>
                    <div className="flex flex-col justify-start max-w-77 gap-6.5">
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                        {data.collection.collection_paragraph1}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                        {data.collection.collection_paragraph2}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                        {data.collection.collection_paragraph3}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                        {data.collection.collection_paragraph4}
                      </p>
                      <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                        {data.collection.collection_paragraph5}
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
                <h2 className="font-primary font-heading text-h6 uppercase leading-tightest self-start">
                  {data.collection.collection_label}
                </h2>
                <div className="relative 2xl:flex xl:flex lg:flex md:grid sm:grid grid 2xl:flex-row xl:flex-row lg:flex-row md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[121%] md:w-full sm:w-full w-full 2xl:max-w-450 xl:max-w-450 lg:max-w-450 md:max-w-full sm:max-w-full max-w-full 2xl:h-40 xl:h-40 lg:h-40 md:h-auto sm:h-auto h-auto 2xl:-skew-y-15 xl:-skew-y-15 lg:-skew-y-15 md:skew-y-0 sm:skew-y-0 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 md:ml-0 sm:ml-0 ml-0 2xl:pt-70 xl:pt-70 lg:pt-70 md:pt-0 sm:pt-0 pt-0 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-8 gap-y-5">
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[100%] xl:ml-[100%] lg:ml-[100%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image10}
                      collection_name={data.collection.collection_name10}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[85%] xl:ml-[85%] lg:ml-[85%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image9}
                      collection_name={data.collection.collection_name9}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[70%] xl:ml-[70%] lg:ml-[70%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image8}
                      collection_name={data.collection.collection_name8}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[55%] xl:ml-[55%] lg:ml-[55%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image7}
                      collection_name={data.collection.collection_name7}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[40%] xl:ml-[40%] lg:ml-[40%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image6}
                      collection_name={data.collection.collection_name6}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[25%] xl:ml-[25%] lg:ml-[25%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image5}
                      collection_name={data.collection.collection_name5}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[10%] xl:ml-[10%] lg:ml-[10%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image4}
                      collection_name={data.collection.collection_name4}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-5%] xl:ml-[-5%] lg:ml-[-5%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image3}
                      collection_name={data.collection.collection_name3}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-20%] xl:ml-[-20%] lg:ml-[-20%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image2}
                      collection_name={data.collection.collection_name2}
                    />
                  </div>
                  <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-35%] xl:ml-[-35%] lg:ml-[-35%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
                    <Collection_item
                      images_path={data.collection.collection_image1}
                      collection_name={data.collection.collection_name1}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* section collection end */}

            {/* section lookbook */}

            <Section_lookbook lookbook={data.lookbook} />

            {/* section lookbook end */}

            {/* lookbook to about transition section */}

            <Section_lookbook_to_about
              lookbook_transition={data.lookbook_transition}
            />

            {/* lookbook to about transition section end */}

            {/* section about */}

            <Section_about about={data.about} />

            {/* section about end */}

            {/* section stockists */}

            <Section_stockists stockists={data.stockists} />

            {/* section stockists end */}

            {/* section CTA */}

            <Section_cta cta={data.cta} />

            {/* section CTA end */}

            {/* section footer */}

            <Section_footer footer={data.footer} />

            {/* section footer end */}
          </main>
        )}
      </>
    );
  }
}
