import { PAGE_QUERYResult } from "@/sanity.types";
import Hero from "./blocks/hero";
import OurMission from "./blocks/our-mission";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "heroSimple":
            return <Hero key={block._key} {...block} />;
          case "ourMission":
            return <OurMission key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
}
