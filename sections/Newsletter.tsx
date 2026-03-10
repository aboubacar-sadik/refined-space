"use client";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter({ variant }: { variant?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div
      id="newsletter"
      className={cn(
        " py-16 lg:py-20",
        variant === "cream" ? "bg-cream" : "bg-warm-white",
      )}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">
            <div>
              <SectionTitle
                tagline="STAY INFORMED"
                title="The Refined Weekly"
                size="small"
              />
              <p className="text-sm text-text-muted leading-6 font-light">
                One curated email per week: the best eco finds, new comparisons,
                and sustainable living tips — no fluff, no filler.
              </p>
            </div>

            {/* Right - Form */}
            <div className="flex-1 w-full xs:max-w-120">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col xs:flex-row "
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "xs:flex-1 h-12 px-5  border xs:border-r-0 border-border text-text placeholder:text-text-muted focus:border-forest focus:outline-none focus:ring-0 xs:rounded-e-none rounded-md mb-4 xs:m-0",
                    variant === "cream" ? "bg-warm-white" : "bg-cream",
                  )}
                  required
                />
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  type="submit"
                  aria-label={`Submit email`}
                  className="h-12 hover:bg-gold hover:border-gold xs:rounded-s-none"
                >
                  {isSubmitted ? "SUBSCRIBED!" : "SUBSCRIBE"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
