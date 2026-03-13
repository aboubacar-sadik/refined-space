// import { ProductCard } from './ProductCard';
// import { ComparisonTable } from './ComparisonTable';
// import { Callout } from './Callout';
// import type { Product, ComparisonProduct } from '@/types';

import { GET_RECENT_ARTICLES_QUERYResult } from "@/sanity.types";
import { ArticlePreview } from "@/sanity/lib/types";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";

type ArticleContentProps = {
  body: NonNullable<GET_RECENT_ARTICLES_QUERYResult[0]>["body"];
};

export function ArticleContent({ body }: ArticleContentProps) {
  return (
    <article className="article-content prose">
      {body && <PortableText value={body} components={components} />}
    </article>
  );
}
