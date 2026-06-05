"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Smooth_scroll from "../smooth_scroll/smooth_scroll";
import Custom_cursor from "../custom_cursor/custom_cursor";
import Navbar from "../../layout/section_navbar/navbar/navbar";
import Section_footer from "../../layout/footer/section_footer/section_footer";
import { Global_data_context } from "@/context/global_data_context";

export default function Global_data_provider({ children }) {
  const [globalData, setGlobalData] = useState({
    navbar: null,
    footer: null,
  });

  useEffect(() => {
    async function fetchGlobalData() {
      try {
        const [navbarRes, footerRes] = await Promise.all([
          supabase.from("sectionnav").select("*").single(),
          supabase.from("sectionfooter").select("*").single(),
        ]);

        if (navbarRes.error) console.log(navbarRes.error);
        if (footerRes.error) console.log(footerRes.error);

        setGlobalData({
          navbar: navbarRes.data,
          footer: footerRes.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchGlobalData();
  }, []);

  return (
    <>
      <Global_data_context.Provider value={globalData}>
        <Smooth_scroll>
          <Custom_cursor />

          {globalData.navbar && <Navbar navbar={globalData.navbar} />}

          {children}
          
        </Smooth_scroll>
      </Global_data_context.Provider>
    </>
  );
}
