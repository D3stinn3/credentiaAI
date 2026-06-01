"use client";

import { useSyncExternalStore } from "react";
import { HealthcareScene } from "@/components/three/HealthcareScene";

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
    <div className="relative w-full max-w-lg">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-primary/25 via-transparent to-cyan-accent/30 blur-2xl"
        aria-hidden
      />

      <div className="relative h-[400px] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-elevated)] sm:h-[460px]">
        <HealthcareScene motionScale={prefersReducedMotion ? 0.25 : 1} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/70 to-transparent px-5 pb-5 pt-16">
          <p className="font-display text-sm font-semibold text-white">
            Live intelligence mesh
          </p>
          <p className="mt-1 text-xs text-white/70">
            Neural networks · Protective shield · Care pathways
          </p>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-text-subtle">
        3D visualization — AI networks powering healthcare automation
      </p>
    </div>
  );
}
