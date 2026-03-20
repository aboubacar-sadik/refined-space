import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import ContactMeForm from "@/sections/contact/ContactMeForm";
import ContactHero from "@/sections/contact/ContactHero";
import FaqSection from "@/sections/FaqSection";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_ALL_CATEGORIES_QUERY } from "@/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Let's Talk",
  description:
    "Reach out for support, business inquiries, or collaboration opportunities. We're here to help and respond as quickly as possible.",
};

export default async function ContactPage() {
  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      <main className="mt-18">
        {/* Hero Section */}
        <ContactHero />
        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-5 gap-12 container py-14 lg:py-24">
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* FAQ Teaser */}
            <FaqSection />
          </div>
          <div className="lg:col-span-3 lg:order-2">
            <ContactMeForm />
          </div>
        </div>
      </main>
      <Footer categories={categories} />
    </div>
  );
}
