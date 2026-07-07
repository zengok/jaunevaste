export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-10 sm:mb-14`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink/65">
          {description}
        </p>
      )}
    </div>
  );
}
