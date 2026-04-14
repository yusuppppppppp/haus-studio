export default function Hero() {
  return (
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
                width={70}
                height={70}
              />
            </div>
            <h1 className=" font-primary font-display text-fd-l leading-tightest">
              studio
            </h1>
          </div>
          <div className="max-w-400 w-full mx-auto px-6 pt-5 border ">
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
                    Haus presents fashion as a curated digital archive. This is
                    a space for discovery, reference, and visual direction.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between z-1 absolute pr-40">
                <div className="flex flex-col justify-start items-start gap-40">
                  <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                    this is a space for discovery
                  </p>
                  <div className="flex flex-col justify-center gap-5 max-w-160">
                    <div className="flex flex-row justify-between w-120">
                      <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                        index
                      </p>
                      <p className="font-primary font-body-secondary text-b-l leading-tight uppercase max-w-47.5 ">
                        1/2
                      </p>
                    </div>
                    <p className="text-n-500 font-secondary font-body-secondary text-b-m leading-relaxed">
                      Our collections are studies in structure and contrast. We
                      work with architectural lines, raw materials, and
                      controlled volumes. Designed with intent, but open to
                      personal interpretation. No seasonal rules. Just form,
                      material, and presence.
                    </p>
                  </div>
                  <div className="bg-blue-700 w-37.5">Button</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
