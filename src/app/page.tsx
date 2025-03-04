import Image from "next/image";
import RSVPForm from "./_components/RSVPForm";

export default function Home() {
  return (
      <main className="flex items-center justify-center bg-slate-100">
        <RSVPForm />
      </main>
  );
}
