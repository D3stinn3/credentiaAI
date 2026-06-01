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

type HeroVisualizationProps = {
  className?: string;
  heightClass?: string;
  frameClass?: string;
};

export function HeroVisualization({
  className = "max-w-lg",
  heightClass = "h-[400px] sm:h-[460px]",
  frameClass = "",
}: HeroVisualizationProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const variant = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="absolute -inset-6 rounded-full bg-radial from-gold-primary/15 via-cyan-accent/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className={`relative w-full ${heightClass} ${frameClass}`}>
        <HealthcareScene
          variant={variant}
          motionScale={prefersReducedMotion ? 0.25 : 1}
        />
      </div>
    </div>
  );
}
