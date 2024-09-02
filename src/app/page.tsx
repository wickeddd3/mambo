import Navbar from "@/components/Navbar";
import SectionClients from "@/components/SectionClients";
import SectionHero from "@/components/SectionHero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <SectionHero />
      <SectionClients />
    </main>
  );
}
