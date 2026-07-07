/**
 * Site geneli yapılandırma.
 * TODO alanları yayına almadan önce gerçek bilgilerle doldurulmalıdır.
 */
export const site = {
  name: "Jaune Vaste",
  url: "https://jaunevaste.com",
  slogan: "Günlük bakım rutinine zarif ve güvenilir bir dokunuş.",
  description:
    "Jaune Vaste; dudak, tırnak ve kişisel bakım ürünleriyle sade, ulaşılabilir ve modern bakım deneyimi sunar.",
  locale: "tr_TR",
  // TODO: Gerçek iletişim bilgileri ile güncellenecek
  email: "info@jaunevaste.com",
  phone: "+90 000 000 00 00",
  whatsapp: "900000000000",
  address: "İstanbul, Türkiye",
  social: {
    instagram: "https://www.instagram.com/jaunevaste",
    trendyol: "https://www.trendyol.com/jaune-vaste-y-s268646",
  },
} as const;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
