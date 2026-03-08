"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { ChevronDown } from "lucide-react";
import { Article } from "@/sanity/lib/types";
import SectionTitle from "./SectionTitle";

interface ArticleGridProps {
  articles: Article[];
  /** Initial number of articles to display */
  initialCount?: number;
  /** Batch size for Load More */
  batchSize?: number;
  /** Section heading (e.g. "Guides") */
  heading?: string;
  /** Optional section subtitle */
  subtitle?: string;
}

export default function ArticleGrid({
  articles,
  initialCount = 3,
  batchSize = 3,
  heading,
  subtitle,
}: ArticleGridProps) {
  const [visible, setVisible] = useState(initialCount);

  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  const loadMore = () => {
    setVisible((v) => Math.min(v + batchSize, articles.length));
  };

  if (articles.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground text-sm">
        No articles match your current filters.
      </div>
    );
  }

  return (
    <section
      aria-labelledby={heading ? `section-${heading.toLowerCase()}` : undefined}
    >
      {heading && (
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
          <SectionTitle
            inline
            tagline="Browse by type"
            title={heading}
            size="small"
          />
          <span className="text-xs block tracking-[0.2em] uppercase text-text font-medium">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </span>
        </div>
      )}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label={heading ? `${heading} articles` : "Articles"}
      >
        {shown.map((article) => (
          <div role="listitem" key={article._id}>
            <ArticleCard article={article} variant="cream" />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-2 border border-forest text-forest text-sm font-medium px-7 py-3 rounded-sm hover:bg-forest hover:text-primary-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring"
            aria-label={`Load more ${heading ?? "articles"}`}
          >
            <ChevronDown size={15} aria-hidden="true" />
            Load More ({articles.length - visible} remaining)
          </button>
        </div>
      )}
    </section>
  );
}
