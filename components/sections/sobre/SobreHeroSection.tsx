import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SobreHeroSection() {
  return (
    <section className="w-full bg-[#122023]">
      {/* Top content: two-column text block */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 xl:px-[62px] pt-10 xl:pt-[74px] pb-10">
        {/* Top divider */}
        <hr className="border-0 border-t border-white opacity-30 w-full mb-8 xl:mb-10" />

        {/* Two-column layout */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[120px] items-start">
          {/* Left: title + subtitle */}
          <div className="flex flex-col gap-4 xl:gap-[10px] flex-1">
            <h1
              className="text-white font-bold text-2xl md:text-3xl xl:text-[32px] leading-none"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Sobre nós
            </h1>
            <p
              className="text-white font-medium text-base md:text-lg xl:text-[20px] leading-snug"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              O Grupo Garra oferece soluções em fabricação, montagem e
              manutenção no setor industrial, marítimo e construção civil com
              foco em eficiência, segurança e resultado.
            </p>
          </div>

          {/* Right: tagline */}
          <p
            className="text-white font-medium text-2xl md:text-3xl xl:text-[40px] leading-snug flex-1"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Engenharia que entrega, estrutura que transforma.
          </p>
        </div>
      </div>

      {/* Full-width hero photo */}
      <div className="relative w-full h-[260px] md:h-[420px] xl:h-[594px]">
        <Image
          src="http://localhost:3845/assets/6e83ea0f4179de1b338be6c298512afa4612d928.png"
          alt="Profissionais da construção civil usando coletes refletivos e capacetes, sorrindo e apertando as mãos em um canteiro de obras"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
