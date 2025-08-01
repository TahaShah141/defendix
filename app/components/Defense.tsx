"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "air-forces",
    label: "Air Forces",
    content: {
      title: "Air Forces",
      description:
        "Ensure dominance in the skies with advanced radar, secure communications, and electronic warfare systems tailored for aircraft and drones.",
      points: [
        "Real-time airborne threat detection",
        "Secure ground-to-air data links",
        "Integration with radar and EW platforms",
      ],
    },
  },
  {
    id: "naval-forces",
    label: "Naval Forces",
    content: {
      title: "Naval Forces",
      description: "",
      points: [],
    },
  },
  {
    id: "ground-forces",
    label: "Ground Forces",
    content: {
      title: "Ground Forces",
      description: "",
      points: [],
    },
  },
  {
    id: "joint-command",
    label: "Joint Command Units",
    content: {
      title: "Joint Command Units",
      description: "",
      points: [],
    },
  },
];

export const Defense = () => {
  const [activeTab, setActiveTab] = useState("air-forces");
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="text-black bg-white flex flex-col items-center relative overflow-hidden pt-[120px] pb-[120px] px-20">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
          WHO WE HELP
        </h2>
        <h3 className="text-5xl font-bold text-center">
          Empowering Those Who Defend
        </h3>
        <p className="text-center max-w-4xl text-lg text-neutral-700">
          DefendiX Technologies delivers advanced solutions to military forces
          and defense organizations across all domains—air, sea, land, and
          command centers.
        </p>
      </div>

      <div className="flex mb-10 border-b border-gray-200 max-w-7xl w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab.id
                ? "border-[#167F3D] text-[#167F3D]"
                : "border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex gap-16 items-center max-w-7xl w-full">
        <div className="flex-1 flex flex-col gap-8">
          <h4 className="text-4xl font-bold text-black">
            {currentTab?.content.title}
          </h4>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {currentTab?.content.description}
          </p>

          {currentTab && currentTab.content.points.length > 0 && (
            <div className="flex flex-col gap-4">
              {currentTab.content.points.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="size-6 text-[#167F3D] mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 relative">
          <Image
            src="/defense.png"
            alt="Defense forces"
            width={600}
            height={400}
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};
