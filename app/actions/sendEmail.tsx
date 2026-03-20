"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import NewContactNotification from "@/components/contact/NewContactNotificationTemplate";

interface sendEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(formData: sendEmailProps) {
  const client_name = formData.name;
  const client_email = formData.email;
  const client_message_subject = formData.subject;
  const client_message = formData.message;

  const emailHtml = await render(
    <NewContactNotification
      clientName={client_name}
      clientEmail={client_email}
      subject={client_message_subject}
      message={client_message}
    />,
  );

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: "olimbamari@gmail.com",
      subject: `New message from ${client_name}`,
      html: emailHtml,
      replyTo: client_email,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email." };
  }
}
