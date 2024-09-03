import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import SectionClients from "@/components/SectionClients";
import SectionFeatures from "@/components/SectionFeatures";
import SectionShowcase from "@/components/SectionShowcase";
import SectionCapabilities from "@/components/SectionCapabilities";
import SectionPlans from "@/components/SectionPlans";
import SectionTestimonials from "@/components/SectionTestimonials";
import SectionNewsLetter from "@/components/SectionNewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <SectionHero />
      <SectionClients />
      <SectionFeatures />
      <SectionShowcase />
      <SectionCapabilities />
      <SectionPlans />
      <SectionTestimonials />
      <SectionNewsLetter />
      <Footer />
    </main>
  );
}
