import type { Review } from "@/lib/types";

/**
 * Müşteri yorumu seed verisi.
 *
 * ÖNEMLİ (KVKK ve telif uyumu): Buradaki yorumlar örnek/yer tutucu
 * içeriktir. Yayına almadan önce gerçek pazaryeri yorumlarıyla
 * değiştirilmelidir; bunu yaparken:
 *  - Yorumlar birebir ve izinsiz toplu kopyalanmamalı
 *  - Kullanıcı adları maskelenmeli (ör. "A*** Y.")
 *  - Kaynak (Trendyol vb.) belirtilmeli
 *  - Mümkünse marka paneli üzerinden alınan yorum verileri kullanılmalı
 */
export const reviews: Review[] = [
  {
    id: "rv-001",
    productSlug: "aloe-vera-lip-balm",
    maskedName: "E*** K.",
    rating: 5,
    text: "Dudaklarım için sürekli kullanıyorum, kuruluk hissini hemen alıyor. Fiyatına göre çok başarılı.",
    source: "Manuel",
    published: true,
  },
  {
    id: "rv-002",
    productSlug: "tirnak-bakim-yagi",
    maskedName: "S*** A.",
    rating: 5,
    text: "Tırnak etlerim çok kuruyordu, düzenli kullanınca fark ettim. Fırçası da çok pratik.",
    source: "Manuel",
    published: true,
  },
  {
    id: "rv-003",
    productSlug: "dogal-roll-on",
    maskedName: "M*** T.",
    rating: 4,
    text: "Kokusu hafif ve rahatsız etmiyor, cildimi de tahriş etmedi. Tekrar alırım.",
    source: "Manuel",
    published: true,
  },
  {
    id: "rv-004",
    productSlug: "silikon-kulak-tikaci",
    maskedName: "B*** D.",
    rating: 5,
    text: "Uyurken kullanıyorum, kulakta baskı yapmıyor. Kutusuyla gelmesi de hijyenik.",
    source: "Manuel",
    published: true,
  },
  {
    id: "rv-005",
    productSlug: "spf-lip-balm",
    maskedName: "G*** Ö.",
    rating: 5,
    text: "Yazın deniz tatilinde çok işime yaradı, dudaklarım hiç kurumadı.",
    source: "Manuel",
    published: true,
  },
  {
    id: "rv-006",
    maskedName: "Z*** Y.",
    rating: 5,
    text: "Kargo hızlıydı, ürünler özenli paketlenmişti. Marka olarak güven verdi.",
    source: "Manuel",
    published: true,
  },
];
