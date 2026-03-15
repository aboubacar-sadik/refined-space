"use client";

import { motion } from "framer-motion";
import {
  Search,
  FlaskConical,
  Scale,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description:
      "We start with extensive market research, analyzing hundreds of products, reading scientific studies, and consulting industry experts.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description:
      "Our team personally tests products in real-world conditions, evaluating performance, durability, and user experience.",
  },
  {
    icon: Scale,
    title: "Comparison",
    description:
      "We compare products side-by-side, analyzing features, specifications, pricing, and value propositions.",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description:
      "We verify certifications, check ingredient lists, and confirm sustainability claims through independent sources.",
  },
  {
    icon: RefreshCw,
    title: "Updates",
    description:
      "Our guides are regularly updated to reflect new products, price changes, and emerging research.",
  },
];

export default function ReviewProcess() {
  const { ref, isInView } = useScrollAnimation(0.2);

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
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={scaleIn}
                custom={index}
                whileHover={{ y: -5 }}
                className="relative bg-warm-white p-6 lg:p-8 border border-forest/5 group hover:shadow-card transition-shadow"
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 font-serif text-5xl font-medium text-forest/5 group-hover:text-forest/10 transition-colors">
                  0{index + 1}
                </span>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-forest/5 rounded-md flex items-center justify-center mb-5"
                >
                  <Icon size={24} className="text-sage" strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-serif text-xl font-medium text-forest mb-3">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-forest/60">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
