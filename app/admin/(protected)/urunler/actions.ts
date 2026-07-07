"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdminSession } from "@/lib/admin/auth";
import { recordAdminAction } from "@/lib/admin/auditLog";
import { categories } from "@/data/categories";

const categorySlugs = categories.map((c) => c.slug) as [string, ...string[]];

/** Textarea içeriğini satır satır ayırıp boş satırları eler. */
function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/** "Platform|URL" formatındaki satırları MarketplaceLink[]'e çevirir. */
function parseMarketplaceLinks(value: FormDataEntryValue | null) {
  return linesToArray(value)
    .map((line) => {
      const [platform, url] = line.split("|").map((s) => s.trim());
      return platform && url ? { platform, url } : null;
    })
    .filter((x): x is { platform: string; url: string } => x !== null);
}

const productSchema = z.object({
  name: z.string().trim().min(2, "Ürün adı gerekli"),
  slug: z
    .string()
    .trim()
    .min(2, "Slug gerekli")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug yalnızca küçük harf, rakam ve tire içerebilir"),
  category: z.enum(categorySlugs),
  shortBenefit: z.string().trim().min(5, "Kısa fayda cümlesi gerekli"),
  description: z.string().trim().min(10, "Açıklama gerekli"),
  usage: z.string().trim().min(5, "Kullanım bilgisi gerekli"),
  suitableFor: z.string().trim().min(5, "Kimler için uygun bilgisi gerekli"),
  sku: z.string().trim().min(2, "SKU gerekli"),
  barcode: z.string().trim().optional(),
  imageSrc: z.string().trim().min(1, "Görsel yolu gerekli"),
  imageAlt: z.string().trim().min(3, "Görsel alt text gerekli"),
  video: z.string().trim().optional(),
  seoTitle: z.string().trim().min(5, "SEO başlığı gerekli"),
  seoDescription: z.string().trim().min(10, "SEO açıklaması gerekli"),
  price: z.coerce.number().nonnegative().optional().or(z.literal("").transform(() => undefined)),
  stock: z.coerce.number().int().nonnegative().optional().or(z.literal("").transform(() => undefined)),
});

export interface ProductFormState {
  error?: string;
  fieldErrors?: Record<string, string>;
}

function buildProductData(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    category: formData.get("category"),
    shortBenefit: formData.get("shortBenefit"),
    description: formData.get("description"),
    usage: formData.get("usage"),
    suitableFor: formData.get("suitableFor"),
    sku: formData.get("sku"),
    barcode: formData.get("barcode") || undefined,
    imageSrc: formData.get("imageSrc"),
    imageAlt: formData.get("imageAlt"),
    video: formData.get("video") || undefined,
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    price: formData.get("price") ?? "",
    stock: formData.get("stock") ?? "",
  };

  const parsed = productSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { error: "Formda eksik veya hatalı alanlar var.", fieldErrors } as const;
  }

  const benefits = linesToArray(formData.get("benefits"));
  const ingredients = linesToArray(formData.get("ingredients"));
  const warnings = linesToArray(formData.get("warnings"));
  const marketplaceLinks = parseMarketplaceLinks(formData.get("marketplaceLinks"));

  return {
    data: parsed.data,
    benefits,
    ingredients,
    warnings,
    marketplaceLinks,
    utsRegistered: formData.get("utsRegistered") === "on",
    bestSeller: formData.get("bestSeller") === "on",
    isNew: formData.get("isNew") === "on",
    published: formData.get("published") === "on",
    ecommerceEnabled: formData.get("ecommerceEnabled") === "on",
  } as const;
}

export async function createProduct(
  _prevState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  const session = await requireAdminSession();
  const result = buildProductData(formData);
  if ("error" in result) return result;

  const { data, benefits, ingredients, warnings, marketplaceLinks, ...flags } = result;

  const existing = await prisma.product.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return { error: "Bu slug zaten kullanılıyor.", fieldErrors: { slug: "Bu slug zaten kullanılıyor." } };
  }

  await prisma.product.create({
    data: {
      id: data.slug,
      slug: data.slug,
      name: data.name,
      category: data.category,
      shortBenefit: data.shortBenefit,
      description: data.description,
      usage: data.usage,
      suitableFor: data.suitableFor,
      benefits,
      ingredients: ingredients.length ? ingredients : undefined,
      warnings: warnings.length ? warnings : undefined,
      sku: data.sku,
      barcode: data.barcode || undefined,
      utsRegistered: flags.utsRegistered,
      images: [{ src: data.imageSrc, alt: data.imageAlt }],
      video: data.video || undefined,
      bestSeller: flags.bestSeller,
      isNew: flags.isNew,
      marketplaceLinks,
      faqs: [],
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      price: data.price,
      stock: data.stock,
      ecommerceEnabled: flags.ecommerceEnabled,
      published: flags.published,
    },
  });

  await recordAdminAction({
    actor: session.sub,
    action: "urun-olustur",
    entity: "product",
    entityId: data.slug,
  });

  revalidatePath("/admin/urunler");
  revalidatePath("/urunler");
  redirect("/admin/urunler");
}

export async function updateProduct(
  productId: string,
  _prevState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  const session = await requireAdminSession();
  const result = buildProductData(formData);
  if ("error" in result) return result;

  const { data, benefits, ingredients, warnings, marketplaceLinks, ...flags } = result;

  const existing = await prisma.product.findUnique({ where: { id: productId } });
  if (!existing) {
    return { error: "Ürün bulunamadı." };
  }

  const images = existing.images as { src: string; alt: string }[];
  images[0] = { src: data.imageSrc, alt: data.imageAlt };

  await prisma.product.update({
    where: { id: productId },
    data: {
      name: data.name,
      category: data.category,
      shortBenefit: data.shortBenefit,
      description: data.description,
      usage: data.usage,
      suitableFor: data.suitableFor,
      benefits,
      ingredients: ingredients.length ? ingredients : undefined,
      warnings: warnings.length ? warnings : undefined,
      sku: data.sku,
      barcode: data.barcode || undefined,
      utsRegistered: flags.utsRegistered,
      images,
      video: data.video || undefined,
      bestSeller: flags.bestSeller,
      isNew: flags.isNew,
      marketplaceLinks,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      price: data.price,
      stock: data.stock,
      ecommerceEnabled: flags.ecommerceEnabled,
      published: flags.published,
    },
  });

  await recordAdminAction({
    actor: session.sub,
    action: "urun-guncelle",
    entity: "product",
    entityId: productId,
  });

  revalidatePath("/admin/urunler");
  revalidatePath("/urunler");
  revalidatePath(`/urunler/${existing.slug}`);
  redirect("/admin/urunler");
}

export async function deleteProduct(productId: string) {
  const session = await requireAdminSession();

  const existing = await prisma.product.findUnique({ where: { id: productId } });
  if (!existing) return;

  await prisma.product.delete({ where: { id: productId } });

  await recordAdminAction({
    actor: session.sub,
    action: "urun-sil",
    entity: "product",
    entityId: productId,
  });

  revalidatePath("/admin/urunler");
  revalidatePath("/urunler");
}

export async function toggleProductField(
  productId: string,
  field: "published" | "bestSeller" | "isNew",
  value: boolean
) {
  const session = await requireAdminSession();

  await prisma.product.update({
    where: { id: productId },
    data: { [field]: value },
  });

  await recordAdminAction({
    actor: session.sub,
    action: `urun-${field}-${value}`,
    entity: "product",
    entityId: productId,
  });

  revalidatePath("/admin/urunler");
  revalidatePath("/urunler");
}
