import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description:
    "Jaune Vaste gizlilik politikası: kişisel verilerinizin korunması, kullanımı ve güvenliği hakkında bilgilendirme.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Gizlilik Politikası
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            Bu gizlilik politikası, {site.name} internet sitesini ({site.url})
            ziyaret ettiğinizde kişisel verilerinizin nasıl işlendiğini
            açıklar.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Toplanan Bilgiler
          </h2>
          <p>
            Siteyi ziyaret ettiğinizde tarayıcı türü, ziyaret süresi ve
            görüntülenen sayfalar gibi teknik veriler analitik amaçlı
            toplanabilir. İletişim formu doldurduğunuzda ad, e-posta ve mesaj
            içeriğiniz tarafımıza iletilir.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Bilgilerin Kullanımı
          </h2>
          <p>
            Toplanan veriler yalnızca hizmet kalitesini artırmak, taleplerinize
            yanıt vermek ve yasal yükümlülükleri yerine getirmek amacıyla
            kullanılır. Verileriniz üçüncü taraflara pazarlama amacıyla
            satılmaz.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            Veri Güvenliği
          </h2>
          <p>
            Kişisel verilerinizin güvenliği için makul teknik ve idari
            tedbirler alınmaktadır. Ancak internet üzerinden veri iletiminin
            %100 güvenli olduğu garanti edilemez.
          </p>
          <h2 className="font-display text-lg font-bold text-ink">
            İletişim
          </h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </Container>
    </section>
  );
}
