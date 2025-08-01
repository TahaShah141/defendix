import { Choose } from "./components/Choose";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Defense } from "./components/Defense";
import { CTA } from "./components/CTA";
import { News } from "./components/News";
import { FAQ } from "./components/FAQ";
import { ContactUs } from "./components/ContactUs";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Choose />
      <Technologies />
      <Defense />
      <CTA />
      <News />
      <FAQ />
      <ContactUs />
    </>
  );
}
