import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import {
  GET_ALL_CATEGORIES_QUERYResult,
  GET_RECENT_ARTICLES_QUERYResult,
} from "@/sanity.types";

type ArticleItem = GET_RECENT_ARTICLES_QUERYResult[number];
export type Article = ArticleItem;

type CategoryItem = GET_ALL_CATEGORIES_QUERYResult[number];
export type Category = CategoryItem;
