import React from "react";
import { ServiceType } from "@/lib/services";
import { SlidingDiv } from "../custom/SlidingDiv";

const Card = ({
  icon,
  iconColor,
  title,
  text,
}: ServiceType["overview"]["points"][0]) => (
  <div className="border border-[#ECECEC] flex flex-1 flex-col gap-3 md:gap-4 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-4xl bg-white">
    <div
      className="size-8 md:size-10 rounded-lg p-1.5 md:p-2 text-white"
      style={{ backgroundColor: iconColor }}
    >
      {icon}
    </div>
    <p className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</p>
    <p className="text-neutral-600 text-sm sm:text-base">{text}</p>
  </div>
);

export const ServiceOverview = ({
  heading,
  description,
  points,
}: ServiceType["overview"]) => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <SlidingDiv direction="top" px={10} className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl">
        {heading}
      </SlidingDiv>
      <SlidingDiv direction="top" px={10} delay={0.1} className="text-center max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600">
        {description}
      </SlidingDiv>
      <SlidingDiv delay={0.3} className="flex flex-col md:flex-row w-full gap-4 md:gap-6 max-w-7xl">
        {points.map((p, i) => (
          <Card {...p} key={i} />
        ))}
      </SlidingDiv>
    </div>
  );
};
