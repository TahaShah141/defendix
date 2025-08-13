"use client";

import React, { useState } from "react";

import { CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "air-forces",
    src: "/defense.png",
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
    src: "/defense.png",
    label: "Naval Forces",
    content: {
      title: "Naval Forces",
      description: "Maritime operations with continuous situational awareness, secure fleet communications, and coordinated threat response.",
      points: [
        "Surface and aerial surveillance across maritime zones.",
        "Secure ship-to-ship, ship-to-air, and ship-to-shore communication.",
        "Integrated naval command systems for rapid response.",
      ],
    },
  },
  {
    id: "ground-forces",
    src: "/defense.png",
    label: "Ground Forces",
    content: {
      title: "Ground Forces",
      description: "Land operations with comprehensive situational awareness, secure tactical communication, and responsive mission control.",
      points: [
        "Recognized land picture from integrated sensor data.",
        "Secure ground-to-ground and ground-to-air communication links.",
        "Unified command for tactical and strategic missions.",
      ],
    },
  },
  {
    id: "joint-command",
    src: "/defense.png",
    label: "Joint Command Units",
    content: {
      title: "Joint Command Units",
      description: "Cross-domain operations with a common operating picture, secure interoperability, and coordinated mission execution.",
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
    <div className="text-black bg-white flex flex-col items-center relative overflow-hidden py-[120px] px-20">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#BBF7D0] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
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

        <div className="flex-1">
          <div className="p-8 relative overflow-hidden">
            <img src={currentTab!.src} className="" />
            
            <div className="absolute top-0 left-0 h-4 w-20 bg-[#4A855F] skew-x-[45deg]" />
            <div className="absolute top-0 left-0 h-20 w-4 bg-[#4A855F] skew-y-[45deg]" />
            
            <div className="absolute bottom-0 left-0 h-4 w-20 bg-[#4A855F] skew-x-[45deg]" />
            <div className="absolute bottom-0 left-0 h-20 w-4 bg-[#4A855F] -skew-y-[45deg]" />
            
            <div className="absolute top-0 right-0 h-4 w-20 bg-[#4A855F] -skew-x-[45deg]" />
            <div className="absolute top-0 right-0 h-20 w-4 bg-[#4A855F] skew-y-[45deg]" />
            
            <div className="absolute bottom-0 right-0 h-4 w-20 bg-[#4A855F] -skew-x-[45deg]" />
            <div className="absolute bottom-0 right-0 h-20 w-4 bg-[#4A855F] skew-y-[45deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};
