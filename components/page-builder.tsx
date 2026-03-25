import { PAGE_QUERYResult } from "@/sanity.types";
import { createSanityDataAttribute } from "@/sanity/lib/data-attribute";
import Hero from "./blocks/hero";
import OurMission from "./blocks/our-mission";
import CTASection from "@/sections/about/CTASection";
import CategoryGridBlock from "./blocks/category-grid";
import { Categories } from "@/sanity/lib/types";
import { GET_ALL_PROCESSES_QUERYResult } from "@/sanity.types";
import ReviewProcessBlock from "./blocks/review-process";
import NewsletterFormBlock from "./blocks/newsletter-form";

type PageBuilderProps = {
  page: NonNullable<PAGE_QUERYResult>;
  categories?: Categories;
  processes?: NonNullable<GET_ALL_PROCESSES_QUERYResult>;
};

export function PageBuilder({
  page,
  categories = [],
  processes = [],
}: PageBuilderProps) {
  const { _id, _type, content } = page;

  if (!Array.isArray(content)) {
    return null;
  }

  const dataAttribute = createSanityDataAttribute(_id, _type);

  return (
    <main data-sanity={dataAttribute.scope(["content"])()}>
      {content.map((block, index) => {
        if (!("_type" in block)) return null;

        const blockDataAttribute = dataAttribute.scope([
          "content",
          { _key: block._key },
        ]);

        switch (block._type) {
          case "heroSimple":
            return (
              <section
                key={block._key}
                data-sanity={blockDataAttribute()}
                className="bg-forest py-20 "
              >
                <Hero {...block} />
              </section>
            );
          case "ourMission":
            return (
              <section
                key={block._key}
                data-sanity={blockDataAttribute()}
                className="py-16"
              >
                <OurMission {...block} />
              </section>
            );
          case "ctaSection":
            return (
              <section
                key={block._key}
                data-sanity={blockDataAttribute()}
                className="py-24 lg:py-32"
              >
                <CTASection {...block} />
              </section>
            );
          case "categoryGrid":
            return (
              <div
                key={block._key}
                data-sanity={blockDataAttribute()}
                className="py-24 lg:py-32 bg-cream-warm"
              >
                <CategoryGridBlock {...block} categories={categories} />
              </div>
            );
          case "reviewProcess":
            return (
              <section key={block._key} data-sanity={blockDataAttribute()}>
                <ReviewProcessBlock {...block} processes={processes} />
              </section>
            );
          case "newsletterForm":
            return (
              <div
                key={block._key}
                data-sanity={blockDataAttribute()}
                className="py-24 lg:py-32 bg-cream"
              >
                <NewsletterFormBlock {...block} />
              </div>
            );
          default:
            return (
              <section
                key={`unknown-block-${index}`}
                data-sanity={blockDataAttribute()}
              >
                Block not found
              </section>
            );
        }
      })}
    </main>
  );
}
