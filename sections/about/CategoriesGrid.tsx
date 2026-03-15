"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Zap,
  Sparkles,
  Heart,
  Home,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { GET_ALL_CATEGORIES_QUERYResult } from "@/sanity.types";
import { Categories } from "@/sanity/lib/types";
import Image from "next/image";

type CategoryGridProps = {
  categories: Categories;
};

export default function CategoriesGrid({ categories }: CategoryGridProps) {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <div className="" ref={ref}>
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
                Browse by Category
              </span>
            </span>
            <h2 className="text-4xl text-forest mt-4">
              What We <em className="text-gold">Cover</em>
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href={"/categories"}
              className="text-text-muted inline text-xs tracking-widest uppercase border-b border-border pb-0.5 whitespace-nowrap transition-all duration-200 hover:text-forest hover:border-forest"
            >
              View All Categories →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.slice(0, 6).map((category, index) => {
            return (
              <motion.div
                key={category._id}
                variants={fadeInUp}
                custom={index}
                whileHover={cardHover}
                className="group bg-cream border border-forest/5 "
              >
                <Link href="#" className="p-6 block lg:p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 relative transition-all duration-300 size-7"
                  >
                    <Image
                      src={`${category?.imageUrl}`}
                      alt={`${category?.title}`}
                      fill
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
    </div>
  );
}
