import { ProductHero } from "../components/Products/Product-Hero";
import { Industries } from "../components/Products/Industries";
import { Serve } from "../components/Products/Serve";
import { Technologies } from "../components/Landing-Page/Technologies";
import { CTA } from "../components/Landing-Page/CTA";
export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <Industries />
      <Serve />
      <Technologies />
      <CTA isProduct={true} />
    </>
  );
}
