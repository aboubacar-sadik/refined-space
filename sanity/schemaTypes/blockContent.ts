import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "Link type",
                name: "linkType",
                type: "string",
                options: {
                  list: [
                    { title: "Internal (same site)", value: "internal" },
                    { title: "External (other site)", value: "external" },
                  ],
                  layout: "radio",
                },
                validation: (Rule) => Rule.required(),
              },
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    }),

    // BUTTON
    defineArrayMember({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          title: "Button URL",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "variant",
          title: "Style Variant",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Outline", value: "outline" },
            ],
            layout: "radio",
          },
          initialValue: "primary",
        },
        {
          name: "alignment",
          title: "Alignment",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Center", value: "center" },
              { title: "Right", value: "right" },
            ],
          },
          initialValue: "left",
        },
        {
          name: "openInNewTab",
          title: "Open in new tab",
          type: "boolean",
          initialValue: true,
        },
      ],
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    //EMBEDED VIDEO
    defineArrayMember({
      name: "embed",
      title: "Embed",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Embed type",
          type: "string",
          options: {
            list: [
              { title: "YouTube", value: "youtube" },
              { title: "Vimeo", value: "vimeo" },
              { title: "Custom", value: "custom" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
        {
          name: "aspectRatio",
          title: "Aspect ratio",
          type: "string",
          options: {
            list: [
              { title: "16:9", value: "16/9" },
              { title: "4:3", value: "4/3" },
              { title: "1:1", value: "1/1" },
              { title: "Auto", value: "auto" },
            ],
          },
          initialValue: "16/9",
        },
      ],
    }),
  ],
});
