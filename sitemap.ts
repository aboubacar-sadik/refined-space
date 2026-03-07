import type { MetadataRoute } from "next";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "./sanity/lib/live";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  type Post = {
    slug: string;
    _updatedAt: string;
  };

  type Category = {
    slug: string;
    _updatedAt: string;
  };

  const { data: posts } = await sanityFetch({
    query: defineQuery(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
    `),
  });

  const { data: categories } = await sanityFetch({
    query: defineQuery(`
    *[_type == "category"]{
      "slug": slug.current,
      _updatedAt
    }
  `),
  });

  const postUrls: MetadataRoute.Sitemap = (posts as Post[]).map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = (categories as Category[]).map(
    (category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(category._updatedAt),
      changeFrequency: "weekly",
      priority: 0.6,
    }),
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticPages, ...categoryUrls, ...postUrls];
}
