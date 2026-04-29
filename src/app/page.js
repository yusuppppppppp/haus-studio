import "./globals.css";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { Collection_item } from "./components/ui/collection_item";
import { Footer_nav } from "./components/ui/footer_nav";
import Lookbook_item from "./components/ui/lookbook_item/lookbook_item";
import Navbar from "./components/layout/navbar/navbar";


export default function Home() {
  return (
    // section hero

    <>
      <Navbar/>
      <section
        id="section_hero"
        className="bg-background w-full overflow-hidden"
      >
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full uppercase 2xl:gap-120 xl:gap-100 lg:gap-100 md:gap-0 sm:gap-0 gap-10 2xl:pt-2.5 xl:pt-2.5 lg:pt-2.5 md:pt-4.5 pt-4.5 ">
              <div className="flex flex-row items-start">
                <h1 className=" font-primary font-display text-fd-l leading-tightest">
                  haus
                </h1>
                <div className="relative 2xl:w-20 xl:w-20 lg:w-20 md:w-15 sm:w-10 w-10 2xl:h-20 xl:h-20 lg:h-20 md:h-15 sm:h-10 h-10">
                  <Image
                    className="object-contain 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-2 sm:pt-2 pt-2"
                    src="/assets/icons/®.svg"
                    alt="®"
                    fill
                  />
                </div>
              </div>
              <h1 className=" font-primary font-display text-fd-l leading-tightest">
                studio
              </h1>
            </div>
            <div className="max-w-400 w-full mx-auto px-section 2xl:pt-5 xl:pt-5 lg:pt-5 md:pt-40 sm:pt-10 pt-10">
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col-reverse gap-15 justify-between items-center relative isolate">
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start 2xl:pl-[33%] xl:pl-[32%] lg:pl-[30%] md:pl-[30%] sm:pl-[35%] pl-[0%] w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-5">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase text-end 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-30 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-end">
                    this is a space for discovery
                  </p>
                  <div className="relative 2xl:w-130 xl:w-130 lg:w-130 md:w-100 sm:w-60 w-65 2xl:h-125 xl:h-125 lg:h-125 md:h-125 sm:h-80 h-120 2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center self-start ">
                    <Image
                      className="2xl:pr-23 xl:pr-10 lg:pr-20 md:pr-10 sm:pr-5 pr-0 object-cover 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute block 2xl:z-0 xl:z-0 lg:z-0 md:z-0 sm:z-0 z-0 object-center"
                      src="/assets/images/hero-bg.webp"
                      alt="hero_image"
                      fill
                    />
                  </div>
                  <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col justify-end items-start 2xl:max-w-92 xl:max-w-92 lg:max-w-92 md:max-w-45 sm:max-w-45 max-w-45 gap-5">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase">
                      about haus
                    </p>
                    <p className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed">
                      Haus presents fashion as a curated digital archive. This
                      is a space for discovery, reference, and visual direction.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between z-1 2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute ">
                  <div className="flex flex-col justify-start items-start 2xl:gap-40 xl:gap-35 lg:gap-35 md:gap-28 sm:gap-13 gap-13">
                    <p className="font-primary font-body-secondary text-b-l leading-tight uppercase 2xl:max-w-47.5 xl:max-w-47.5 lg:max-w-47.5 md:max-w-47.5 sm:max-w-30 max-w-30 2xl:block xl:block lg:block md:block sm:block hidden">
                      this is a space for discovery
                    </p>
                    <div className="flex flex-col justify-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-3 gap-3 2xl:max-w-165 xl:max-w-130 lg:max-w-130 md:max-w-73 sm:max-w-73">
                      <div className="flex flex-row justify-between 2xl:w-120 xl:w-90 lg:w-90 md:w-50 sm:w-55 w-">
                        <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                          index
                        </p>
                        <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                          1/2
                        </p>
                      </div>
                      <p className="mix-blend-difference font-secondary font-body-secondary text-b-m leading-relaxed">
                        Our collections are studies in structure and contrast.
                        We work with architectural lines, raw materials, and
                        controlled volumes. Designed with intent, but open to
                        personal interpretation. No seasonal rules. Just form,
                        material, and presence.
                      </p>
                    </div>
                    <div className="2xl:block xl:block lg:block md:block sm:block hidden">
                      <Button link="https://webflow.com/templates/html/hauss-website-template">
                        explore page
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section hero end */}

      {/* // section collection */}

      <section
        id="section_collection"
        className="bg-background px-section pt-50 pb-50"
      >
        <div className="w-full h-full mx-auto max-w-400">
          <div className="max-w-205 flex flex-col 2xl:gap-45 xl:gap-45 lg:gap-45 md:gap-25 sm:gap-25 gap-15  mx-auto pb-50 ">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-100 xl:max-w-100 lg:max-w-100 md:max-w-100 sm:max-w-100 max-w-65 uppercase">
                  Each piece is presented as form, material, and movement in
                  dialogue with the body.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-150 xl:max-w-150 lg:max-w-150 md:max-w-150 sm:max-w-150 max-w-65 uppercase 2xl:pl-25 xl:pl-25 lg:pl-25 md:pl-25 sm:pl-25 pl-0">
                  ach collection explores silhouette, texture, and the
                  relationship between body and space.
                </p>
              </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col 2xl:gap-25 xl:gap-25 lg:gap-25 md:gap-25 sm:gap-25 gap-5 justify-end 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 pl-20">
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

        <div className="w-full h-full max-w-primary mx-auto flex flex-col justify-stretch 2xl:gap-50 xl:gap-50 lg:gap-50 md:gap-30 sm:gap-30 gap-20 2xl:pb-80 xl:pb-80 lg:pb-80 md:pb-0 sm:pb-0 pb-0">
          <h6 className="font-primary font-heading text-h6 uppercase leading-tightest self-start">
            haus of [grid]
          </h6>
          <div className="relative 2xl:flex xl:flex lg:flex md:grid sm:grid grid 2xl:flex-row xl:flex-row lg:flex-row md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center items-center 2xl:w-full xl:w-[115%] lg:w-[110%] md:w-full sm:w-full w-full 2xl:max-w-450 xl:max-w-450 lg:max-w-450 md:max-w-full sm:max-w-full max-w-full 2xl:h-40 xl:h-40 lg:h-40 md:h-auto sm:h-auto h-auto 2xl:-skew-y-15 xl:-skew-y-15 lg:-skew-y-15 md:skew-y-0 sm:skew-y-0 skew-y-0 2xl:-ml-65 xl:-ml-80 lg:-ml-85 md:ml-0 sm:ml-0 ml-0 2xl:pt-70 xl:pt-70 lg:pt-70 md:pt-0 sm:pt-0 pt-0 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-8 gap-y-5">
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[100%] xl:ml-[100%] lg:ml-[100%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-10.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[85%] xl:ml-[85%] lg:ml-[85%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-9.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[70%] xl:ml-[70%] lg:ml-[70%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-8.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[55%] xl:ml-[55%] lg:ml-[55%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-7.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[40%] xl:ml-[40%] lg:ml-[40%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-6.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[25%] xl:ml-[25%] lg:ml-[25%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-5.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[10%] xl:ml-[10%] lg:ml-[10%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-4.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-5%] xl:ml-[-5%] lg:ml-[-5%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-3.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-20%] xl:ml-[-20%] lg:ml-[-20%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-2.webp" />
            </div>
            <div className="2xl:absolute xl:absolute lg:absolute md:block sm:block block items-start 2xl:ml-[-35%] xl:ml-[-35%] lg:ml-[-35%] md:ml-0 sm:ml-0 ml-0 2xl:skew-y-30 xl:skew-y-30 lg:skew-y-30 md:skew-y-0 sm:skew-y-0 skew-y-0">
              <Collection_item images_path="/assets/images/item-1.webp" />
            </div>
          </div>
        </div>
      </section>

      {/* section collection end */}

      {/* section lookbook */}

      <section
        id="section_lookbook"
        className="bg-background overflow-hidden px-section"
      >
        <div className="w-full h-full mx-auto max-w-400 flex flex-col justify-stretch items-start">
          <div className="flex flex-col justify-stretch items-start self-center">
            <div className="flex flex-col justify-stretch items-start 2xl:gap-30 xl:gap-30 lg:gap-30 md:gap-30 sm:gap-20 gap-15 self-center">
              <h2 className="font-primary font-heading text-h2 leading-tightest uppercase 2xl:max-w-130 xl:max-w-130 lg:max-w-130 md:max-w-150 sm:max-w-90 max-w-50 self-center text-center">
                Our lookbooks serve as a dialogue
              </h2>
              <div className="flex flex-col justify-stretch item-center gap-10 max-w-90 text-center self-center">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed uppercase">
                  We prioritize clarity, function, and the power of the grid to
                  elevate global creative standards.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  Our lookbooks serve as a dialogue between the garment and the
                  void. By prioritizing volume over traditional tailoring, each
                  piece becomes a structural study. We invite you to explore the
                  intersection of form and function through this curated visual
                  sequence.
                </p>
              </div>
            </div>
          </div>

          {/* section lookbook main content */}

          <div className="w-full flex flex-col justify-stretch items-start 2xl:pt-60 xl:pt-45 lg:pt-45 md:pt-40 sm:pt-35 pt-30 overflow-hidden">
            <div className="flex flex-col justify-stretch items-stretch w-full">
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook1.webp"
                    lookbook_name="olive sculptedh"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook2.webp"
                    lookbook_name="Mahogany Oversized Jumpsuit"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
                <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></div>
                <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook3.webp"
                    lookbook_name="Sandstone Fleece Co-ord"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image="/assets/images/lookbook4.webp"
                    lookbook_name="Champagne Crinkle Sculpture"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image="/assets/images/lookbook5.webp"
                        lookbook_name="Cocoa cocoon Hood"
                        lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                      />
                    </div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image="/assets/images/lookbook6.webp"
                        lookbook_name="Sage Volume Bomber"
                        lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook7.webp"
                    lookbook_name="Crimson Chunky Knit"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
                <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:hidden sm:hidden hidden"></div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook8.webp"
                    lookbook_name="Graphite Boxy Tee-Dress"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
                <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-1"
                    lookbook_image="/assets/images/lookbook9.webp"
                    lookbook_name="Lavender Oversized Pullover"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1">
                <div className="col-span-2 flex flex-col justify-stretch items-stretch">
                  <div className="w-full h-full grid grid-cols-2">
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image="/assets/images/lookbook11.webp"
                        lookbook_name="Obsidian Quilted Parka"
                        lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                      />
                    </div>
                    <div className="col-span-1 p-2 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-col gap-13 justify-between items-start border-n-300 border">
                      <Lookbook_item
                        variant="span-1"
                        lookbook_image="/assets/images/lookbook10.webp"
                        lookbook_name="Espresso Leather Column"
                        lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                      />
                    </div>
                    <div className="bg-background col-span-1 h-130 w-100 2xl:block xl:block lg:block md:block sm:hidden hidden"></div>
                  </div>
                </div>
                <div className="col-span-2 p-2 flex flex-col gap-13 justify-between items-start border-n-300 border">
                  <Lookbook_item
                    variant="span-2"
                    lookbook_image="/assets/images/lookbook12.webp"
                    lookbook_name="Midnight Asymmetric Gown"
                    lookbook_link="https://webflow.com/templates/html/hauss-website-template"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section lookbook end */}

      {/* lookbook to about transition section */}

      <section className="bg-background overflow-hidden px-section h-screen">
        <div className="w-full h-full mx-auto max-w-400">
          <div className="flex flex-col justify-center items-center w-full h-full gap-20">
            <div className="flex flex-col justify-center items-center gap-10">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-center 2xl:max-w-125 xl:max-w-125 lg:max-w-125 md:max-w-125 sm:max-w-110 max-w-110">
                Haus continues to define the space between architectural intent
                and human motion, leaving a permanent imprint on the modern
                grid.
              </p>
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-center">
                This sequence is merely the foundation for what follows.
              </p>
            </div>
            <Button link="https://webflow.com/templates/html/hauss-website-template">explore the archive</Button>
          </div>
        </div>
      </section>

      {/* lookbook to about transition section end */}

      {/* section about */}

      <section
        id="section_about"
        className="bg-foreground overflow-hidden px-section py-25 2xl:pb-50 xl:pb-30 lg:pb-30 md:pb-30 sm:pb-25 pb-30"
      >
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-start 2xl:gap-60 xl:gap-60 lg:gap-60 md:gap-60 sm:gap-20 gap-30">
            <div className="flex flex-row justify-stretch items-start self-end 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-10 sm:gap-10 gap-7">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 max-w-114">
                Haus exists at the intersection of garment and object. We reject
                the cycle of seasonal trends in favor of permanent relevance.
                Every piece is a result of rigorous pattern-making and
                high-grade sourcing—designed for those who view fashion as
                adeliberate expression of identity.
              </p>
              <div className="flex flex-col justify-stretch items-start 2xl:max-w-114 xl:max-w-114 lg:max-w-114 md:max-w-100 sm:max-w-80 max-w-40 self-end gap-3">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100">
                  Haus exists at the intersection of garment and object. We
                  reject the cycle of seasonal trends in favor of permanent
                  relevance. Every piece is a result of rigorous pattern-making
                  and high-grade sourcing designed for those who view fashion as
                  a deliberate expression of identity. Our practice is rooted in
                  the belief that clothing should be as enduring as the
                  structures we inhabit. By focusing on monochromatic depth and
                  structural integrity, we create a uniform for the modern
                  multidisciplinary thinker. the grid dictates the flow of every
                  textile choice we make.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-0">
                  We are not just making clothes; we are defining a new visual
                  language for the digital and physical realm.
                </p>
              </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between w-full 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-15 sm:gap-15 gap-15 ">
              <div className="flex flex-col justify-stretch items-start gap-5">
                <p className="2xl:max-w-45 xl:max-w-45 lg:max-w-45 md:max-w-45 sm:max-w-45 max-w-25 font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-30 xl:pl-30 lg:pl-30 md:pl-30 sm:pl-30 pl-12">
                  Season fall26
                </p>
                <h2 className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase break-all 2xl:max-w-full xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full max-w-40">
                  intention
                </h2>
                <div className="flex flex-row justify-start item-start 2xl:self-end xl:self-end lg:self-end md:self-end sm:self-start self-start 2xl:gap-70 xl:gap-70 lg:gap-70 md:gap-35 sm:gap-22 gap-10">
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 2xl:pl-12 xl:pl-12 lg:pl-12 md:pl-0 sm:pl-0 pl-0">
                    We are all in.
                  </p>
                  <h2 className="font-primary font-display text-fd-s leading-tightest text-n-100 uppercase">
                    on wear
                  </h2>
                </div>
              </div>
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row justify-end 2xl:items-start xl:items-start lg:items-start md:items-end sm:items-end items-end 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-5 sm:gap-5 gap-5">
                <p className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase text-right 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14">
                  Chapter 0.001
                </p>
                <p className="font-primary font-body-secondary text-b-l leading-normal text-n-100 uppercase text-right 2xl:max-w-17.5 xl:max-w-17.5 lg:max-w-17.5 md:max-w-17.5 sm:max-w-14 max-w-14">
                  index 2/2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section about end */}

      {/* section stockists */}

      <section
        id="section_stockists"
        className="bg-foreground px-section overflow-hidden pb-25 pt-5"
      >
        <div className="w-full h-full max-w-400 mx-auto ">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-start w-full 2xl:gap-40 xl:gap-40 lg:gap-40 md:gap-30 sm:gap-30 gap-30">
            <div className="flex flex-col justify-end item-start 2xl:max-w-75 xl:max-w-75 lg:max-w-75 md:max-w-75 sm:max-w-65 max-w-65">
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100 text-end pl-10">
                Our stockists are selected through a curated process
              </p>
              <p className="font-secondary font-body-secondary text-b-m leading-relaxed text-n-100">
                Prioritizing alignment with our design philosophy, material
                standards, and cultural positioning.
              </p>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-stretch items-start gap-5 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto w-full">
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-50 xl:w-50 lg:w-50 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-0 pt-0">
                <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-70 h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                    paris, fr
                  </p>
                  <Image
                    src="/assets/images/Vector@2x.webp"
                    alt="number_1"
                    width={200}
                    height={200}
                    className="2xl:pr-10 xl:pr-10 lg:pr-10 md:pr-10 sm:pr-0 pr-0 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15 self-end"
                  />
                </div>
                <div className="flex flex-col justify-stretch items-start gap-5">
                  <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                    Concept Boutiques and Independent Fashion.
                  </p>
                  <div className="flex flex-col justify-stretch items-start gap-3.5">
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      Paris serves as a primary reference point for contemporary
                      fashion discourse. Our presence in the city is anchored
                      through concept boutiques and independent retailers that
                      emphasize editorial curation, craftsmanship, and
                      experimental design.
                    </p>
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      These partners provide a refined environment where the
                      collection is contextualized within broader narratives of
                      fashion, art, and cultural production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-40 xl:pt-40 lg:pt-40 md:pt-40 sm:pt-0 pt-10">
                <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-92 w-full pb-5">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                    tokyo, jp
                  </p>
                  <Image
                    src="/assets/images/Vector@2x-1.webp"
                    alt="number_2"
                    width={240}
                    height={240}
                    className="2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                  />
                </div>
                <div className="flex flex-col justify-stretch items-start gap-5">
                  <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                    Avant-Garde Retail and Cultural Concept Stores
                  </p>
                  <div className="flex flex-col justify-stretch items-start gap-3.5">
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      Tokyo represents a convergence of innovation, subculture,
                      and precision. Our stockists in the city operate at the
                      intersection of fashion, design, and technology,
                      presenting the collection within spaces that prioritize
                      experimentation and forward-thinking aesthetics.
                    </p>
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      These partners provide a refined environment where the
                      collection is contextualized within broader narratives of
                      fashion, art, and cultural production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-10">
                <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-50 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-85 w-full pb-5">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                    berlin, de
                  </p>
                  <Image
                    src="/assets/images/Vector@2x-2.webp"
                    alt="number_3"
                    width={240}
                    height={240}
                    className="2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                  />
                </div>
                <div className="flex flex-col justify-stretch items-start gap-5">
                  <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                    Concept Boutiques and Independent Fashion.
                  </p>
                  <div className="flex flex-col justify-stretch items-start gap-3.5">
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      Paris serves as a primary reference point for contemporary
                      fashion discourse. Our presence in the city is anchored
                      through concept boutiques and independent retailers that
                      emphasize editorial curation, craftsmanship, and
                      experimental design.
                    </p>
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      These partners provide a refined environment where the
                      collection is contextualized within broader narratives of
                      fashion, art, and cultural production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-row flex-col justify-stretch items-start gap-7.5 2xl:w-53 xl:w-53 lg:w-53 md:w-full sm:w-full w-full overflow-hidden 2xl:pt-85 xl:pt-85 lg:pt-85 md:pt-85 sm:pt-0 pt-10">
                <div className="flex flex-col justify-start items-start gap-7.5 pt-1.5 bg-background 2xl:h-110 xl:h-110 lg:h-110 md:h-auto sm:h-auto h-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-70 w-full pb-5">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase pl-2.5">
                    new york, us
                  </p>
                  <Image
                    src="/assets/images/Vector@2x-3.webp"
                    alt="number_4"
                    width={240}
                    height={240}
                    className="2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-10 pl-0 self-end 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-15"
                  />
                </div>
                <div className="flex flex-col justify-stretch items-start gap-5">
                  <p className="font-secondary font-body-primary text-b-l leading-tight text-n-100">
                    Global Flagship Partners and Multi-Brand Boutiques
                  </p>
                  <div className="flex flex-col justify-stretch items-start gap-3.5">
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      New York functions as a global commercial and cultural
                      hub. Our stockists range from flagship multi-brand
                      retailers to specialized boutiques that prioritize
                      editorial storytelling and spatial experience.
                    </p>
                    <p className="font-secondary font-body-secondary text-b-s leading-relaxed text-n-100/80">
                      These locations bridge global audiences with the
                      collection, situating it within a dynamic context of
                      fashion, art, and urban culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section stockists end */}

      {/* section CTA */}

      <section
        id="section_CTA"
        className="bg-background pt-50 pb-50 overflow-hidden"
      >
        <div className="w-full h-full mx-auto">
          <div className="flex flex-col justify-stretch items-start">
            <div className="flex flex-col justify-stretch items-stretch max-w-400 mx-section self-center 2xl:gap-30 xl:gap-30 lg:gap-30 md:gap-45 sm:gap-10 gap-25 w-full pb-35">
              <div className="flex flex-col justify-center items-center gap-8">
                <p className="font-body-secondary font-secondary text-b-m leading-relaxed 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                  Dialogue
                </p>
                <Button link="https://webflow.com/templates/html/hauss-website-template">
                  contact studio
                </Button>
              </div>
              <div className="flex flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-center w-full px-section">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-start text-center">
                  For showroom appointments, collection previews, or
                  collaborative inquiries, please reach out to our studio.
                </p>
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed 2xl:max-w-85 xl:max-w-85 lg:max-w-85 md:max-w-60 sm:max-w-60 max-w-60 text-end 2xl:block xl:block lg:block md:block sm:block hidden">
                  Connect with our studio to schedule a private viewing, explore
                  the new collection, or discuss creative synergies
                </p>
              </div>
              <h2 className="font-primary font-display text-fd-l leading-tightest text-center uppercase 2xl:w-300 xl:w-300 lg:w-300 md:w-100 sm:w-100 w-100 self-center">
                press& whole sale
              </h2>
            </div>
            <div className="relative w-full 2xl:h-[150vh] xl:h-[130vh] lg:h-[130vh] md:h-[70vh] sm:h-[150vh] h-[110vh]">
              <Image
                src="/assets/images/cta-bg.webp"
                alt="cta-bg"
                fill
                className="object-cover 2xl:object-center xl:object-center lg:object-center md:object-center sm:object-center object-[15%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section CTA end */}

      {/* section footer */}

      <section id="section_footer" className="px-section overflow-hidden pb-7">
        <div className="w-full h-full max-w-400 mx-auto">
          <div className="flex flex-col justify-stretch items-stretch gap-10">
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo"
              width={55}
              height={45}
              className="self-center"
            />
            <div className="flex flex-row justify-between w-full 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-5 sm:gap-5 gap-5">
              <div className="flex flex-col justify-stretch items-end gap-10">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  Haus operates at the intersection of design, culture, and
                  material exploration. Each collection is developed through a
                  research-drivencess, prioritizing structural integrity,
                  tactile experience, and conceptual clarity. Rather than
                  following seasonal cycles. Designed to exist beyond
                  trend-based frameworks.
                </p>
                <div className="flex flex-col justify-between items-end w-full 2xl:h-150 xl:h-150 lg:h-150 md:h-150 sm:h-150 h-180">
                  <div className="flex flex-fow justify-between items-stretch w-full 2xl:pt-25 xl:pt-25 lg:pt-25 md:pt-70 sm:pt-70 pt-20">
                    <p className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize 2xl:block xl:block lg:block md:block sm:block hidden">
                      collection archive
                    </p>
                    <p className="font-body-secondary font-secondary text-b-m leading-relaxed capitalize 2xl:block xl:block lg:block md:block sm:block hidden">
                      edition 026
                    </p>
                  </div>
                  <div className="flex flex-row justify-end items-start gap-10 self-end">
                    <p className="font-secondary font-body-secondary text-b-s leading-tight">
                      (+)
                    </p>
                    <div className="flex flex-col justify-stretch items-end gap-1.5">
                      <Footer_nav footer_nav_link="https://webflow.com/templates/html/hauss-website-template">
                        license
                      </Footer_nav>
                      <Footer_nav footer_nav_link="https://webflow.com/templates/html/hauss-website-template">
                        style guide
                      </Footer_nav>
                      <Footer_nav footer_nav_link="https://webflow.com/templates/html/hauss-website-template">
                        changelog
                      </Footer_nav>
                      <Footer_nav footer_nav_link="https://webflow.com/templates/html/hauss-website-template">
                        404
                      </Footer_nav>
                    </div>
                  </div>
                  <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col-reverse w-full gap-5">
                    <div className="relative 2xl:h-150 xl:h-150 lg:h-150 md:h-150 sm:h-150 h-110 max-w-200 w-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block">
                      <Image
                        src="/assets/images/footer-img-right.png"
                        alt="footer-img-right"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-end w-full">
                      <Image
                        src="/assets/images/footer-img-left.webp"
                        alt="footer-img-left"
                        width={210}
                        height={250}
                        className="2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden"
                      />
                      <p className="font-secondary font-body-secondary text-b-s leading-tight text-end w-full">
                        © 2026 Haus Fashion. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col justify-stretch items-start gap-10">
                <p className="font-secondary font-body-secondary text-b-m leading-relaxed">
                  The brand framework is built on restraint, precision, and
                  spatial awareness. Every visual and physical output is
                  structured through modular systems, allowing flexibility while
                  maintaining coherence across mediums. Haus prioritizes clarity
                  over noise, reduction over excess, and intentionality over
                  mass production.
                </p>
                <div className="relative h-150 max-w-200 w-full">
                  <Image
                    src="/assets/images/footer-img-right.webp"
                    alt="footer-img-right"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section footer end */}
    </>
  );
}
