import RSVPTable from "@/app/_components/RSVPTable";
import { signOut } from "@/app/actions/auth";
import { getRSVPs } from "@/app/actions/getRSVPs";
import { Button } from "@/components/ui";
import { House } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { createClient } from "../utils/supabase/server";
import Logout from "../_components/Logout";

const dashboard = async () => {
  const supabase = await createClient();
  const { success, data, message } = await getRSVPs();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!success) {
    return <div className="container mx-auto mt-8 p-4">{message}</div>;
  }
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All RSVPs</h1>
        <div className="flex items-center gap-2">
          {!user ? (
            <Link href={"/login"}>
              <Button variant={"outline"}>
                <House />
              </Button>
            </Link>
          ) : (
            <>
              {" "}
              <div className="flex items-center gap-x-2 text-sm">
                {user?.email}
              </div>
              <Logout />
            </>
          )}
        </div>
      </div>

      {/* TABLE */}
      <RSVPTable data={data || []} />
    </div>
  );
};

export default dashboard;
