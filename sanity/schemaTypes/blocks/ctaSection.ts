import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ctaSectionType = defineType({
  name: "ctaSection",
  type: "object",
  title: "CTA Section",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      initialValue: "Ready to Shop",
    }),
    defineField({
      name: "highlightedText",
      type: "string",
      title: "Highlighted Text",
      initialValue: "Smarter?",
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
          title: "Label",
        }),
        defineField({
          name: "href",
          type: "string",
          title: "Href",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      highlightedText: "highlightedText",
    },
    prepare({ title, highlightedText }) {
      const base = title || "CTA Section";
      const highlighted = highlightedText ? ` ${highlightedText}` : "";

      return {
        title: `${base}${highlighted}`,
        subtitle: "Page Builder block",
        media: TextIcon,
      };
    },
  },
});
