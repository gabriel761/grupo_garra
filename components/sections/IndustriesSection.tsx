import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const industries = [
  {
    image:
      "http://localhost:3845/assets/be85e9f589c98379b29a91ea7c9c8853c600792d.png",
    alt: "Plantas industriais com pôr-do-sol ao fundo",
    title:
      "Fabricação de equipamentos e peças para extração e prospecção de petróleo.",
  },
  {
    image:
      "http://localhost:3845/assets/92fc14c031fc53a7f366011574c02c2fd3cc968a.png",
    alt: "Equipamentos industriais com canos de metal e engrenagens",
    title: "Instalação de máquinas e equipamentos industriais",
  },
  {
    image:
      "http://localhost:3845/assets/c7ddb79cce5654ccf4ac9039583017b6043b88b1.png",
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(21,32,19,0.72)]" />
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
