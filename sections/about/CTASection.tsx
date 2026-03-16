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
        </motion.div>
      </div>
    </div>
  );
}
