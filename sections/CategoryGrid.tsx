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
  categories: CategoryTypes;
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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[...categories.categoryLinks, ...categories.categoryLinks].map(
          (category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className=""
            >
              {category.title}
            </motion.div>
          ),
        )}
      </motion.div>
    </div>
  );
}
