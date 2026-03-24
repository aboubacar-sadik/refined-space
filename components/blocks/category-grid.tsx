"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { Categories } from "@/sanity/lib/types";
import Image from "next/image";

type CategoryGridBlockProps = {
  eyebrow?: string;
  heading?: string;
  highlightedText?: string;
  sectionId?: string;
  link?: {
    label?: string;
    href?: string;
  };
  maxItems?: number;
  categories: Categories;
};

export default function CategoryGridBlock({
  categories,
  eyebrow,
  heading,
  highlightedText,
  sectionId,
  link,
  maxItems,
}: CategoryGridBlockProps) {
  const { ref, isInView } = useScrollAnimation(0.2);
  const resolvedEyebrow = eyebrow || "Browse by Category";
  const resolvedHeading = heading || "What We";
  const resolvedHighlightedText = highlightedText || "Cover";
  const resolvedLinkLabel = link?.label || "View All Categories";
  const resolvedLinkHref = link?.href || "/categories";
  const itemLimit = maxItems && maxItems > 0 ? maxItems : 6;

  return (
    <section id={sectionId || "categories"} ref={ref} className="py-24 lg:py-32 bg-cream-warm">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <motion.div variants={fadeInUp}>
            <span className="flex items-center gap-3 mb-2.5">
              <span className="block w-8 h-px bg-gold"></span>
              <span className="block text-tiny tracking-[0.2em] uppercase text-gold font-medium">
                {resolvedEyebrow}
              </span>
            </span>
            <h2 className="text-4xl text-forest mt-4">
              {resolvedHeading} <em className="text-gold">{resolvedHighlightedText}</em>
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href={resolvedLinkHref}
              className="text-text-muted inline text-xs tracking-widest uppercase border-b border-border pb-0.5 whitespace-nowrap transition-all duration-200 hover:text-forest hover:border-forest"
            >
              {resolvedLinkLabel}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.slice(0, itemLimit).map((category, index) => {
            return (
              <motion.div
                key={category._id}
                variants={fadeInUp}
                custom={index}
                whileHover={cardHover}
                className="group bg-cream border border-forest/5"
              >
                <Link href={category.slug ? `/category/${category.slug}` : "/categories"} className="p-6 block lg:p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 relative transition-all duration-300 size-7"
                  >
                    <Image
                      src={category?.imageUrl || "/logo.svg"}
                      alt={category?.title || "Category image"}
                      fill
                      loading="lazy"
                    />
                  </motion.div>
                  <h3 className="font-serif text-xl font-medium text-forest mb-3 group-hover:text-sage transition-colors">
                    {category.title}
                  </h3>
                  <p className="body-sm mb-4">{category.description}</p>
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-sage">
                    {category.articleCount} guides
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
