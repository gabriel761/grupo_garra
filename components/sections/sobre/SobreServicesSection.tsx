import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SobreServicesSection() {
  return (
    <section className="relative w-full min-h-[541px] md:min-h-[635px] flex flex-col items-center justify-center overflow-hidden px-4 gap-8 md:gap-10">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="http://localhost:3845/assets/7f5f8092872c17f0b767b3d653742dbe1e9e172b.png"
          alt="Equipe de engenharia trabalhando"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(21,32,19,0.7)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 text-center max-w-[1280px] w-full">
        <h2
          className="text-white font-bold leading-tight text-2xl md:text-4xl xl:text-[48px]"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Saiba mais em detalhe sobre os nossos
          <br className="hidden md:block" />
          serviços e indústrias
        </h2>
        <Button label="Nossos Serviços" variant="primary" href="/#servicos" />
      </div>
    </section>
  );
}
