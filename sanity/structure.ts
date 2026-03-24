import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("page").title("Pages"),
      S.divider(),
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("articleType").title("Article Types"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("tag").title("Tags"),
      S.documentTypeListItem("author").title("Authors"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "page",
            "article",
            "articleType",
            "category",
            "tag",
            "author",
          ].includes(item.getId()!),
      ),
    ]);
