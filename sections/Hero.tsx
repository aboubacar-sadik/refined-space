"use client";

import { Button } from "@/components/ui/button";
import { Articles, Categories } from "@/sanity/lib/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero({
  categories,
  articles,
}: {
  categories: Categories;
  articles: Articles;
}) {
  const stats = [
    { value: `${articles.length - 1}+`, label: "IN-DEPTH GUIDES" },
    { value: categories.length, label: "CURATED CATEGORIES" },
    { value: "100%", label: "RESEARCH-BACKED" },
  ];

  const firstArticle = articles[0];
  const secondArticle = articles[1];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-dvh">
      <div className="w-full lg:w-1/2  bg-forest flex justify-end">
        <div className="w-full lg:max-w-180 px-8 lg:pl-8 xl:pr-16 py-20 flex flex-col justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <motion.p
              variants={itemVariants}
              className="text-[11px] text-gold-light font-normal uppercase tracking-[0.2em] flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-gold"></span>
              THOUGHTFULLY CURATED · EST. 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 1, y: 0 }} // 👈 visible immédiatement
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="mb-7"
            >
              Live <em className="text-gold-light italic">Better.</em>
              <br />
              Choose <em className="text-gold-light italic">Wiser.</em>
              <br />
              Buy <em className="text-gold-light italic">Cleaner.</em>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-6 text-white/65 font-light max-w-90 mb-12"
            >
              In-depth research and honest reviews for conscious consumers who
              refuse to compromise on health, sustainability, or quality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link href="/articles?type=guide" className="">
                <Button size={"lg"} aria-label={`Explore guides`}>
                  Explore guides
                </Button>
              </Link>
              <Link href="/articles?type=comparison" className="">
                <Button
                  size={"lg"}
                  variant={"link"}
                  aria-label={`Explore Comparisons`}
                  className="px-0"
                >
                  Top Comparisons →
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex gap-10 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[28px] font-normal text-white leading-4 mb-2.5">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/40 font-medium tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hidden w-full lg:w-1/2 lg:flex flex-col bg-cream">
        <Link
          href={`/${firstArticle.categories ? firstArticle.categories[0].slug : "ungategorized"}/${firstArticle.slug}`}
          className="flex-1 bg-linear-[135deg,#2d5a3d_0%,#1b3a2d_100%] w-full flex justify-start hover:bg-none hover:bg-white group"
        >
          <div className="w-full max-w-180 p-10 lg:pr-8 flex flex-col justify-center ">
            <div className=" h-full relative cursor-pointer transition-colors duration-300 flex flex-col justify-end overflow-hidden">
              <span className="text-tiny tracking-[0.2em] uppercase text-gold-light mb-3 font-medium">
                Featured {firstArticle.type?.title}
              </span>
              <h2 className="text-[22px] mb-2.5 text-white group-hover:text-text font-semibold leading-tight">
                {firstArticle.title}
              </h2>
              <p className="text-[13px] leading-6 font-light text-white/60 group-hover:text-text-muted line-clamp-2">
                {firstArticle.excerpt}
              </p>

              <Button
                size={"icon"}
                aria-label={`Read post ${firstArticle.title}`}
                className="absolute top-0 right-0 border-white/20 bg-transparent group-hover:bg-gold duration-300 group-hover:border-gold"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Link>
        <Link
          href={`/${secondArticle.categories ? secondArticle.categories[0].slug : "ungategorized"}/${secondArticle.slug}`}
          className="flex-1 bg-warm-white w-full flex justify-start group"
        >
          <div className="w-full max-w-180 lg:pr-8 flex flex-col justify-center p-10">
            <div className=" h-full relative transition-colors duration-300 flex flex-col justify-end overflow-hidden">
              <span className="text-tiny tracking-[0.2em] uppercase text-sage mb-3 font-medium">
                Featured {secondArticle.type?.title}
              </span>
              <h2 className="text-[22px] text-text mb-2.5 font-semibold leading-tight">
                {secondArticle.title}
              </h2>
              <p className="text-[13px] leading-6 font-light text-text-muted line-clamp-2">
                {secondArticle.excerpt}
              </p>
              <Button
                size={"icon"}
                aria-label={`Read post ${secondArticle.title}`}
                className="absolute top-0 right-0 border-forest/20 text-forest bg-transparent group-hover:bg-gold duration-300 group-hover:border-gold"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
