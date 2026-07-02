import { usePageReady } from "@/context/loading_context";
import Contact_from from "./contact_from";
import Stagger_heading from "@/animations/stagger_heading/stagger_heading";
import Stagger_word from "@/animations/stagger_word/stagger_word";

const PARAGRAPH_STYLES =
  "font-secondary font-body-secondary text-b-m leading-relaxed";

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

  const { name, email, message } = placeholder || {};

  const { loading, loaded } = button || {};

  const { isReady } = usePageReady();

  return (
    <section className="bg-background overflow-hidden px-section pb-35 pt-2.5 h-screen">
      <div className="w-full h-full mx-auto max-w-400">
        <div className="flex flex-col md:gap-30 gap-15">
          <Stagger_heading
            as="h1"
            delay={0.2}
            controlled
            animate={isReady}
            className="text-fd-l font-primary font-display uppercase justify-center leading-tightest"
          >
            {title}
          </Stagger_heading>
          <div className="w-full flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-10">
            <div className="flex lg:flex-row sm:flex-col gap-10">
              <div className="flex flex-col gap-5">
                <Stagger_word
                  as="p"
                  delay={0.4}
                  controlled
                  animate={isReady}
                  className={`${PARAGRAPH_STYLES} capitalize max-w-45`}
                >
                  {location}
                </Stagger_word>
                <div className="flex flex-col">
                  <Stagger_word
                    as="p"
                    delay={0.5}
                    controlled
                    animate={isReady}
                    className={`${PARAGRAPH_STYLES} capitalize`}
                  >
                    {dev}
                  </Stagger_word>
                  <Stagger_word
                    as="p"
                    delay={0.5}
                    controlled
                    animate={isReady}
                    className={`${PARAGRAPH_STYLES} capitalize`}
                  >
                    {days}
                  </Stagger_word>
                  <Stagger_word
                    as="p"
                    delay={0.6}
                    controlled
                    animate={isReady}
                    className={`${PARAGRAPH_STYLES} capitalize`}
                  >
                    {hours}
                  </Stagger_word>
                </div>
              </div>
              <Stagger_word
              as="p"
              delay={0.6}
              controlled
              animate={isReady} 
              className={`max-w-50 ${PARAGRAPH_STYLES}`}>{description}</Stagger_word>
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
