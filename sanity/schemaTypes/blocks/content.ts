import { defineField, defineType } from "sanity";

export const contentType = defineType({
  name: "content",
  type: "object",
  title: "Content",
  fields: [
    defineField({
      name: "content",
      type: "blockContent",
      title: "Content",
    }),
  ],
  preview: {
    select: {
      title: "Content Block",
    },
  },
});
