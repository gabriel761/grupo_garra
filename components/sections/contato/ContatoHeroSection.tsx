import Image from "next/image";
import contato from "@/public/assets/contato-hero.png"

export default function ContatoHeroSection() {
  return (
    <section className="w-full bg-[#122023] px-4 md:px-12 xl:px-[73px]">
      <div className="max-w-[1291px] mx-auto py-16 md:py-20 xl:py-[120px]">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-4">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-12 md:gap-16 xl:gap-[92px] flex-1 justify-center md:items-start items-center text-center md:text-left">
            <h1
              className="text-white font-bold text-3xl md:text-4xl xl:text-[48px] leading-none"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Entre em contato
            </h1>

            <a
              href="mailto:Email@gmail.com"
              className="text-white font-medium text-2xl md:text-3xl xl:text-[48px] leading-none hover:text-[#e1fcad] transition-colors"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Email@gmail.com
            </a>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full md:flex-1 h-[300px] md:h-[500px] xl:h-[702px] rounded-lg overflow-hidden">
            <Image
              src={contato.src}
              alt="Pessoa digitando em laptop em ambiente de escritório"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
