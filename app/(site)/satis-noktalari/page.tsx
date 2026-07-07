import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getSalesPoints } from "@/lib/cms";

export const metadata: Metadata = buildMetadata({
  title: "Satış Noktaları",
  description:
    "Jaune Vaste ürünlerini satın alabileceğiniz resmi satış noktaları: Trendyol, Hepsiburada ve Gratis. Güvenli alışveriş için resmi kanallarımızı kullanın.",
  path: "/satis-noktalari",
});

export default async function SalesPointsPage() {
  const salesPoints = await getSalesPoints();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Satış Noktaları", path: "/satis-noktalari" },
        ])}
      />
      <section className="bg-soft py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Satış Noktaları
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Jaune Vaste ürünlerini yalnızca aşağıdaki resmi satış
            kanallarımızdan satın almanızı öneririz. Resmi kanallar dışındaki
            satışlarda ürün orijinalliği garanti edilemez.
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salesPoints.map((point) => (
              <div
                key={point.name}
                className="flex flex-col gap-4 rounded-card bg-white p-7 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-ink">
                    {point.name}
                  </h2>
                  <Badge tone={point.type === "online" ? "ink" : "soft"}>
                    {point.type === "online" ? "Online" : "Mağaza"}
                  </Badge>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
                {point.url ? (
                  <a
                    href={point.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                  >
                    Mağazaya Git
                  </a>
                ) : (
                  <span className="rounded-full border border-hairline px-5 py-3 text-center text-sm font-semibold text-muted">
                    Bağlantı yakında eklenecek
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
