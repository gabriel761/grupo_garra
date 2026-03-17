import Image from "next/image";

interface ServiceItem {
  title: string;
  iconSrc: string;
  iconAlt: string;
  iconSize?: number;
}

const services: ServiceItem[] = [
  {
    title: "Metalurgia de outros metais não-ferrosos",
    iconSrc:
      "http://localhost:3845/assets/d479d56ef09bf7d80b44cb755afb6a638647b292.svg",
    iconAlt: "Ícone de lingotes de metal",
  },
  {
    title: "Metalurgia de outros metais não-ferrosos",
    iconSrc:
      "http://localhost:3845/assets/a57db61874806735e916945f7b4501382efda469.svg",
    iconAlt: "Ícone de fundição de metais",
  },
  {
    title:
      "Manutenção e reparação de tanques, reservatórios metálicos e caldeiras, exceto para veículos",
    iconSrc:
      "http://localhost:3845/assets/5b338bf3d39fc520b62b6679ccb9fa9133b6f96b.svg",
    iconAlt: "Ícone de caldeira",
  },
  {
    title:
      "Manutenção e reparação de geradores, transformadores e motores elétricos",
    iconSrc:
      "http://localhost:3845/assets/fd0f94bc45a13082f67d33becccadde50baf10d3.svg",
    iconAlt: "Ícone de chave e engrenagem com raio",
  },
  {
    title:
      "Manutenção e reparação de outras máquinas e equipamentos para usos industriais",
    iconSrc:
      "http://localhost:3845/assets/bc36438ca6827fdb6d03bf141a6c0b9e7106901d.svg",
    iconAlt: "Ícone de chave e fábrica",
  },
  {
    title: "Manutenção e reparação de embarcações e estruturas flutuantes",
    iconSrc:
      "http://localhost:3845/assets/d76f8cb235b7ba5f2bf620f26a4913e7d09f4a0e.svg",
    iconAlt: "Ícone de embarcação e chave",
  },
  {
    title: "Navegação de apoio marítimo",
    iconSrc:
      "http://localhost:3845/assets/7fda7d77890f9d10a0975ef8b495a480e07e5e8f.svg",
    iconAlt: "Ícone de navio",
  },
  {
    title: "Instalação de máquinas e equipamentos industriais",
    iconSrc:
      "http://localhost:3845/assets/62af71b2712b4ba190b5d1969ad15b7f4eb65651.svg",
    iconAlt: "Ícone de engrenagens com check",
  },
  {
    title:
      "Fabricação de máquinas e equipamentos para a prospecção e extração de petróleo, peças e acessórios",
    iconSrc:
      "http://localhost:3845/assets/f30149b287c46cad9e0d00447a9cd77a1717d341.svg",
    iconAlt: "Ícone de barril de petróleo",
  },
  {
    title: "Manutenção e reparação de máquinas motrizes não-elétricas",
    iconSrc:
      "http://localhost:3845/assets/0ca3cbe8ba66d38268cb5b2ed3872b448180efd1.svg",
    iconAlt: "Ícone de chave e engrenagem",
  },
  {
    title: "Recuperação de materiais metálicos, exceto alumínio",
    iconSrc:
      "http://localhost:3845/assets/06caa7875f6dceca7f79d97240c3d4b552906a65.svg",
    iconAlt: "Ícone de reciclagem de metais",
  },
  {
    title: "Construção de edifícios",
    iconSrc:
      "http://localhost:3845/assets/eb0fa9631517c2ebceb970ef281905530c33d4c7.svg",
    iconAlt: "Ícone de prédios",
  },
  {
    title: "Obras portuárias, marítimas e fluviais",
    iconSrc:
      "http://localhost:3845/assets/99f2c8c6be106716099286ac538407dd1efeda97.svg",
    iconAlt: "Ícone de cone de construção",
  },
  {
    title: "Obras de alvenaria",
    iconSrc:
      "http://localhost:3845/assets/268884bd21428057baa4a8524b353127b57e19f5.svg",
    iconAlt: "Ícone de tijolos",
  },
  {
    title:
      "Serviços especializados para construção não especificados anteriormente",
    iconSrc:
      "http://localhost:3845/assets/9ef9a8db088eaa7123a1f258a5cb16265604727d.svg",
    iconAlt: "Ícone de grua e cone",
  },
  {
    title: "Navegação de apoio portuário",
    iconSrc:
      "http://localhost:3845/assets/9ef9a8db088eaa7123a1f258a5cb16265604727d.svg",
    iconAlt: "Ícone de grua e navio",
  },
  {
    title: "Comércio atacadista de ferragens e ferramentas",
    iconSrc:
      "http://localhost:3845/assets/532bb772c8902cf421f07c63d328a523b8d48d61.svg",
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
