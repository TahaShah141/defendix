import { CheckCircle2 } from "lucide-react";
import React from "react";
import { ServiceType } from "@/lib/services";

const Module = ({
  flipped,
  icon,
  title,
  text,
  points,
  src,
}: ServiceType["modules"][0] & { flipped: boolean }) => {
  return (
    <div className={`flex ${flipped && "lg:justify-end"} px-4 sm:px-8 md:px-0`}>
      <div
        className={`flex max-w-full lg:max-w-9/10 bg-[#F3F3F3] gap-4 md:gap-8 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-10 items-center flex-col lg:flex-row ${
          flipped && "lg:flex-row-reverse"
        } ${
          flipped ? "lg:rounded-l-full lg:pr-20" : "lg:rounded-r-full lg:pl-20"
        } rounded-2xl lg:rounded-none`}
      >
        <div className="flex flex-col gap-4 md:gap-6 flex-1">
          <div className="flex gap-3 md:gap-4 items-center">
            <div className="size-8 md:size-10 p-1.5 md:p-2 rounded-lg bg-[#167F3D] text-white">
              {icon}
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg">
            {text}
          </p>
          <div className="flex flex-col gap-1.5 md:gap-2">
            {points.map((p, i) => (
              <div key={i} className="flex gap-2 items-start">
                <CheckCircle2 className="size-5 md:size-6 text-[#167F3D] mt-0.5 flex-shrink-0" />
                <p className="text-neutral-600 text-sm sm:text-base md:text-lg">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={src}
          className="rounded-2xl lg:rounded-full overflow-hidden object-cover aspect-square w-full max-w-xs lg:max-w-none lg:h-64 xl:h-80 2xl:h-96"
        />
      </div>
    </div>
  );
};

export const ServiceModules = ({
  modules,
  hero,
}: {
  modules: ServiceType["modules"];
  hero: ServiceType["hero"];
}) => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-10 lg:gap-12 py-16 md:py-24 lg:py-32 items-center">
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl px-4 sm:px-8">
        {"Core System Modules"}
      </h3>
      <p className="text-center max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 px-4 sm:px-8">{`Integrated components that form the complete ${hero.title}`}</p>
      <div className="flex flex-col w-full gap-8 md:gap-10 lg:gap-12">
        {modules.map((m, i) => (
          <Module {...m} flipped={!!(i % 2)} key={i} />
        ))}
      </div>
    </div>
  );
};
