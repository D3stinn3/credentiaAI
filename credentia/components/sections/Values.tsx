import { values } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Values() {
  return (
    <section className="bg-bg-base py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={values.eyebrow} title={values.title} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item) => (
            <div key={item.name} className="text-center lg:text-left">
              <div className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-gold-primary to-cyan-accent lg:mx-0" />
              <h3 className="font-display mt-6 text-xl font-semibold text-text-primary">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
