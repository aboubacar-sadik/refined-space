import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_ALL_PROCESSES_QUERY,
  PAGE_QUERY,
} from "@/lib/queries";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import type { Metadata } from "next";
import { PageBuilder } from "@/components/page-builder";

export const metadata: Metadata = {
  title: "About Us | Trusted Reviews & Expert Buying Guides",
  description:
    "Discover who we are, our mission, and how we provide reliable product reviews, detailed comparisons, and expert buying advice.",
};

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  const { data: processes } = await sanityFetch({
    query: GET_ALL_PROCESSES_QUERY,
  });

  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: "about" },
  });

  return (
    <>
      <Navigation />
      <main className="mt-18">
        {page?.content ? (
          <PageBuilder
            page={page}
            categories={categories}
            processes={processes}
          />
        ) : null}
      </main>
      <Footer categories={categories} />
    </>
  );
}
