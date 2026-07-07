"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünlerimiz" },
  { href: "/yorumlar", label: "Müşteri Yorumları" },
  { href: "/satis-noktalari", label: "Satış Noktaları" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ivory/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-baseline gap-1" aria-label="Jaune Vaste anasayfa">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">
            Jaune
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-primary-soft">
            Vaste
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-primary" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/urunler"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift"
          >
            Ürünleri Keşfet
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-hairline bg-ivory px-4 pb-6 pt-2 lg:hidden"
          aria-label="Mobil menü"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-muted hover:bg-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/urunler"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-base font-bold text-white"
          >
            Ürünleri Keşfet
          </Link>
        </nav>
      )}
    </header>
  );
}
