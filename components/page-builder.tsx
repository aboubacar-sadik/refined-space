import { PAGE_QUERYResult } from "@/sanity.types";
import { createSanityDataAttribute } from "@/sanity/lib/data-attribute";
import Hero from "./blocks/hero";
import OurMission from "./blocks/our-mission";
import CTASection from "@/sections/about/CTASection";

type PageBuilderProps = {
  page: NonNullable<PAGE_QUERYResult>;
};

export function PageBuilder({ page }: PageBuilderProps) {
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
              <div key={block._key} data-sanity={blockDataAttribute()}>
                <Hero {...block} />
              </div>
            );
          case "ourMission":
            return (
              <div key={block._key} data-sanity={blockDataAttribute()}>
                <OurMission {...block} />
              </div>
            );
          case "ctaSection":
            return (
              <div key={block._key} data-sanity={blockDataAttribute()}>
                <CTASection {...block} />
              </div>
            );
          default:
            return (
              <div key={`unknown-block-${index}`} data-sanity={blockDataAttribute()}>
                Block not found
              </div>
            );
        }
      })}
    </main>
  );
}
