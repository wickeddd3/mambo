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
    <main className="h-full w-full flex-wrap">
      <Navbar />
      <SectionHero />
      <SectionClients />
      <div className="bg-gradient-fade-both-side mx-auto h-[1.5px] max-w-7xl"></div>
      <SectionFeatures />
      <div className="bg-gradient-fade-both-side mx-auto h-[1.5px] max-w-lg"></div>
      <SectionShowcase />
      <div className="bg-gradient-fade-both-side mx-auto h-[1.5px] max-w-lg"></div>
      <SectionCapabilities />
      <SectionPlans />
      <SectionTestimonials />
      <SectionNewsLetter />
      <div className="bg-gradient-footer-fade-both-side mx-auto h-[1px] max-w-7xl"></div>
      <Footer />
    </main>
  );
}
