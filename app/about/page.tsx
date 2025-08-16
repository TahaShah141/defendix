"use client"

import { AboutHero } from "../components/About/AboutHero";
import { CTA } from "../components/Landing-Page/CTA";
import { Founders } from "../components/About/Founders";
import { Locations } from "../components/Shared/Locations";
import { Values } from "../components/About/Values";
import { VisionMission } from "../components/About/VisionMission";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <Values />
      {/* <Founders /> */}
      <Locations />
      <CTA isProduct={false} />
    </>
  );
}
