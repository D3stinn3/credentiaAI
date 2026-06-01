import Image from "next/image";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 sm:py-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="reveal flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-cyan-accent">
            {hero.eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            {hero.subhead}
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="reveal flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-tint to-cyan-tint opacity-60 blur-2xl dark:opacity-40"
              aria-hidden
            />
            <Image
              src="/images/Logo.png"
              alt="Credentia AI — intelligent healthcare automation"
              width={520}
              height={520}
              className="relative w-full rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
