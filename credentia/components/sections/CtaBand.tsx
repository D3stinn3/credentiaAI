import { cta } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gold-tint py-20 dark:bg-bg-subtle sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-text-muted">{cta.description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
          <Button href={cta.secondary.href} variant="secondary">
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
