"use client";

import CarouselWithProgress from "@/components/article/Carousel";
import { formatUpdatedDate } from "@/lib/utils";
import { Article } from "@/sanity/lib/types";
import {
  Clock,
  Calendar,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

interface ArticleHeroProps {
  article: Article;
  articleGallery: (
    | {
        alt: string | null;
        url: string | null;
      }
    | null
  )[];
}

export function ArticleHero({ article, articleGallery }: ArticleHeroProps) {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title as string);

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Category Badge */}
        <span className="mb-6 inline-flex border border-gold-light text-gold px-4 py-1.5 rounded-sm cursor-default uppercase text-[11px] tracking-widest leading-2.75">
          {article.type?.title}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-forest mb-6">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className=" md:text-lg text-text-muted leading-relaxed mb-8 max-w-3xl">
          {article.excerpt}
        </p>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border-color">
          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {/* Divider */}

            {/* Date & Reading Time */}
            <div className="flex flex-wrap items-center gap-4 md:gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.publishedAt as string}>
                  {(article._updatedAt as string)
                    ? `Updated ${formatUpdatedDate(article._updatedAt as string)}`
                    : formatUpdatedDate(article.publishedAt as string)}
                </time>
              </div>
              <span className="block w-px h-8 bg-border" />

              <div>
                {article.categories?.map((category) => (
                  <span
                    key={category.slug}
                    className="group flex items-center gap-4"
                  >
                    {category.title}
                    <span className="block size-0.75 shrink-0 bg-sage rounded-full group-last:hidden" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted mr-1 hidden sm:inline">
              Share:
            </span>
            <button
              onClick={() => handleShare("twitter")}
              className="p-2 rounded-full hover:bg-forest/10 cursor-pointer text-text-muted hover:text-forest transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="p-2 rounded-full hover:bg-forest/10 cursor-pointer text-text-muted hover:text-forest transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="p-2 rounded-full hover:bg-forest/10 cursor-pointer text-text-muted hover:text-forest transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="p-2 rounded-full hover:bg-forest/10 cursor-pointer text-text-muted hover:text-forest transition-colors"
              aria-label="Copy link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <CarouselWithProgress images={articleGallery} />
    </section>
  );
}
// 3741x2494
