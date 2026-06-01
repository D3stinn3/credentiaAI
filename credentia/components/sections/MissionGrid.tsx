import {
  Brain,
  Building2,
  GitBranch,
  HeartHandshake,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { mission } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<(typeof mission.items)[number]["icon"], LucideIcon> = {
  brain: Brain,
  building: Building2,
  "heart-handshake": HeartHandshake,
  workflow: GitBranch,
  scale: Scale,
};

export function MissionGrid() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-bg-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mission.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Card key={item.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-tint text-cyan-accent dark:bg-cyan-tint">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
