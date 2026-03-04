import Marquee from "@/components/Marquee";
import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import CategoryGrid from "@/sections/CategoryGrid";
import { Footer } from "@/sections/Footer";
import Hero from "@/sections/Hero";
import { Navigation } from "@/sections/Navigation";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
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
      </main>
      <Footer categoryLinks={categories} />
    </>
  );
}
