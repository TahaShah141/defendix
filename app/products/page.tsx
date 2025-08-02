import { ProductHero } from "../components/Products/Product-Hero";
import { Industries } from "../components/Products/Industries";
import { Serve } from "../components/Products/Serve";
import { Technologies } from "../components/Landing-Page/Technologies";

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <Industries />
      <Serve />
      <Technologies />
    </>
  );
}
