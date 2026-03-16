"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Nossos projetos", href: "#industrias" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full z-50 relative">
      <div className="flex items-center justify-between px-4 py-2 xl:px-16 max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] shrink-0">
            <Image
              src="http://localhost:3845/assets/cd0831c80bcb13bf4f9f6e13e1edf3f4d20c97ae.png"
              alt="Logo Grupo Garra"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span
            className="text-black font-bold text-xl xl:text-2xl leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Grupo Garra
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black text-sm xl:text-base font-medium hover:text-[#122023] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black text-base font-medium hover:text-[#122023] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
