"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Clock, Calendar } from "lucide-react";
import { Articles } from "@/sanity/lib/types";
import { formatUpdatedDate } from "@/lib/utils";

interface TrendingSectionProps {
  articles: Articles;
}

export default function TrendingSection({ articles }: TrendingSectionProps) {
  if (!articles || articles.length === 0) return null;

  const popularArticles = articles.filter((a) => a.popular === true);

  const trendingArticles =
    popularArticles.length > 0
      ? popularArticles
      : [...articles]
          .sort(
            (a, b) =>
              new Date(b._updatedAt).getTime() -
              new Date(a._updatedAt).getTime(),
          )
          .slice(0, 5);

  const primary = trendingArticles[0];
  const rest = trendingArticles.slice(1);

  return (
    <div className="py-14 lg:py-20 bg-forest">
      <div className="container">
        <div
          aria-labelledby="trending-heading"
          className="bg-light-sage rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={18} className="text-gold" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Trending Now
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary article — large */}
            {articles && (
              <Link
                href={`/${primary.categories ? primary.categories[0].slug : "ungategorized"}/${primary.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                  <Image
                    src={`${primary.featuredImage?.url}`}
                    alt={`${primary.featuredImage?.alt}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className={`text-xs font-medium uppercase tracking-wider`}
                  >
                    <span className="text-gold">{primary.type?.title}</span> ·{" "}
                    {primary.categories?.[0]?.title}
                  </span>
                  <h3 className="text-xl font-bold text-text leading-snug group-hover:text-forest transition-colors text-balance">
                    {primary.title}
                  </h3>
                  <p className="text-sm text-text line-clamp-2 leading-relaxed">
                    {primary.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span className=" flex items-center gap-1">
                      <Calendar size={10} aria-hidden="true" />
                      <time dateTime={primary._updatedAt}>
                        {formatUpdatedDate(primary._updatedAt)}
                      </time>
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary list */}
            <div className="flex flex-col divide-y divide-border">
              {articles &&
                rest.slice(0, 4).map((article, i) => (
                  <Link
                    key={article._id}
                    href={`/${article.categories ? article.categories[0].slug : "ungategorized"}/${article.slug}`}
                    className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-serif text-3xl font-bold text-sage shrink-0 w-8">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span
                        className={`text-tiny text-gold font-medium uppercase tracking-[0.15em]`}
                      >
                        {article.type?.title}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-text group-hover:text-forest transition-colors leading-snug text-balance">
                        {article.title}
                      </h4>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Calendar size={10} aria-hidden="true" />
                        <time dateTime={primary._updatedAt}>
                          {formatUpdatedDate(primary._updatedAt)}
                        </time>
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
