import "./globals.css";
import Image from "next/image";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    
    // section hero

    <>
      <section id="section-hero" className="bg-background w-full">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full gap-120 uppercase pt-2.5">
              <div className="flex flex-row items-start">
                <h1 className=" font-primary font-display text-fd-l leading-tightest">
                  haus
                </h1>
                <Image
                  className="pt-3"
                  src="/assets/images/®.svg"
                  alt="®"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className=" font-primary font-display text-fd-l leading-tightest">
                studio
              </h1>
            </div>
            <div className="max-w-400 w-full mx-auto px-section pt-5">
              <div className="flex justify-between items-center relative">
                <div className="flex flex-row mx-auto pl-[25%]">
                  <div className="relative w-130 h-125 overflow-hidden mx-auto">
                    <Image
                      className="pr-23 object-cover absolute z-0 object-center"
                      src="/assets/images/hero-bg.png"
                      alt="hero_image"
                      fill
                    />
                  </div>
                  <div className="flex flex-col justify-end items-start max-w-92 gap-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase">
                      about haus
                    </p>
                    <p className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed">
                      Haus presents fashion as a curated digital archive. This
                      is a space for discovery, reference, and visual direction.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between z-1 absolute pr-40">
                  <div className="flex flex-col justify-start items-start gap-40">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                      this is a space for discovery
                    </p>
                    <div className="flex flex-col justify-center gap-5 max-w-165">
                      <div className="flex flex-row justify-between w-120">
                        <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                          index
                        </p>
                        <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                          1/2
                        </p>
                      </div>
                      <p className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed">
                        Our collections are studies in structure and contrast.
                        We work with architectural lines, raw materials, and
                        controlled volumes. Designed with intent, but open to
                        personal interpretation. No seasonal rules. Just form,
                        material, and presence.
                      </p>
                    </div>
                    <Button link="https://webflow.com/templates/html/hauss-website-template">
                      explore page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // section collection */}

      <section
        id="section_collection"
        className="bg-background px-section pt-50 pb-50"
      >
        <div className="w-full h-full mx-auto max-w-400">
          <div className="max-w-205 flex flex-col gap-45 mx-auto pb-50 ">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed max-w-100 uppercase">
                  Each piece is presented as form, material, and movement in
                  dialogue with the body.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed max-w-150 uppercase pl-25">
                  ach collection explores silhouette, texture, and the
                  relationship between body and space.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-25 justify-end">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed uppercase">
                collection
              </p>
              <div className="flex flex-col justify-start max-w-77 gap-6.5">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  Collection is presented as a curated archive of garments
                  exploring silhouette, material, and movement. Each piece is
                  documented as a visual study, capturing the relationship
                  between structure, body, and contemporary expression.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  The collection examines form, texture, and engineered
                  proportions.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  This collection explores clothing as architecture. Lines,
                  transparency, and material contrasts define a visual language
                  that exists between fashion, art, and performance.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  Collections are released as chapters in an ongoing study of
                  modern dress.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  A curated selection of garments defined by structure,
                  materiality, and controlled detail. The collection functions
                  as both archive and experimentation platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* collection main content */}

        <div className="w-full h-full max-w-primary mx-auto flex flex-col justify-stretch gap-50 border pb-100">
          <h6 className="font-primary font-heading text-h6 uppercase leading-tightest self-start">
            haus of [grid]
          </h6>
          <div className="relative flex flex-row justify-center">
            <div className="absolute w-55 h-85 skew-y-10">
              <Image
                src="/assets/images/item.png"
                alt="item1"
                objectFit="contain"
                fill
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
