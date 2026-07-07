import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { salesPoints } from "@/data/sales-points";

export const metadata: Metadata = buildMetadata({
  title: "İade ve Değişim Politikası",
  description:
    "Jaune Vaste ürünlerinin iade ve değişim süreçleri hakkında bilgilendirme. Satın aldığınız pazaryerinin iade politikaları geçerlidir.",
  path: "/iade-ve-degisim",
});

export default function ReturnsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          İade ve Değişim Politikası
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/75">
          <p>
            Jaune Vaste ürünleri şu anda yalnızca resmi pazaryeri ve mağaza
            satış noktalarımız üzerinden satışa sunulmaktadır (
            {salesPoints.map((p) => p.name).join(", ")}). Bu nedenle iade ve
            değişim süreçleri, satın alım yaptığınız platformun kendi iade
            politikası ve prosedürleri kapsamında yürütülür.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Nasıl İade Talep Edebilirim?
          </h2>
          <p>
            İade veya değişim talebiniz için satın alım yaptığınız
            pazaryerinin (ör. Trendyol) sipariş geçmişi ve iade süreçlerini
            kullanmanızı öneririz. Sorun yaşamanız halinde marka olarak da
            iletişim sayfamız üzerinden destek olmaktan memnuniyet duyarız.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            E-ticaret Fazı
          </h2>
          <p>
            Resmi web sitemiz üzerinden doğrudan satış açıldığında, Mesafeli
            Satış Sözleşmesi ve Ön Bilgilendirme Formu kapsamında ayrıntılı
            iade ve cayma hakkı süreçleri burada yayınlanacaktır.
          </p>
        </div>
      </Container>
    </section>
  );
}
