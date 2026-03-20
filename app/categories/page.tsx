import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import {
  GET_RECENT_ARTICLES_QUERYResult,
  GET_ARTICLES_BY_CATEGORY_QUERYResult,
} from "@/sanity.types";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/sections/CategoryGrid";
import LatestContent from "@/sections/LatestContent";
import Philosophy from "@/sections/Philosophy";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import { Newsletter } from "@/sections/Newsletter";
import TrendingSection from "@/sections/categories/TrendingSection";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories | Reviews, Comparisons & Buying Guides",
  description:
    "Discover top-rated products across all categories. Read reviews, compare features, and find the perfect choice with our expert guides.",
};

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  const { data: articles } = (await sanityFetch({
    query: GET_RECENT_ARTICLES_QUERY,
  })) as { data: GET_RECENT_ARTICLES_QUERYResult };

  const articlesByCategory = categories.map((category) => ({
    category,
    articles: articles.filter((article) =>
      article.categories?.some((cat) => cat.slug === category.slug),
    ),
  }));

  return (
    <>
      <Navigation />
      <main className="mt-18">
        {/* Hero section */}
        <section>
          <TrendingSection articles={articles} />
        </section>
        <section className="bg-warm-white py-14 lg:py-24">
          <div className="container">
            <SectionTitle
              title="Every Room. Every Choice."
              tagline="Browse by Category"
            />
          </div>
          <div className="mt-12">
            <CategoryGrid categories={categories} />
          </div>
        </section>

        {articlesByCategory.map(({ category, articles }, index) => {
          return (
            <section
              key={category._id}
              className="py-14 lg:py-24 odd:bg-cream even:bg-warm-white"
            >
              <div className="container">
                <SectionTitle
                  tagline="Articles in"
                  title={`${category.title}.`}
                  link_href={`/${category.slug}`}
                  link_label="View all guides"
                />
              </div>
              <LatestContent
                articles={articles}
                cardVariant={index % 2 !== 0 ? "cream" : ""}
              />
            </section>
          );
        })}

        <section>{/* <Marquee categories={categories} /> */}</section>
        <section>{/* <CategoryGrid categories={categories} /> */}</section>

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
