import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CTABox from "@/components/sections/CTABox";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#122023]">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <IndustriesSection />
      <ServicesSection />
      <ImpactSection />
      <CTABox />
      <Footer />
    </main>
  );
}
