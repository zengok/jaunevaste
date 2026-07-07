import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { salesPoints } from "@/data/sales-points";

export const metadata: Metadata = buildMetadata({
  title: "Teslimat Bilgileri",
  description:
    "Jaune Vaste ürünlerinin teslimat süreçleri hakkında bilgilendirme. Kargo ve teslimat süreleri satın alım yapılan pazaryerine göre değişir.",
  path: "/teslimat-bilgileri",
});

export default function ShippingPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Teslimat Bilgileri
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            Jaune Vaste ürünleri şu anda resmi satış noktalarımız (
            {salesPoints.map((p) => p.name).join(", ")}) üzerinden satışa
            sunulmaktadır. Kargo süreleri, kargo firması seçimi ve teslimat
            takibi, satın alım yaptığınız platformun kendi lojistik
            altyapısı üzerinden yürütülür.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Kargo Takibi
          </h2>
          <p>
            Siparişinizin kargo durumunu, satın alım yaptığınız pazaryerinin
            sipariş takip sayfasından anlık olarak görüntüleyebilirsiniz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            E-ticaret Fazı
          </h2>
          <p>
            Resmi web sitemiz üzerinden doğrudan satış açıldığında, teslimat
            süreleri, kargo ücretleri ve bölgesel teslimat bilgileri bu
            sayfada güncellenecektir.
          </p>
        </div>
      </Container>
    </section>
  );
}
