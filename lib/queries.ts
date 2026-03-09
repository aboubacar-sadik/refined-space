import { defineQuery } from "next-sanity";

// Get all articles
export const GET_RECENT_ARTICLES_QUERY =
  defineQuery(`  *[_type == "article" && defined(publishedAt)] | order(publishedAt desc)[0...20] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,"slug": slug.current
    },
    publishedAt,
    _updatedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    categories[]-> {
      title,
      "slug": slug.current
    },
    tags[]-> {
      title,
      "slug": slug.current
    },
    productGallery[] {
      alt,
      "url": asset->url
    },
    author-> {
      name
    }
  }`);

// Get popular articles
export const GET_POPULAR_ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && popular == true && defined(publishedAt)]
  | order(publishedAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,
      "slug": slug.current
    },
    publishedAt,
    _updatedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    categories[]->{
      title,
      "slug": slug.current
    }
  }
`);

// Get related articles
export const GET_RELATED_ARTICLES_QUERY = defineQuery(`
  *[
    _type == "article" &&
    slug.current != $slug &&
    (
      count((categories[]->slug.current)[@ in $categorySlugs]) > 0 
    )
  ]
  | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,
      "slug": slug.current
    },
    publishedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    categories[]->{
      title,
      "slug": slug.current
    }
  }
`);

// Get a single article by slug
export const GET_ARTICLE_BY_SLUG_QUERY =
  defineQuery(`  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    _updatedAt,
    type->{
      title,"slug": slug.current
    },
    content, // Often needed for the full page
    categories[]-> {
      title,
      "slug": slug.current
    },
    tags[]-> {
      title,
      "slug": slug.current
    },
    featuredImage {
      alt,
      "url": asset->url
    },
    productGallery[] {
      alt,
      "url": asset->url
    },
    author-> {
      name,
      bio,
      "image": image.asset->url
    }
  }`);
// Get articles by category (slug)

export const GET_ARTICLES_BY_CATEGORY_QUERY =
  defineQuery(`  *[_type == "article" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,
      "slug": slug.current
    },
    publishedAt,
    _updatedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    // We can also pull the category names back out
    categories[]-> {
      title,
      "slug": slug.current
    },
    tags[]-> {
      title,
      "slug": slug.current
    },
    author-> {
      name
    }
  }`);
// Get articles by tag (slug)

export const GET_ARTICLES_BY_TAG_QUERY =
  defineQuery(`  *[_type == "article" && references(*[_type == "tag" && slug.current == $tagSlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,
      "slug": slug.current
    },
    publishedAt,
    _updatedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    categories[]-> {
      title,
      "slug": slug.current
    },
    tags[]-> {
      title,
      "slug": slug.current
    },
    author-> {
      name
    }
  }`);
// Get articles by type (slug)

export const GET_ARTICLES_BY_TYPE_QUERY =
  defineQuery(`  *[_type == "article" && references(*[_type == "articleType" && slug.current == $articleTypeSlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    type->{
      title,
      "slug": slug.current
    },
    publishedAt,
    _updatedAt,
    featuredImage {
      alt,
      "url": asset->url
    },
    categories[]-> {
      title,
      "slug": slug.current
    },
    tags[]-> {
      title,
      "slug": slug.current
    },
    author-> {
      name
    }
  }`);
// Get all categories
export const GET_ALL_CATEGORIES_QUERY =
  defineQuery(`  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    "articleCount": count(*[_type == "article" && references(^._id)]),
    _updatedAt,
  }`);

// Get a category by slug
export const GET_CATEGORY_BY_SLUG_QUERY =
  defineQuery(`  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    "articleCount": count(*[_type == "article" && references(^._id)]),
    _updatedAt,
  }`);

// Get all tags
export const GET_ALL_TAGS_QUERY =
  defineQuery(`  *[_type == "tag"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "articleCount": count(*[_type == "article" && references(^._id)]),
    _updatedAt,
  }`);
