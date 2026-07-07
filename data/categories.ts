import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "dudak-bakimi",
    name: "Dudak Bakımı",
    tagline: "Gün boyu nem ve yumuşaklık",
    description:
      "Kuruyan ve çatlayan dudaklar için nemlendirici lip balm ve dudak bakım ürünleri. Günlük kullanıma uygun, pratik ve zarif formüller.",
    sortOrder: 1,
    seo: {
      title: "Dudak Bakımı Ürünleri | Lip Balm ve Dudak Nemlendirici",
      description:
        "Jaune Vaste dudak bakımı koleksiyonu: nemlendirici lip balm çeşitleri ile dudaklarınıza gün boyu bakım. Uygun fiyatlı, güvenilir dudak bakım ürünleri.",
    },
  },
  {
    slug: "tirnak-bakimi",
    name: "Tırnak Bakımı",
    tagline: "Güçlü ve bakımlı tırnaklar",
    description:
      "Tırnak bakım yağından tırnak sertleştiriciye, sağlıklı ve bakımlı tırnaklar için ihtiyacınız olan ürünler.",
    sortOrder: 2,
    seo: {
      title: "Tırnak Bakımı Ürünleri | Tırnak Yağı ve Sertleştirici",
      description:
        "Jaune Vaste tırnak bakımı ürünleri: tırnak bakım yağı, tırnak sertleştirici ve tırnak cilası ile tırnaklarınızı güçlendirin.",
    },
  },
  {
    slug: "kisisel-bakim",
    name: "Kişisel Bakım",
    tagline: "Günlük rutinin temel parçaları",
    description:
      "Günlük kişisel bakım rutininizi tamamlayan pratik ve ulaşılabilir ürünler.",
    sortOrder: 3,
    seo: {
      title: "Kişisel Bakım Ürünleri",
      description:
        "Jaune Vaste kişisel bakım ürünleri: günlük rutininiz için sade, modern ve uygun fiyatlı bakım çözümleri.",
    },
  },
  {
    slug: "roll-on",
    name: "Roll-on / Deodorant",
    tagline: "Gün boyu ferahlık",
    description:
      "Cilt dostu içerikleriyle gün boyu ferahlık sunan roll-on ve deodorant ürünleri.",
    sortOrder: 4,
    seo: {
      title: "Roll-on ve Deodorant Ürünleri",
      description:
        "Jaune Vaste roll-on ve deodorant çeşitleri: cilt dostu formüller ile gün boyu ferahlık ve koruma.",
    },
  },
  {
    slug: "kulak-tikaci",
    name: "Kulak Tıkacı",
    tagline: "Sessizlik ve konfor",
    description:
      "Uyku, seyahat ve yoğun ortamlar için konforlu kulak tıkacı çözümleri.",
    sortOrder: 5,
    seo: {
      title: "Kulak Tıkacı Ürünleri",
      description:
        "Jaune Vaste kulak tıkaçları: uyku, seyahat ve gürültülü ortamlar için konforlu ve pratik kulak tıkacı çeşitleri.",
    },
  },
  {
    slug: "parfum",
    name: "Parfüm Koleksiyonu",
    tagline: "Çok yakında sizlerle",
    description:
      "Jaune Vaste parfüm koleksiyonu çok yakında. Kalıcı ve zarif kokular için bizi takip edin.",
    sortOrder: 6,
    comingSoon: true,
    seo: {
      title: "Parfüm Koleksiyonu — Yakında",
      description:
        "Jaune Vaste parfüm koleksiyonu çok yakında. Kadın ve erkek parfüm çeşitleri için bizi takip edin.",
    },
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
