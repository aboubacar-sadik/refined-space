import { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { headers } from "next/headers";
import { SITEMAP_DATA_QUERY } from "@/lib/queries";

// This file creates a sitemap (sitemap.xml) for the application. Learn more about sitemaps in Next.js here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
//   Be sure to update the `changeFrequency` and `priority` values to match your application's content.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostsAndPages = await sanityFetch({
    query: SITEMAP_DATA_QUERY,
  });
  const headersList = await headers();
  const sitemap: MetadataRoute.Sitemap = [];
  const domain: string = headersList.get("host") as string;
  sitemap.push({
    url: domain as string,
    lastModified: new Date(),
    priority: 1,
    changeFrequency: "monthly",
  });

  // Static pages
  const staticPages = [
    {
      url: `${domain}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${domain}/contact`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${domain}/articles`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${domain}/categories`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
  ];

  staticPages.forEach((page) => {
    sitemap.push({
      url: page.url,
      lastModified: new Date(),
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    });
  });

  if (allPostsAndPages != null && allPostsAndPages.data.length != 0) {
    let priority: number;
    let changeFrequency:
      | "monthly"
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "yearly"
      | "never"
      | undefined;
    let url: string;

    for (const p of allPostsAndPages.data) {
      switch (p._type) {
        case "category":
          priority = 0.8;
          changeFrequency = "weekly";
          url = `${domain}/${p.slug}`;
          break;
        case "article":
          priority = 0.5;
          changeFrequency = "monthly";
          url = `${domain}/${p.categorySlug}/${p.slug}`;
          break;
        default:
          continue; // Skip unknown types
      }
      sitemap.push({
        lastModified: p._updatedAt || new Date(),
        priority,
        changeFrequency,
        url,
      });
    }
  }

  return sitemap;
}
