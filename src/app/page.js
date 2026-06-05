"use client";
import "./globals.css";
import Section_lookbook_to_about from "../components/features/section_lookbook_to_about/section_lookbook_to_about";
import Section_lookbook from "../components/features/lookbook/section_lookbook/section_lookbook";
import Section_about from "../components/features/about/section_about/section_about";
import Section_stockists from "../components/features/stockists/section_stockists/section_stockists";
import Section_cta from "../components/layout/section_cta/section_cta";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Section_preload from "../components/providers/section_preload/section_preload";
import HeroToCollection from "@/components/transitions/heroToCollection/heroToCollection";
import { useGlobalData } from "@/context/global_data_context";
import Section_footer from "@/components/layout/footer/section_footer/section_footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { footer } = useGlobalData();

  const [data, setData] = useState({
    preload: null,
    hero: null,
    collection: null,
    about: null,
    lookbook: null,
    lookbook_transition: null,
    stockists: null,
    cta: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          preloadRes,
          heroRes,
          collectionRes,
          aboutRes,
          lookbookRes,
          lookbook_transitionRes,
          stockistsRes,
          ctaRes,
        ] = await Promise.all([
          supabase.from("sectionpreload").select("*").single(),
          supabase.from("sectionhero").select("*").single(),
          supabase.from("sectioncollection").select("*").single(),
          supabase.from("sectionabout").select("*").single(),
          supabase.from("sectionlookbook").select("*").single(),
          supabase.from("lookbooktoabout").select("*").single(),
          supabase.from("sectionstockists").select("*").single(),
          supabase.from("sectioncta").select("*").single(),
        ]);

        if (preloadRes.error) console.log(preloadRes.error);
        if (heroRes.error) console.log(heroRes.error);
        if (collectionRes.error) console.log(collectionRes.error);
        if (aboutRes.error) console.log(aboutRes.error);
        if (lookbookRes.error) console.log(lookbookRes.error);
        if (lookbook_transitionRes.error)
          console.log(lookbook_transitionRes.error);
        if (stockistsRes.error) console.log(lookbookRes.error);
        if (ctaRes.error) console.log(ctaRes.error);

        setData({
          preload: preloadRes.data,
          hero: heroRes.data,
          collection: collectionRes.data,
          about: aboutRes.data,
          lookbook: lookbookRes.data,
          lookbook_transition: lookbook_transitionRes.data,
          stockists: stockistsRes.data,
          cta: ctaRes.data,
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

            {/* <Navbar navbar={data.navbar} /> */}

            {/* section navbar end */}

            {/* section hero */}

            {/* section hero end */}

            <HeroToCollection hero={data.hero} collection={data.collection} />

            {/*  section collection */}

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

            {footer && (
              <Section_footer footer={footer}/>
            )}

            {/* section footer end */}
          </main>
        )}
      </>
    );
  }
}
