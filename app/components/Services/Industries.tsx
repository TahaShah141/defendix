import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

const industries = [
  {
    id: 1,
    src: "/defense.png",
    title: "Defense Forces",
    description:
      "Army, Navy, Air Force, and Joint Commands relying on integrated CZIISR, radar, and EW systems for real-time operational superiority.",
  },
  {
    id: 2,
    src: "/military.png",
    title: "Military R&D Facilities",
    description:
      "Institutes focused on development, integration, and simulation of next-generation NCW capabilities in secure environments.",
  },
  {
    id: 3,
    src: "/national.png",
    title: "National Security",
    description:
      "National security agencies and defense ministries requiring secure communication, surveillance, and threat detection systems.",
  },
  {
    id: 4,
    src: "/industries/border.jpeg",
    title: "Border & Coastal Security",
    description:
      "Agencies securing borders and coastlines using real-time tracking, radar surveillance, and interoperable communication networks.",
  },
  {
    id: 5,
    src: "/air.png",
    title: "Aerospace & Aviation",
    description:
      "Airborne platforms demanding lightweight, multi-function radar systems, SDRs, and electronic warfare solutions for mission-critical operations.",
  },
  {
    id: 6,
    src: "/industries/integrators.png",
    title: "Defense OEMs & Integrators",
    description:
      "Global defense manufacturers integrating our ruggedized subsystems and RF components into airborne, ground, and naval systems.",
  },
];

const IndustryCard = ({
  industry,
  i,
}: { industry: (typeof industries)[0] } & { i: number }) => (
  <SlidingDiv
    delay={i * 0.1}
    className="shadow-md border border-[#ECECEC] rounded-xl md:rounded-2xl overflow-hidden bg-white flex flex-col h-full"
  >
    <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-3 md:p-4 flex-shrink-0">
        <h4 className="text-lg sm:text-xl md:text-2xl text-[#167F3D] font-semibold leading-tight">
          {industry.title}
        </h4>
        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base">
          {industry.description}
        </p>
      </div>

      <div className="mt-auto">
        <div
          className="w-full h-[200px] sm:h-[220px] md:h-[250px] bg-cover bg-[center_top_30%]"
          style={{ backgroundImage: `url(${industry.src})` }}
        />
      </div>
    </div>
  </SlidingDiv>
);

export const Industries = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px] items-center">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
        <SlidingDiv
          direction="top"
          px={10}
          className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase"
        >
          AREAS WE COVER
        </SlidingDiv>
        <SlidingDiv
          direction="top"
          px={10}
          delay={0.1}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          Industries we serve
        </SlidingDiv>
        <SlidingDiv
          direction="top"
          px={10}
          delay={0.2}
          className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700 px-4"
        >
          Our advanced defense technologies are trusted by critical sectors
          requiring secure, real-time communication, situational awareness, and
          mission-ready systems.
        </SlidingDiv>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl w-full mb-6 md:mb-8 lg:mb-10">
        {industries.map((industry, i) => (
          <IndustryCard key={industry.id} industry={industry} i={i} />
        ))}
      </div>
    </div>
  );
};
