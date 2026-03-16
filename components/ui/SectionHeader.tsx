interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`w-full ${className}`}>
      <h2
        className="text-white font-bold text-2xl md:text-3xl xl:text-[32px] leading-none"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        {title}
      </h2>
      <hr className="border-0 border-t border-white opacity-40 mt-4 w-full" />
    </div>
  );
}
