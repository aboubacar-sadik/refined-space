"use client";

import CategoryCard from "@/components/CategoryCard";
import SectionTitle from "@/components/SectionTitle";
import { Categories, Category } from "@/sanity/lib/types";
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

type CategoryGridProps = {
  categories: Categories;
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5 "
        >
          {categories.map((category) => (
            <motion.div
              key={category?._id}
              variants={itemVariants}
              className=""
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
