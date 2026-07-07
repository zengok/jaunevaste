import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Jaune Vaste'i tanıyın: sade, ulaşılabilir ve modern kişisel bakım deneyimi sunan Türkiye markası. Değerlerimiz, kalite anlayışımız ve hikayemiz.",
  path: "/hakkimizda",
});

const values = [
  {
    title: "Ulaşılabilirlik",
    text: "Kaliteli bakım herkesin hakkı. Ürünlerimizi uygun fiyatlarla, kolay erişilebilir kanallardan sunuyoruz.",
  },
  {
    title: "Şeffaflık",
    text: "İçerik bilgilerinden ÜTS kayıtlarına kadar tüm ürün bilgilerimizi açıkça paylaşıyoruz.",
  },
  {
    title: "Sadelik",
    text: "Karmaşık rutinler yerine, günlük hayata kolayca uyum sağlayan pratik ürünler tasarlıyoruz.",
  },
  {
    title: "Güven",
    text: "Resmi satış kanalları, kayıtlı ürünler ve gerçek kullanıcı deneyimleriyle güven inşa ediyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ])}
      />
      <section className="bg-soft py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-soft">
            Hakkımızda
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            Bakımı sadeleştiriyoruz
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {site.name}; dudak bakımından tırnak bakımına, roll-on&apos;dan kulak
            tıkacına uzanan ürün yelpazesiyle günlük bakım rutinini sade,
            ulaşılabilir ve keyifli hale getirmek için yola çıktı.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Hikayemiz
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Jaune Vaste, &ldquo;geniş ve aydınlık sarı&rdquo; anlamına gelen
              isminin çağrıştırdığı gibi; bakımı karmaşadan arındırıp herkes
              için erişilebilir kılma fikriyle doğdu. Türkiye&apos;de üretilen ve
              titizlikle seçilen ürünlerimiz, günlük hayatın temposuna uyum
              sağlayacak şekilde tasarlanır.
            </p>
            <p>
              Bugün Trendyol başta olmak üzere Türkiye&apos;nin önde gelen
              pazaryerlerinde binlerce kullanıcıya ulaşıyoruz. Her ürünümüzün
              kayıt ve bildirim süreçlerini şeffaf şekilde yönetiyor, içerik
              bilgilerini açıkça paylaşıyoruz.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-ink sm:text-3xl">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-card bg-ivory p-6 shadow-soft">
                <h3 className="font-display text-lg font-bold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/urunler" size="lg">
              Ürünlerimizi Keşfedin
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
