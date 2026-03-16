import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="w-full bg-[#122023] px-4 md:px-12 xl:px-[66px] py-16 xl:py-24"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 xl:gap-10">
        <SectionHeader title="Introdução" />

        <p
          className="text-white leading-snug text-xl md:text-2xl xl:text-[40px] font-normal"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          O Grupo Garra atua na fabricação de peças e montagem de máquinas para
          os principais setores industriais do país. Somos especialistas em
          soluções técnicas para indústrias, portos, construção civil, petróleo
          e transporte marítimo.
        </p>

        <div className="flex md:justify-start justify-center">
          <Button label="Sobre nós" variant="primary" href="#sobre" />
        </div>
      </div>
    </section>
  );
}
