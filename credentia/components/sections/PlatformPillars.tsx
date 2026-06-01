import { Check } from "lucide-react";
import { pillars } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trademark } from "@/components/ui/Trademark";

const accentStyles = {
  cyan: {
    badge: "bg-cyan-tint text-cyan-accent",
    icon: "text-cyan-accent",
  },
  gold: {
    badge: "bg-gold-tint text-gold-primary",
    icon: "text-gold-primary",
  },
};

export function PlatformPillars() {
  return (
    <section id="platform" className="scroll-mt-24 bg-bg-base py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Platform"
          title="Two intelligent platforms. One vision for healthcare transformation."
          description="Credentia AI™ and Sentinel AI™ work in concert to modernize operations and elevate behavioral health delivery."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => {
            const styles = accentStyles[pillar.accent];
            return (
              <Card key={pillar.id} accent={pillar.accent}>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${styles.badge}`}
                >
                  {pillar.accent === "cyan" ? "Operations" : "Behavioral Health"}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-text-primary">
                  <Trademark name={pillar.product} />
                </h3>
                <p className="mt-2 text-lg font-medium text-text-muted">{pillar.title}</p>
                <p className="mt-4 leading-relaxed text-text-muted">{pillar.description}</p>
                <ul className="mt-6 space-y-3">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-muted">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${styles.icon}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
