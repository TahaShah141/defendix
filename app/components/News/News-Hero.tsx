import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const NewsHero = () => {
  return (
    <div className="w-full h-[500px] bg-[#181818]  flex items-center justify-center">
      <div className="size-full bg-black/75 pt-20 flex flex-col gap-8 justify-center items-center">
        <SlidingDiv direction="top" px={10} className="border-[#15522D] bg-[#052E16] text-white border text-sm  tracking-wide rounded-full px-4 py-3 uppercase">
          STAY UPDATED
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-5xl text-white">News & Insights</SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-3xl text-xl text-neutral-300">
          {
            "Explore the latest news, technical articles, and insights from the world of defense technology and DefendiX."
          }
        </SlidingDiv>
      </div>
    </div>
  );
};
