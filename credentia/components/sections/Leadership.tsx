import { Check } from "lucide-react";
import { leadership } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroVisualization } from "@/components/three/HeroVisualization";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-bg-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={leadership.eyebrow} title={leadership.title} align="left" />

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:sticky lg:top-28">
            <HeroVisualization
              className="max-w-[280px]"
              heightClass="h-[260px] sm:h-[280px]"
              frameClass="overflow-hidden rounded-2xl"
            />
          </div>

          <div className="rounded-2xl border border-border bg-bg-elevated p-8 shadow-(--shadow-card) lg:p-10">
            <p className="border-l-4 border-gold-primary pl-4 text-lg leading-relaxed text-text-muted">
              {leadership.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {leadership.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-text-muted">{leadership.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
