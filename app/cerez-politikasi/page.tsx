import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çerez Politikası",
  description:
    "Jaune Vaste çerez politikası: sitede kullanılan çerez türleri, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.",
  path: "/cerez-politikasi",
});

const cookieTypes = [
  {
    name: "Zorunlu Çerezler",
    text: "Sitenin temel işlevlerini (sayfa gezinme, güvenlik) sağlamak için gereklidir; devre dışı bırakılamaz.",
  },
  {
    name: "Performans Çerezleri",
    text: "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olarak site performansını iyileştirmemizi sağlar.",
  },
  {
    name: "İşlevsellik Çerezleri",
    text: "Dil ve bölge gibi tercihlerinizi hatırlayarak daha kişiselleştirilmiş bir deneyim sunar.",
  },
];

export default function CookiePolicyPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Çerez Politikası
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-ink/75">
          Web sitemiz, deneyiminizi iyileştirmek amacıyla çerezler
          kullanmaktadır. Aşağıda kullanılan çerez türleri ve amaçları
          açıklanmıştır.
        </p>
        <div className="mt-8 space-y-5">
          {cookieTypes.map((cookie) => (
            <div key={cookie.name} className="rounded-card bg-white p-6 shadow-soft">
              <h2 className="font-display text-base font-bold text-ink">
                {cookie.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {cookie.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink/75">
          Tarayıcı ayarlarınız üzerinden çerezleri yönetebilir veya
          silebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması, sitenin
          bazı bölümlerinin düzgün çalışmamasına neden olabilir.
        </p>
      </Container>
    </section>
  );
}
