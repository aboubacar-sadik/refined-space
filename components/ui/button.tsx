import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium transition-all duration-[0.2s] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive uppercase tracking-[0.08em] hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-white hover:bg-transparent hover:text-gold-light hover:border-gold border",
        outline:
          "border border-gold text-gold-light hover:bg-gold hover:text-white",
        secondary:
          "bg-forest text-white border border-forest text-xs font-normal hover:bg-mid-green hover:text-white",
        link: "text-white/70 p-0 font-normal normal-case tracking-[0.06em] gap-2 hover:text-white",
      },
      size: {
        default: "px-7 py-2",
        lg: "px-8 py-3.5 has-[>svg]:px-4 text-[13px]",
        icon: "size-9 rounded-full",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
