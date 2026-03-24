"use client";

import { createElement } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FlaskConical,
  Heart,
  HelpCircle,
  Leaf,
  Lightbulb,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  Star,
  Target,
  User,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { scaleIn } from "@/lib/animations";
import { GET_ALL_PROCESSES_QUERYResult } from "@/sanity.types";

type ProcessIconValue = NonNullable<
  GET_ALL_PROCESSES_QUERYResult[number]["icon"]
>;
type ProcessIconName = Lowercase<ProcessIconValue> | "user";

const PROCESS_ICON_MAP: Record<ProcessIconName, LucideIcon> = {
  checkcircle: CheckCircle,
  flaskconical: FlaskConical,
  heart: Heart,
  leaf: Leaf,
  lightbulb: Lightbulb,
  refreshcw: RefreshCw,
  scale: Scale,
  search: Search,
  shieldcheck: ShieldCheck,
  star: Star,
  target: Target,
  user: User,
  zap: Zap,
};

const FALLBACK_ICON: LucideIcon = HelpCircle;

function hasProcessIcon(name: string): name is ProcessIconName {
  return name in PROCESS_ICON_MAP;
}

function resolveProcessIcon(icon: string | null | undefined): LucideIcon {
  if (!icon) return FALLBACK_ICON;

  const normalizedIcon = icon.trim().toLowerCase();
  return hasProcessIcon(normalizedIcon)
    ? PROCESS_ICON_MAP[normalizedIcon]
    : FALLBACK_ICON;
}

export default function ProcessCard({
  title,
  description,
  order,
  icon,
}: GET_ALL_PROCESSES_QUERYResult[number]) {
  const Icon = resolveProcessIcon(icon);

  return (
    <motion.div
      key={title}
      variants={scaleIn}
      custom={order}
      whileHover={{ y: -5 }}
      className="relative bg-warm-white p-6 lg:p-8 border border-forest/5 group hover:shadow-card transition-shadow"
    >
      {/* Step Number */}
      <span className="absolute top-4 right-4 font-serif text-5xl font-medium text-forest/5 group-hover:text-forest/10 transition-colors">
        0{order}
      </span>

      <motion.div
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ duration: 0.3 }}
        className="w-12 h-12 bg-forest/5 rounded-md flex items-center justify-center mb-5"
      >
        {createElement(Icon, {
          className: "h-6 w-6 text-sage",
          "aria-hidden": true,
        })}
      </motion.div>

      <h3 className="font-serif text-xl font-medium text-forest mb-3">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-forest/60">{description}</p>
    </motion.div>
  );
}
