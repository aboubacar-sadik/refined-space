import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";
import { category } from "./category";
import { article } from "./article";
import { author } from "./author";
import { tag } from "./tag";
import { articleType } from "./articleType";
import { process } from "./process";
import { pageBuilder } from "./pageBuilder";
import { page } from "./page";
import { heroType } from "./blocks/hero";
import { ourMissionType } from "./blocks/ourMission";
import { ctaCard } from "./blocks/ctaCard";
import { ctaSectionType } from "./blocks/ctaSection";
import { categoryGridType } from "./blocks/categoryGrid";
// import { contentType } from "./blocks/content";
// import { imageType } from "./blocks/image";
// import { ctaType } from "./blocks/cta";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    category,
    tag,
    article,
    articleType,
    author,
    process,
    pageBuilder,
    page,
    heroType,
    ourMissionType,
    ctaCard,
    ctaSectionType,
    categoryGridType,
  ],
};
