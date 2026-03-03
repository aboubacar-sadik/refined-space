import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
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
          <div>
            <div>
              <Hero />
            </div>
          </div>
        </section>
      </main>
      <Footer categoryLinks={categories} />
    </>
  );
}
