import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const footerColumns = [
  {
    title: "Kurumsal",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/satis-noktalari", label: "Satış Noktaları" },
      { href: "/yorumlar", label: "Müşteri Yorumları" },
      { href: "/bakim-rehberi", label: "Bakım Rehberi" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Ürünler",
    links: [
      { href: "/kategori/dudak-bakimi", label: "Dudak Bakımı" },
      { href: "/kategori/tirnak-bakimi", label: "Tırnak Bakımı" },
      { href: "/kategori/kisisel-bakim", label: "Kişisel Bakım" },
      { href: "/kategori/roll-on", label: "Roll-on / Deodorant" },
      { href: "/kategori/kulak-tikaci", label: "Kulak Tıkacı" },
    ],
  },
  {
    title: "Güven ve Politikalar",
    links: [
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
      { href: "/cerez-politikasi", label: "Çerez Politikası" },
      { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
      { href: "/urun-guvenligi", label: "Ürün Güvenliği" },
      { href: "/uts-bilgilendirme", label: "ÜTS / Barkod Sorgulama" },
      { href: "/iade-ve-degisim", label: "İade ve Değişim" },
      { href: "/teslimat-bilgileri", label: "Teslimat Bilgileri" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-soft">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold text-primary">
              Jaune <span className="text-primary-soft">Vaste</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jaune Vaste Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-soft shadow-soft transition-colors hover:text-primary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.76c-3.15 0-3.52 0-4.77.07-1.08.05-1.66.23-2.05.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.05-.06 1.25-.07 1.62-.07 4.77s0 3.52.07 4.77c.05 1.08.23 1.66.38 2.05.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.05.38 1.25.06 1.62.07 4.77.07s3.52 0 4.77-.07c1.08-.05 1.66-.23 2.05-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.05.06-1.25.07-1.62.07-4.77s0-3.52-.07-4.77c-.05-1.08-.23-1.66-.38-2.05-.2-.51-.44-.88-.82-1.26a3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.05-.38-1.25-.06-1.62-.07-4.77-.07Zm0 3.06a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.76a3.22 3.22 0 1 0 0 6.45 3.22 3.22 0 0 0 0-6.45Zm5.23-2.5a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34Z" />
                </svg>
              </a>
              <a
                href={site.social.trendyol}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Jaune Vaste Trendyol mağazası"
                className="flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-primary-soft shadow-soft transition-colors hover:text-primary"
              >
                Trendyol Mağazamız
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-soft">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>
            Ürünlerimiz resmi satış noktaları üzerinden satışa sunulmaktadır.
          </p>
        </div>
      </Container>
    </footer>
  );
}
