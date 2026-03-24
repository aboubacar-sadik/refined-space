import { defineField, defineType } from "sanity";

export const ourMissionType = defineType({
  name: "ourMission",
  type: "object",
  title: "Our Mission",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 6,
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
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Our Mission",
        subtitle: subtitle || "About page section",
      };
    },
  },
});
