import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ctaCard = defineType({
  name: "ctaCard",
  type: "object",
  title: "Call to action card",
  fields: [
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
