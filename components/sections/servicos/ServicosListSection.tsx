import Image from "next/image";
import metalurgia from "@/public/assets/icon-metalurgia-1.svg"
import metalurgia2 from "@/public/assets/Group 258.png"
import tanque from "@/public/assets/icon-caldeira.svg"
import geradores from "@/public/assets/Group 248.png"
import manutencaoMaquinas from "@/public/assets/Group 250.png"
import manutencaoMaritima from "@/public/assets/Group 266.png"
import embarcacao from "@/public/assets/icon-embarcacoes.svg"
import instalacaoMaquinas from "@/public/assets/Group 255.png"
import barrilPetroleo from "@/public/assets/icon-prospeccao-petroleo.svg"
import naoEletricos from "@/public/assets/Group 256.png"
import recuperacaoMetais from "@/public/assets/Group 259.png"
import predios from "@/public/assets/Group 261.png"
import obrasPortuarias from "@/public/assets/Group 262.png"
import obrasAlvenaria from "@/public/assets/Group 263.png"
import obrasNaoEspecificadas from "@/public/assets/Group 267.png"
import apoioPortuario from "@/public/assets/Group 268.png"
import comercioFerramentas from "@/public/assets/Group 265.png"

interface ServiceItem {
  title: string;
  iconSrc: string;
  iconAlt: string;
  iconSize?: number;
}

const services: ServiceItem[] = [
  {
    title: "Metalurgia de outros metais não-ferrosos",
    iconSrc:metalurgia.src,
    iconAlt: "Ícone de lingotes de metal",
  },
  {
    title: "Metalurgia de outros metais não-ferrosos",
    iconSrc:metalurgia2.src,
    iconAlt: "Ícone de fundição de metais",
  },
  {
    title:
      "Manutenção e reparação de tanques, reservatórios metálicos e caldeiras, exceto para veículos",
    iconSrc:tanque.src,
    iconAlt: "Ícone de caldeira",
  },
  {
    title:
      "Manutenção e reparação de geradores, transformadores e motores elétricos",
    iconSrc:geradores.src,
    iconAlt: "Ícone de chave e engrenagem com raio",
  },
  {
    title:
      "Manutenção e reparação de outras máquinas e equipamentos para usos industriais",
    iconSrc:manutencaoMaquinas.src,
    iconAlt: "Ícone de chave e fábrica",
  },
  {
    title: "Manutenção e reparação de embarcações e estruturas flutuantes",
    iconSrc: manutencaoMaritima.src,
    iconAlt: "Ícone de embarcação e chave",
  },
  {
    title: "Navegação de apoio marítimo",
    iconSrc:embarcacao.src,
    iconAlt: "Ícone de navio",
  },
  {
    title: "Instalação de máquinas e equipamentos industriais",
    iconSrc:instalacaoMaquinas.src,
    iconAlt: "Ícone de engrenagens com check",
  },
  {
    title:
      "Fabricação de máquinas e equipamentos para a prospecção e extração de petróleo, peças e acessórios",
    iconSrc: barrilPetroleo.src,
    iconAlt: "Ícone de barril de petróleo",
  },
  {
    title: "Manutenção e reparação de máquinas motrizes não-elétricas",
    iconSrc:naoEletricos.src,
    iconAlt: "Ícone de chave e engrenagem",
  },
  {
    title: "Recuperação de materiais metálicos, exceto alumínio",
    iconSrc:recuperacaoMetais.src,
    iconAlt: "Ícone de reciclagem de metais",
  },
  {
    title: "Construção de edifícios",
    iconSrc:predios.src,
    iconAlt: "Ícone de prédios",
  },
  {
    title: "Obras portuárias, marítimas e fluviais",
    iconSrc: obrasPortuarias.src,
    iconAlt: "Ícone de cone de construção",
  },
  {
    title: "Obras de alvenaria",
    iconSrc:obrasAlvenaria.src,
    iconAlt: "Ícone de tijolos",
  },
  {
    title:
      "Serviços especializados para construção não especificados anteriormente",
    iconSrc:obrasNaoEspecificadas.src,
    iconAlt: "Ícone de grua e cone",
  },
  {
    title: "Navegação de apoio portuário",
    iconSrc:apoioPortuario.src,
    iconAlt: "Ícone de grua e navio",
  },
  {
    title: "Comércio atacadista de ferragens e ferramentas",
    iconSrc:comercioFerramentas.src,
    iconAlt: "Ícone de sacola e ferramentas",
  },
];

function ServiceRow({ service }: { service: ServiceItem }) {
  return (
    <div className="flex items-center justify-between gap-6 py-8 md:py-10 xl:py-12 border-b border-white/20 last:border-b-0">
      {/* Title */}
      <p
        className="text-white font-medium text-lg md:text-2xl xl:text-[32px] leading-none flex-1 max-w-[700px]"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        {service.title}
      </p>

      {/* Icon */}
      <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] shrink-0">
        <Image
          src={service.iconSrc}
          alt={service.iconAlt}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export default function ServicosListSection() {
  return (
    <section className="w-full bg-[#122023] px-4 md:px-12 xl:px-[66px] pb-12 xl:pb-[96px]">
      <div className="max-w-[1280px] mx-auto">
        {services.map((service, index) => (
          <ServiceRow key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
