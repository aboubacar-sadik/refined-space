import { defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  type: "object",
  title: "Call to Action",
  fields: [
    defineField({
      name: "title",
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
      title: "Button",
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
      subtitle: "Call to Action",
    },
  },
});
