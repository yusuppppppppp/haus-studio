import Contact_from from "../contact_form/contact_from";

export default function Section_contact({ contact }) {
  return (
    <section className="bg-background overflow-hidden px-section pb-35 pt-2.5">
      <div className="w-full h-full mx-auto max-w-400">
        <div className="flex flex-col md:gap-30 gap-15">
          <h1 className="text-fd-l font-primary font-display uppercase text-center leading-tightest">
            {contact?.title}
          </h1>
          <div className="w-full flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-10">
            <div className="flex lg:flex-row sm:flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize max-w-45">
                  {contact?.location}
                </h2>
                <div className="flex flex-col">
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    {contact?.dev}
                  </p>
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    {contact?.days}
                  </p>
                  <p className="font-secondary font-body-secondary text-b-m leading-relaxed justify-center capitalize">
                    {contact?.hours}
                  </p>
                </div>
              </div>
              <p className="max-w-50 font-secondary font-body-secondary text-b-m leading-relaxed justify-center ">
                {contact?.description}
              </p>
            </div>
            <div className="lg:w-[50%] sm:w-[63%]">
              <Contact_from
                placeholderName={contact?.placeholder?.name}
                placeholderEmail={contact?.placeholder?.email}
                placeholderMessage={contact?.placeholder?.message}
                process={contact?.button?.loading}
                success={contact?.button?.loaded}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
