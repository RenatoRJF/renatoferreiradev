import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        
        <Section style={section}>
          <Text style={label}>Name:</Text>
          <Text style={value}>{name}</Text>
        </Section>
        
        <Section style={section}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
        </Section>
        
        <Section style={section}>
          <Text style={label}>Message:</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            This message was sent from your portfolio contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#000000",
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#111111",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const section = {
  padding: "16px 0",
  borderBottom: "1px solid #333333",
};

const label = {
  color: "#888888",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0",
};

const messageText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  marginTop: "32px",
  paddingTop: "16px",
  borderTop: "1px solid #333333",
};

const footerText = {
  color: "#666666",
  fontSize: "12px",
  margin: "0",
};

export default ContactEmail;
