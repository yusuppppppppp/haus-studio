"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Smooth_scroll from "../smooth_scroll/smooth_scroll";
import Custom_cursor from "../custom_cursor/custom_cursor";
import Navbar from "../../layout/section_navbar/navbar";
import Section_footer from "../../layout/footer/section_footer";
import { Global_data_context } from "@/context/global_data_context";
import { getWebsiteData } from "@/services/website.service"

export default function Global_data_provider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    async function fetchGlobalData() {
      try {
        const websiteData = await getWebsiteData();

        setGlobalData(websiteData);
      } catch (error) {
        console.log(error);
      } finally {
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

          {globalData.nav && <Navbar navbar={globalData.nav} />}

          {children}
        </Smooth_scroll>
      </Global_data_context.Provider>
    </>
  );
}
