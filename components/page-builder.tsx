import { PAGE_QUERYResult } from "@/sanity.types";
import Hero from "./blocks/hero";
import OurMission from "./blocks/our-mission";

// type PageBuilderProps = {
//   content: NonNullable<PAGE_QUERYResult>["content"];
// };

type HeroBlock = {
  _type: "heroSimple";
  _key: string;
  // other props used in <Hero />
};

type OurMissionBlock = {
  _type: "ourMission";
  _key: string;
  // other props used in <OurMission />
};

type PageBlock = HeroBlock | OurMissionBlock;

type PageBuilderProps = {
  content: PageBlock[];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block: { _key: string; _type: string }) => {
        if (!("_type" in block)) return null;

        switch (block._type) {
          case "heroSimple":
            return <Hero key={block._key} {...block} />;
          case "ourMission":
            return <OurMission key={block._key} {...block} />;
          default:
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
}
