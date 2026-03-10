import type { RelatedArticles } from "@/sanity/lib/types";
import { Clock, ArrowRight } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Image from "next/image";

interface RelatedArticlesProps {
  articles: RelatedArticles;
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="py-12 border-t border-border-color">
      <div className="mb-8">
        <SectionTitle
          title="Related Articles"
          link_label="View all"
          link_href="/articles"
          size="small"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
          <Link
            key={article._id}
            href={`/articles/${article.slug}`}
            className="group bg-white overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
              <Image
                src={article.featuredImage?.url as string}
                alt={article.featuredImage?.alt as string}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-tiny font-medium text-gold uppercase tracking-widest">
                {article.type?.title}
              </span>
              <h3 className="font-serif font-medium text-forest group-hover:text-gold transition-colors mt-2 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2 mb-4">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
