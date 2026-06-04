import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Tailwind,
} from "@react-email/components";

export default function Contact_email({ name, email, message }) {
  return (
    <>
      <Html>
        <Tailwind>
          <Body className="bg-background p-10">
            <Section>
              <Container>
                <Heading className="font-primary font-body-primary text-h2 leading-tightest">
                  New Massage
                </Heading>
                <Text className="font-secondary font-body-primary text-b-m leading-relaxed">
                  {name}
                </Text>
                <Text className="font-secondary font-body-primary text-b-m leading-relaxed">
                  {email}
                </Text>
                <Text className="font-secondary font-body-primary text-b-m leading-relaxed">
                  {message}
                </Text>
              </Container>
            </Section>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
}
