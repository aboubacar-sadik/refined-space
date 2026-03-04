import { cn } from "@/lib/utils";
import {  CategoryTypes } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  imageUrl,
  title,
  description,
  articleCount,
  slug,
}: CategoryTypes) {
  return (
    <Link
      href={`/articles?category=${slug}`}
      className={cn(
        "group bg-cream py-10 px-9 cursor-pointer transition-all duration-300 relative overflow-hidden block ",
        "before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.75 before:bg-gold before:scale-x-0 before:origin-left before:transition-transform before:duration-500",
        "hover:bg-forest hover:-translate-y-1 hover:before:scale-x-100",
      )}
    >
      <div className="mb-5 relative transition-all duration-300 size-7">
        <Image src={`${imageUrl}`} alt={`${title}`} fill />
      </div>
      <h3 className="text-lg font-semibold text-forest mb-2 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-[13px] text-text-muted font-light transition-color leading-[1.6em] group-hover:text-white/60">
        {description}
      </p>
      <span className="block mt-5 text-tiny tracking-[0.15em] uppercase text-text-muted transition-colors duration-300 group-hover:text-white/40">
        {articleCount} <span>guides, reviews & comparisons</span>
      </span>
    </Link>
  );
}
