import { CheckCircle2 } from "lucide-react";
import React from "react";
import { ServiceType } from "@/lib/services";
import { SlidingDiv } from "../custom/SlidingDiv";

const Card = ({ icon, points, title }: ServiceType["capabilities"][0]) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-14 flex-1 rounded-2xl md:rounded-3xl border border-[#ECECEC] shadow-xl flex flex-col gap-6 md:gap-8 lg:gap-10">
      <div className="flex gap-2 items-center">
        <div className="size-6 md:size-8">{icon}</div>
        <p className="text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
        {points.map((p, i) => (
          <div
            key={i}
            className={`flex gap-2 md:gap-3 ${
              p.type === "list" && "justify-between"
            } items-start`}
          >
            {p.type === "list" ? (
              <>
                <p className="font-bold text-sm sm:text-base flex-shrink-0">
                  {p.name}
                </p>
                <p className="text-neutral-600 text-sm sm:text-base text-right">
                  {p.value}
                </p>
              </>
            ) : (
              <>
                <CheckCircle2 className="text-[#167F3D] size-3 md:size-4 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-600 text-sm sm:text-base">
                  {p.text}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ServiceCapabilities = ({
  capabilities,
}: {
  capabilities: ServiceType["capabilities"];
}) => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-10 lg:gap-12 py-16 md:py-24 lg:py-32 items-center px-4 sm:px-8">
      <SlidingDiv direction="top" px={10} className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl">
        {"Technical Capabilities"}
      </SlidingDiv>
      <SlidingDiv className="flex flex-col lg:flex-row w-full max-w-7xl gap-6 md:gap-8 lg:gap-10">
        {capabilities.map((c, i) => (
          <Card {...c} key={i} />
        ))}
      </SlidingDiv>
    </div>
  );
};
