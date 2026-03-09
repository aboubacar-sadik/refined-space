import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import {
  GET_ALL_CATEGORIES_QUERYResult,
  GET_ALL_TAGS_QUERYResult,
  GET_ARTICLE_BY_SLUG_QUERYResult,
  GET_CATEGORY_BY_SLUG_QUERYResult,
  GET_RECENT_ARTICLES_QUERYResult,
  GET_RELATED_ARTICLES_QUERYResult,
} from "@/sanity.types";

export type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type Articles = GET_RECENT_ARTICLES_QUERYResult;
export type RelatedArticles = GET_RELATED_ARTICLES_QUERYResult;
export type Article = NonNullable<GET_ARTICLE_BY_SLUG_QUERYResult>;
export type ArticlePreview = GET_RECENT_ARTICLES_QUERYResult[number];

export type Categories = GET_ALL_CATEGORIES_QUERYResult;
export type Category = GET_CATEGORY_BY_SLUG_QUERYResult;
// those are the same, the second is reusable
export type ArticleCategory = NonNullable<Article["categories"]>[number];
// export type ArticleCategory = ArrayElement<NonNullable<Article["categories"]>>;

export type Tags = GET_ALL_TAGS_QUERYResult;

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}
