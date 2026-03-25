"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  button?: {
    label?: string;
    href?: string;
  };
};

export default function Hero({
  eyebrow,
  heading,
  description,
  button,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden">
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
              {eyebrow}
            </motion.span>

            <motion.h1
              variants={textReveal}
              className=" max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-medium text-center leading-[1.1] text-white mb-12"
            >
              {heading}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className=" text-center max-w-lg mb-12 text-light-sage"
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center flex-wrap gap-4"
            >
              {button ? (
                <Link href={button.href || "#"}>
                  <Button variant={"default"} className="btn-primary group">
                    {button.label || "Our Story"}
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
              ) : (
                <Link href="#mission">
                  <Button variant={"default"} className="btn-primary group">
                    Our Story
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
