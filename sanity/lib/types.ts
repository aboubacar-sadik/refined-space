import { GET_ALL_CATEGORIES_QUERYResult, GET_RECENT_ARTICLES_QUERYResult } from "@/sanity.types";

export type CategoryTypes = {
  categoryLinks: GET_ALL_CATEGORIES_QUERYResult;
};

export type ArticleTypes = {
  recent_articles: GET_RECENT_ARTICLES_QUERYResult;
};

export type SingleArticleTypes = {
  article: GET_RECENT_ARTICLES_QUERYResult[0];
};