"use client"

import { CTA } from "./components/Landing-Page/CTA";
import { Choose } from "./components/Landing-Page/Choose";
import { ContactUs } from "./components/Shared/ContactUs";
import { Defense } from "./components/Landing-Page/Defense";
import { FAQ } from "./components/Landing-Page/FAQ";
import { Hero } from "./components/Landing-Page/Hero";
import { News } from "./components/Landing-Page/News";
import { Technologies } from "./components/Landing-Page/Technologies";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Choose />
      <Technologies minimal />
      <Defense />
      <CTA />
      {/* <News /> */}
      <FAQ />
      <ContactUs showInfo />
    </>
  );
}
