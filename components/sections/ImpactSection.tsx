import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function ImpactSection() {
  return (
    <section
      id="impacto"
      className="w-full bg-[#122023] px-4 md:px-12 xl:px-[66px] py-16 xl:py-24"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 xl:gap-10">
        <SectionHeader title="Nosso impacto" />

        <p
          className="text-white leading-snug text-xl md:text-2xl xl:text-[40px] font-normal"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Atendemos empresas estratégicas em todo o Brasil, promovendo
          eficiência, segurança e desenvolvimento industrial por meio de
          projetos robustos e serviços especializados.
        </p>

        <div className="flex md:justify-start justify-center">
          <Button label="Saiba mais" variant="primary" href="#contato" />
        </div>
      </div>
    </section>
  );
}
