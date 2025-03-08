import RSVPTable from "@/app/_components/RSVPTable";
import { getRSVPs } from "@/app/actions/getRSVPs";
import { Button } from "@/components/ui";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

const dashboard = async () => {
  const { success, data, message } = await getRSVPs();
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All RSVPs</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Button variant={"outline"}>
              <House />
            </Button>
          </Link>
          {/* LOGOUT */}
          <Button variant={"outline"}>Sign Out</Button>
        </div>
      </div>

      {/* TABLE */}
      <RSVPTable data={data || []} />
    </div>
  );
};

export default dashboard;
