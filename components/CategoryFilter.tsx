"use client";

import { Categories } from "@/sanity/lib/types";

interface CategoryFilterProps {
  selected: string | "all";
  onChange: (categorySlug: string | "all") => void;
  categories: Categories;
}

export default function CategoryFilter({
  selected,
  onChange,
  categories,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter by category"
    >
      <button
        onClick={() => onChange("all")}
        className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-colors
          focus-visible:outline-2 focus-visible:outline-ring cursor-pointer
          ${
            selected === "all"
              ? "bg-forest text-white border-forest"
              : "bg-transparent text-text border-border hover:border-forest hover:text-forest"
          }`}
        aria-pressed={selected === "all"}
      >
        All Categories
      </button>

      {categories.map((cat) => (
        <button
          key={cat._id}
          onClick={() => cat.slug && onChange(cat.slug)}
          className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-colors
            focus-visible:outline-2 focus-visible:outline-ring cursor-pointer
            ${
              selected === cat.slug
                ? "bg-forest text-white border-forest"
                : "bg-transparent text-text border-border hover:border-forest hover:text-forest"
            }`}
          aria-pressed={selected === cat.slug}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
