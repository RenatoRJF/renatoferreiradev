"use server";

import { redirect } from "next/navigation";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again or contact me directly.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again or contact me directly.",
    };
  }
}
