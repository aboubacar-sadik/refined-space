import { Clock } from "lucide-react";
import { Articles } from "@/sanity/lib/types";
import Link from "next/link";
import Image from "next/image";

interface PopularArticlesProps {
  articles: Articles;
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
            href={`/articles/${article.slug}`}
            className="group flex gap-3"
          >
            {/* Thumbnail */}
            <div className="relative shrink-0">
              <Image
                src={article.featuredImage?.url as string}
                alt={article.featuredImage?.alt as string}
                className="w-20 h-16 object-cover rounded-sm"
              />
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
