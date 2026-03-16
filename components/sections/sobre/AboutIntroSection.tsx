import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-[#122023] px-4 md:px-12 xl:px-[50px] py-12 xl:py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-8 xl:gap-[80px] items-start">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-5 xl:gap-[21px]">
          <SectionHeader title="Introdução" />
          <p
            className="text-white font-medium text-base md:text-lg xl:text-[24px] leading-snug"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Mais do que oferecer soluções técnicas, o Grupo Garra tem como
            objetivo fortalecer a base produtiva da indústria nacional e
            internacional, contribuindo para o crescimento sustentável, a
            modernização dos processos e a continuidade das operações nos
            setores mais exigentes da economia.
          </p>
          <p
            className="text-white font-medium text-base md:text-lg xl:text-[24px] leading-snug"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Com expertise em fabricação, montagem e manutenção, buscamos sempre
            entregar resultados consistentes, com alto padrão técnico, segurança
            e compromisso com o cliente.
          </p>
        </div>

        {/* Right: photo */}
        <div className="flex-1 relative w-full h-[220px] md:h-[329px] xl:h-[329px] rounded-sm overflow-hidden">
          <Image
            src="http://localhost:3845/assets/d3a43099483754cc03e6513dc3c63e7a199c25ba.png"
            alt="Engenheira trabalhando em laboratório industrial com laptop e equipamentos de automação"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
