import { trustStrip } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-subtle py-10" aria-label="EHR experience">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-medium text-text-muted">{trustStrip.label}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {trustStrip.systems.map((system) => (
            <li key={system}>
              <span className="inline-block rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm font-medium text-text-primary shadow-[var(--shadow-card)]">
                {system}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
