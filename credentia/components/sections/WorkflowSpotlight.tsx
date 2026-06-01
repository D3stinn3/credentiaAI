import { ArrowRight } from "lucide-react";
import { workflows } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkflowSpotlight() {
  return (
    <section id="workflows" className="scroll-mt-24 bg-bg-base py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={workflows.eyebrow} title={workflows.title} />

        <div className="grid gap-8 md:grid-cols-3">
          {workflows.items.map((item) => {
            const headerClass =
              item.accent === "gold"
                ? "bg-gold-tint text-gold-primary"
                : "bg-cyan-tint text-cyan-accent";

            return (
              <Card key={item.title} accent={item.accent}>
                <div
                  className={`-mx-6 -mt-6 mb-6 rounded-t-2xl px-6 py-4 ${headerClass}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    {item.metric}
                  </p>
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-accent transition-colors hover:text-cyan-hover"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-text-subtle">{workflows.disclaimer}</p>
      </div>
    </section>
  );
}
