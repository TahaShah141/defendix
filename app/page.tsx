import { Choose } from "./components/Choose";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Defense } from "./components/Defense";
import { CTA } from "./components/CTA";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Choose />
      <Technologies />
      <Defense />
      <CTA />
    </>
  );
}
