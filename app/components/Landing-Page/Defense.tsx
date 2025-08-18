"use client";

import React, { useState } from "react";

import { CheckCircle2 } from "lucide-react";
import { SlidingDiv } from "../custom/SlidingDiv";

const tabs = [
  {
    id: "air-forces",
    src: "/air.png",
    label: "Air Forces",
    content: {
      title: "Air Forces",
      description:
        "Air defense capabilities with real-time situational awareness, secure communication, and coordinated mission execution.",
      points: [
        "Recognized air picture for effective threat detection and tracking.",
        "Secure ground-to-air and air-to-air communication links.",
        "Integrated command and control for rapid response.",
      ],
    },
  },
  {
    id: "naval-forces",
    src: "/navy.jpg",
    label: "Naval Forces",
    content: {
      title: "Naval Forces",
      description:
        "Maritime operations with continuous situational awareness, secure fleet communications, and coordinated threat response.",
      points: [
        "Surface and aerial surveillance across maritime zones.",
        "Secure ship-to-ship, ship-to-air, and ship-to-shore communication.",
        "Integrated naval command systems for rapid response.",
      ],
    },
  },
  {
    id: "ground-forces",
    src: "/ground.jpg",
    label: "Ground Forces",
    content: {
      title: "Ground Forces",
      description:
        "Land operations with comprehensive situational awareness, secure tactical communication, and responsive mission control.",
      points: [
        "Recognized land picture from integrated sensor data.",
        "Secure ground-to-ground and ground-to-air communication links.",
        "Unified command for tactical and strategic missions.",
      ],
    },
  },
  {
    id: "joint-command",
    src: "/jcu.jpg",
    label: "Joint Command Units",
    content: {
      title: "Joint Command Units",
      description:
        "Cross-domain operations with a common operating picture, secure interoperability, and coordinated mission execution.",
      points: [
        "Shared operational picture integrating land, air, and naval data.",
        "Seamless interoperability across all force components.",
        "Coordinated threat evaluation and weapon assignment.",
      ],
    },
  },
];

export const Defense = () => {
  const [activeTab, setActiveTab] = useState("air-forces");
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="text-black bg-white flex flex-col items-center relative overflow-hidden py-16 md:py-24 lg:py-[120px] px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
        <SlidingDiv direction="top" px={10} className="border-[#DCFCE7] bg-[#BBF7D0] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
          WHO WE HELP
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Empowering Those Who Defend
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700">
          DefendiX Technologies delivers advanced solutions to military forces
          and defense organizations across all domains—air, sea, land, and
          command centers.
        </SlidingDiv>
      </div>

      <div className="flex flex-col sm:flex-row mb-8 md:mb-10 border-b border-gray-200 max-w-7xl w-full overflow-x-auto">
        {tabs.map((tab, i) => (
          <SlidingDiv
            delay={0.1*i}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap text-center ${
              activeTab === tab.id
                ? "border-[#167F3D] text-[#167F3D]"
                : "border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300"
            }`}
          >
            {tab.label}
          </SlidingDiv>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center max-w-7xl w-full">
        <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <SlidingDiv direction="top" className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            {currentTab?.content.title}
          </SlidingDiv>
          <SlidingDiv className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed">
            {currentTab?.content.description}
          </SlidingDiv>

          {currentTab && currentTab.content.points.length > 0 && (
            <div className="flex flex-col gap-3 md:gap-4">
              {currentTab.content.points.map((point, index) => (
                <SlidingDiv delay={index*0.2} key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="size-5 md:size-6 text-[#167F3D] mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm sm:text-base">
                    {point}
                  </span>
                </SlidingDiv>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 w-full lg:w-auto">
          <SlidingDiv direction="right" className="p-4 md:p-6 lg:p-8 relative overflow-hidden">
            <img src={currentTab!.src} className="w-full h-auto object-cover" />

            <div className="absolute top-0 left-0 h-3 md:h-4 w-12 md:w-20 bg-[#4A855F] skew-x-[45deg]" />
            <div className="absolute top-0 left-0 h-12 md:h-20 w-3 md:w-4 bg-[#4A855F] skew-y-[45deg]" />

            <div className="absolute bottom-0 left-0 h-3 md:h-4 w-12 md:w-20 bg-[#4A855F] skew-x-[45deg]" />
            <div className="absolute bottom-0 left-0 h-12 md:h-20 w-3 md:w-4 bg-[#4A855F] -skew-y-[45deg]" />

            <div className="absolute top-0 right-0 h-3 md:h-4 w-12 md:w-20 bg-[#4A855F] -skew-x-[45deg]" />
            <div className="absolute top-0 right-0 h-12 md:h-20 w-3 md:w-4 bg-[#4A855F] skew-y-[45deg]" />

            <div className="absolute bottom-0 right-0 h-3 md:h-4 w-12 md:w-20 bg-[#4A855F] -skew-x-[45deg]" />
            <div className="absolute bottom-0 right-0 h-12 md:h-20 w-3 md:w-4 bg-[#4A855F] skew-y-[45deg]" />
          </SlidingDiv>
        </div>
      </div>
    </div>
  );
};
