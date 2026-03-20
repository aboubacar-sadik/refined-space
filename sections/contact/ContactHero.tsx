"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/animations";

export default function ContactHero() {
  return (
    <section className="relative bg-forest py-20 overflow-hidden">
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[22vw] font-bold leading-none text-white/2.5 pointer-events-none select-none whitespace-nowrap">
        Contact us
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
              Get In Touch
            </motion.span>

            <motion.h1
              variants={textReveal}
              className=" max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-medium text-center leading-[1.1] text-white mb-12"
            >
              We&apos;d Love <em className="text-gold">to Hear </em> From You
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className=" text-center max-w-lg mb-12 text-light-sage"
            >
              Whether you&apos;re a conscious consumer with questions, a brand
              seeking partnership, or have a product you&apos;d like us to
              review — we&apos;re here to help.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
