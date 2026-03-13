import { Categories } from "@/sanity/lib/types";

interface CategoriesListProps {
  categories: Categories;
}

export function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <div className="bg-warm-white rounded-sm p-6 shadow-card">
      <h3 className="text-sm font-medium text-forest uppercase tracking-wider mb-4">
        Categories
      </h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category._id}
            href={`/${category.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-forest/5 text-forest text-sm rounded-full hover:bg-forest hover:text-warm-white transition-colors"
          >
            <span>{category.title}</span>
            <span className="text-xs text-text-muted hover:text-warm-white/70">
              ({category.articleCount})
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
