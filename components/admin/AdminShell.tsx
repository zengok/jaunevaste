import Link from "next/link";
import { logout } from "@/app/admin/login/actions";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/urunler", label: "Ürünler" },
  { href: "/admin/kategoriler", label: "Kategoriler" },
  { href: "/admin/yorumlar", label: "Yorumlar" },
  { href: "/admin/seo", label: "SEO" },
];

export function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 bg-ivory">
      <aside className="hidden w-60 shrink-0 border-r border-ink/8 bg-white sm:flex sm:flex-col">
        <div className="border-b border-ink/8 px-6 py-5">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-display text-lg font-bold text-ink">Jaune</span>
            <span className="font-display text-lg font-bold text-gold">Vaste</span>
          </Link>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-ink/40">
            Admin Panel
          </p>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Admin menü">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-ink/70 hover:bg-cream hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-ink/8 px-4 py-4">
          <p className="truncate px-2 text-xs text-ink/45">{email}</p>
          <form action={logout}>
            <button
              type="submit"
              className="mt-2 w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-ink/70 hover:bg-cream hover:text-ink"
            >
              Çıkış Yap
            </button>
          </form>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-ink/8 bg-white px-4 py-3 sm:hidden">
          <span className="font-display text-lg font-bold text-ink">
            Jaune <span className="text-gold">Vaste</span> Admin
          </span>
          <form action={logout}>
            <button type="submit" className="text-sm font-semibold text-ink/60">
              Çıkış
            </button>
          </form>
        </header>
        <nav
          className="flex gap-1 overflow-x-auto border-b border-ink/8 bg-white px-3 py-2 sm:hidden"
          aria-label="Admin menü (mobil)"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-ink/65 hover:bg-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
