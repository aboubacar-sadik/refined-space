"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer, lineDraw } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type PhilosophyProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  button?: {
    label?: string;
    href?: string;
  };
};

export default function OurPhilosophy({
  eyebrow,
  heading,
  description,
  button,
}: PhilosophyProps) {
  const { ref, isInView } = useScrollAnimation(0.3);
  const fallbackDescription =
    "Every guide on The Refined Space is built from independent research, real product testing, and a genuine belief that sustainable choices should be easy, not overwhelming. We do the deep work so you can shop with confidence.";

  return (
    <div className="" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-sage mb-4 text-center block"
          >
            {eyebrow || ""}
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-forest text-center mb-12"
          >
            {heading || ""}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-forest/80"
            >
              {description || fallbackDescription}
            </motion.p>
          </motion.div>

          <motion.div variants={lineDraw} className="w-24 h-px bg-sage mx-auto my-12" />

          <motion.div variants={fadeInUp} className="relative">
            <Quote
              size={48}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-sage/20"
            />
            <blockquote className="text-center pt-8">
              <p className="font-serif text-2xl lg:text-3xl font-medium text-forest italic leading-relaxed">
                &ldquo;We don&apos;t just want you to buy - we want you to buy <span className="text-gold">better.</span>&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="body-sm not-italic">- The Refined Space Editorial Team</cite>
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {[
              "E-E-A-T Verified",
              "Lab-Tested Info",
              "No Paid Placements",
              "Eco-Certified Focus",
              "Updated Regularly",
            ].map((badge, index) => (
              <motion.span
                key={badge}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1 bg-forest/5 border border-forest/10 rounded-md text-xs font-sans font-medium text-forest/70 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          {button?.label && button?.href ? (
            <motion.div variants={fadeInUp} className="mt-10 text-center">
              <Link
                href={button.href}
                className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-forest/90"
              >
                {button.label}
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}
