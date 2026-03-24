import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryGridType = defineType({
  name: "categoryGrid",
  type: "object",
  title: "Category Grid",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      initialValue: "Browse by Category",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      initialValue: "What We",
    }),
    defineField({
      name: "highlightedText",
      type: "string",
      title: "Highlighted Text",
      initialValue: "Cover",
    }),
    defineField({
      name: "sectionId",
      type: "string",
      title: "Section ID",
      description: "Used for in-page anchor links (e.g. #categories).",
      initialValue: "categories",
    }),
    defineField({
      name: "maxItems",
      type: "number",
      title: "Max items",
      initialValue: 6,
      validation: (Rule) => Rule.min(1).max(12).integer(),
    }),
    defineField({
      name: "link",
      type: "object",
      title: "Link",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
          initialValue: "View All Categories",
        }),
        defineField({
          name: "href",
          type: "string",
          title: "Href",
          initialValue: "/categories",
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
      const base = title || "Category Grid";
      const highlighted = highlightedText ? ` ${highlightedText}` : "";

      return {
        title: `${base}${highlighted}`,
        subtitle: "Page Builder block",
        media: TextIcon,
      };
    },
  },
});
