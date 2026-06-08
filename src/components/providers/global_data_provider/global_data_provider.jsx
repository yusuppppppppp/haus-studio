"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Smooth_scroll from "../smooth_scroll/smooth_scroll";
import Custom_cursor from "../custom_cursor/custom_cursor";
import Navbar from "../../layout/section_navbar/navbar/navbar";
import Section_footer from "../../layout/footer/section_footer/section_footer";
import { Global_data_context } from "@/context/global_data_context";
import { getWebsiteData } from "@/lib/fetchers/getWebsiteData";

export default function Global_data_provider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const [globalData, setGlobalData] = useState({
    navbar: null,
    preload: null,
    hero: null,
    collection: null,
    about: null,
    lookbook: null,
    lookbook_transition: null,
    stockists: null,
    cta: null,
    footer: null,
    contact: null,
  });

  useEffect(() => {
    async function fetchGlobalData() {
      try {
        const websiteData = await getWebsiteData();

        setGlobalData({
          preload: websiteData.preload || null,
          hero: websiteData.hero || null,
          collection: websiteData.collection || null,
          about: websiteData.about || null,
          lookbook: websiteData.lookbook || null,
          lookbook_transition: websiteData.lookbook_to_about || null,
          stockists: websiteData.stockists || null,
          cta: websiteData.cta || null,
          navbar: websiteData.nav || null,
          footer: websiteData.footer || null,
          contact: websiteData.contact || null,
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

    fetchGlobalData();
  }, []);

  return (
    <>
      <Global_data_context.Provider value={{ ...globalData, isLoading }}>
        <Smooth_scroll>
          <Custom_cursor />

          {globalData.navbar && <Navbar navbar={globalData.navbar} />}

          {children}
        </Smooth_scroll>
      </Global_data_context.Provider>
    </>
  );
}
