import { outcomes } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Outcomes() {
  return (
    <section className="bg-bg-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.title} />

        <div className="grid gap-8 md:grid-cols-3">
          {outcomes.items.map((item, index) => (
            <div
              key={item.value}
              className="rounded-2xl border border-border bg-bg-elevated p-8 text-center shadow-[var(--shadow-card)]"
            >
              <p className="font-display text-2xl font-bold text-cyan-accent sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold-primary">
                Outcome {index + 1}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
