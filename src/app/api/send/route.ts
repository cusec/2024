// import { EmailTemplate } from "@/components/EmailTemplate";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     console.log("body: ", body);
//     const { email, fullname, subject, message } = body;
//     const data = await resend.emails.send({
//       from: "info <info@cusec.net>",
//       to: email,
//       subject: "Hello world",
//       react: EmailTemplate({ fullname: fullname }) as React.ReactElement,
//     });

//     if (data.id === "success") {
//       return NextResponse.json({ message: "Email sent successfully!" });
//     }
//     return NextResponse.json(data);
//   } catch (error) {
//     console.log("error: ", error);
//     return NextResponse.json({ error });
//   }
// }
