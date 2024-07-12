import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { render } from "@react-email/components";
import EmailTemplate from "../../components/EmailTemplate";

export async function POST(request: NextRequest) {
  const { name, email, phone, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const htmlString = render(
    EmailTemplate({
      name,
      email,
      phone,
      subject,
      message,
    }) as React.ReactElement
  );

  const mailOptions: Mail.Options = {
    from: `${name} <${email}>`,
    to: 'kamagalona@mcm.edu.ph',
    subject: subject,
    html: htmlString,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
