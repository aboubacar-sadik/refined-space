import { CircleIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const process = defineType({
  name: "process",
  title: "Process Steps",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Step Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Step Description",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon Name",
      description:
        "Lucide icon name (e.g., Search, FlaskConical, Scale, ShieldCheck, RefreshCw)",
      options: {
        list: [
          { title: "Search", value: "Search" },
          { title: "Flask", value: "FlaskConical" },
          { title: "Scale", value: "Scale" },
          { title: "Shield Check", value: "ShieldCheck" },
          { title: "Refresh", value: "RefreshCw" },
          { title: "Check Circle", value: "CheckCircle" },
          { title: "Zap", value: "Zap" },
          { title: "Target", value: "Target" },
          { title: "Heart", value: "Heart" },
          { title: "Star", value: "Star" },
          { title: "Leaf", value: "Leaf" },
          { title: "Lightbulb", value: "Lightbulb" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Step",
        subtitle:
          subtitle && subtitle.length > 50
            ? subtitle.substring(0, 50) + "..."
            : subtitle,
      };
    },
  },
});
