import Lookbook_item from "../../ui/lookbook_item/lookbook_item"

export default function Section_lookbook() {
  return (
    <>
      <section
        id="section_lookbook"
        className="bg-background overflow-hidden px-section pt-10"
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
    </>
  );
}
