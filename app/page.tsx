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
        <section>
          <CategoryGrid categories={categories} />
        </section>
        <section>
          <LatestContent articles={articles} />
        </section>
        {/* NOUS Y REVIENDRONS LATER */}
        {/* <section>
          <ComparisonTable />
        </section> */}
        <section>
          <Philosophy />
        </section>
        <section>
          <Newsletter variant="cream" />
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
