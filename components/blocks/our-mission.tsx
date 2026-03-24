"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer, lineDraw } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type OurMissionProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  button?: {
    label?: string;
    href?: string;
  };
};

export default function OurMission({
  eyebrow,
  heading,
  description,
  button,
}: OurMissionProps) {
  const { ref, isInView } = useScrollAnimation(0.3);
  const fallbackDescription =
    "At Refined Space, our mission is to make mindful living approachable through trusted research, sustainable recommendations, and transparent reviews.";

  return (
    <section className="py-16" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-sage mb-4 block"
          >
            {eyebrow || "Our Mission"}
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-forest mb-8"
          >
            {heading || "Empower thoughtful decisions for home and lifestyle"}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-forest/80"
          >
            {description || fallbackDescription}
          </motion.p>

          <motion.div
            variants={lineDraw}
            className="w-24 h-px bg-sage mx-auto my-12"
          />

          <motion.div variants={fadeInUp} className="relative">
            <Quote
              size={44}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-sage/20"
            />
            <blockquote className="text-center pt-8">
              <p className="font-serif text-2xl lg:text-3xl font-medium text-forest italic leading-relaxed">
                &ldquo;Your values deserve to be reflected in everything you
                bring into your home.&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="body-sm not-italic">- Refined Space Team</cite>
              </footer>
            </blockquote>
          </motion.div>

          {button?.label && button?.href ? (
            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                href={button.href}
                className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90 transition"
              >
                {button.label}
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
