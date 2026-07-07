import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/cms";

export const metadata: Metadata = buildMetadata({
  title: "Bakım Rehberi",
  description:
    "Dudak bakımı, tırnak bakımı ve kişisel bakım hakkında uzman içerikler. Lip balm seçimi, tırnak bakım rutini ve daha fazlası Jaune Vaste Bakım Rehberi'nde.",
  path: "/bakim-rehberi",
});

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Bakım Rehberi", path: "/bakim-rehberi" },
        ])}
      />
      <section className="bg-soft py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Bakım Rehberi
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Doğru bakım, doğru bilgiyle başlar. Günlük rutininizi geliştirecek
            içerikleri keşfedin.
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-card bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary-soft">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-primary">
                  <Link href={`/bakim-rehberi/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-semibold text-muted">
                  {post.readingMinutes} dk okuma
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
