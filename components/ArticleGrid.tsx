"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { ChevronDown } from "lucide-react";
import { Articles } from "@/sanity/lib/types";
import SectionTitle from "./SectionTitle";

interface ArticleGridProps {
  articles: Articles;
  /** Initial number of articles to display */
  initialCount?: number;
  /** Batch size for Load More */
  batchSize?: number;
  /** Section heading (e.g. "Guides") */
  heading?: string;
  cardVariant?: string;
}

export default function ArticleGrid({
  articles,
  initialCount = 3,
  batchSize = 3,
  heading,
  cardVariant,
}: ArticleGridProps) {
  const [visible, setVisible] = useState(initialCount);

  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  const loadMore = () => {
    setVisible((v) => Math.min(v + batchSize, articles.length));
  };

  return (
    <section>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label={"Articles"}
      >
        {shown.map((article) => (
          <div role="listitem" key={article._id}>
            <ArticleCard article={article} variant={cardVariant} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-2 border border-forest text-forest text-sm font-medium px-7 py-3 rounded-sm hover:bg-forest hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-ring cursor-pointer"
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
