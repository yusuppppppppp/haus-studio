import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Tailwind,
  Img,
} from "@react-email/components";

export default function Contact_email({ name, email, message }) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-zinc-100 px-4 py-10 font-mono">
          <Container className="mx-auto max-w-150">
            <Section className="rounded-[10px] bg-white px-5 pt-5 pb-14">
              <Section className="mb-10">
                <Img
                  src="https://fewvsbzmvoiaynrjqbma.supabase.co/storage/v1/object/public/haus_assets/sectionFooter/Logo.svg"
                  alt="Logo"
                  width={40}
                  className="mx-auto block w-full max-w-10"
                />
              </Section>

              <Section className="mb-8">
                <Img
                  src="https://fewvsbzmvoiaynrjqbma.supabase.co/storage/v1/object/public/haus_assets/sectionHero/hero-bg.webp"
                  alt="contact benner"
                  width={600}
                  className="mx-auto block w-full max-w-150 rounded-xl"
                />
              </Section>

              <Section className="max-w-105.5 text-center">
                <Text className="mt-0 mb-3 text-[13px] text-zinc-500 capitalize">
                  new contact message
                </Text>

                <Heading
                  as="h1"
                  className="mt-0 mb-10 text-[30px] leading-10 font-bold text-black uppercase max-w-60 mx-auto text-center"
                >
                  Contact Form Submission
                </Heading>

                <Text className="m-0 mb-10 text-[16px] leading-6.5 text-zinc-700 text-center">
                  " {message} "
                </Text>

                <Text className="m-0 text-[16px] leading-6.5 text-zinc-700">
                  from : {name}
                </Text>

                <Text className="m-0 mb-2 text-[16px] leading-6.5 text-zinc-700">
                  email : {email}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
