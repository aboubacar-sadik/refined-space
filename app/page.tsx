import Marquee from "@/components/Marquee";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import CategoryGrid from "@/sections/CategoryGrid";
import ComparisonTable from "@/sections/ComparisonTable";
import { Footer } from "@/sections/Footer";
import Hero from "@/sections/Hero";
import LatestContent from "@/sections/LatestContent";
import { Navigation } from "@/sections/Navigation";
import { Newsletter } from "@/sections/Newsletter";
import Philosophy from "@/sections/Philosophy";

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
          <Hero />
        </section>
        <section>
          <Marquee categories={categories} />
        </section>
        <section>
          <div className="bg-warm-white py-14 lg:py-24">
            <CategoryGrid categories={categories} />
          </div>
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
          <Newsletter/>
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
