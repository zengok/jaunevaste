import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ürün Güvenliği",
  description:
    "Jaune Vaste ürün güvenliği bilgilendirmesi: içerik testleri, ÜTS kayıtları ve güvenli kullanım önerileri.",
  path: "/urun-guvenligi",
});

export default function ProductSafetyPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Ürün Güvenliği
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/75">
          <p>
            Jaune Vaste olarak tüm ürünlerimiz, yürürlükteki kozmetik
            mevzuatına uygun şekilde üretilir ve piyasaya sunulmadan önce
            gerekli bildirim süreçlerinden geçirilir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            ÜTS Kaydı
          </h2>
          <p>
            Ürünlerimizin ÜTS (Ürün Takip Sistemi) kayıt bilgilerine her
            ürün detay sayfasından ulaşabilir, barkod bilgisiyle{" "}
            <Link href="/uts-bilgilendirme" className="text-gold hover:underline">
              resmi ÜTS sorgulama sayfası
            </Link>{" "}
            üzerinden doğrulama yapabilirsiniz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Güvenli Kullanım Önerileri
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Ürünleri yalnızca etiketinde belirtilen amaçla kullanınız.</li>
            <li>İlk kullanımdan önce küçük bir cilt bölgesinde test ediniz.</li>
            <li>Tahriş, kızarıklık veya alerjik reaksiyon durumunda kullanımı bırakınız.</li>
            <li>Ürünleri çocukların ulaşamayacağı yerde saklayınız.</li>
            <li>Ürünleri doğrudan güneş ışığından uzak, serin ve kuru ortamda saklayınız.</li>
          </ul>
          <h2 className="font-display text-lg font-bold text-ink">
            Şikayet ve Bildirim
          </h2>
          <p>
            Ürünlerimizle ilgili herhangi bir olumsuz durumla karşılaşmanız
            halinde lütfen{" "}
            <Link href="/iletisim" className="text-gold hover:underline">
              iletişim sayfamız
            </Link>{" "}
            üzerinden bize bildiriniz.
          </p>
        </div>
      </Container>
    </section>
  );
}
