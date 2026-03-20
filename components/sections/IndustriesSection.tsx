import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Petroleo from "@/public/assets/petroleo.png"
import Engine from "@/public/assets/meric-dagli-i_14EbINjKY-unsplash.png"
import Computer from "@/public/assets/computador.png"

const industries = [
  {
    image: Petroleo.src,
    alt: "Plantas industriais com pôr-do-sol ao fundo",
    title:
      "Fabricação de equipamentos e peças para extração e prospecção de petróleo.",
  },
  {
    image: Engine.src,
    alt: "Equipamentos industriais com canos de metal e engrenagens",
    title: "Instalação de máquinas e equipamentos industriais",
  },
  {
    image: Computer.src,
    alt: "Duas pessoas analisando planta de edifício",
    title: "Construção de edifícios",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industrias"
      className="w-full bg-[#122023] px-4 md:px-12 xl:px-[66px] py-12 xl:py-16"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 xl:gap-10">
        <SectionHeader title="Nossas indústrias" />

        {/* Cards grid: 1 col mobile/tablet → 3 col desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="relative w-full max-w-[370px] mx-auto xl:max-w-none h-[400px] md:h-[460px] rounded-lg overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                className="object-cover"
                unoptimized
              />
              
              {/* Text overlay centered vertically */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p
                  className="text-white font-bold text-xl md:text-2xl xl:text-[32px] text-center leading-snug"
                  style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                >
                  {industry.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider + Button */}
        <div className="flex flex-col items-center gap-6 pt-2">
          <hr className="border-0 border-t border-white opacity-30 w-full" />
          <Button label="Veja mais" variant="primary" href="#servicos" />
        </div>
      </div>
    </section>
  );
}
