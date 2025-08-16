import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const ProductHero = () => {
  return (
    <div
      className="w-full h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-[center_top_30%] flex items-center justify-center"
      style={{ backgroundImage: "url('/products-hero.png')" }}
    >
      <div className="size-full bg-black/75 pt-16 md:pt-20 flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center items-center px-4">
        <SlidingDiv direction="top" px={10} className="border-[#15522D] bg-[#052E16] text-white border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
          What We Do
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          Products & Solutions
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 px-4">
          {
            "Our integrated approach covers all aspects of modern warfare, from command and control to electronic warfare and radar technologies."
          }
        </SlidingDiv>
      </div>
    </div>
  );
};
