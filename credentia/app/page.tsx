import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { MissionGrid } from "@/components/sections/MissionGrid";
import { Outcomes } from "@/components/sections/Outcomes";
import { PlatformPillars } from "@/components/sections/PlatformPillars";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Values } from "@/components/sections/Values";
import { WorkflowSpotlight } from "@/components/sections/WorkflowSpotlight";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <div className="gradient-hairline mx-auto max-w-6xl" aria-hidden />
        <PlatformPillars />
        <MissionGrid />
        <WorkflowSpotlight />
        <Outcomes />
        <Values />
        <Leadership />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
