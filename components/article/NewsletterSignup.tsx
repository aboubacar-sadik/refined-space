"use client";

import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),
});

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // better UX
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      // simulate API call (replace with real one)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Subscription successful!", {
        description: "Thanks for subscribing to our newsletter.",
      });

      setIsSubmitted(true);

      // reset form after success
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-forest rounded-sm p-6 text-warm-white">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 bg-gold/20 rounded-full">
          <Mail className="w-5 h-5 text-gold" />
        </div>
        <h3 className="text-sm font-medium uppercase text-center tracking-wider">
          The Refined Weekly
        </h3>
      </div>

      <p className="text-sm text-warm-white/80 text-center leading-relaxed mb-4">
        One curated email per week: the best eco finds, new comparisons, and
        sustainable living tips — no fluff, no filler.
      </p>

      {isSubmitted ? (
        <div className="flex items-center gap-2 py-3 px-4 bg-sage/20 rounded-sm">
          <Check className="w-5 h-5 text-sage" />
          <span className="text-sm">Thanks for subscribing!</span>
        </div>
      ) : (
        <form
          id="newsletter-secondary"
          onSubmit={form.handleSubmit(onSubmit, () => {
            // focus first error field
            const firstError = Object.keys(form.formState.errors)[0];
            if (firstError) {
              const el = document.querySelector(
                `[email="${firstError}"]`,
              ) as HTMLElement;
              el?.focus();
            }
          })}
          className="flex flex-col items-center justify-center"
        >
          <div className="max-w-lg space-y-3  w-full">
            <div className="relative w-full">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative">
                    <Input
                      {...field}
                      id="newsletter-secondary-email"
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-sm text-warm-white placeholder:text-warm-white/50 text-sm focus:outline-none focus:border-gold transition-colors"
                    />

                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className=" left-0 top-full mt-1"
                      />
                    )}
                  </Field>
                )}
              />
            </div>
            <Button
              variant={"secondary"}
              size={"lg"}
              type="submit"
              aria-label={`Submit newsletter email`}
              form="newsletter-secondary"
              disabled={isSubmitting}
              className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-gold text-forest text-sm font-medium rounded-sm hover:bg-gold-light transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}

      <p className="text-xs text-center text-warm-white/50 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
