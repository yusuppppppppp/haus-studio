"use client";
import "./globals.css";
import Section_lookbook_to_about from "../components/features/section_lookbook_to_about/section_lookbook_to_about";
import Section_lookbook from "@/components/features/lookbook/section_lookbook";
import Section_about from "@/components/features/about/section_about";
import Section_stockists from "@/components/features/stockists/section_stockists";
import Section_cta from "../components/layout/section_cta/section_cta";
import Section_preload from "../components/providers/section_preload/section_preload";
import HeroToCollection from "@/components/transitions/heroToCollection/heroToCollection";
import { useGlobalData } from "@/context/global_data_context";
import Section_footer from "@/components/layout/footer/section_footer";

export default function Home() {
  const {
    isLoading,
    preload,
    hero,
    collection,
    lookbook,
    lookbook_to_about,
    about,
    stockists,
    cta,
    footer,
  } = useGlobalData();

  return (
    <>
      {/* section preload */}

      <Section_preload isLoading={isLoading} preload={preload} />

      {/* section preload end */}

      {!isLoading && (
        <main>
          {/* hero to collection */}

          {hero && collection && (
            <HeroToCollection hero={hero} collection={collection} />
          )}

          {/* hero to collection end */}

          {/* section lookbook */}

          <Section_lookbook lookbook={lookbook} />

          {/* section lookbook end */}

          {/* lookbook to about transition section */}

          <Section_lookbook_to_about lookbook_transition={lookbook_to_about} />

          {/* lookbook to about transition section end */}

          {/* section about */}

          <Section_about about={about} />

          {/* section about end */}

          {/* section stockists */}

          <Section_stockists stockists={stockists} />

          {/* section stockists end */}

          {/* section CTA */}

          <Section_cta cta={cta} />

          {/* section CTA end */}

          {/* section footer */}

          {footer && <Section_footer footer={footer} />}

          {/* section footer end */}
        </main>
      )}
    </>
  );
}
