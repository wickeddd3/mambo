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
    <main className="h-full w-full flex-wrap bg-[#09090b]">
      <Navbar />
      <SectionHero />
      <SectionClients />
      <div className="mx-auto h-[1.5px] max-w-7xl bg-gradient-fade-both-side"></div>
      <SectionFeatures />
      <div className="mx-auto h-[1.5px] max-w-lg bg-gradient-fade-both-side"></div>
      <SectionShowcase />
      <div className="mx-auto h-[1.5px] max-w-lg bg-gradient-fade-both-side"></div>
      <SectionCapabilities />
      <SectionPlans />
      <SectionTestimonials />
      <SectionNewsLetter />
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-footer-fade-both-side"></div>
      <Footer />
    </main>
  );
}
