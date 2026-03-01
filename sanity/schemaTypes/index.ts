import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";
import { category } from "./category";
import { article } from "./article";
import { author } from "./author";
import { tag } from "./tag";
import { articleType } from "./articleType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, tag, article, articleType, author],
};
