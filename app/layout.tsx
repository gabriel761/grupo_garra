import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Garra — Engenharia de Precisão",
  description:
    "O Grupo Garra atua na fabricação de peças e montagem de máquinas para os principais setores industriais do país. Soluções em engenharia, metalurgia e manutenção para setores estratégicos.",
  keywords: [
    "engenharia",
    "metalurgia",
    "manutenção industrial",
    "petróleo",
    "construção civil",
    "portos",
    "grupo garra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${rajdhani.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
