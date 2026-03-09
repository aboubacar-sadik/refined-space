"use client";

import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-forest rounded-sm p-6 text-warm-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gold/20 rounded-full">
          <Mail className="w-5 h-5 text-gold" />
        </div>
        <h3 className="text-sm font-medium uppercase tracking-wider">
          The Refined Weekly
        </h3>
      </div>

      <p className="text-sm text-warm-white/80 leading-relaxed mb-4">
        One curated email per week: the best eco finds, new comparisons, and
        sustainable living tips — no fluff, no filler.
      </p>

      {isSubmitted ? (
        <div className="flex items-center gap-2 py-3 px-4 bg-sage/20 rounded-sm">
          <Check className="w-5 h-5 text-sage" />
          <span className="text-sm">Thanks for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-sm text-warm-white placeholder:text-warm-white/50 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-gold text-forest text-sm font-medium rounded-sm hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <span className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
            ) : (
              <>
                Subscribe
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}

      <p className="text-xs text-warm-white/50 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
