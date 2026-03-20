import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/sections/CategoryGrid";
import Hero from "@/sections/Hero";
import LatestContent from "@/sections/LatestContent";
import Philosophy from "@/sections/Philosophy";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import { Newsletter } from "@/sections/Newsletter";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find the Best Products | Reviews, Comparisons & Guides",
  description:
    "Compare products, read honest reviews, and discover expert buying guides—all in one place to help you choose with confidence.",
};

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  const { data: articles } = await sanityFetch({
    query: GET_RECENT_ARTICLES_QUERY,
  });

  return (
    <>
      <Navigation />
      <main className="mt-18">
        {/* Hero section */}
        <section>
          <Hero categories={categories} articles={articles} />
        </section>
        <section>
          <Marquee categories={categories} />
        </section>
        <section className="py-14 lg:py-24">
          <div className="container">
            <SectionTitle
              tagline="Browse by Category"
              title={`Every Room. Every Choice.`}
              link_href={`/categories`}
              link_label="View All Categories"
            />
          </div>
          <CategoryGrid categories={categories} />
        </section>
        <section className="py-14 lg:py-24 bg-cream">
          <div className="container">
            <SectionTitle
              tagline="Latest Content"
              title={`Research First. Recommend Second.`}
            />
          </div>
          <div className="mt-12">
            <LatestContent articles={articles} />
          </div>
        </section>
        {/* NOUS Y REVIENDRONS LATER */}
        {/* <section>
          <ComparisonTable />
        </section> */}
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
