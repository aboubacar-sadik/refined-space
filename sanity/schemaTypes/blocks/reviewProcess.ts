import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const reviewProcessType = defineType({
  name: "reviewProcess",
  type: "object",
  title: "Review Process",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      initialValue: "How We Work",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      initialValue: "Our Review",
    }),
    defineField({
      name: "highlightedText",
      type: "string",
      title: "Highlighted Text",
      initialValue: "Process",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "sectionId",
      type: "string",
      title: "Section ID",
      description: "Used for in-page anchor links.",
      initialValue: "review-process",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      highlightedText: "highlightedText",
    },
    prepare({ title, highlightedText }) {
      const base = title || "Review Process";
      const highlighted = highlightedText ? ` ${highlightedText}` : "";

      return {
        title: `${base}${highlighted}`,
        subtitle: "Page Builder block",
        media: TextIcon,
      };
    },
  },
});
