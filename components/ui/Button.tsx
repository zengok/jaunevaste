import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-jaune-500 text-ink hover:bg-jaune-400 shadow-soft hover:shadow-lift",
  secondary:
    "bg-ink text-white hover:bg-ink/85",
  outline:
    "border border-ink/15 bg-white/60 text-ink hover:border-gold hover:text-gold",
  ghost: "text-cocoa hover:text-gold",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
} as const;

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  external?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
