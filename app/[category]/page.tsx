import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_ARTICLES_BY_CATEGORY_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/sections/CategoryGrid";
import Philosophy from "@/sections/Philosophy";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import { Newsletter } from "@/sections/Newsletter";
import ArticlesSection from "@/sections/ArticlesSection";
import TrendingSection from "@/sections/TrendingSection";

// app/[...slug]/page.tsx
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import ArticleGrid from "@/components/ArticleGrid";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { category: categorySlug } = await params;

  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  // Guard against API issues returning undefined/null
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    notFound();
  }

  const { data: articlesData } = await sanityFetch({
    query: GET_ARTICLES_BY_CATEGORY_QUERY,
    params: { categorySlug },
  });

  const articles = Array.isArray(articlesData) ? articlesData : [];

  const categoryMatching = categories.find((c) => c.slug === categorySlug);
  if (!categoryMatching) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="mt-18">
        <section>
          <TrendingSection articles={articles} />
        </section>
        <section>
          <Marquee categories={categories} />
        </section>
        <section className="py-14 lg:py-24">
          <div className="container">
            <SectionTitle
              tagline="Browse by Category"
              title="Every Room. Every Choice."
              link_href="/categories"
              link_label="View All Categories"
            />
          </div>
          <div className="mt-12">
            <CategoryGrid categories={categories} />
          </div>
        </section>
        <section className="py-14 lg:py-24 bg-cream">
          <div className="container">
            <SectionTitle tagline="Browse All Content" title="Latest Posts." />
            <span className="text-xs block tracking-[0.2em] uppercase text-text font-medium">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </span>
          </div>
          <div className="mt-12 container">
            <ArticleGrid articles={articles} initialCount={3} batchSize={3} />
          </div>
        </section>
        <section>
          <Philosophy />
        </section>
        <section>
          <Newsletter />
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
