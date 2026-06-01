import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold-primary text-white hover:bg-gold-hover dark:shadow-[0_0_20px_rgba(201,162,39,0.25)]",
  secondary:
    "border-2 border-cyan-accent text-cyan-accent hover:bg-cyan-tint dark:hover:bg-cyan-tint",
  ghost:
    "text-text-muted hover:text-text-primary hover:bg-bg-subtle",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-accent";

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (!href) {
    return (
      <button type="button" className={classes}>
        {children}
      </button>
    );
  }

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
