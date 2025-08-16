import { ArrowRight } from "lucide-react";
import { HighlightedText } from "../HighlightedText";
import Link from "next/link";
import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const Hero = () => {
  return (
    <div
      className="w-full h-screen min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="size-full min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] text-white bg-black/75 pt-16 md:pt-20">
        <div className="size-full flex flex-col justify-center gap-8 md:gap-16 lg:gap-32 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <SlidingDiv className="flex flex-col gap-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <HighlightedText textArray={["Innovating", "Defense."]} />
              <HighlightedText textArray={["Securing", "Tomorrow."]} />
            </SlidingDiv>
            <SlidingDiv delay={0.1} className="max-w-[40rem] text-sm sm:text-base md:text-lg lg:text-xl">
              {
                "We combine the technical expertise and domain knowledge to design Network Centric Warfare (NCW) solutions that not only solve your current challenges but also future-proof your defense."
              }
            </SlidingDiv>
            <SlidingDiv delay={0.2}>
              <Link
                href={"/services"}
                className="bg-primary p-2 pl-4 rounded-lg group text-black w-fit flex gap-2 md:gap-4 items-center transition-all duration-300 hover:bg-primary/80"
                >
                Explore our products & solutions
                <ArrowRight className="w-0 group-hover:w-4 md:group-hover:w-6 transition-all duration-300" />
              </Link>
            </SlidingDiv>
          </div>
          <SlidingDiv direction="bottom" className="relative flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-12 py-8 md:py-12 lg:py-16 gap-6 md:gap-0">
            <div className="absolute right-1/10 top-0 w-4/5 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent hidden md:block" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                20+
              </p>
              <p className="text-white/75 text-sm sm:text-base md:text-lg lg:text-2xl text-center">
                Years Combined Experience
              </p>
            </div>
            <div className="h-px w-4/5 md:h-4/5 md:w-px bg-neutral-500 md:hidden" />
            <div className="hidden md:block h-4/5 w-px bg-neutral-500" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">5</p>
              <p className="text-white/75 text-sm sm:text-base md:text-lg lg:text-2xl text-center">
                Core Technology Areas
              </p>
            </div>
            <div className="h-px w-4/5 md:h-4/5 md:w-px bg-neutral-500 md:hidden" />
            <div className="hidden md:block h-4/5 w-px bg-neutral-500" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Global
              </p>
              <p className="text-white/75 text-sm sm:text-base md:text-lg lg:text-2xl text-center">
                Deployment Reach
              </p>
            </div>
            <div className="absolute right-1/10 bottom-0 w-4/5 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent hidden md:block" />
          </SlidingDiv>
        </div>
      </div>
    </div>
  );
};
