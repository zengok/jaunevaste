import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import type { BlogPost } from "@/lib/types";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Bakım Rehberi"
          title="Doğru bakım, doğru bilgiyle başlar"
          description="Uzman gözüyle hazırlanan içeriklerle günlük bakım rutininizi geliştirin."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-card bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary-soft">
                {post.category}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-primary">
                <Link href={`/bakim-rehberi/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs font-semibold text-muted">
                {post.readingMinutes} dk okuma
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/bakim-rehberi" variant="outline">
            Tüm Yazıları Gör
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
