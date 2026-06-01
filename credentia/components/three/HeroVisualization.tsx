"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const HealthcareScene = dynamic(
  () =>
    import("@/components/three/HealthcareScene").then((mod) => mod.HealthcareScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-12 w-12 animate-pulse rounded-full bg-gradient-to-br from-gold-tint to-cyan-tint" />
      </div>
    ),
  },
);

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotion() {
  return false;
}

export function HeroVisualization() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div
        className="absolute -inset-6 rounded-full bg-gradient-to-br from-gold-tint/80 via-transparent to-cyan-tint/80 blur-3xl dark:from-gold-tint/40 dark:to-cyan-tint/40"
        aria-hidden
      />

      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-bg-elevated/40 shadow-[var(--shadow-elevated)] backdrop-blur-sm">
        {prefersReducedMotion ? (
          <div className="flex h-full items-center justify-center p-6">
            <Image
              src="/images/Logo.png"
              alt="Credentia AI — intelligent healthcare automation"
              width={480}
              height={480}
              className="w-full object-contain"
              priority
            />
          </div>
        ) : (
          <>
            <HealthcareScene className="absolute inset-0 min-h-[320px] sm:min-h-[380px]" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-8 sm:p-10">
              <Image
                src="/images/Logo.png"
                alt=""
                width={360}
                height={360}
                className="relative w-[72%] max-w-[300px] object-contain drop-shadow-[0_8px_32px_rgba(15,23,42,0.12)] dark:drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>
          </>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-text-subtle">
        Intelligent networks · Protected care · Automated pathways
      </p>
    </div>
  );
}
