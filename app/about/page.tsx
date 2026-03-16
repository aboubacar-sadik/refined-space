import { sanityFetch } from "@/sanity/lib/live";
import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import AboutHero from "@/sections/about/AboutHero";
import MissionSection from "@/sections/about/MissionSection";
import CategoriesGrid from "@/sections/about/CategoriesGrid";
import ReviewProcess from "@/sections/about/ReviewProcess";
import CTASection from "@/sections/about/CTASection";
import { Newsletter } from "@/sections/Newsletter";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  return (
    <>
      <Navigation />
      <main className="mt-18">
        <AboutHero />

        <section id="mission" className="py-16 lg:py-20 bg-cream">
          <MissionSection />
        </section>

        <section id="categories" className="py-24 lg:py-32 bg-cream-warm">
          <CategoriesGrid categories={categories} />
        </section>

        <section className="py-24 lg:py-32 bg-cream">
          <ReviewProcess />
        </section>

        <section className="pt-24 lg:pt-32 bg-cream-warm">
          <CTASection />
        </section>
        <section className="">
          <Newsletter />
        </section>
      </main>
      <Footer categories={categories} />
    </>
  );
}
