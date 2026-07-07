import type { Product } from "@/lib/types";
import { site } from "@/lib/site";

/**
 * Ürün seed verisi.
 *
 * ÖNEMLİ: Bu içerikler başlangıç şablonudur. Yayına almadan önce:
 *  - Görseller gerçek ürün packshot fotoğraflarıyla değiştirilmeli
 *  - Barkod / ÜTS bilgileri gerçek değerlerle doldurulmalı
 *  - rating / reviewCount alanları yalnızca doğrulanabilir gerçek
 *    verilerle doldurulmalı (aksi halde boş bırakılmalı)
 *  - marketplaceLinks ürün bazlı gerçek linklerle güncellenmeli
 *
 * İleride bu dosya Payload CMS / Strapi üzerinden yönetilecek;
 * tüm erişim lib/cms.ts üzerinden yapıldığı için geçiş tek noktadan olacak.
 */
const trendyolStore = site.social.trendyol;

export const products: Product[] = [
  {
    id: "jv-lb-001",
    slug: "aloe-vera-lip-balm",
    name: "Aloe Vera Lip Balm",
    category: "dudak-bakimi",
    shortBenefit: "Kuruyan dudaklara günlük nem ve yumuşaklık desteği.",
    description:
      "Aloe vera özlü Jaune Vaste Lip Balm, kuruyan ve çatlamaya eğilimli dudakları gün boyu nemlendirir. Hafif dokusu sayesinde yapışkanlık hissi bırakmadan dudaklarınızı yumuşacık tutar. Çantanızda kolayca taşıyabileceğiniz pratik formu ile günün her anında kullanıma uygundur.",
    benefits: [
      "Aloe vera özü ile yoğun nemlendirme",
      "Çatlamaya eğilimli dudaklarda bakım desteği",
      "Yapışkanlık hissi bırakmayan hafif doku",
      "Gün boyu tazelik ve yumuşaklık",
      "Çantada kolay taşınabilir pratik form",
    ],
    usage:
      "Temiz dudaklara günde birkaç kez, ihtiyaç duydukça uygulayın. Ruj öncesi baz olarak da kullanılabilir.",
    suitableFor:
      "Kuruyan, çatlayan ve nem ihtiyacı olan tüm dudak tipleri için uygundur.",
    ingredients: ["Aloe Vera Özü", "Doğal Vakslar", "Nemlendirici Yağlar", "E Vitamini"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Çocukların ulaşamayacağı yerde saklayınız.",
      "Tahriş durumunda kullanımı bırakınız.",
    ],
    sku: "JV-LB-001",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/aloe-vera-lip-balm.svg",
        alt: "Jaune Vaste Aloe Vera Lip Balm ürün görseli",
      },
    ],
    bestSeller: true,
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Ruj altına baz olarak kullanılabilir mi?",
        answer:
          "Evet, hafif dokusu sayesinde ruj öncesi nemlendirici baz olarak kullanılabilir.",
      },
      {
        question: "Günde kaç kez uygulanabilir?",
        answer:
          "Günlük kullanıma uygundur; ihtiyaç duydukça gün içinde birkaç kez uygulayabilirsiniz.",
      },
    ],
    seo: {
      title: "Aloe Vera Lip Balm | Nemlendirici Dudak Balmı",
      description:
        "Jaune Vaste Aloe Vera Lip Balm: kuruyan dudaklara günlük nem ve yumuşaklık. Aloe vera özlü, hafif dokulu nemlendirici dudak balmı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-lb-002",
    slug: "shea-butter-lip-balm",
    name: "Shea Butter Lip Balm",
    category: "dudak-bakimi",
    shortBenefit: "Shea yağı ile yoğun besleyici dudak bakımı.",
    description:
      "Shea yağı içeren Jaune Vaste Lip Balm, özellikle soğuk havalarda yıpranan dudaklar için yoğun besleyici bakım sunar. Zengin formülü dudaklarda koruyucu bir bakım katmanı oluşturur.",
    benefits: [
      "Shea yağı ile yoğun besleyici bakım",
      "Soğuk hava koşullarına karşı koruma desteği",
      "Uzun süre kalıcı yumuşaklık hissi",
      "Günlük kullanıma uygun zengin formül",
    ],
    usage:
      "Temiz dudaklara ihtiyaç duydukça uygulayın. Soğuk havalarda dışarı çıkmadan önce kullanılması önerilir.",
    suitableFor: "Kuru ve çok kuru dudaklar, soğuk havaya maruz kalanlar için idealdir.",
    ingredients: ["Shea Yağı", "Doğal Vakslar", "Besleyici Bitkisel Yağlar"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Çocukların ulaşamayacağı yerde saklayınız.",
    ],
    sku: "JV-LB-002",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/shea-butter-lip-balm.svg",
        alt: "Jaune Vaste Shea Butter Lip Balm ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Kış aylarında kullanımı uygun mu?",
        answer:
          "Evet, shea yağlı zengin formülü özellikle soğuk hava koşullarında yıpranan dudaklar için geliştirilmiştir.",
      },
    ],
    seo: {
      title: "Shea Butter Lip Balm | Besleyici Dudak Balmı",
      description:
        "Jaune Vaste Shea Butter Lip Balm: shea yağı ile yoğun besleyici dudak bakımı. Soğuk havalarda koruyucu, uzun süre kalıcı yumuşaklık.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-lb-003",
    slug: "vanilya-lip-balm",
    name: "Vanilya Lip Balm",
    category: "dudak-bakimi",
    shortBenefit: "Tatlı vanilya kokusuyla günlük nemlendirme.",
    description:
      "Vanilya aromalı Jaune Vaste Lip Balm, dudaklarınızı nemlendirirken hafif ve tatlı bir koku deneyimi sunar. Günlük kullanım için pratik ve keyifli bir bakım ürünüdür.",
    benefits: [
      "Hafif vanilya aroması",
      "Günlük nemlendirme desteği",
      "Pratik ve taşınabilir form",
      "Yumuşak ve pürüzsüz dudak hissi",
    ],
    usage: "Temiz dudaklara gün içinde ihtiyaç duydukça uygulayın.",
    suitableFor: "Günlük nemlendirme ve keyifli koku deneyimi arayanlar için uygundur.",
    ingredients: ["Vanilya Aroması", "Doğal Vakslar", "Nemlendirici Yağlar"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Çocukların ulaşamayacağı yerde saklayınız.",
    ],
    sku: "JV-LB-003",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/vanilya-lip-balm.svg",
        alt: "Jaune Vaste Vanilya Lip Balm ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [],
    seo: {
      title: "Vanilya Lip Balm | Aromalı Dudak Balmı",
      description:
        "Jaune Vaste Vanilya Lip Balm: tatlı vanilya kokusuyla günlük dudak nemlendirme. Pratik, keyifli ve uygun fiyatlı dudak bakımı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-lb-004",
    slug: "spf-lip-balm",
    name: "SPF Korumalı Lip Balm",
    category: "dudak-bakimi",
    shortBenefit: "Güneşe karşı korumalı günlük dudak bakımı.",
    description:
      "SPF içeren Jaune Vaste Lip Balm, dudaklarınızı nemlendirirken güneşin zararlı etkilerine karşı koruma desteği sunar. Yaz kış her mevsim günlük kullanıma uygundur.",
    benefits: [
      "SPF ile güneş koruması desteği",
      "Nemlendirme ve koruma bir arada",
      "Her mevsim günlük kullanıma uygun",
      "Hafif ve rahat doku",
    ],
    usage:
      "Güneşe çıkmadan önce dudaklara uygulayın; uzun süreli güneş maruziyetinde uygulamayı yenileyin.",
    suitableFor:
      "Güneşe maruz kalan, dış mekanda vakit geçiren herkes için uygundur.",
    ingredients: ["SPF Filtre", "Nemlendirici Yağlar", "Doğal Vakslar", "E Vitamini"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Uzun süreli güneş maruziyetinde tek başına yeterli koruma sağlamaz.",
    ],
    sku: "JV-LB-004",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/spf-lip-balm.svg",
        alt: "Jaune Vaste SPF Korumalı Lip Balm ürün görseli",
      },
    ],
    isNew: true,
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "SPF'li lip balm neden önemli?",
        answer:
          "Dudak cildi incedir ve güneşten kolay etkilenir. SPF içeren dudak bakım ürünleri, güneşin kurutucu ve yıpratıcı etkilerine karşı destek sağlar.",
      },
    ],
    seo: {
      title: "SPF Korumalı Lip Balm | Güneş Korumalı Dudak Balmı",
      description:
        "Jaune Vaste SPF Korumalı Lip Balm: güneş koruması ve nemlendirme bir arada. Her mevsim günlük kullanıma uygun dudak bakımı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-tb-001",
    slug: "tirnak-bakim-yagi",
    name: "Tırnak Bakım Yağı",
    category: "tirnak-bakimi",
    shortBenefit: "Tırnak ve tırnak etine besleyici bakım.",
    description:
      "Jaune Vaste Tırnak Bakım Yağı, bitkisel yağ içeriğiyle tırnakları ve tırnak etlerini besler. Düzenli kullanımda tırnakların daha bakımlı ve sağlıklı görünmesine yardımcı olur. Pratik fırça aplikatörü ile kolay uygulanır.",
    benefits: [
      "Bitkisel yağlarla besleyici bakım",
      "Tırnak eti yumuşatma desteği",
      "Pratik fırça aplikatör",
      "Manikür sonrası bakım için ideal",
      "Düzenli kullanımda daha bakımlı görünüm",
    ],
    usage:
      "Temiz tırnaklara ve tırnak etlerine günde 1-2 kez uygulayıp nazikçe masaj yapın.",
    suitableFor:
      "Kırılgan, yıpranmış tırnaklar ve kuru tırnak etleri için uygundur. Manikür sonrası bakımda kullanılabilir.",
    ingredients: ["Bitkisel Bakım Yağları", "E Vitamini"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Göz ile temasından kaçınınız.",
    ],
    sku: "JV-TB-001",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/tirnak-bakim-yagi.svg",
        alt: "Jaune Vaste Tırnak Bakım Yağı ürün görseli",
      },
    ],
    bestSeller: true,
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Ne sıklıkla kullanılmalı?",
        answer:
          "Günde 1-2 kez düzenli kullanım önerilir. Düzenli kullanımda tırnaklar daha bakımlı görünür.",
      },
      {
        question: "Oje üzerine uygulanabilir mi?",
        answer:
          "Evet, tırnak etlerine odaklanarak oje üzerindeyken de kullanabilirsiniz.",
      },
    ],
    seo: {
      title: "Tırnak Bakım Yağı | Tırnak ve Tırnak Eti Bakımı",
      description:
        "Jaune Vaste Tırnak Bakım Yağı: bitkisel yağlarla tırnak ve tırnak eti bakımı. Pratik fırça aplikatörlü, düzenli kullanımda bakımlı tırnaklar.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-tb-002",
    slug: "tirnak-sertlestirici",
    name: "Tırnak Sertleştirici",
    category: "tirnak-bakimi",
    shortBenefit: "Kırılgan tırnaklar için güçlendirici bakım.",
    description:
      "Jaune Vaste Tırnak Sertleştirici, kırılmaya ve yıpranmaya eğilimli tırnaklar için güçlendirici bakım desteği sunar. Şeffaf formülü tek başına veya oje altı baz olarak kullanılabilir.",
    benefits: [
      "Kırılgan tırnaklarda güçlendirme desteği",
      "Şeffaf ve doğal görünüm",
      "Oje altı baz olarak kullanım",
      "Hızlı kuruyan formül",
    ],
    usage:
      "Temiz ve kuru tırnaklara ince bir kat uygulayın. Haftada 2-3 kez tekrarlayın; oje altı baz olarak da kullanabilirsiniz.",
    suitableFor: "Kırılgan, ince ve yıpranmış tırnaklar için uygundur.",
    warnings: [
      "Sadece harici kullanım içindir.",
      "İyi havalandırılan ortamda kullanınız.",
    ],
    sku: "JV-TB-002",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/tirnak-sertlestirici.svg",
        alt: "Jaune Vaste Tırnak Sertleştirici ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Oje ile birlikte kullanılabilir mi?",
        answer:
          "Evet, oje öncesi baz kat olarak uygulanabilir. Tek başına şeffaf bakım katı olarak da kullanılabilir.",
      },
    ],
    seo: {
      title: "Tırnak Sertleştirici | Kırılgan Tırnaklar için Güçlendirici",
      description:
        "Jaune Vaste Tırnak Sertleştirici: kırılgan tırnaklara güçlendirici bakım. Şeffaf, hızlı kuruyan formül; oje altı baz olarak da kullanılır.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-tb-003",
    slug: "tirnak-cilasi",
    name: "Tırnak Cilası",
    category: "tirnak-bakimi",
    shortBenefit: "Doğal parlaklık veren bakım cilası.",
    description:
      "Jaune Vaste Tırnak Cilası, tırnaklara doğal ve sağlıklı bir parlaklık kazandırır. Oje kullanmadan bakımlı görünüm isteyenler için idealdir.",
    benefits: [
      "Doğal ve sağlıklı parlaklık",
      "Ojesiz bakımlı görünüm",
      "Hızlı ve pratik uygulama",
    ],
    usage: "Temiz tırnaklara ince bir kat uygulayın ve kurumasını bekleyin.",
    suitableFor: "Doğal görünümlü, bakımlı tırnak isteyen herkes için uygundur.",
    warnings: ["Sadece harici kullanım içindir."],
    sku: "JV-TB-003",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/tirnak-cilasi.svg",
        alt: "Jaune Vaste Tırnak Cilası ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [],
    seo: {
      title: "Tırnak Cilası | Doğal Parlaklık Veren Bakım",
      description:
        "Jaune Vaste Tırnak Cilası: ojesiz bakımlı görünüm, doğal parlaklık. Hızlı ve pratik tırnak bakımı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-ro-001",
    slug: "dogal-roll-on",
    name: "Doğal İçerikli Roll-on",
    category: "roll-on",
    shortBenefit: "Cilt dostu içerikle gün boyu ferahlık.",
    description:
      "Jaune Vaste Doğal İçerikli Roll-on, cilt dostu formülüyle gün boyu ferahlık sunar. Hafif kokusu ve hızlı kuruyan yapısıyla günlük kullanım için idealdir.",
    benefits: [
      "Cilt dostu içerik",
      "Gün boyu ferahlık hissi",
      "Hızlı kuruyan formül",
      "Kıyafetlerde iz bırakmayan yapı",
    ],
    usage: "Temiz ve kuru cilde, koltuk altına uygulayın. Kurumasını bekleyin.",
    suitableFor: "Günlük kullanım için tüm cilt tipleri.",
    ingredients: ["Cilt Dostu Aktifler", "Nemlendirici Bileşenler"],
    warnings: [
      "Sadece harici kullanım içindir.",
      "Tahriş olmuş veya hasarlı ciltte kullanmayınız.",
    ],
    sku: "JV-RO-001",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/dogal-roll-on.svg",
        alt: "Jaune Vaste Doğal İçerikli Roll-on ürün görseli",
      },
    ],
    bestSeller: true,
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Kıyafetlerde iz bırakır mı?",
        answer:
          "Hızlı kuruyan formülü sayesinde kurumasını bekledikten sonra giyindiğinizde iz bırakmaz.",
      },
    ],
    seo: {
      title: "Doğal İçerikli Roll-on | Cilt Dostu Deodorant",
      description:
        "Jaune Vaste Doğal İçerikli Roll-on: cilt dostu formül ile gün boyu ferahlık. Hızlı kuruyan, iz bırakmayan doğal roll-on deodorant.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-ro-002",
    slug: "hassas-cilt-roll-on",
    name: "Hassas Ciltler için Roll-on",
    category: "roll-on",
    shortBenefit: "Hassas ciltler için nazik formül.",
    description:
      "Hassas ciltler düşünülerek geliştirilen bu roll-on, nazik içeriğiyle ciltte rahatsızlık hissi yaratmadan gün boyu ferahlık sunar.",
    benefits: [
      "Hassas ciltlere uygun nazik formül",
      "Gün boyu ferahlık",
      "Hafif ve rahat kullanım",
    ],
    usage: "Temiz ve kuru cilde uygulayın. Tıraş sonrası hemen kullanmayınız.",
    suitableFor: "Hassas ve tahrişe eğilimli ciltler için uygundur.",
    warnings: [
      "Sadece harici kullanım içindir.",
      "Tahriş durumunda kullanımı bırakınız.",
    ],
    sku: "JV-RO-002",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/hassas-cilt-roll-on.svg",
        alt: "Jaune Vaste Hassas Ciltler için Roll-on ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [],
    seo: {
      title: "Hassas Ciltler için Roll-on | Nazik Formüllü Deodorant",
      description:
        "Jaune Vaste Hassas Ciltler için Roll-on: nazik formül, gün boyu ferahlık. Hassas ve tahrişe eğilimli ciltlere uygun roll-on deodorant.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-kb-001",
    slug: "el-bakim-kremi",
    name: "El Bakım Kremi",
    category: "kisisel-bakim",
    shortBenefit: "Kuruyan ellere hızlı emilen nemlendirme.",
    description:
      "Jaune Vaste El Bakım Kremi, kuruyan ve yıpranan elleri nemlendirir. Hızlı emilen formülü sayesinde yapışkanlık hissi bırakmadan günlük kullanıma uygundur.",
    benefits: [
      "Hızlı emilen hafif doku",
      "Yoğun nemlendirme desteği",
      "Günlük kullanıma uygun",
      "Pratik boyutuyla çantada taşınabilir",
    ],
    usage: "Temiz ellere ihtiyaç duydukça uygulayıp masaj yaparak yedirin.",
    suitableFor: "Kuruyan, yıpranan eller ve sık el yıkayanlar için idealdir.",
    warnings: ["Sadece harici kullanım içindir."],
    sku: "JV-KB-001",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/el-bakim-kremi.svg",
        alt: "Jaune Vaste El Bakım Kremi ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [],
    seo: {
      title: "El Bakım Kremi | Hızlı Emilen Nemlendirici",
      description:
        "Jaune Vaste El Bakım Kremi: kuruyan ellere hızlı emilen nemlendirme. Yapışkanlık bırakmayan, günlük kullanıma uygun el kremi.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-kt-001",
    slug: "silikon-kulak-tikaci",
    name: "Silikon Kulak Tıkacı",
    category: "kulak-tikaci",
    shortBenefit: "Uyku ve yüzme için şekil alan silikon tıkaç.",
    description:
      "Jaune Vaste Silikon Kulak Tıkacı, kulak yapısına göre şekil alan yumuşak silikon yapısıyla uyku, yüzme ve gürültülü ortamlarda konforlu kullanım sunar. Saklama kutusu ile hijyenik taşıma imkanı sağlar.",
    benefits: [
      "Kulak yapısına göre şekil alan yumuşak silikon",
      "Uyku, yüzme ve seyahatte kullanım",
      "Hijyenik saklama kutusu",
      "Tekrar kullanılabilir yapı",
    ],
    usage:
      "Temiz ellerle tıkacı yumuşatıp kulak kanalının girişine yerleştirin. Kulak kanalının derinine itmeyiniz.",
    suitableFor: "Uyku, yüzme, seyahat ve gürültülü ortamlar için uygundur.",
    warnings: [
      "Kulak kanalının derinine itmeyiniz.",
      "Çocuklarda yetişkin gözetiminde kullanılmalıdır.",
      "Hasar gören ürünü kullanmayınız.",
    ],
    sku: "JV-KT-001",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/silikon-kulak-tikaci.svg",
        alt: "Jaune Vaste Silikon Kulak Tıkacı ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [
      {
        question: "Kaç kez kullanılabilir?",
        answer:
          "Hijyen kurallarına dikkat edilerek birden fazla kez kullanılabilir. Şekli bozulan veya kirlenen tıkaçları yenileyin.",
      },
      {
        question: "Yüzerken kullanılabilir mi?",
        answer:
          "Evet, silikon yapısı su geçişini azaltır; yüzme sırasında kullanılabilir.",
      },
    ],
    seo: {
      title: "Silikon Kulak Tıkacı | Uyku ve Yüzme için",
      description:
        "Jaune Vaste Silikon Kulak Tıkacı: kulak yapısına şekil alan yumuşak silikon. Uyku, yüzme ve seyahat için konforlu kulak tıkacı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
  {
    id: "jv-kt-002",
    slug: "kopuk-kulak-tikaci",
    name: "Köpük Kulak Tıkacı",
    category: "kulak-tikaci",
    shortBenefit: "Yüksek ses yalıtımlı konforlu köpük tıkaç.",
    description:
      "Jaune Vaste Köpük Kulak Tıkacı, yavaş genleşen köpük yapısıyla kulak kanalına uyum sağlar ve yüksek ses yalıtımı sunar. Uyku ve yoğun çalışma ortamları için idealdir.",
    benefits: [
      "Yavaş genleşen konforlu köpük",
      "Yüksek ses yalıtımı",
      "Uyku ve çalışma ortamları için ideal",
      "Hafif ve pratik kullanım",
    ],
    usage:
      "Tıkacı parmaklarınızla inceltip kulak kanalına yerleştirin ve genleşmesini bekleyin.",
    suitableFor: "Uyku, çalışma ve gürültülü ortamlar için uygundur.",
    warnings: [
      "Kulak kanalının derinine itmeyiniz.",
      "Tek kullanımlık hijyen kurallarına uyunuz.",
    ],
    sku: "JV-KT-002",
    utsRegistered: true,
    images: [
      {
        src: "/images/products/kopuk-kulak-tikaci.svg",
        alt: "Jaune Vaste Köpük Kulak Tıkacı ürün görseli",
      },
    ],
    marketplaceLinks: [{ platform: "Trendyol", url: trendyolStore }],
    faqs: [],
    seo: {
      title: "Köpük Kulak Tıkacı | Yüksek Ses Yalıtımı",
      description:
        "Jaune Vaste Köpük Kulak Tıkacı: yavaş genleşen köpük, yüksek ses yalıtımı. Uyku ve yoğun ortamlar için konforlu kulak tıkacı.",
    },
    currency: "TRY",
    ecommerceEnabled: false,
    published: true,
  },
];
