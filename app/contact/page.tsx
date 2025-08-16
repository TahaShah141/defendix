"use client"

import { ContactHero } from "../components/Contact-Us/Contact-Hero";
import { ContactUs } from "../components/Shared/ContactUs";
import { Locations } from "../components/Shared/Locations";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Locations />
      <ContactUs showPill={false} />
    </>
  );
}
