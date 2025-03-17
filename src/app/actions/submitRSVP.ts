"use server";

import { Resend } from "resend";
import { createClient } from "../utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitRSVP(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name");
  const email = formData.get("email");
  const accompany = formData.get("accompany");
  const attendance = formData.get("attendance");

  //   console.log(formData, "FormData-submitRSVP.ts");

  const { data, error } = await supabase.from("rsvps").insert([
    {
      name,
      email,
      accompany,
      attendance,
    },
  ]);

  console.log(data, "data_submitRSVP");

  if (error) {
    console.error("Error inserting RSVP", error);
    return { success: false, message: "Failed to submit RSVP", error };
  }

  try {
    await resend.emails.send({
      from: "RSVP <onboarding@resend.dev>",
      to: "joshua.sigston@outlook.com",
      subject: "New RSVP submission",
      html: `        
        <h1>New RSVP Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number of Guests:</strong> ${accompany}</p>
        <p><strong>Attendance:</strong> ${attendance}</p>
        `,
    });
  } catch (error) {
    console.error("Error sending email", error);
  }

  return { success: true, message: "RSVP submitted successful" };
}
