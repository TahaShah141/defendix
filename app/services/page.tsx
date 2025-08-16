"use client"

import { CTA } from "../components/Landing-Page/CTA";
import { Industries } from "../components/Services/Industries";
import { ProductHero } from "../components/Services/Product-Hero";
import { Serve } from "../components/Services/Serve";
import { Technologies } from "../components/Landing-Page/Technologies";

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <Industries />
      {/* <Serve /> */}
      <Technologies/>
      <CTA isProduct={true} />
    </>
  );
}
