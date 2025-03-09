"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signIn(
  prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(email, password, "auth");

  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, "auth data");

  if (error) {
    return { error: error.message };
  }

  redirect("/admin/dashboard");
}

export async function signOut() {
  "use server";

  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
