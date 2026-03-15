"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp, staggerContainer, lineDraw } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MissionSection() {
  const { ref, isInView } = useScrollAnimation(0.3);

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
            Our Philosophy
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-forest text-center mb-12"
          >
            Research-Backed.
            <br />
            Never <em className="text-gold">Sponsored.</em>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-forest/80"
            >
              Every guide on The Refined Space is built from independent
              research, real product testing, and a genuine belief that
              sustainable choices should be easy — not overwhelming. We do the
              deep work so you can shop with confidence.
              <br />
              <br />
              Our mission is simple: to help you make better buying decisions.
              We believe that honest product reviews, thorough comparisons, and
              research-driven recommendations can transform how you shop.
              Whether you&apos;re looking for non-toxic baby products,
              eco-friendly home essentials, or clean personal care items,
              we&apos;ve got you covered.
            </motion.p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            variants={lineDraw}
            className="w-24 h-px bg-sage mx-auto my-12"
          />

          {/* Highlight Quote */}
          <motion.div variants={fadeInUp} className="relative">
            <Quote
              size={48}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-sage/20"
            />
            <blockquote className="text-center pt-8">
              <p className="font-serif text-2xl lg:text-3xl font-medium text-forest italic leading-relaxed">
                &ldquo;We don&apos;t just want you to buy — we want you to buy{" "}
                <span className="text-gold">better.</span>&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="body-sm not-italic">
                  — The Refined Space Editorial Team
                </cite>
              </footer>
            </blockquote>
          </motion.div>

          {/* Trust Badges */}
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
        </motion.div>
      </div>
    </div>
  );
}
