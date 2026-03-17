import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicosHeroSection from "@/components/sections/servicos/ServicosHeroSection";
import ServicosIntroSection from "@/components/sections/servicos/ServicosIntroSection";
import ServicosListSection from "@/components/sections/servicos/ServicosListSection";
import CTABox from "@/components/sections/CTABox";

export const metadata: Metadata = {
  title: "Nossos Serviços | Grupo Garra",
  description:
    "Conheça o portfólio completo de serviços do Grupo Garra: metalurgia, construção civil, manutenção industrial, logística marítima e energia. Soluções integradas para sua operação.",
};

export default function NossosServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicosHeroSection />
        <ServicosIntroSection />
        <ServicosListSection />
        <CTABox />
      </main>
      <Footer />
    </>
  );
}
