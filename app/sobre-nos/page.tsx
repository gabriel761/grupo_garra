import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SobreHeroSection from "@/components/sections/sobre/SobreHeroSection";
import AboutIntroSection from "@/components/sections/sobre/AboutIntroSection";
import ValuesSection from "@/components/sections/sobre/ValuesSection";
import SobreServicesSection from "@/components/sections/sobre/SobreServicesSection";
import CTABox from "@/components/sections/CTABox";

export const metadata: Metadata = {
  title: "Sobre Nós — Grupo Garra",
  description:
    "Conheça o Grupo Garra: mais de 30 anos de expertise em fabricação, montagem e manutenção industrial. Engenharia que entrega, estrutura que transforma.",
  keywords: [
    "sobre o grupo garra",
    "engenharia industrial",
    "fabricação de peças",
    "manutenção industrial",
    "história grupo garra",
  ],
};

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-[#122023]">
      <Navbar />
      <SobreHeroSection />
      <AboutIntroSection />
      <ValuesSection />
      <SobreServicesSection />
      <CTABox />
      <Footer />
    </main>
  );
}
