import { sanityFetch } from "@/sanity/lib/live";
import {
  GET_ALL_CATEGORIES_QUERY,
  GET_ARTICLE_BY_SLUG_QUERY,
} from "@/lib/queries";
import { Footer } from "@/sections/Footer";
import { Navigation } from "@/sections/Navigation";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { data: categories } = await sanityFetch({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  const { data: article } = await sanityFetch({
    query: GET_ARTICLE_BY_SLUG_QUERY,
    params: params,
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* <ReadingProgress /> */}
      <Navigation />
      <main className="pt-20">
         Main Content Area 
      </main>
      <Footer categories={categories} />
    </div>
  );
}

// // Sample Author Data
// const author: Author = {
//   id: "sarah-mitchell",
//   name: "Dr. Sarah Mitchell",
//   avatar:
//     "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
//   role: "Pediatrician & Product Researcher",
//   bio: "Dr. Sarah Mitchell is a board-certified pediatrician with over 15 years of experience. She specializes in infant nutrition and has helped thousands of families navigate the challenges of early parenthood. Her research-driven approach combines medical expertise with real-world testing.",
//   socialLinks: {
//     twitter: "https://twitter.com",
//     linkedin: "https://linkedin.com",
//     website: "https://example.com",
//   },
// };

// // Sample Product Data
// const products: Product[] = [
//   {
//     id: "dr-browns-options",
//     name: "Dr. Brown's Natural Flow Options+",
//     image:
//       "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop",
//     rating: 4.5,
//     reviewCount: 1247,
//     price: "$24.99",
//     description:
//       "The gold standard for anti-colic bottles with a proven vent system that eliminates air bubbles. Includes 3 bottles (4oz) with Level 1 nipples.",
//     specs: {
//       material: "BPA-Free Plastic",
//       capacity: "4 oz (120ml)",
//       flowRate: "Level 1 (Slow)",
//       antiColic: "Internal Vent System",
//       dishwasher: "Yes (Top rack)",
//     },
//     pros: [
//       "Clinically proven to reduce colic",
//       "Vacuum-free feeding",
//       "Affordable and widely available",
//     ],
//     ctaUrl: "https://amazon.com",
//     ctaText: "View on Amazon",
//   },
//   {
//     id: "comotomo-bottle",
//     name: "Comotomo Baby Bottle",
//     image:
//       "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
//     rating: 4.7,
//     reviewCount: 892,
//     price: "$23.99",
//     description:
//       "Revolutionary soft silicone design that mimics breastfeeding. Wide-neck makes cleaning effortless. Perfect for breastfed babies.",
//     specs: {
//       material: "Medical-Grade Silicone",
//       capacity: "5 oz (150ml)",
//       flowRate: "Slow Flow",
//       antiColic: "Dual Vent System",
//       dishwasher: "Yes (Top rack)",
//     },
//     pros: [
//       "Breast-like feel reduces bottle rejection",
//       "Extremely easy to clean",
//       "Wide temperature range",
//     ],
//     ctaUrl: "https://amazon.com",
//     ctaText: "Check Price",
//   },
//   {
//     id: "avent-natural",
//     name: "Philips Avent Natural Baby Bottle",
//     image:
//       "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
//     rating: 4.4,
//     reviewCount: 2156,
//     price: "$19.99",
//     description:
//       "Wide, breast-shaped nipple promotes natural latch. Anti-colic valve integrated into nipple. Great value for the quality.",
//     specs: {
//       material: "BPA-Free PP",
//       capacity: "4 oz (125ml)",
//       flowRate: "Newborn Flow",
//       antiColic: "Valve in Nipple",
//       dishwasher: "Yes",
//     },
//     pros: [
//       "Affordable price point",
//       "Easy to assemble and clean",
//       "Compatible with breast pumps",
//     ],
//     ctaUrl: "https://amazon.com",
//     ctaText: "See Details",
//   },
// ];

// // Sample Comparison Products
// const comparisonProducts: ComparisonProduct[] = [
//   {
//     ...products[0],
//     rank: 1,
//     award: "Best Overall",
//   },
//   {
//     ...products[1],
//     rank: 2,
//     award: "Premium Pick",
//   },
//   {
//     ...products[2],
//     rank: 3,
//     award: "Best Value",
//   },
//   {
//     id: "tommee-tippee",
//     name: "Tommee Tippee Closer to Nature",
//     image:
//       "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop",
//     rating: 4.2,
//     reviewCount: 1876,
//     price: "$16.99",
//     description: "Affordable option with breast-like nipple shape.",
//     specs: {
//       material: "BPA-Free Plastic",
//       capacity: "5 oz (150ml)",
//       flowRate: "Variable",
//       antiColic: "Venting Valve",
//       dishwasher: "Yes",
//     },
//     pros: ["Budget-friendly", "Easy to hold", "Wide availability"],
//     ctaUrl: "https://amazon.com",
//     ctaText: "View Product",
//     rank: 4,
//     award: "Best for Newborns",
//   },
// ];

// // Table of Contents Items
// const tocItems: TableOfContentsItem[] = [
//   { id: "introduction", title: "Introduction", level: 2 },
//   {
//     id: "why-this-matters",
//     title: "Why the Right Baby Bottle Matters",
//     level: 2,
//   },
//   { id: "key-considerations", title: "Key Things to Consider", level: 2 },
//   { id: "top-recommendations", title: "Our Top Recommendations", level: 2 },
//   { id: "detailed-reviews", title: "Detailed Reviews", level: 2 },
//   { id: "comparison", title: "Side-by-Side Comparison", level: 2 },
//   { id: "final-verdict", title: "Final Verdict", level: 2 },
//   { id: "faq", title: "Frequently Asked Questions", level: 2 },
// ];

// // Popular Articles
// const popularArticles: RelatedArticle[] = [
//   {
//     id: "1",
//     title: "Best Organic Baby Formula: A Complete Guide for 2024",
//     excerpt: "We tested and reviewed the top organic formulas on the market.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=150&fit=crop",
//     category: "Baby & Child",
//     readingTime: 12,
//     slug: "best-organic-baby-formula",
//   },
//   {
//     id: "2",
//     title: "Non-Toxic Diapers: Are They Worth the Premium?",
//     excerpt:
//       'Our investigation into what "non-toxic" really means for diapers.',
//     thumbnail:
//       "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
//     category: "Baby & Child",
//     readingTime: 8,
//     slug: "non-toxic-diapers-guide",
//   },
//   {
//     id: "3",
//     title: "Best Baby Monitors: Video, Audio & Smart Options",
//     excerpt:
//       "Find the perfect monitor for your nursery with our in-depth reviews.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=200&h=150&fit=crop",
//     category: "Baby & Child",
//     readingTime: 10,
//     slug: "best-baby-monitors",
//   },
// ];

// // Related Articles
// const relatedArticles: RelatedArticle[] = [
//   {
//     id: "4",
//     title: "Best Breast Pumps: Electric, Manual & Wearable Options",
//     excerpt:
//       "Our comprehensive guide to finding the perfect breast pump for your needs and budget.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
//     category: "Baby & Child",
//     readingTime: 15,
//     slug: "best-breast-pumps",
//   },
//   {
//     id: "5",
//     title: "Organic Baby Food: Making the Right Choice",
//     excerpt:
//       "Everything you need to know about organic baby food, from store-bought to homemade.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=400&h=300&fit=crop",
//     category: "Baby & Child",
//     readingTime: 11,
//     slug: "organic-baby-food-guide",
//   },
//   {
//     id: "6",
//     title: "Best Baby Carriers: Ergonomic & Comfortable Options",
//     excerpt:
//       "Keep your baby close and your hands free with our top carrier recommendations.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop",
//     category: "Baby & Child",
//     readingTime: 9,
//     slug: "best-baby-carriers",
//   },
// ];

// // Categories
// const categories = [
//   { name: "Baby & Child", slug: "baby-child", count: 24 },
//   { name: "Eco-Tech", slug: "eco-tech", count: 18 },
//   { name: "Personal Care", slug: "personal-care", count: 15 },
//   { name: "Sustainable Home", slug: "sustainable-home", count: 21 },
//   { name: "Wellness", slug: "wellness", count: 12 },
// ];

// // Navigation Articles
// const prevArticle = {
//   title: "Best Organic Baby Formula: A Complete Guide for 2024",
//   slug: "best-organic-baby-formula",
//   category: "Baby & Child",
// };

// const nextArticle = {
//   title: "Best Breast Pumps: Electric, Manual & Wearable Options",
//   slug: "best-breast-pumps",
//   category: "Baby & Child",
// };
