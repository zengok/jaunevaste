import type { BlogPost } from "@/lib/types";

/**
 * Bakım Rehberi (blog) içerikleri.
 * SEO içerik planındaki ilk makaleler; yenileri CMS entegrasyonu ile eklenecek.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "lip-balm-nedir-ne-ise-yarar",
    title: "Lip Balm Nedir, Ne İşe Yarar?",
    excerpt:
      "Lip balm dudakları nemlendiren, dış etkenlerden koruyan temel bir bakım ürünüdür. Doğru lip balm seçimi için bilmeniz gerekenler bu yazıda.",
    category: "Dudak Bakımı",
    date: "2026-07-01",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Dudak cildi, vücudumuzdaki en ince ve en hassas cilt bölgelerinden biridir. Yağ bezleri içermediği için kendi kendini nemlendiremez; bu yüzden soğuk hava, rüzgar, güneş ve kuru ortamlardan hızla etkilenir. Lip balm tam bu noktada devreye girer: dudak yüzeyinde koruyucu bir bakım katmanı oluşturarak nem kaybını azaltır.",
        ],
      },
      {
        heading: "Lip balm ne işe yarar?",
        paragraphs: [
          "İyi bir lip balm üç temel görevi yerine getirir: dudakları nemlendirmek, mevcut nemi içeride tutmak ve dış etkenlere karşı bariyer oluşturmak. Aloe vera, shea yağı ve E vitamini gibi içerikler bu etkiyi destekler.",
          "Düzenli kullanımda dudak çatlaması ve soyulması azalır, dudaklar daha yumuşak ve bakımlı görünür. Ruj öncesi baz olarak kullanıldığında rujun daha pürüzsüz uygulanmasına da yardımcı olur.",
        ],
      },
      {
        heading: "Lip balm seçerken nelere dikkat edilmeli?",
        paragraphs: [
          "İçeriğinde nemlendirici yağlar ve vakslar bulunan, ihtiyacınıza uygun formülleri tercih edin. Gün içinde dışarıda vakit geçiriyorsanız SPF içeren bir lip balm dudaklarınızı güneşin kurutucu etkisinden korur. Kışın ise shea yağı gibi zengin içerikli formüller daha iyi sonuç verir.",
          "Jaune Vaste dudak bakımı koleksiyonunda aloe vera, shea yağı, vanilya ve SPF korumalı seçenekleri inceleyebilirsiniz.",
        ],
      },
    ],
    seo: {
      title: "Lip Balm Nedir, Ne İşe Yarar? | Dudak Bakım Rehberi",
      description:
        "Lip balm nedir, ne işe yarar, nasıl seçilir? Dudak bakımının temelleri, SPF'li lip balm ve doğru kullanım önerileri bu rehberde.",
    },
  },
  {
    slug: "tirnak-bakim-rutini-nasil-olusturulur",
    title: "Tırnak Bakım Rutini Nasıl Oluşturulur?",
    excerpt:
      "Güçlü ve bakımlı tırnaklar düzenli bir rutinle mümkün. Adım adım evde uygulayabileceğiniz tırnak bakım rutini rehberi.",
    category: "Tırnak Bakımı",
    date: "2026-07-01",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Kırılan, soyulan ve zayıf tırnaklar çoğu zaman bakımsızlıktan değil, yanlış bakımdan kaynaklanır. Tırnaklarınızı güçlendirmek için pahalı işlemlere gerek yok; düzenli ve doğru bir rutin yeterli.",
        ],
      },
      {
        heading: "1. Nazik temizlik ve doğru törpüleme",
        paragraphs: [
          "Tırnaklarınızı tek yönde törpüleyin; ileri geri hareketler tırnak katmanlarının ayrılmasına neden olabilir. Törpü sonrası tırnak yüzeyini nazikçe pürüzsüzleştirin.",
        ],
      },
      {
        heading: "2. Tırnak eti bakımı",
        paragraphs: [
          "Tırnak etlerini kesmek yerine yumuşatıp geriye itmek daha sağlıklıdır. Tırnak bakım yağı, tırnak etlerini yumuşatır ve tırnak çevresindeki cildin kurumasını önler. Günde 1-2 kez tırnak bakım yağı uygulayıp masaj yapmak bu adımın temelidir.",
        ],
      },
      {
        heading: "3. Güçlendirme",
        paragraphs: [
          "Kırılgan tırnaklar için haftada 2-3 kez tırnak sertleştirici kullanabilirsiniz. Şeffaf formüller hem tek başına bakım katı hem de oje altı baz olarak çalışır.",
        ],
      },
      {
        heading: "4. Koruma ve süreklilik",
        paragraphs: [
          "Deterjan ve temizlik ürünleriyle çalışırken eldiven kullanın, ellerinizi her yıkamadan sonra nemlendirin. Tırnak bakımı bir defalık işlem değil, düzenli bir alışkanlıktır; 3-4 hafta düzenli uygulamayla fark görmeye başlarsınız.",
        ],
      },
    ],
    seo: {
      title: "Tırnak Bakım Rutini Nasıl Oluşturulur? | Adım Adım Rehber",
      description:
        "Evde tırnak bakım rutini: törpüleme, tırnak eti bakımı, tırnak bakım yağı ve sertleştirici kullanımı. Güçlü tırnaklar için adım adım rehber.",
    },
  },
  {
    slug: "roll-on-secerken-icerik-neden-onemli",
    title: "Roll-on Seçerken İçerik Neden Önemlidir?",
    excerpt:
      "Her gün cildinize uyguladığınız roll-on'un içeriği düşündüğünüzden daha önemli. Cilt dostu roll-on seçiminin püf noktaları.",
    category: "Kişisel Bakım",
    date: "2026-07-01",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Roll-on ve deodorantlar her gün, günde en az bir kez cilde uygulanan ürünlerdir. Koltuk altı cildi ise ince ve hassastır; bu yüzden içerik seçimi doğrudan cilt sağlığınızı etkiler.",
        ],
      },
      {
        heading: "Nelere dikkat etmelisiniz?",
        paragraphs: [
          "Hassas cildiniz varsa alkol oranı yüksek formüller yerine cilt dostu, nazik içerikleri tercih edin. Tahrişe eğilimli ciltler için özel geliştirilen formüller, ferahlık hissinden ödün vermeden daha rahat bir kullanım sunar.",
          "Hızlı kuruyan ve kıyafette iz bırakmayan formüller günlük kullanımda büyük konfor sağlar. Tıraş veya ağda sonrası cilt hassasken uygulama yapmamak da tahrişi önlemenin en basit yoludur.",
        ],
      },
      {
        heading: "Doğru kullanım",
        paragraphs: [
          "Roll-on'u her zaman temiz ve kuru cilde uygulayın, giyinmeden önce kurumasını bekleyin. Cildinizde kızarıklık veya rahatsızlık oluşursa ürünü değiştirin ve gerekiyorsa bir uzmana danışın.",
        ],
      },
    ],
    seo: {
      title: "Roll-on Seçerken İçerik Neden Önemlidir? | Bakım Rehberi",
      description:
        "Cilt dostu roll-on nasıl seçilir? Hassas ciltler için roll-on seçimi, doğru kullanım ve içerik okuma rehberi.",
    },
  },
  {
    slug: "uts-nedir-kozmetikte-neden-onemli",
    title: "ÜTS Nedir, Kozmetik Ürünlerde Neden Önemlidir?",
    excerpt:
      "Ürün Takip Sistemi (ÜTS), Türkiye'de kozmetik ürünlerin kayıt ve takibini sağlayan resmi sistemdir. Güvenilir ürün seçiminde ÜTS'nin rolü.",
    category: "Güvenilir Alışveriş",
    date: "2026-07-01",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "ÜTS (Ürün Takip Sistemi), Türkiye İlaç ve Tıbbi Cihaz Kurumu bünyesinde işletilen ve kozmetik ürünler dahil birçok ürün grubunun kayıt altına alınıp takip edilmesini sağlayan resmi sistemdir.",
        ],
      },
      {
        heading: "Tüketici için ne anlama gelir?",
        paragraphs: [
          "Bir kozmetik ürünün ÜTS kaydının olması, ürünün Türkiye'de resmi olarak bildirimi yapılmış şekilde piyasaya sunulduğunu gösterir. Bu, merdiven altı ve kayıt dışı ürünlerden korunmanın en önemli yollarından biridir.",
          "Satın aldığınız ürünlerin barkod bilgisiyle ÜTS üzerinden sorgulama yapabilir, ürünün kayıtlı olup olmadığını kontrol edebilirsiniz.",
        ],
      },
      {
        heading: "Jaune Vaste ve şeffaflık",
        paragraphs: [
          "Jaune Vaste olarak tüm ürünlerimizin kayıt süreçlerini şeffaf şekilde yönetiyoruz. Ürün detay sayfalarımızda barkod ve ÜTS bilgilendirme alanlarını bulabilir, dilerseniz kendi sorgulamanızı yapabilirsiniz.",
        ],
      },
    ],
    seo: {
      title: "ÜTS Nedir? Kozmetik Ürünlerde ÜTS Kaydı Neden Önemli?",
      description:
        "ÜTS (Ürün Takip Sistemi) nedir, kozmetik ürünlerde neden önemlidir? Güvenilir kozmetik alışverişi için ÜTS ve barkod sorgulama rehberi.",
    },
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
