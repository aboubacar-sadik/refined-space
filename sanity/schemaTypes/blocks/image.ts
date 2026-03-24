import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const imageType = defineType({
  name: "imageBlock",
  type: "object",
  title: "Image",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
});
