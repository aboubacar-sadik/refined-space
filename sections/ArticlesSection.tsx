"use client";

import ArticleGrid from "@/components/ArticleGrid";
import { Articles, Categories } from "@/sanity/lib/types";

type ArticleProps = {
  articles: Articles;
  categories: Categories;
};

export default function ArticlesPage({ articles, categories }: ArticleProps) {
  return (
    <div className="container w-full">
      {articles.length > 0 && (
        <ArticleGrid articles={articles} initialCount={3} batchSize={3} />
      )}
    </div>
  );
}
