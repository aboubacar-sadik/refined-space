"use client";

import { Article } from "@/sanity/lib/types";
import { Button } from "@/components/ui/button";
import { cn, formatUpdatedDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ArticleCardProps = {
  article: Pick<
    Article,
    | "_id"
    | "title"
    | "slug"
    | "excerpt"
    | "publishedAt"
    | "featuredImage"
    | "categories"
    | "type"
  >;
  variant?: string;
};

export default function ArticleCard({ article, variant }: ArticleCardProps) {
  const { title, slug, type, excerpt, publishedAt, featuredImage, categories } =
    article;

  const router = useRouter();

  return (
    <article
      className={cn(
        "group h-full col-span-2 overflow-hidden transition-all duration-300 block relative hover:-translate-y-0.75 hover:shadow-2xl",
        variant === "cream" ? "bg-cream" : "bg-warm-white",
      )}
    >
      <Link
        href={`/${categories ? categories[0].slug : "ungategorized"}/${slug}`}
        className="block h-full"
      >
        <div className="relative bg-forest flex items-end overflow-hidden p-6 h-70">
          <Image
            src={`${featuredImage?.url}`}
            alt={`${featuredImage?.alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="relative text-tiny tracking-[0.15em] uppercase text-gold-light font-medium bg-forest/60 backdrop-blur-sm py-1 px-3 rounded-sm border border-gold/30">
            {type?.title}
          </span>
        </div>
        <div className="py-6 px-8 flex-1">
          <h3 className="text-xl font-semibold leading-[1.3em] text-forest mb-3 transition-colors duration-200 group-hover:text-mid-green">
            {title}
          </h3>
          <p className="text-[13px] text-text-muted leading-6 font-light mb-5 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-[11px] text-text-muted tracking-[0.05em]">
            <span>{categories?.[0]?.title ?? "Uncategorized"}</span>
            <span className="block size-0.75 shrink-0 bg-sage rounded-full" />
            <span>{formatUpdatedDate(publishedAt)}</span>
          </div>
          <Button
            onClick={() => router.push(`/articles/${slug}`)}
            variant="link"
            className="text-forest uppercase mt-4 font-medium px-0 hover:text-forest"
            aria-label={`Read post ${title}`}
          >
            Read →
          </Button>
        </div>
      </Link>
    </article>
  );
}
