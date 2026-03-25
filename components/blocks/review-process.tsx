"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProcessCard from "@/components/ProcessCard";
import { GET_ALL_PROCESSES_QUERYResult } from "@/sanity.types";

type ReviewProcessBlockProps = {
  eyebrow?: string;
  heading?: string;
  highlightedText?: string;
  description?: string;
  sectionId?: string;
  processes: NonNullable<GET_ALL_PROCESSES_QUERYResult>;
};

export default function ReviewProcessBlock({
  processes,
  eyebrow,
  heading,
  highlightedText,
  description,
  sectionId,
}: ReviewProcessBlockProps) {
  const { ref, isInView } = useScrollAnimation(0.2);
  const resolvedEyebrow = eyebrow || "How We Work";
  const resolvedHeading = heading || "Our Review";
  const resolvedHighlightedText = highlightedText || "Process";
  const resolvedDescription =
    description ||
    "Our rigorous evaluation process ensures every recommendation is backed by thorough research and real-world testing.";

  return (
    <section id={sectionId || "review-process"} ref={ref} className="py-24 lg:py-32 bg-cream">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-2.5"
          >
            <span className="block text-center text-tiny tracking-[0.2em] uppercase text-gold font-medium">
              {resolvedEyebrow}
            </span>
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl text-center text-forest my-4"
          >
            {resolvedHeading} <em className="text-gold">{resolvedHighlightedText}</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed text-forest/70"
          >
            {resolvedDescription}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {processes.map((step) => (
            <ProcessCard
              _id={step._id}
              key={step._id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              order={step.order}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
