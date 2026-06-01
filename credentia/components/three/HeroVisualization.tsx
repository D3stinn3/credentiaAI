"use client";

import Image from "next/image";
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
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-primary/20 via-transparent to-cyan-accent/25 blur-2xl"
        aria-hidden
      />

      <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)] sm:h-[420px]">
        {prefersReducedMotion ? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#050a14] to-[#0e2a33] p-8">
            <Image
              src="/images/Logo.png"
              alt="Credentia AI"
              width={400}
              height={400}
              className="w-full max-w-[320px] object-contain"
              priority
            />
          </div>
        ) : (
          <>
            <HealthcareScene />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/80 to-transparent px-5 pb-5 pt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Live intelligence mesh
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Networks · Shield · Care pathways
                  </p>
                </div>
                <Image
                  src="/images/Logo1.jpeg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-12 w-12 rounded-lg object-cover opacity-90 ring-1 ring-white/20"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <p className="mt-3 text-center text-xs text-text-subtle">
        3D visualization — AI networks powering healthcare automation
      </p>
    </div>
  );
}
