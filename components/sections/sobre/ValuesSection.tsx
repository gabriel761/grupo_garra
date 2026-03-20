import Image from "next/image";
import cost from "@/public/assets/-cost.png"
import rocket from "@/public/assets/Startup.png"
import time from "@/public/assets/Time Configuration.png"

const values = [
  {
    icon: cost.src,
    iconAlt: "Ícone de custo reduzido",
    title: "Custo reduzido",
    description:
      "Soluções com excelente relação custo-benefício, sem comprometer a qualidade ou a segurança.",
  },
  {
    icon: rocket.src,
    iconAlt: "Ícone de variedade",
    title: "Variedade",
    description:
      "Atuamos em múltiplos setores com um portfólio completo de serviços industriais, metálicos e construtivos.",
  },
  {
    icon: time.src,
    iconAlt: "Ícone de eficiência",
    title: "Eficiência",
    description:
      "Processos otimizados, equipe especializada e entregas precisas para maximizar resultados operacionais.",
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#122023] px-4 md:px-12 xl:px-[60px] py-12 xl:py-[22px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 xl:gap-[80px]">
        {/* Section header: two-column on desktop */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-[260px] items-start">
          {/* Title */}
          <div className="flex-1">
            <hr className="border-0 border-t border-white opacity-30 w-full mb-6" />
            <h2
              className="text-white font-bold text-2xl md:text-3xl xl:text-[40px] leading-none"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Nosso foco e valores
            </h2>
          </div>

          {/* Description */}
          <p
            className="flex-1 text-white font-medium text-base md:text-lg xl:text-[24px] leading-snug"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Nossa equipe técnica trabalha lado a lado com cada cliente para
            entender seus objetivos e desafios operacionais, entregando soluções
            personalizadas que geram valor, eficiência e performance industrial.
          </p>
        </div>

        {/* 3 Cards: row on desktop, column on mobile/tablet */}
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-[84px] justify-center">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-[#1a2c30] flex flex-col items-center text-center gap-6 px-11 py-4 w-full max-w-[330px] min-h-[474px] justify-center"
            >
              {/* Icon */}
              <div className="relative w-[140px] h-[140px] shrink-0">
                <Image
                  src={value.icon}
                  alt={value.iconAlt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Title */}
              <h3
                className="text-white font-semibold text-xl xl:text-[32px] leading-none capitalize"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="text-white font-medium text-base xl:text-[20px] leading-snug"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <hr className="border-0 border-t border-white opacity-30 w-full" />
      </div>
    </section>
  );
}
