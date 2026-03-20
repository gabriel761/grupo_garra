import Image from "next/image";
import newTeam from "@/public/assets/new team.png"

export default function ServicosHeroSection() {
  return (
    <section className="relative w-full min-h-[300px] md:min-h-[380px] xl:min-h-[423px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={newTeam.src}
          alt="Profissionais da indústria trabalhando com equipamentos de precisão"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay */}
        
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 xl:px-[67px] pb-5 xl:pb-[21px] max-w-[1280px] mx-auto w-full">
        <h1
          className="text-white font-bold text-2xl md:text-4xl xl:text-[48px] leading-none max-w-[600px] xl:max-w-[537px]"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Explore nossas soluções industriais sob medida para sua operação.
        </h1>
      </div>
    </section>
  );
}
