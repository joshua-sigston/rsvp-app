import Image from "next/image";
import RSVPForm from "./_components/RSVPForm";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <RSVPForm />
    </main>
  );
}
