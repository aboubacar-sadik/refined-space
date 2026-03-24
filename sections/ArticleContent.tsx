// import { ProductCard } from './ProductCard';
// import { ComparisonTable } from './ComparisonTable';
// import { Callout } from './Callout';
// import type { Product, ComparisonProduct } from '@/types';

import { GET_RECENT_ARTICLES_QUERYResult } from "@/sanity.types";
import { ArticlePreview } from "@/sanity/lib/types";
import { createSanityDataAttribute } from "@/sanity/lib/data-attribute";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";

type ArticleContentProps = {
  articleId: string;
  body: NonNullable<GET_RECENT_ARTICLES_QUERYResult[0]>["body"];
};

export function ArticleContent({ articleId, body }: ArticleContentProps) {
  const dataAttribute = createSanityDataAttribute(articleId, "article");

  return (
    <article className="article-content prose" data-sanity={dataAttribute.scope(["body"])()}>
      {body && <PortableText value={body} components={components} />}
    </article>
  );
}
