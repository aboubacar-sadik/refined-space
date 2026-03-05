"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  tagline: string;
  link_href: string;
  link_label: string;
  type?: "default" | "white";
  size?: "default" | "small";
};

export default function SectionTitle({
  title,
  tagline,
  link_href,
  link_label,
  type = "default",
  size = "default",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start xs:flex-row xs:items-end justify-between mb-12 gap-6"
    >
      <div className="w-full xs:max-w-95">
        <span className="flex items-center gap-3 mb-2.5">
          <span className="block w-8 h-px bg-gold"></span>
          <span className="block text-tiny tracking-[0.2em] uppercase text-gold font-medium">
            {tagline}
          </span>
        </span>
        <h2
          className={cn(
            "capitalize",
            type === "white" ? "text-white" : "text-forest",
            size === "small" && "text-4xl",
          )}
        >
          {formatHalfItalic(title)}
        </h2>
      </div>
      <Link
        href={link_href}
        className="text-text-muted inline text-xs tracking-widest uppercase border-b border-border pb-0.5 whitespace-nowrap transition-all duration-200 hover:text-forest hover:border-forest"
      >
        {link_label + " →"}
      </Link>
    </motion.div>
  );
}

export const formatHalfItalic = (text: string) => {
  // Guard clause for empty or invalid text
  if (!text || typeof text !== "string") return text;

  // Split the text by spaces (handles multiple spaces gracefully)
  const words = text.trim().split(/\s+/);

  // Math.floor ensures the larger half is italicized on odd counts
  const splitIndex = Math.floor(words.length / 2);

  return (
    <>
      {words.map((word, index) => (
        <span key={index} className={cn(index > splitIndex ? "italic" : "")}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
};
