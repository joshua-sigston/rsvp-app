"use server";

import { createClient } from "../utils/supabase/server";

export async function getRSVPs() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("rsvps").select("*");

  if (error) {
    console.error("Error fetching RSVP list", error);
    return { success: false, message: "Failed to fetch list" };
  }

  return { success: true, data };
}
