"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProcessCard from "@/components/ProcessCard";
import { GET_ALL_PROCESSES_QUERYResult } from "@/sanity.types";
import { getIcon } from "@/lib/utils";

type ReviewProcessProps = {
  processes: NonNullable<GET_ALL_PROCESSES_QUERYResult>;
};

export default function ReviewProcess({ processes }: ReviewProcessProps) {
  const { ref, isInView } = useScrollAnimation(0.2);

  const Icon = getIcon("Search");

  return (
    <div className="" ref={ref}>
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
              How We Work
            </span>
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl text-center text-forest my-4"
          >
            Our Review <em className="text-gold">Process</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed text-forest/70"
          >
            Our rigorous evaluation process ensures every recommendation is
            backed by thorough research and real-world testing.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {processes.map((step) => {
            return (
              <ProcessCard
                _id={step._id}
                key={step._id}
                title={step.title}
                description={step.description}
                icon={step.icon}
                order={step.order}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
