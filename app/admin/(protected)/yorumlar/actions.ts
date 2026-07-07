"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdminSession } from "@/lib/admin/auth";
import { recordAdminAction } from "@/lib/admin/auditLog";

export async function toggleReviewPublished(reviewId: string, published: boolean) {
  const session = await requireAdminSession();

  await prisma.review.update({
    where: { id: reviewId },
    data: { published },
  });

  await recordAdminAction({
    actor: session.sub,
    action: published ? "yorum-yayinla" : "yorum-gizle",
    entity: "review",
    entityId: reviewId,
  });

  revalidatePath("/admin/yorumlar");
  revalidatePath("/yorumlar");
  revalidatePath("/urunler/[slug]", "page");
}

export async function deleteReview(reviewId: string) {
  const session = await requireAdminSession();

  await prisma.review.delete({ where: { id: reviewId } });

  await recordAdminAction({
    actor: session.sub,
    action: "yorum-sil",
    entity: "review",
    entityId: reviewId,
  });

  revalidatePath("/admin/yorumlar");
  revalidatePath("/yorumlar");
  revalidatePath("/urunler/[slug]", "page");
}
