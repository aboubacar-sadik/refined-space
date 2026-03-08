import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
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
        <section>
          <TrendingSection articles={articles} />
        </section>
        <section>
          <Marquee categories={categories} />
        </section>
        <section>
          <CategoryGrid categories={categories} />
        </section>
        <section>
          <ArticlesSection articles={articles} categories={categories} />
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
