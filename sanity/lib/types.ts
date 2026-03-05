import {
  GET_ALL_CATEGORIES_QUERYResult,
  GET_RECENT_ARTICLES_QUERYResult,
} from "@/sanity.types";


type ArticleItem = GET_RECENT_ARTICLES_QUERYResult[number];

export type Article = ArticleItem;
































// // export type CategoryTypes = GET_ALL_CATEGORIES_QUERYResult;
// type CategoryItem = GET_ALL_CATEGORIES_QUERYResult[number];
// export type CategoryTypes = Omit<CategoryItem, "_id"> & {
//   _id?: CategoryItem["_id"];
// };
// type ArticleItem = GET_RECENT_ARTICLES_QUERYResult[number];

// export type ArticleTypes = Omit<ArticleItem, "_id" | "featuredImage" | "author"> & {y
//   _id?: ArticleItem["_id"];
//   productGallery?: ArticleItem["productGallery"];
//   author?: {
//     name: string | null;
//   };
//   featuredImage?:
//     | string
//     | {
//         url: string | null;
//         alt: string | null;
//       };
// };
// // export type ArticleTypes = {
// //   recent_articles: GET_RECENT_ARTICLES_QUERYResult;
// // };

// export type SingleArticleTypes = {
//   article: GET_RECENT_ARTICLES_QUERYResult[0];
// };
