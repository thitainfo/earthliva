interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-sm font-sans font-600 uppercase tracking-widest mb-3 ${
            light ? "text-earth-gold" : "text-earth-green"
          }`}
          style={{ fontWeight: 600, color: light ? "var(--earth-gold)" : "var(--earth-green)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-balance"
        style={{ color: light ? "white" : "var(--earth-text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
          style={{ color: light ? "rgba(255,255,255,0.80)" : "var(--earth-muted)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
