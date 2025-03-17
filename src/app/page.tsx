import Image from "next/image";
import RSVPForm from "./_components/RSVPForm";
import { Button } from "@/components/ui";
import Link from "next/link";
import ClientComponent from "./_components/ClientComponent";

export default function Home() {
  return (
    <main className="flex flex-col space-y-3 h-screen items-center justify-center">
      <ClientComponent />
    </main>
  );
}
