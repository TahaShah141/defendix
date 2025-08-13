import { AboutHero } from "../components/About/AboutHero";
import { CTA } from "../components/Landing-Page/CTA";
import { Founders } from "../components/About/Founders";
import { Values } from "../components/About/Values";
import { VisionMission } from "../components/About/VisionMission";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <Values />
      <Founders />
      <CTA isProduct={false} />
    </>
  );
}
