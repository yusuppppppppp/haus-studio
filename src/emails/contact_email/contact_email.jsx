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
  const baseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:3000";

  return (
    <Html>
      <Tailwind>
        <Body className="bg-zinc-100 px-4 py-10 font-sans">
          <Container className="mx-auto max-w-150">
            <Section className="rounded-[10px] bg-white px-5 pt-5 pb-14">
              <Section className="mb-10">
                <Img
                  src={`${baseUrl}/assets/images/hero-bg.webp`}
                  alt="contact benner"
                  width={600}
                  className="mx-auto block w-full max-w-150 rounded-xl"
                />
              </Section>

              <Section className="mx-auto max-w-105.5 text-center">
                <Text className="mt-0 mb-6 text-[13px] text-zinc-500">
                  New Contact Message
                </Text>

                <Heading
                  as="h1"
                  className="mt-0 mb-6 text-[40px] leading-11 font-bold text-black"
                >
                  Contact Form Submission
                </Heading>

                <Text className="m-0 mb-4 text-[16px] leading-6.5 text-zinc-700">
                  {name}
                </Text>

                <Text className="m-0 mb-4 text-[16px] leading-6.5 text-zinc-700">
                  {email}
                </Text>

                <Text className="m-0 text-[16px] leading-6.5 text-zinc-700">
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
