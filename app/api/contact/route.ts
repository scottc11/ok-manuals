import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    const emailData = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["scott@ok200.ca"],
      subject: subject || `Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <h3>Message:</h3>
        <p>${String(message).replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      id: emailData?.data?.id || "no-id-returned",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email", details: error.message },
      { status: 500 },
    );
  }
}
