"use client";

import { useSyncExternalStore } from "react";
import { HealthcareScene, type SceneVariant } from "@/components/three/HealthcareScene";

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

function subscribeTheme(onChange: () => void) {
  window.addEventListener("credentia-theme-change", onChange);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => {
    window.removeEventListener("credentia-theme-change", onChange);
    observer.disconnect();
  };
}

function getTheme(): SceneVariant {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerTheme(): SceneVariant {
  return "light";
}

export function HeroVisualization() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const variant = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const isDark = variant === "dark";

  return (
    <div className="relative w-full max-w-lg">
      <div
        className="absolute -inset-6 rounded-full bg-radial from-gold-primary/15 via-cyan-accent/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative h-[400px] w-full sm:h-[460px]">
        <HealthcareScene
          variant={variant}
          motionScale={prefersReducedMotion ? 0.25 : 1}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-2 pt-16">
          <p
            className={`font-display text-sm font-semibold ${
              isDark ? "text-white" : "text-text-primary"
            }`}
          >
            Live intelligence mesh
          </p>
          <p
            className={`mt-1 text-xs ${
              isDark ? "text-white/70" : "text-text-muted"
            }`}
          >
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
