import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const newsletterFormType = defineType({
  name: "newsletterForm",
  type: "object",
  title: "Newsletter Form",
  fields: [
    defineField({
      name: "sectionId",
      type: "string",
      title: "Section ID",
      initialValue: "newsletter",
    }),
    defineField({
      name: "variant",
      type: "string",
      title: "Background Variant",
      initialValue: "warm-white",
      options: {
        list: [
          { title: "Warm White", value: "warm-white" },
          { title: "Cream", value: "cream" },
        ],
      },
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
      initialValue: "STAY INFORMED",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "The Refined Weekly",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "buttonLabel",
      type: "string",
      title: "Button Label",
      initialValue: "Subscribe",
    }),
    defineField({
      name: "successMessage",
      type: "string",
      title: "Success Message",
      initialValue: "Thanks for subscribing!",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Newsletter Form",
        subtitle: subtitle || "Page Builder block",
        media: TextIcon,
      };
    },
  },
});
