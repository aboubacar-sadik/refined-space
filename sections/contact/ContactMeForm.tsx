"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const formSchema = z.object({
  name: z.string().trim().min(5, "Name must be at least 5 characters."),
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters."),
  message: z.string().trim().min(20, "Message must be at least 20 characters."),
});

export default function ContactMeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // better UX
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      // simulate API call (replace with real one)
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
        sendEmail(data);
      });

      toast.success("Message sent successfully 🎉");

      // reset form after success
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div variants={fadeUp}>
      <form
        id="contact-form"
        onSubmit={form.handleSubmit(onSubmit, () => {
          // focus first error field
          const firstError = Object.keys(form.formState.errors)[0];
          if (firstError) {
            const el = document.querySelector(
              `[name="${firstError}"]`,
            ) as HTMLElement;
            el?.focus();
          }
        })}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-name">Your Name</FieldLabel>
                <Input
                  {...field}
                  id="form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Jane Smith"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-email">Email Address</FieldLabel>
                <Input
                  {...field}
                  id="form-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="jane@example.com"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-subject">Subject</FieldLabel>
              <Input
                {...field}
                id="form-subject"
                aria-invalid={fieldState.invalid}
                placeholder="What's this about?"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-message">Message</FieldLabel>
              <Textarea
                {...field}
                id="form-message"
                placeholder="Tell us more..."
                rows={6}
                className="min-h-24 resize-none"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field orientation="horizontal">
          <Button
            type="submit"
            variant="secondary"
            form="contact-form"
            className="py-4 w-full md:w-auto"
            aria-label={`Submit contact form`}
            disabled={isSubmitting || !form.formState.isValid}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Field>
      </form>
    </motion.div>
  );
}
