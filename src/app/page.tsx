import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import SectionClients from "@/components/SectionClients";
import SectionFeatures from "@/components/SectionFeatures";
import SectionShowcase from "@/components/SectionShowcase";
import SectionCapabilities from "@/components/SectionCapabilities";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <SectionHero />
      <SectionClients />
      <SectionFeatures />
      <SectionShowcase />
      <SectionCapabilities />
    </main>
  );
}
