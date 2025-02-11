// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Define the request body type
interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
  phone?: string;
  date?: string;
  type: "contact" | "booking";
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, email, message, type, phone, date }: EmailRequestBody =
      await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Construct email message
    const msg = {
      to: process.env.COMPANY_EMAIL as string,
      from: process.env.SENDGRID_VERIFIED_EMAIL as string,
      subject: `${type === "contact" ? "Contact" : "Booking"} Form Submission`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New ${type === "contact" ? "Contact" : "Booking"} Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      ${
        type === "booking"
          ? `
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Booked Date:</strong> ${date}</p>
            `
          : ""
      }
      `,
    };

    // Send email
    await sgMail.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      const sgError = error as sgMail.ResponseError;
      console.error(
        "SendGrid error:",
        sgError.response?.body || sgError.message
      );
    } else {
      console.error("SendGrid error:", error);
    }
    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          (error as sgMail.ResponseError).response?.body ||
          (error as Error).message,
      },
      { status: 500 }
    );
  }
}
