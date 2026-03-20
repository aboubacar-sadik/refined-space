"use client";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Check } from "lucide-react";

const formSchema = z.object({
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),
});

export function Newsletter({ variant }: { variant?: string }) {
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
              {isSubmitted ? (
                <div className="flex items-center gap-2 py-3 px-4 bg-sage/20 rounded-sm">
                  <Check className="w-5 h-5 text-sage" />
                  <span className="text-sm">Thanks for subscribing!</span>
                </div>
              ) : (
                <form
                  id="newsletter-primary"
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
                  className="flex flex-col xs:flex-row "
                >
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="relative"
                      >
                        <Input
                          {...field}
                          id="newsletter-primary-email"
                          aria-invalid={fieldState.invalid}
                          type="email"
                          placeholder="jane@example.com"
                          className={cn(
                            "xs:flex-1 h-12 px-5  border xs:border-r-0 border-border text-text placeholder:text-text-muted focus:border-forest focus:outline-none focus:ring-0 xs:rounded-e-none rounded-md mb-4 xs:m-0 min-w-52",
                            variant === "cream" ? "bg-warm-white" : "bg-cream",
                          )}
                        />

                        {fieldState.invalid && (
                          <FieldError
                            errors={[fieldState.error]}
                            className="absolute left-0 top-full mt-1"
                          />
                        )}
                      </Field>
                    )}
                  />
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    type="submit"
                    aria-label={`Submit newsletter email`}
                    form="newsletter-primary"
                    disabled={isSubmitting}
                    className="h-12 hover:bg-gold hover:border-gold xs:rounded-s-none min-w-38"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
