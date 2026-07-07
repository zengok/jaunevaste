import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Jaune Vaste ile iletişime geçin: WhatsApp, e-posta ve iletişim formu. Ürünlerimiz ve iş birlikleri hakkında sorularınız için buradayız.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <section className="bg-soft py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Ürünlerimiz, satış noktalarımız veya iş birlikleri hakkında tüm
            sorularınız için bize ulaşabilirsiniz.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <a
              href={whatsappUrl("Merhaba, Jaune Vaste ürünleri hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-card bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <h2 className="font-display text-lg font-bold text-ink">
                WhatsApp Destek
              </h2>
              <p className="mt-2 text-sm text-muted">
                En hızlı yanıt için WhatsApp üzerinden yazın.
              </p>
              <span className="mt-3 inline-block text-sm font-bold text-primary">
                Sohbet başlat →
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block rounded-card bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <h2 className="font-display text-lg font-bold text-ink">E-posta</h2>
              <p className="mt-2 text-sm text-muted">{site.email}</p>
              <span className="mt-3 inline-block text-sm font-bold text-primary">
                E-posta gönder →
              </span>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-card bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <h2 className="font-display text-lg font-bold text-ink">Instagram</h2>
              <p className="mt-2 text-sm text-muted">
                Yenilikler ve kampanyalar için bizi takip edin.
              </p>
              <span className="mt-3 inline-block text-sm font-bold text-primary">
                @jaunevaste →
              </span>
            </a>
          </div>

          <div className="rounded-card bg-white p-6 shadow-soft sm:p-8 lg:col-span-3">
            <h2 className="font-display text-xl font-bold text-ink">
              Bize Yazın
            </h2>
            <p className="mt-2 text-sm text-muted">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>
            {/*
              Form şimdilik e-posta istemcisine yönlendirir (mailto).
              Backend/CMS entegrasyonu sonrası API endpoint + spam koruması
              (rate limit, honeypot) ile değiştirilecek.
            */}
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <label className="block">
                <span className="text-sm font-semibold text-ink">Adınız</span>
                <input
                  type="text"
                  name="ad"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink">E-posta</span>
                <input
                  type="email"
                  name="eposta"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-ink">Konu</span>
                <input
                  type="text"
                  name="konu"
                  required
                  className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-ink">Mesajınız</span>
                <textarea
                  name="mesaj"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </label>
              <p className="text-xs text-muted sm:col-span-2">
                Formu göndererek{" "}
                <a href="/kvkk" className="text-primary hover:underline">
                  KVKK Aydınlatma Metni
                </a>
                &apos;ni okuduğunuzu kabul etmiş olursunuz.
              </p>
              <button
                type="submit"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift sm:col-span-2 sm:justify-self-start"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
