import { Clock } from "lucide-react";
import { Articles } from "@/sanity/lib/types";
import Link from "next/link";
import Image from "next/image";
import { GET_POPULAR_ARTICLES_QUERYResult } from "@/sanity.types";

interface PopularArticlesProps {
  articles: GET_POPULAR_ARTICLES_QUERYResult;
}

export function PopularArticles({ articles }: PopularArticlesProps) {
  return (
    <div className="bg-warm-white rounded-sm p-6 shadow-card">
      <h3 className="text-sm font-medium text-forest uppercase tracking-wider mb-4">
        Popular Articles
      </h3>

      <div className="space-y-4">
        {articles.slice(0, 3).map((article, index) => (
          <Link
            key={article._id}
            href={`/${article.categories ? article.categories[0].slug : "uncategorized"}/${article.slug}`}
            className="group flex gap-3"
          >
            {/* Thumbnail */}
            <div className="relative shrink-0 aspect-square w-20 h-16">
              <Image
                src={article.featuredImage?.url as string}
                alt="Promotional banner image"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                className="rounded-sm"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,
        33vw"
              />
              {/* 2688x1520 */}
              <span className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-forest text-warm-white text-xs font-medium rounded-full">
                {index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span className="text-tiny text-gold font-medium uppercase tracking-wider">
                {article.type?.title}
              </span>
              <h4 className="text-xs font-medium text-forest group-hover:text-gold transition-colors line-clamp-2 mt-0.5">
                {article.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
