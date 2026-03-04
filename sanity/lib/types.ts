import {
  GET_ALL_CATEGORIES_QUERYResult,
  GET_RECENT_ARTICLES_QUERYResult,
} from "@/sanity.types";

// export type CategoryTypes = GET_ALL_CATEGORIES_QUERYResult;
type CategoryItem = GET_ALL_CATEGORIES_QUERYResult[number];
export type CategoryTypes = Omit<CategoryItem, "_id"> & {
  _id?: CategoryItem["_id"];
};

export type ArticleTypes = {
  recent_articles: GET_RECENT_ARTICLES_QUERYResult;
};

export type SingleArticleTypes = {
  article: GET_RECENT_ARTICLES_QUERYResult[0];
};


