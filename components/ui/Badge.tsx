import type { ReactNode } from "react";

const tones = {
  soft: "bg-soft text-primary-soft border-primary-soft/25",
  gold: "bg-gold/10 text-gold border-gold/30",
  ink: "bg-ink/5 text-ink border-hairline",
  new: "bg-primary text-gold-soft border-primary",
  berry: "bg-berry/10 text-berry border-berry/30",
} as const;

export function Badge({
  children,
  tone = "soft",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
