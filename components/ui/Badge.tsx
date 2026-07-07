import type { ReactNode } from "react";

const tones = {
  jaune: "bg-jaune-100 text-jaune-800 border-jaune-300",
  gold: "bg-gold/10 text-gold border-gold/30",
  ink: "bg-ink/5 text-ink border-ink/10",
  new: "bg-ink text-jaune-300 border-ink",
} as const;

export function Badge({
  children,
  tone = "jaune",
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
