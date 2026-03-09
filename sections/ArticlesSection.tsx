"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import CategoryFilter from "@/components/CategoryFilter";
import TabsFilter from "@/components/TabsFilter";
import ArticleGrid from "@/components/ArticleGrid";
import SectionTitle from "@/components/SectionTitle";
import { Articles, Categories } from "@/sanity/lib/types";

export type ArticleType = "guide" | "review" | "comparison";
type TabValue = "all" | ArticleType;

type ArticleProps = {
  articles: Articles;
  categories: Categories;
};

export default function ArticlesPage({ articles, categories }: ArticleProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // ------------------------
  // Filter state (slugs only)
  // ------------------------
  const [activeTab, setActiveTab] = useState<TabValue>(
    () => (searchParams.get("type") as TabValue) ?? "all",
  );
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    () => searchParams.get("category") ?? "all",
  );

  // ------------------------
  // Sync filters to URL WITHOUT triggering navigation
  // ------------------------
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeTab !== "all") params.set("type", activeTab);
    if (selectedCategory !== "all") params.set("category", selectedCategory);

    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    // Use the browser history API, no navigation
    window.history.replaceState(null, "", url);
  }, [activeTab, selectedCategory, pathname]);

  // ------------------------
  // Handlers
  // ------------------------
  const handleTabChange = (tab: TabValue) => {
    setActiveTab(tab);
    setSelectedCategory("all"); // reset category on tab change
  };

  const handleCategoryChange = (slug: string | "all") => {
    setSelectedCategory(slug);
  };

  const clearAll = () => {
    setActiveTab("all");
    setSelectedCategory("all");
  };

  // ------------------------
  // Filter articles (client-side)
  // ------------------------
  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const typeMatch = activeTab === "all" || article.type?.slug === activeTab;
      const categoryMatch =
        selectedCategory === "all" ||
        article.categories?.some((c) => c.slug === selectedCategory);

      return typeMatch && categoryMatch;
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

  // ------------------------
  // Render
  // ------------------------
  return (
    <div className="bg-cream flex flex-col pt-14 lg:pt-20 mb-14 lg:mb-20">
      <div className="container">
        <SectionTitle tagline="Browse All Content" title="Latest Articles" />
      </div>

      {/* Filter bar */}
      <div className="sticky bg-cream py-8 pb-14 top-18 z-40">
        <div className="flex flex-col gap-4 container">
          {/* Row 1: Type tabs + result count */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <TabsFilter activeTab={activeTab} onChange={handleTabChange} />
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
        <div className="container flex-1 mt-4 py-14 w-full flex flex-col gap-20">
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
