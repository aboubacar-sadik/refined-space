"use client";

import CategoryCard from "@/components/CategoryCard";
import SectionTitle from "@/components/SectionTitle";
import { CategoryTypes } from "@/sanity/lib/types";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function CategoryGrid({
  categories,
}: {
  categories: CategoryTypes[];
}) {
  return (
    <div className="container">
      <SectionTitle
        title="Every Room. Every Choice."
        tagline="Browse by Category"
        link_href="/categories"
        link_label="View All Categories"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5"
      >
        {categories.slice(0, 6).map((category) => (
          <motion.div key={category._id} variants={itemVariants} className="">
            <CategoryCard
              title={category.title}
              imageUrl={category.imageUrl}
              description={category.description}
              articleCount={category.articleCount}
              slug={category.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
