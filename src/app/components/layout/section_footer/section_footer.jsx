import Image from "next/image";
import { Footer_nav } from "../../ui/footer_nav"

export default function Section_footer() {
  return (
    <>
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
                    <div className="flex flex-col justify-stretch items-end gap-2.5">
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
    </>
  );
}
