import LazyAnimation from "@/animations/ListAnimation";
import {
  GET_ARTICLE_BY_SLUG_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: { slug: "avocado-green-mattress-is-it-worth-usd2-000" },
  });

  return (
    <main className="p-12 ">
      <LazyAnimation />
      <h1>Gros </h1>
    </main>
  );
}
