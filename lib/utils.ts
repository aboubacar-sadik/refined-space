import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUpdatedDate(isoString: string) {
  const date = new Date(isoString);

  // Fallback in case the string is not a valid date
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Use 'en-US' (or your preferred locale) to ensure it returns English month names
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `Updated ${month} ${year}`;
}
