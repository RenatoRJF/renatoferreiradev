import { Resend } from "resend";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";

import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Render the email template
    const emailHtml = await render(
      ContactEmail({
        name,
        email,
        message,
      })
    );

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "contact@renatoferreira.dev",
      to: [process.env.CONTACT_EMAIL || "renatoferreira.dev@gmail.com"],
      subject: `Portfolio Contact: ${name} - ${email}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
