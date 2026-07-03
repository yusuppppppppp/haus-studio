import { resend } from "@/lib/resend";
import Contact_email from "@/emails/contact_email/contact_email";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Haus Studio <onboarding@resend.dev>",
      to: [process.env.EMAIL],
      subject: "New Massage by Haus Studio",

      react: Contact_email({
        name,
        email,
        message,
      }),
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      },
    );
  }
}
