import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getBlogPostBySlug } from "@/lib/cms";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: `/bakim-rehberi/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Bakım Rehberi", path: "/bakim-rehberi" },
          { name: post.title, path: `/bakim-rehberi/${post.slug}` },
        ])}
      />
      <article>
        <header className="bg-cream py-12 sm:py-16">
          <Container className="max-w-3xl">
            <Link
              href="/bakim-rehberi"
              className="text-sm font-semibold text-cocoa hover:text-gold"
            >
              ← Bakım Rehberi
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm font-semibold text-ink/45">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingMinutes} dk okuma
            </p>
          </Container>
        </header>

        <div className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-8">
                {section.heading && (
                  <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, j) => (
                  <p
                    key={j}
                    className="mb-4 text-base leading-relaxed text-ink/75"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-12 rounded-card bg-cream p-8 text-center">
              <h2 className="font-display text-xl font-bold text-ink">
                Bakım rutininize uygun ürünü keşfedin
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Jaune Vaste ürünlerini inceleyin, size en uygun olanı bulun.
              </p>
              <div className="mt-5">
                <ButtonLink href="/urunler">Ürünleri Keşfet</ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      </article>
    </>
  );
}
