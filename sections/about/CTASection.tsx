"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isInView } = useScrollAnimation(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-warm" ref={ref}>
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
            className="bg-forest  p-8 lg:p-16 text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl lg:text-5xl font-medium text-cream mb-6"
            >
              Ready to Shop <em className="text-gold">Smarter?</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg max-w-2xl mx-auto mb-8"
            >
              Start exploring our expert guides and product comparisons. Make
              informed decisions for a healthier, more sustainable lifestyle.
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
                  <Link href="/categories">
                    Explore Guides
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Mail size={24} className="text-sage" />
              </motion.div>
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-sage mb-0">
                The Refined Weekly
              </span>
            </motion.div>
            <motion.h3
              variants={fadeInUp}
              className="font-serif text-2xl lg:text-3xl font-medium text-forest mb-4"
            >
              Get Curated Recommendations
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-forest/70 mb-8"
            >
              One curated email per week: the best eco finds, new comparisons,
              and sustainable living tips — no fluff, no filler.
            </motion.p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage/10 border border-sage/20 p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check size={24} className="text-sage" />
                </motion.div>
                <p className="font-serif text-xl font-medium text-forest mb-2">
                  You&apos;re on the list!
                </p>
                <p className="body-sm">
                  Check your inbox for a confirmation email.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 h-12 bg-cream border-forest/20 text-forest placeholder:text-forest/40 focus:border-sage focus:ring-sage focus:outline-sage"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={"secondary"}
                    type="submit"
                    className="h-12 px-8 bg-forest hover:bg-forest-dark text-cream font-medium"
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </motion.form>
            )}

            <motion.p
              variants={fadeInUp}
              className="text-xs text-forest/50 mt-4"
            >
              No spam, ever. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
