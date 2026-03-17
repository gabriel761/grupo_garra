import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicosIntroSection() {
  return (
    <section className="w-full bg-[#122023] px-4 md:px-12 xl:px-[66px] py-12 xl:py-[96px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 xl:gap-[45px]">
        {/* Section Header */}
        <SectionHeader title="Nossos serviços" />

        {/* Description text */}
        <div className="flex flex-col gap-6">
          <p
            className="text-white font-medium text-lg md:text-2xl xl:text-[40px] leading-snug"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            O Grupo Garra oferece um portfólio amplo e integrado de soluções
            para atender diferentes setores da indústria, construção civil,
            logística marítima e energia.
          </p>
          <p
            className="text-white font-medium text-lg md:text-2xl xl:text-[40px] leading-snug"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Atuamos desde a metalurgia e fabricação de equipamentos até a
            manutenção técnica de máquinas, estruturas e sistemas complexos — em
            terra, no mar e no ar. Essa diversidade nos permite adaptar às
            necessidades específicas de cada projeto com agilidade, precisão e
            confiabilidade.
          </p>
        </div>

        {/* Bottom divider */}
        <hr className="border-0 border-t border-white opacity-40 w-full" />
      </div>
    </section>
  );
}
