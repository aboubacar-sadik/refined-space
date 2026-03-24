import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Icons from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUpdatedDate(isoString: string | null) {
  const date = new Date(isoString as string);

  // Fallback in case the string is not a valid date
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Use 'en-US' (or your preferred locale) to ensure it returns English month names
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${year}`;
}

type IconName = keyof typeof Icons;
export function getIcon(name: IconName) {
  return Icons[name];
}