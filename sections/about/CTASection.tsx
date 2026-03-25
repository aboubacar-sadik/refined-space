"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

type CTASectionProps = {
  heading?: string;
  highlightedText?: string;
  description?: string;
  button?: {
    label?: string;
    href?: string;
  };
};

export default function CTASection({
  heading,
  highlightedText,
  description,
  button,
}: CTASectionProps) {
  const { ref, isInView } = useScrollAnimation(0.2);

  const resolvedHeading = heading || "Ready to Shop";
  const resolvedHighlightedText = highlightedText || "Smarter?";
  const resolvedDescription =
    description ||
    "Start exploring our expert guides and product comparisons. Make informed decisions for a healthier, more sustainable lifestyle.";
  const resolvedButtonLabel = button?.label || "Explore Guides";
  const resolvedButtonHref = button?.href || "/categories";

  return (
    <div className="" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Main CTA */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-forest  p-8 lg:p-16 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl lg:text-5xl font-medium text-cream mb-6"
            >
              {resolvedHeading}{" "}
              <em className="text-gold">{resolvedHighlightedText}</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg max-w-2xl mx-auto mb-8"
            >
              {resolvedDescription}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className=" group inline-flex"
              >
                <Button variant={"default"} asChild>
                  <Link href={resolvedButtonHref}>
                    {resolvedButtonLabel}
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
