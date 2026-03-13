import ArticleCard from "@/components/ArticleCard";
import SectionTitle from "@/components/SectionTitle";
import { Articles } from "@/sanity/lib/types";

type LatestContentProps = {
  articles: Articles;
  cardVariant?: string;
};

export default function LatestContent({
  articles,
  cardVariant,
}: LatestContentProps) {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 xl:grid-cols-4">
          {articles.slice(0, 3).map((post) => (
            <div
              key={post._id}
              className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1  xl:first-of-type:col-span-2"
            >
              <ArticleCard article={post} variant={cardVariant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
