import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "Jaune Vaste 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel veri işleme faaliyetleri aydınlatma metni.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          KVKK Aydınlatma Metni
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            {site.name} (&ldquo;Şirket&rdquo;) olarak, 6698 sayılı Kişisel
            Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca veri
            sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan
            kapsamda işlemekteyiz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            1. İşlenen Kişisel Veriler
          </h2>
          <p>
            İletişim formu, e-posta veya WhatsApp üzerinden bizimle iletişime
            geçtiğinizde ad-soyad, e-posta adresi, telefon numarası ve
            mesaj içeriğiniz gibi kişisel verileriniz işlenebilir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            2. İşleme Amaçları
          </h2>
          <p>
            Kişisel verileriniz; taleplerinizin yanıtlanması, müşteri
            ilişkilerinin yürütülmesi ve yasal yükümlülüklerin yerine
            getirilmesi amacıyla işlenmektedir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            3. Veri Aktarımı
          </h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle
            paylaşılmaz. Hizmet aldığımız barındırma ve altyapı sağlayıcıları
            ile sınırlı ve gerekli ölçüde veri paylaşımı yapılabilir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            4. Haklarınız
          </h2>
          <p>
            KVKK madde 11 kapsamında; kişisel verilerinizin işlenip
            işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
            işlenme amacını öğrenme, düzeltilmesini veya silinmesini isteme
            haklarına sahipsiniz. Taleplerinizi{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>{" "}
            adresine iletebilirsiniz.
          </p>
          <p className="text-xs text-muted">
            Bu metin genel bilgilendirme amaçlıdır; hukuki danışmanlık
            yerine geçmez. Yayına almadan önce hukuk danışmanı incelemesi
            önerilir.
          </p>
        </div>
      </Container>
    </section>
  );
}
