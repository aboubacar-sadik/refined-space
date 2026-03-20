"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const faqs = [
  {
    q: "How do you make money?",
    a: "We earn affiliate commissions when you purchase through our links. This never influences our recommendations.",
  },
  {
    q: "Can I submit a product?",
    a: "Brands can submit products for review, but we maintain full editorial independence and don't guarantee coverage.",
  },
  {
    q: "How long until I hear back?",
    a: "We typically respond to all inquiries within 2-3 business days. Partnership requests may take longer.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-cream p-6 rounded-md">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className=""
      >
        <motion.h2
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-forest mb-6"
        >
          Common Questions
        </motion.h2>
        <motion.div variants={fadeUp} className="space-y-4 ">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-left p-6 bg-white rounded-xl border border-charcoal/5"
            >
              <p className="font-medium text-forest mb-2">{faq.q}</p>
              <p className="text-sm text-forest/80">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
