import Contact_from from "../contact_form/contact_from";

export default function Section_contact() {
  return (
    <section className="bg-background overflow-hidden px-section pb-30 pt-2.5">
      <div className="w-full h-full mx-auto max-w-400">
        <div className="flex flex-col gap-30">
          <h1 className="text-fd-l font-primary font-display uppercase text-center leading-tightest">
            Contact
          </h1>
          <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize max-w-45">
                  Malang, Indonesia 2026
                </h2>
                <div className="flex flex-col">
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    novys ' Devs
                  </p>
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    monday / friday
                  </p>
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    8am - 4pm
                  </p>
                </div>
              </div>
              <p className="max-w-50 font-secondary font-body-secondary text-b-m leading-relaxed justify-center ">
                We collaborate with brands, creatives, and individuals to build
                thoughtful digital experiences through design, motion, and
                development. Every project is crafted with a balance of visual
                identity and functionality.
              </p>
            </div>
            <div className="w-[50%]">
              <Contact_from />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
