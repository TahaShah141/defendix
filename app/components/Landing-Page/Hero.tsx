import { ArrowRight } from "lucide-react";
import { HighlightedText } from "../HighlightedText";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div
      className="w-full h-screen min-h-[1000px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="size-full min-h-[1000px] text-white bg-black/75 pt-20">
        <div className="size-full flex flex-col justify-center gap-32 px-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-7xl ">
              <HighlightedText textArray={["Innovating", "Defense."]} />
              <HighlightedText textArray={["Securing", "Tomorrow."]} />
            </div>
            <p className="max-w-[40rem] text-xl">
              {
                "We combine the technical expertise and domain knowledge to design Network Centric Warfare (NCW) solutions that not only solve your current challenges but also future-proof your defense."
              }
            </p>
            <Link
              href={"/services"}
              className="bg-primary p-2 pl-4 rounded-lg group text-black w-fit flex gap-4 items-center"
            >
              Explore our products & solutions
              <ArrowRight className="w-0 group-hover:w-6 group-hover:pr-2 size-6 transition-all duration-300" />
            </Link>
          </div>
          <div className="relative flex justify-between items-center p-12 py-16">
            <div className="absolute right-1/10 top-0 w-4/5 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-5xl">20+</p>
              <p className="text-white/75 text-2xl">
                Years Combined Experience
              </p>
            </div>
            <div className="h-4/5 w-px bg-neutral-500" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-5xl">5</p>
              <p className="text-white/75 text-2xl">Core Technology Areas</p>
            </div>
            <div className="h-4/5 w-px bg-neutral-500" />
            <div className="flex flex-1 flex-col gap-1 items-center">
              <p className="text-5xl">Global</p>
              <p className="text-white/75 text-2xl">Deployment Reach</p>
            </div>
            <div className="absolute right-1/10 bottom-0 w-4/5 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
