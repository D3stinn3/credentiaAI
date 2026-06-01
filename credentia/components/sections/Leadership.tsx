import Image from "next/image";
import { Check } from "lucide-react";
import { leadership } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-bg-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={leadership.eyebrow} title={leadership.title} align="left" />

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
            <div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-gold-tint to-cyan-tint opacity-80"
              aria-hidden
            />
            <Image
              src="/images/Logo1.jpeg"
              alt="Credentia AI brand mark"
              width={280}
              height={280}
              className="relative rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
            />
          </div>

          <div className="rounded-2xl border border-border bg-bg-elevated p-8 shadow-[var(--shadow-card)] lg:p-10">
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
