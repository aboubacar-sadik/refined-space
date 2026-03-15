"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-forest py-20 overflow-hidden">
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[22vw] font-bold leading-none text-white/2.5 pointer-events-none select-none whitespace-nowrap">
        About us
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className=" relative z-10 h-full">
        <div className=" ">
          {/* Text Content */}
          <motion.div
            className="text-center flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-xs font-sans font-semibold uppercase tracking-[0.2em] text-gold mb-6"
            >
              About The Refined Space
            </motion.span>

            <motion.h1
              variants={textReveal}
              className=" max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-medium text-center leading-[1.1] text-white mb-12"
            >
              Independent Reviews for <em className="text-gold">Conscious</em>{" "}
              Living
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className=" text-center max-w-lg mb-12 text-light-sage"
            >
              We&apos;re a team of researchers, testers, and conscious consumers
              dedicated to helping you find products that align with your values
              — without the greenwashing.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center flex-wrap gap-4"
            >
              <Link href="#mission">
                <Button variant={"default"} className="btn-primary group">
                  Our Story
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Link href={"#categories"}>
                <Button variant={"outline"}>
                  What We Cover
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {[
                { icon: Shield, label: "Independent" },
                { icon: Users, label: "100k+ Readers" },
                { icon: Award, label: "Expert Tested" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-forest/60"
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-sage" />
                    <span className="text-sm font-medium text-warm-white">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
