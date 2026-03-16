const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#intro" },
  { label: "Nossos projetos", href: "#industrias" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#122023] px-4 md:px-12 xl:px-[186px] pt-16 xl:pt-[140px] pb-10 xl:pb-[60px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 xl:gap-[157px]">

        {/* Top row: CTA text + nav links */}
        <div className="flex flex-col xl:flex-row items-start xl:items-start gap-10 xl:gap-0 xl:justify-between">
          <p
            className="text-[#e1fcad] font-medium text-xl md:text-2xl xl:text-[40px] leading-snug max-w-full xl:max-w-[500px]"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            Comece o seu projeto hoje! Entre em contato e solicite o seu
            orçamento.
          </p>

          {/* Navigation links */}
          <nav className="flex flex-col gap-4 xl:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#e1fcad] font-semibold text-lg xl:text-[24px] leading-none hover:opacity-75 transition-opacity"
                style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row: giant brand name + copyright */}
        <div className="flex flex-col gap-4 xl:gap-7 items-start w-full">
          <h3
            className="text-[#e1fcad] font-bold leading-none text-6xl md:text-9xl xl:text-[180px] w-full"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Grupo Garra
          </h3>
          <p
            className="text-[#e1fcad] text-sm md:text-base xl:text-[24px] font-normal"
            style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
          >
            ©2025 Grupo Garra todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}
