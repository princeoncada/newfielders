import * as React from "react";
import {
  Html,  Text,
  Body,  Head,
  Container,  Preview,
  Heading,  Tailwind,
  Img,  Section,
  Link,} from "@react-email/components";

// https://react.email/docs/introduction

interface EmailTemplateProps {
  email: any;
  name: any;
  phone: any;
  subject: any;
  message: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  subject,
  message,
}) => (
  <Html lang="en">
    <Head></Head>
    <Tailwind>
      <Body className="bg-slate-600">
        <Container>
          <Section>
            <Heading>Message from {name}</Heading>
            <Text>
              <div className="bg-violet-400">
                <p className="text-red-400">Email: {email}</p>
                <p className="text-green-500">Phone: {phone}</p>
                <p className="text-yellow-300">Subject: {subject}</p>
                <p>Message: {message}</p>
              </div>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
