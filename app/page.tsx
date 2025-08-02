import { Choose } from "./components/Landing-Page/Choose";
import { Hero } from "./components/Landing-Page/Hero";
import { Technologies } from "./components/Landing-Page/Technologies";
import { Defense } from "./components/Landing-Page/Defense";
import { CTA } from "./components/Landing-Page/CTA";
import { News } from "./components/Landing-Page/News";
import { FAQ } from "./components/Landing-Page/FAQ";
import { ContactUs } from "./components/Shared/ContactUs";

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
