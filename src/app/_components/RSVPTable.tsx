"use client";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React, { useState } from "react";

interface RSVP {
  id: string;
  name: string;
  email: string;
  accompany: number;
  attendance: string;
}

interface RSVPTableProps {
  data: RSVP[];
}

const RSVPTable = ({ data }: RSVPTableProps) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((rsvp) =>
    rsvp.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <div className="flex items-center py-4 space-x-3">
        <Input
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button variant={"outline"}>
          <Link href={"/submit-form"}>Submit A RSVP</Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Number of Guests</TableHead>
              <TableHead>Attending</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((rsvp) => (
                <TableRow key={rsvp.id}>
                  <TableCell>{rsvp.name}</TableCell>
                  <TableCell>{rsvp.email}</TableCell>
                  <TableCell>{rsvp.accompany || "/"}</TableCell>
                  <TableCell>{rsvp.attendance}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RSVPTable;
