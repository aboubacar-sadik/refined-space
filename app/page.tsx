import LazyAnimation from "@/animations/ListAnimation";
import { Button } from "@/components/ui/button";
import {
  GET_ARTICLE_BY_SLUG_QUERY,
  GET_RECENT_ARTICLES_QUERY,
} from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { ArrowRightIcon } from "@sanity/icons";

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: { slug: "avocado-green-mattress-is-it-worth-usd2-000" },
  });

  return <main></main>;
}
