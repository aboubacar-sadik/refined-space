import { GET_ARTICLE_BY_SLUG_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: { slug: "avocado-green-mattress-is-it-worth-usd2-000" },
  });

  return (
    <>
      <Navigation />
      <main className="mt-18"></main>
      <Footer />
    </>
  );
}
