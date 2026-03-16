import Image from "next/image";

interface ButtonProps {
  label: string;
  variant?: "primary" | "dark" | "contact";
  href?: string;
  className?: string;
}

export default function Button({
  label,
  variant = "primary",
  href = "#",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold text-base transition-opacity hover:opacity-90 cursor-pointer";

  const styles: Record<string, string> = {
    primary: "bg-[#e1fcad] text-black pl-5 pr-1 py-1",
    dark: "bg-[#122023] text-[#e1fcad] pl-5 pr-1 py-1",
    contact: "bg-[#122023] text-[#e1fcad] pl-5 pr-1 py-1 border border-[#e1fcad]",
  };

  const circleStyles: Record<string, string> = {
    primary: "bg-black",
    dark: "bg-[#e1fcad]",
    contact: "bg-[#e1fcad]",
  };

  const arrowColors: Record<string, string> = {
    primary: "#e1fcad",
    dark: "#122023",
    contact: "#122023",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
        {label}
      </span>
      <span
        className={`${circleStyles[variant]} rounded-full w-[46px] h-[46px] flex items-center justify-center shrink-0`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke={arrowColors[variant]}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
