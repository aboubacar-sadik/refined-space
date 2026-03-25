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

type NewsletterFormBlockProps = {
  sectionId?: string;
  variant?: "cream" | "warm-white";
  tagline?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  successMessage?: string;
};

export default function NewsletterFormBlock({
  sectionId,
  variant,
  tagline,
  title,
  description,
  buttonLabel,
  successMessage,
}: NewsletterFormBlockProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const resolvedTagline = tagline || "STAY INFORMED";
  const resolvedTitle = title || "The Refined Weekly";
  const resolvedDescription =
    description ||
    "One curated email per week: the best eco finds, new comparisons, and sustainable living tips - no fluff, no filler.";
  const resolvedButtonLabel = buttonLabel || "Subscribe";
  const resolvedSuccessMessage = successMessage || "Thanks for subscribing!";

  async function onSubmit(data: z.infer<typeof formSchema>) {
    void data;
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Subscription successful!", {
        description: "Thanks for subscribing to our newsletter.",
      });

      setIsSubmitted(true);
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id={sectionId || "newsletter"}
      className={cn(
        "py-16 lg:py-20",
        (variant || "warm-white") === "cream" ? "bg-cream" : "bg-warm-white",
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
                tagline={resolvedTagline}
                title={resolvedTitle}
                size="small"
              />
              <p className="text-sm text-text-muted leading-6 font-light">
                {resolvedDescription}
              </p>
            </div>

            <div className="flex-1 w-full xs:max-w-120">
              {isSubmitted ? (
                <div className="flex items-center gap-2 py-3 px-4 bg-sage/20 rounded-sm">
                  <Check className="w-5 h-5 text-sage" />
                  <span className="text-sm">{resolvedSuccessMessage}</span>
                </div>
              ) : (
                <form
                  id="newsletter-primary"
                  onSubmit={form.handleSubmit(onSubmit, () => form.setFocus("email"))}
                  className="flex flex-col xs:flex-row"
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
                          autoComplete="email"
                          placeholder="jane@example.com"
                          className={cn(
                            "xs:flex-1 h-12 px-5 border xs:border-r-0 border-border text-text placeholder:text-text-muted focus:border-forest focus:outline-none focus:ring-0 xs:rounded-e-none rounded-md mb-4 xs:m-0 min-w-52",
                            (variant || "warm-white") === "cream" ? "bg-warm-white" : "bg-cream",
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
                    aria-label="Submit newsletter email"
                    form="newsletter-primary"
                    disabled={isSubmitting}
                    className="h-12 hover:bg-gold hover:border-gold xs:rounded-s-none min-w-38"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
                    ) : (
                      resolvedButtonLabel
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
