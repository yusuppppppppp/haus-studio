"use client";
import "./globals.css";
import Navbar from "./components/layout/navbar/navbar";
import Section_lookbook_to_about from "./components/layout/section_lookbook_to_about/section_lookbook_to_about";
import Section_lookbook from "./components/layout/section_lookbook/section_lookbook";
import Section_about from "./components/layout/section_about/section_about";
import Section_stockists from "./components/layout/section_stockists/section_stockists";
import Section_cta from "./components/layout/section_cta/section_cta";
import Section_footer from "./components/layout/section_footer/section_footer";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Section_preload from "./components/layout/section_preload/section_preload";
import Section_collection from "./components/layout/section_collection/section_collection";
import Section_hero from "./components/layout/section_hero/section_hero";

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

            <Section_hero hero={data.hero} />

            {/* section hero end */}

            {/*  section collection */}

            <Section_collection collection={data.collection} />

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
