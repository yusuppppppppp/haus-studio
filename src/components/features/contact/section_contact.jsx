import Contact_from from "./contact_from";

const PARAGRAPH_STYLES = "font-secondary font-body-secondary text-b-m leading-relaxed";

export default function Section_contact({ contact }) {
  const {
    title,
    location,
    dev,
    days,
    hours,
    description,
    placeholder,
    button,
  } = contact || {};

  const {
    name,
    email,
    message,
  } = placeholder || {};

  const {
    loading,
    loaded,
  } = button || {};

  return (
    <section className="bg-background overflow-hidden px-section pb-35 pt-2.5">
      <div className="w-full h-full mx-auto max-w-400">
        <div className="flex flex-col md:gap-30 gap-15">
          <h1 className="text-fd-l font-primary font-display uppercase text-center leading-tightest">
            {title}
          </h1>
          <div className="w-full flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-10">
            <div className="flex lg:flex-row sm:flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className={`${PARAGRAPH_STYLES} capitalize max-w-45`}>
                  {location}
                </h2>
                <div className="flex flex-col">
                  <p className={`${PARAGRAPH_STYLES} capitalize`}>
                    {dev}
                  </p>
                  <p className={`${PARAGRAPH_STYLES} capitalize`}>
                    {days}
                  </p>
                  <p className={`${PARAGRAPH_STYLES} capitalize`}>
                    {hours}
                  </p>
                </div>
              </div>
              <p className={`max-w-50 ${PARAGRAPH_STYLES}`}>
                {description}
              </p>
            </div>
            <div className="lg:w-[50%] sm:w-[63%] w-full">
              <Contact_from
                placeholderName={name}
                placeholderEmail={email}
                placeholderMessage={message}
                process={loading}
                success={loaded}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
