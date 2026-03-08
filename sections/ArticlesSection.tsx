"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/components/CategoryFilter";
import { Article, Category, Tag } from "@/sanity/lib/types";
import TabsFilter from "@/components/TabsFilter";
import ArticleGrid from "@/components/ArticleGrid";
import SectionTitle from "@/components/SectionTitle";

export type ArticleType = "guide" | "review" | "comparison";

// export type Category =
//   | "Baby & Child"
//   | "Eco-Tech & Energy"
//   | "Non-Toxic Personal Care"
//   | "Pet Wellness"
//   | "Sustainable Home"
//   | "Wellness & Performance";

type TabValue = "all" | ArticleType;
type ArticleProps = {
  articles: Article[];
  categories: Category[];
};

// Sync filter state to URL without triggering any Next.js navigation
function syncURL(tab: TabValue, category: Category["slug"] | "all") {
  const params = new URLSearchParams();
  if (tab !== "all") params.set("type", tab);
  if (category !== "all") params.set("category", category as string);
  const qs = params.toString();
  window.history.replaceState(
    null,
    "",
    qs ? `?${qs}` : window.location.pathname,
  );
}

export default function ArticlesPage({ articles, categories }: ArticleProps) {
  const searchParams = useSearchParams();

  // Initialise from URL on first render, then own the state locally
  const [activeTab, setActiveTab] = useState<TabValue>(
    () => (searchParams.get("type") ?? "all") as TabValue,
  );
  const [selectedCategory, setSelectedCategory] = useState<
    Category["slug"] | "all"
  >(() => (searchParams.get("category") ?? "all") as Category["slug"] | "all");

  // Keep URL in sync whenever state changes (no navigation, no scroll)
  useEffect(() => {
    syncURL(activeTab, selectedCategory);
  }, [activeTab, selectedCategory]);

  const handleTabChange = (tab: TabValue) => {
    setActiveTab(tab);
    setSelectedCategory("all");
  };

  const handleCategoryChange = (cat: Category["slug"] | "all") => {
    setSelectedCategory(cat);
  };

  const clearAll = () => {
    setActiveTab("all");
    setSelectedCategory("all");
  };

  // Non-featured articles only
  //   const pool = useMemo(() => articles.filter((a) => a.slug), []);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const typeMatch = activeTab === "all" || article.type?.slug === activeTab;
      const catMatch =
        selectedCategory === "all" ||
        article.categories?.some((e) => e.slug === selectedCategory);

      return typeMatch && catMatch;
    });
  }, [articles, activeTab, selectedCategory]);

  const guides = useMemo(
    () => filtered.filter((a) => a.type?.slug === "guide"),
    [filtered],
  );
  const reviews = useMemo(
    () => filtered.filter((a) => a.type?.slug === "review"),
    [filtered],
  );
  const comparisons = useMemo(
    () => filtered.filter((a) => a.type?.slug === "comparison"),
    [filtered],
  );

  const hasActiveFilters = activeTab !== "all" || selectedCategory !== "all";

  return (
    <div className="bg-cream flex flex-col pt-14 lg:pt-20 mb-14 lg:mb-20">
      <div className="container">
        <SectionTitle tagline="Browse All Content" title="Latest Articles" />
      </div>
      {/* Filter bar */}
      <div className="sticky bg-cream py-8 pb-14 top-18 z-40">
        <div className="flex flex-col gap-4 container">
          {/* Row 1: Type tabs + result count */}
          <div className="flex flex-wrap items-center justify-between gap-4  ">
            <div className="w-full ">
              <TabsFilter activeTab={activeTab} onChange={handleTabChange} />
            </div>
            <span className="text-sm text-text font-semibold uppercase tracking-[0.02em]">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              {hasActiveFilters && " (filtered)"}
            </span>
          </div>

          {/* Row 2: Category pills */}
          <CategoryFilter
            selected={selectedCategory}
            onChange={handleCategoryChange}
            categories={categories}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="bg-warm-white">
        <div className="container flex-1 mt-4 bg-warm-white py-14 w-full flex flex-col gap-20">
          {activeTab === "all" ? (
            <>
              {guides.length > 0 && (
                <ArticleGrid
                  articles={guides}
                  heading="Guides"
                  subtitle="In-depth, research-backed buying guides for every category."
                  initialCount={3}
                  batchSize={3}
                />
              )}

              {reviews.length > 0 && (
                <ArticleGrid
                  articles={reviews}
                  heading="Reviews"
                  subtitle="Hands-on product tests with real data — no sponsored placements."
                  initialCount={3}
                  batchSize={3}
                />
              )}

              {/* <TrendingSection articles={articles.slice(0, 5)} /> */}

              {comparisons.length > 0 && (
                <ArticleGrid
                  articles={comparisons}
                  heading="Comparisons"
                  subtitle="Head-to-head tests so you know exactly which product wins."
                  initialCount={3}
                  batchSize={3}
                />
              )}
            </>
          ) : (
            <ArticleGrid
              articles={filtered}
              heading={
                activeTab === "guide"
                  ? "Guides"
                  : activeTab === "review"
                    ? "Reviews"
                    : "Comparisons"
              }
              initialCount={6}
              batchSize={3}
            />
          )}

          {filtered.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center gap-4">
              <p className="text-muted-foreground text-base">
                No articles match your current filters.
              </p>
              <button
                onClick={clearAll}
                className="text-sm text-forest underline hover:text-gold transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
