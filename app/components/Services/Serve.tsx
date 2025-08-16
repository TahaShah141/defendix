import Image from "next/image";
import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

const serve = [
  {
    id: 1,
    title: "Air Forces",
    description:
      "Ensure dominance in the skies with advanced radar, secure communications, and electronic warfare systems tailored for aircraft and drones.",
  },
  {
    id: 2,
    title: "Naval Forces",
    description:
      "Equip fleets with real-time situational awareness, maritime surveillance, and EW capabilities built for dynamic environments.",
  },
  {
    id: 3,
    title: "Ground Forces",
    description:
      "Support troops with ruggedized platforms, networked C41SR systems, and secure tactical communication for field superiority.",
  },
  {
    id: 4,
    title: "Joint Command Units",
    description:
      "Enable unified command and control across domains with interoperable platforms that enhance coordination and decision-making.",
  },
];

const ServeCard = ({ article, i }: { article: (typeof serve)[0] } & { i : number }) => (
  <SlidingDiv delay={i*0.1} className="border border-[#ECECEC] rounded-2xl md:rounded-4xl overflow-hidden flex flex-col h-full">
    <Image
      src="/products/serve.jpg"
      alt="Serve article"
      width={400}
      height={240}
      className="w-full h-40 sm:h-48 md:h-60 object-cover"
    />
    <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-3 md:gap-4 flex-1">
      <h4 className="text-lg sm:text-xl font-semibold leading-tight">
        {article.title}
      </h4>
      <p className="text-neutral-600 leading-relaxed flex-1 text-sm sm:text-base">
        {article.description}
      </p>
    </div>
  </SlidingDiv>
);

export const Serve = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px] items-center">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
        <SlidingDiv direction="top" px={10} className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
          WHO WE HELP
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Empowering Those Who Defend
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700 px-4">
          DefendiX Technologies delivers advanced solutions to military forces
          and defense organizations across all domains—air, sea, land, and
          command centers.
        </SlidingDiv>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl w-full mb-6 md:mb-8 lg:mb-10">
        {serve.map((article, i) => (
          <ServeCard key={article.id} article={article} i={i} />
        ))}
      </div>
    </div>
  );
};
