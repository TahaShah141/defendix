import { NewsHero } from "@/app/components/News/News-Hero";
import { News } from "../components/Landing-Page/News";
import { CTA } from "../components/Landing-Page/CTA";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <News />
      <CTA isProduct={true} />
    </>
  );
}
