import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CTABox() {
  return (
    <section
      id="contato"
      className="relative w-full flex items-center justify-center overflow-hidden py-16 md:py-20 xl:py-[75px] px-4 min-h-[500px] md:min-h-[600px] xl:min-h-[637px]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="http://localhost:3845/assets/ffc63d733a4b0cc47d2a91bf1195e3b1c8c8243d.png"
          alt="Padrão geométrico Grupo Garra"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 w-full max-w-[646px] mx-auto">
        {/* Logo */}
        <div className="relative w-[120px] h-[100px] md:w-[180px] md:h-[150px] xl:w-[240px] xl:h-[200px]">
          <Image
            src="http://localhost:3845/assets/cd0831c80bcb13bf4f9f6e13e1edf3f4d20c97ae.png"
            alt="Logo Grupo Garra"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Brand name */}
        <h2
          className="font-bold leading-none text-black text-4xl md:text-6xl xl:text-8xl"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Grupo Garra
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#122023] font-medium text-lg md:text-xl xl:text-[32px] leading-snug"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Entre em contato conosco
        </p>

        <Button label="Entre em contato" variant="contact" href="mailto:contato@grupogarra.com.br" />
      </div>
    </section>
  );
}
