import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ÜTS / Barkod Sorgulama Bilgilendirmesi",
  description:
    "ÜTS (Ürün Takip Sistemi) nedir ve Jaune Vaste ürünlerinin barkod bilgilerini nasıl sorgulayabilirsiniz? Kozmetik ürün güvenliği için ÜTS rehberi.",
  path: "/uts-bilgilendirme",
});

export default function UtsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          ÜTS / Barkod Sorgulama Bilgilendirmesi
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            ÜTS (Ürün Takip Sistemi), Türkiye İlaç ve Tıbbi Cihaz Kurumu
            tarafından işletilen; kozmetik ürünler de dahil olmak üzere
            birçok ürün grubunun kayıt altına alındığı resmi takip
            sistemidir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Neden Önemlidir?
          </h2>
          <p>
            Bir kozmetik ürünün ÜTS kaydının bulunması, ürünün Türkiye&apos;de
            resmi olarak bildirimi yapılarak piyasaya sunulduğunu gösterir.
            Bu, kayıt dışı ve güvenilirliği belirsiz ürünlerden korunmanın
            en etkili yollarından biridir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Nasıl Sorgulanır?
          </h2>
          <p>
            Satın aldığınız ürünün ambalajında yer alan barkod bilgisini
            kullanarak Türkiye İlaç ve Tıbbi Cihaz Kurumu&apos;nun resmi ÜTS
            sorgulama sistemi üzerinden ürünün kaydını doğrulayabilirsiniz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Jaune Vaste Ürünleri
          </h2>
          <p>
            Jaune Vaste olarak tüm ürünlerimizin kayıt süreçlerini şeffaf
            şekilde yürütüyoruz. Her ürün detay sayfasında SKU ve ÜTS kayıt
            durumu bilgisine yer veriyoruz.
          </p>
        </div>
      </Container>
    </section>
  );
}
