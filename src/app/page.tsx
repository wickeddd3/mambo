import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import SectionClients from "@/components/SectionClients";
import SectionFeatures from "@/components/SectionFeatures";
import SectionShowcase from "@/components/SectionShowcase";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <SectionHero />
      <SectionClients />
      <SectionFeatures />
      <SectionShowcase />
    </main>
  );
}
