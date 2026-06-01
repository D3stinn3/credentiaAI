import type { ReactNode } from "react";

type Accent = "gold" | "cyan" | "none";

type CardProps = {
  children: ReactNode;
  className?: string;
  accent?: Accent;
};

const accentBorder: Record<Accent, string> = {
  gold: "border-l-4 border-l-gold-primary",
  cyan: "border-l-4 border-l-cyan-accent",
  none: "",
};

export function Card({ children, className = "", accent = "none" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-bg-elevated p-6 shadow-[var(--shadow-card)] ${accentBorder[accent]} ${className}`}
    >
      {children}
    </article>
  );
}
