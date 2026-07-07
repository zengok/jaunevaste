import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const trustItems = [
  {
    icon: "🔍",
    title: "ÜTS / Barkod Şeffaflığı",
    text: "Ürünlerimizin kayıt bilgilerini şeffaf şekilde paylaşıyoruz; barkod ile sorgulayabilirsiniz.",
    href: "/uts-bilgilendirme",
  },
  {
    icon: "🛒",
    title: "Güvenli Alışveriş Kanalları",
    text: "Trendyol başta olmak üzere yalnızca resmi satış noktalarımızdan alışveriş yapın.",
    href: "/satis-noktalari",
  },
  {
    icon: "📋",
    title: "Güncel Ürün Bilgileri",
    text: "İçerik, kullanım ve uyarı bilgileri her ürünün detay sayfasında eksiksiz yer alır.",
    href: "/urun-guvenligi",
  },
  {
    icon: "💬",
    title: "Hızlı İletişim",
    text: "Sorularınız için WhatsApp ve iletişim formu üzerinden bize kolayca ulaşın.",
    href: "/iletisim",
  },
];

export function TrustBlocks() {
  return (
    <section className="bg-soft py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Neden Jaune Vaste?"
          title="Güvenle tercih edin"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-card bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
