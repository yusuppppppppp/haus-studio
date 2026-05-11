"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Section_scroll from "./scroll_section"

export default function Lookbook_to_about() {
  const [lookbook_to_about, setLookbook_to_about] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("lookbooktoabout")
        .select("*")
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setLookbook_to_about(data);
    }

    fetchData();
  }, []);

  if (!lookbook_to_about) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h2 className="font-body-secondary font-primary text-h5">Loading...</h2>
      </div>
    );
  }

  return <Section_scroll data={lookbook_to_about}/>
}
