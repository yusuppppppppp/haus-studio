"use client"

import Section_contact from "@/components/features/contact/section_contact/section_contact";
import Section_footer from "@/components/layout/footer/section_footer/section_footer";
import { useGlobalData } from "@/context/global_data_context";

export default function Contact() {
  const { footer } = useGlobalData();

  return (
    <main>
      {/* section contact */}

      <Section_contact/>

      {/* section contact end */}

      {/* section footer */}

      {footer && (
        <Section_footer footer={footer}/>
      )}

      {/* section footer end */}
    </main>
  );
}
