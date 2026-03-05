import ArticleCard from "@/components/ArticleCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { formatUpdatedDate } from "@/lib/utils";
import { Article } from "@/sanity/lib/types";
import Link from "next/link";

type LatestContentProps = {
  articles: Article[];
};

export default function LatestContent({ articles }: LatestContentProps) {
  return (
    <div className="py-14 lg:py-24 bg-cream">
      <div className="container">
        <SectionTitle
          tagline="Latest Content"
          title="Research First. Recommend Second."
          link_href="/articles"
          link_label="All articles"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 xl:grid-cols-4">
          {articles.slice(0, 3).map((post) => (
            <div
              key={post._id}
              className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1  xl:first-of-type:col-span-2"
            >
              <ArticleCard article={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
