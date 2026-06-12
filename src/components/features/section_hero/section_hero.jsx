"use client";
import Hero_title from "./hero_title";
import Hero_image from "./hero_image";
import Hero_content from "./hero_content";
import Hero_about from "./hero_about";

export default function Section_hero({ hero }) {
  const {
    hero_title_left,
    hero_title_right,
    hero_title_icon,
    hero_image,
    hero_subtitle,
    hero_description,
    heading_hero,
    about,
    button,
  } = hero;

  const { description: headingDescription, number: headingNumber } =
    heading_hero || {};

  const { link: buttonLink, text: buttonText } = button || {};

  const { title: aboutTitle, description: aboutDescription } = about || {};

  return (
    <>
      <section
        id="section_hero"
        className="bg-background relative isolate 2xl:pb-25 lg:pb-0 md:pb-30 sm:pb-0 pb-40"
      >
        <div className="flex flex-col justify-center">
          <Hero_title
            left={hero_title_left}
            icon={hero_title_icon}
            right={hero_title_right}
          />

          <Hero_image image={hero_image} />

          <div className="max-w-400 w-full h-full mx-auto px-section lg:pt-7 md:pt-40 pt-10 z-20 text-n-100 mix-blend-difference">
            <div className="flex flex-row justify-between items-end w-full md:h-125 sm:h-80 h-120">
              <Hero_content
                subtitle={hero_subtitle}
                headingDescription={headingDescription}
                headingNumber={headingNumber}
                description={hero_description}
                buttonLink={buttonLink}
                buttonText={buttonText}
              />

              <Hero_about
                aboutTitle={aboutTitle}
                aboutDescription={aboutDescription}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
