import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Şartları",
  description:
    "Jaune Vaste web sitesi kullanım şartları: sitenin kullanımına ilişkin kurallar, fikri mülkiyet ve sorumluluk sınırları.",
  path: "/kullanim-sartlari",
});

export default function TermsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Kullanım Şartları
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            {site.url} adresli internet sitesini kullanarak aşağıdaki
            şartları kabul etmiş sayılırsınız.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Fikri Mülkiyet
          </h2>
          <p>
            Sitede yer alan tüm görsel, metin, logo ve marka unsurları{" "}
            {site.name}&apos;e aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya
            ticari amaçla kullanılamaz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Ürün Bilgileri
          </h2>
          <p>
            Sitede yer alan ürün bilgileri, görselleri ve içerikleri
            bilgilendirme amaçlıdır. Ürün özelliklerinde önceden haber
            verilmeksizin değişiklik yapma hakkı saklıdır.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Sorumluluk Sınırlaması
          </h2>
          <p>
            Site içeriğinin doğruluğu için makul özen gösterilmekle birlikte,
            içerikteki olası hata ve eksikliklerden doğabilecek zararlardan
            {" "}
            {site.name} sorumlu tutulamaz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Değişiklikler
          </h2>
          <p>
            Bu kullanım şartları önceden haber verilmeksizin güncellenebilir.
            Güncel şartlar bu sayfada yayınlanır.
          </p>
        </div>
      </Container>
    </section>
  );
}
