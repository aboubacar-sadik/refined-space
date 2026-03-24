import { defineDocuments, defineLocations } from "sanity/presentation";

type ResolvableDoc = {
  title?: string | null;
  slug?: string | null;
};

const isKnownStaticPageSlug = (
  slug?: string | null,
): slug is "about" | "contact" => {
  return slug === "about" || slug === "contact";
};

export const locations = {
  article: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc: ResolvableDoc | null) => {
      if (!doc) return null;

      return {
        locations: [
          {
            title: doc.title || "Untitled article",
            href: `/article/${doc.slug}`,
          },
          { title: "Articles Index", href: "/articles" },
        ],
      };
    },
  }),
  category: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc: ResolvableDoc | null) => {
      if (!doc) return null;

      return {
        locations: [
          {
            title: doc.title || "Untitled category",
            href: `/category/${doc.slug}`,
          },
          { title: "Categories Index", href: "/categories" },
        ],
      };
    },
  }),
  page: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc: ResolvableDoc | null) => {
      if (!doc) return null;

      if (isKnownStaticPageSlug(doc.slug)) {
        return {
          locations: [
            { title: doc.title || "Untitled page", href: `/${doc.slug}` },
          ],
        };
      }

      return { locations: [] };
    },
  }),
};

export const mainDocuments = defineDocuments([
  {
    route: "/article/:slug",
    filter: `_type == "article" && slug.current == $slug`,
  },
  {
    route: "/category/:slug",
    filter: `_type == "category" && slug.current == $slug`,
  },
  {
    route: "/about",
    filter: `_type == "page" && slug.current == "about"`,
  },
  {
    route: "/contact",
    filter: `_type == "page" && slug.current == "contact"`,
  },
]);
