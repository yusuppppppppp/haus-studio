"use client";

import { motion } from "framer-motion";
import Smooth_sticky from "../../ui/smooth_sticky/smooth_sticky";
import { useRef } from "react";
import Section_hero from "../../features/section_hero/section_hero";
import Section_collection from "../../features/collection/section_collection/section_collection";

export default function HeroToCollection({ hero, collection }) {
  const ref = useRef(null);

  return (
    <>
      <div className="relative isolate w-full lg:h-[600vh] h-auto">
        <section className="w-full lg:sticky block top-0">
          <div className="relative w-full h-full">
            {/* section hero */}

            <div className="relative z-0">
              <Section_hero hero={hero} />
            </div>

            {/* section hero end */}

            {/* section collection */}

            <div className="relative">
              <Section_collection collection={collection} />
            </div>

            {/* <div className="z-20 absolute inset-0 text-n-500 mix-blend-difference">
              <Section_collection collection={collection} />
            </div> */}

            {/* section collection end */}
          </div>
        </section>
      </div>
    </>
  );
}
