import { defineType, defineArrayMember } from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  type: "array",
  title: "Page Builder",
  of: [
    defineArrayMember({ type: "heroSimple" }),
    defineArrayMember({ type: "ourMission" }),
    defineArrayMember({ type: "ctaSection" }),
  ],

  options: {
    insertMenu: {
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
        },
      ],
    },
  },
});
