import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContatoHeroSection from "@/components/sections/contato/ContatoHeroSection";

export const metadata: Metadata = {
  title: "Contato | Grupo Garra",
  description:
    "Entre em contato com o Grupo Garra. Solicite um orçamento para serviços de metalurgia, construção civil, manutenção industrial, logística marítima e energia.",
  keywords: [
    "contato grupo garra",
    "orçamento industrial",
    "contato engenharia",
    "solicitar orçamento",
    "grupo garra contato",
  ],
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContatoHeroSection />
      </main>
      <Footer />
    </>
  );
}
