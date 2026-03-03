"use client";

import { GET_ALL_CATEGORIES_QUERYResult } from "@/sanity.types";
import { motion } from "framer-motion";
import Link from "next/link";

const exploreLinks = [
  { label: "Guides", href: "/articles?type=guide" },
  { label: "Product Reviews", href: "/articles?type=review" },
  { label: "Comparisons", href: "/articles?type=comparison" },
  { label: "Categories", href: "/categories" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Affiliate Disclosure", href: "/disclosure" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

type FooterProps = {
  categoryLinks: GET_ALL_CATEGORIES_QUERYResult;
};

export function Footer({ categoryLinks }: FooterProps) {
  return (
    <footer className="bg-forest py-12 lg:py-16">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-b border-white/5 gap-8 mb-12 pb-12 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="xs:col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-2"
          >
            <h3 className="text-white">Refined Space log</h3>
            <p className="text-xs text-white/35 leading-relaxed font-light">
              Thoughtfully curated product guides and reviews for eco-conscious
              households who value transparency, health, and sustainable living.
            </p>
          </motion.div>

          {/* Explore Column */}
          <motion.div variants={itemVariants}>
            <h4 className=" text-tiny text-white/30 tracking-[0.2em] mb-5 font-medium">
              EXPLORE
            </h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors duration-200 font-light hover:text-white/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-tiny text-white/30 tracking-[0.2em] mb-5 font-medium">
              CATEGORIES
            </h4>
            <ul className="space-y-2.5">
              {categoryLinks.map((link) => (
                <li key={link._id}>
                  <Link
                    href={`/articles?category=${link.slug}`}
                    className="text-[13px] text-white/50 transition-colors duration-200 font-light hover:text-white/90"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-tiny text-white/30 tracking-[0.2em] mb-5 font-medium">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors duration-200 font-light hover:text-white/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col  sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-white/20 tracking-[0.05em] text-center sm:text-left">
              © 2025 The Refined Space. All rights reserved.
            </p>
            <p className="text-tiny text-white/20 tracking-[0.05em] text-center sm:text-right max-w-md">
              This site contains affiliate links. As an Amazon Associate, we
              earn from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
