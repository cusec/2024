import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const emailToTeam = await resend.emails.send({
      from: `${body.fullName} <formsubmission@2024.cusec.net>`,
      to: "web@cusec.net",
      subject: body.subject,
      react: EmailTemplate({ message: body.message, toTeam: true }),
      text: "",
      reply_to: body.email,
    });

    console.log("emailToTeam: ", emailToTeam);
    if (emailToTeam.id != null) {
      const emailToSender = await resend.emails.send({
        from: "CUSEC 2024 Team <formsubmission@2024.cusec.net>",
        to: body.email,
        subject: "CUSEC 2024 - Thank you for your message!",
        react: EmailTemplate({
          fullName: body.fullName,
          subject: body.subject,
          message: body.message,
          toTeam: false,
        }),
        text: "",
        reply_to: "info@cusec.net",
      });
    }
    return NextResponse.json(emailToTeam);
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ error });
  }
}
