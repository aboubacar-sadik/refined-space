"use client";

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
}

export function ArticleHero({ article }: ArticleHeroProps) {
  const { title, type, featuredImage, slug, excerpt, publishedAt, _updatedAt } =
    article;
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
    <header className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Category Badge */}
        <span className="mb-6 inline-flex border border-gold-light text-gold px-4 py-1.5 rounded-sm cursor-default uppercase text-[11px] tracking-[0.1em] leading-[11px]">
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
            <span className="hidden md:block w-px h-8 bg-border-color" />

            {/* Date & Reading Time */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.publishedAt as string}>
                  {(article._updatedAt as string)
                    ? `Updated ${formatUpdatedDate(article._updatedAt as string)}`
                    : formatUpdatedDate(article.publishedAt as string)}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {/* <span>{readingTime} min read</span> */}
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
      <div className="mt-8 md:mt-12">
        <figure className="relative">
          <img
            src={`${article.featuredImage?.url}`}
            alt={`${article.featuredImage?.alt}`}
            className="w-full h-auto max-h-[600px] object-cover rounded-sm"
          />
        </figure>
      </div>
    </header>
  );
}
