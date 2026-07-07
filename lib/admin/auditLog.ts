import { prisma } from "@/lib/db";

/**
 * Admin panelinden yapılan içerik değişikliklerinin denetim izi.
 * Plan bölüm 10: "Admin işlem logları". Giriş denemeleri ayrıca
 * lib/admin/log.ts ile dosyaya loglanır; bu tablo içerik mutasyonları
 * (yorum onaylama/silme, ürün güncelleme vb.) içindir.
 */
export async function recordAdminAction(params: {
  actor: string;
  action: string;
  entity: string;
  entityId: string;
  detail?: string;
}): Promise<void> {
  await prisma.adminAuditLog.create({
    data: {
      actor: params.actor,
      action: params.action,
      entity: params.entity,
      entityId: params.entityId,
      detail: params.detail,
    },
  });
}
