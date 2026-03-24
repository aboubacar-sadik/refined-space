import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "heroSimple",
  type: "object",
  title: "Hero Simple",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "button",
      type: "object",
      title: "Primary Button",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Button Text",
        }),
        defineField({
          name: "href",
          type: "string",
          title: "Link",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero",
        media: media ?? TextIcon,
      };
    },
  },
});
