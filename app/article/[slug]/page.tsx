// app/[...slug]/page.tsx
import { CategoriesList } from "@/components/article/CategoriesList";
import { NewsletterSignup } from "@/components/article/NewsletterSignup";
import { PopularArticles } from "@/components/PopularArticles";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_ARTICLE_BY_SLUG_QUERY,
  GET_POPULAR_ARTICLES_QUERY,
  GET_RELATED_ARTICLES_QUERY,
} from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { RelatedArticles } from "@/sections/article/RelatedArticles";
import { ArticleContent } from "@/sections/ArticleContent";
import { ArticleHero } from "@/sections/ArticleHero";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  // fetch post information
  const { data: article } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: { slug: slug },
    stega: false,
  });

  return {
    title: article?.title || process.env.NEXT_PUBLIC_SITE_TITLE,
    description: article?.excerpt || process.env.NEXT_PUBLIC_SITE_TITLE,
  };
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  const { data: popular_articles } = await sanityFetch({
    query: GET_POPULAR_ARTICLES_QUERY,
  });

  const { data: article } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: params,
  });

  const categorySlugs = article?.categories?.map((c) => c.slug);
  const tagSlugs = article?.tags?.map((c) => c.slug);
  const { data: related_articles } = await sanityFetch({
    query: GET_RELATED_ARTICLES_QUERY,
    params: {
      slug: slug,
      categorySlugs,
      tagSlugs,
    },
  });

  const gallery = article?.productGallery ?? [];
  const featured = article?.featuredImage;

  const productImages = [
    ...(featured ? [featured] : []),
    ...(gallery[0] ? [gallery[0]] : []),
    ...gallery.slice(1),
  ];

  if (!article || slug !== article?.slug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream ">
      {/* <ReadingProgress /> */}
      <Navigation />
      <main className="pt-20 mt-18">
        {/* Article Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleHero article={article} articleGallery={productImages} />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-8 pb-14">
              <ArticleContent body={article.body} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 ">
              {/* Popular Articles */}
              <PopularArticles articles={popular_articles} />

              {/* Categories */}
              <CategoriesList categories={categories} />

              {/* Newsletter */}
              <NewsletterSignup />
            </aside>
          </div>

          {/* Author Bio */}
          {/* <AuthorBio author={author} /> */}

          {/* Article Navigation */}
          {/* <ArticleNavigation previous={prevArticle} next={nextArticle} /> */}

          {/* Related Articles */}
          <RelatedArticles articles={related_articles} />
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
