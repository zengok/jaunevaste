import type { SalesPoint } from "@/lib/types";
import { site } from "@/lib/site";

export const salesPoints: SalesPoint[] = [
  {
    name: "Trendyol",
    type: "online",
    url: site.social.trendyol,
    description:
      "Jaune Vaste resmi Trendyol mağazası. Tüm ürünlerimize güvenle ulaşabilirsiniz.",
  },
  {
    name: "Hepsiburada",
    type: "online",
    // TODO: Resmi Hepsiburada mağaza linki eklenecek
    description:
      "Jaune Vaste ürünleri Hepsiburada üzerinden de satın alınabilir.",
  },
  {
    name: "Gratis",
    type: "magaza",
    description:
      "Seçili Gratis mağazalarında ve gratis.com üzerinde Jaune Vaste ürünlerini bulabilirsiniz.",
  },
];
