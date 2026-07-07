import { Hero } from "@/components/sections/Hero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { BestSellers } from "@/components/sections/BestSellers";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TrustBlocks } from "@/components/sections/TrustBlocks";
import { BlogPreview } from "@/components/sections/BlogPreview";
import {
  getBestSellers,
  getBlogPosts,
  getCategories,
  getReviews,
} from "@/lib/cms";

export default async function HomePage() {
  const [categories, bestSellers, reviews, posts] = await Promise.all([
    getCategories(),
    getBestSellers(4),
    getReviews(),
    getBlogPosts(),
  ]);

  return (
    <>
      <Hero />
      <CategoryGrid categories={categories} />
      <BestSellers products={bestSellers} />
      <ReviewsSection reviews={reviews} />
      <TrustBlocks />
      <BlogPreview posts={posts} />
    </>
  );
}
