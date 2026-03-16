"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Handshake,
  Send,
  CheckCircle,
} from "lucide-react";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";

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

type InquiryType = "general" | "partnership" | "suggestion";

const inquiryTypes: {
  id: InquiryType;
  label: string;
  description: string;
  icon: typeof Mail;
}[] = [
  {
    id: "general",
    label: "General Inquiry",
    description: "Questions about our reviews, methodology, or recommendations",
    icon: MessageSquare,
  },
  {
    id: "partnership",
    label: "Brand Partnership",
    description:
      "Product submissions, sponsorship inquiries, or collaboration requests",
    icon: Handshake,
  },
  {
    id: "suggestion",
    label: "Product Suggestion",
    description: "Recommend a product or category youd like us to review",
    icon: Mail,
  },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<InquiryType>("general");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-forest text-cream pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold/80 text-sm font-medium uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
          >
            We'd Love to <span className="italic text-gold">Hear From You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            Whether you're a conscious consumer with questions, a brand seeking
            partnership, or have a product you'd like us to review — we're here
            to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-forest/5 border border-forest/10 rounded-2xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-8 h-8 text-cream" />
              </motion.div>
              <h2 className="font-serif text-3xl text-forest mb-4">
                Message Sent
              </h2>
              <p className="text-charcoal/70 mb-8">
                Thank you for reaching out. We typically respond within 2-3
                business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-gold hover:text-gold/80 font-medium transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-5 gap-12"
            >
              {/* Inquiry Type Selection */}
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <h2 className="font-serif text-2xl text-forest mb-6">
                  How can we help?
                </h2>
                <div className="space-y-3">
                  {inquiryTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedType === type.id;
                    return (
                      <motion.button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                          isSelected
                            ? "bg-forest text-cream border-forest"
                            : "bg-white border-charcoal/10 hover:border-forest/30"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isSelected ? "bg-gold/20" : "bg-forest/5"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? "text-gold" : "text-forest"
                              }`}
                            />
                          </div>
                          <div>
                            <p
                              className={`font-medium ${
                                isSelected ? "text-cream" : "text-forest"
                              }`}
                            >
                              {type.label}
                            </p>
                            <p
                              className={`text-sm mt-0.5 ${
                                isSelected
                                  ? "text-cream/70"
                                  : "text-charcoal/60"
                              }`}
                            >
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <motion.div
                  variants={fadeUp}
                  className="mt-8 p-5 bg-cream rounded-xl border border-gold/20"
                >
                  <p className="text-sm text-charcoal/70">
                    <span className="font-medium text-forest">
                      Note for brands:
                    </span>{" "}
                    We maintain strict editorial independence. Product
                    submissions are reviewed using our standard methodology. We
                    do not guarantee coverage or positive reviews.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeUp} className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-forest mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-forest mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  {selectedType === "partnership" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-forest mb-2"
                      >
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all"
                        placeholder="Your brand name"
                      />
                    </motion.div>
                  )}

                  {selectedType === "suggestion" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label
                        htmlFor="product"
                        className="block text-sm font-medium text-forest mb-2"
                      >
                        Product / Category Name
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all"
                        placeholder="e.g., Organic sunscreens"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-forest mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-forest mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-all resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-forest text-cream font-medium rounded-xl hover:bg-forest-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 px-6 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-2xl md:text-3xl text-forest mb-4"
          >
            Common Questions
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-3 gap-6 mt-10"
          >
            {[
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
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-left p-6 bg-white rounded-xl border border-charcoal/5"
              >
                <p className="font-medium text-forest mb-2">{faq.q}</p>
                <p className="text-sm text-charcoal/70">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
