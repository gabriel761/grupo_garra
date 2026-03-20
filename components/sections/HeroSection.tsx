import Image from "next/image";
import Button from "@/components/ui/Button";
import Logo from "@/public/assets/logo.png"
import HomemDistancia from "@/public/assets/homem-na-distancia2.png"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative max-w-[1280px] m-auto min-h-[541px] md:min-h-[798px] xl:min-h-[718px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HomemDistancia.src}
          alt="Engenheiro com capacete olhando para o horizonte ao pôr do sol"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(5,27,10,0.6)]" />
      </div>

      {/* Vertical decorative lines — desktop only */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none">
        {[18.2, 50.1, 81.9].map((pct, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white opacity-20"
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-12 xl:px-0 max-w-[1122px] w-full gap-5 md:gap-6 xl:gap-7 py-16">
        {/* Logo */}
        <div className="relative w-[100px] h-[80px] md:w-[160px] md:h-[130px] xl:w-[200px] xl:h-[160px]">
          <Image
            src={Logo.src}
            alt="Logo Grupo Garra"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold leading-none text-4xl md:text-6xl xl:text-[96px]"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Engenharia de precisão para construir o futuro.
        </h1>

        {/* Subtitle */}
        <p
          className="text-white font-medium leading-snug text-lg md:text-2xl xl:text-[32px] max-w-[700px] xl:max-w-[869px]"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Soluções em engenharia, metalurgia e manutenção para setores
          estratégicos.
        </p>

        <Button label="Saiba mais" variant="primary" href="#intro" />
      </div>
    </section>
  );
}
