import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const industries = [
  {
    id: 1,
    src: "/industries/defense.png",
    title: "Defense Forces",
    description:
      "Army, Navy, Air Force, and Joint Commands relying on integrated CZIISR, radar, and EW systems for real-time operational superiority.",
  },
  {
    id: 2,
    src: "/industries/military.png",
    title: "Military R&D Facilities",
    description:
      "Institutes focused on development, integration, and simulation of next-generation NCW capabilities in secure environments.",
  },
  {
    id: 3,
    src: "/industries/security.png",
    title: "National Security",
    description:
      "National security agencies and defense ministries requiring secure communication, surveillance, and threat detection systems.",
  },
  {
    id: 4,
    src: "/industries/border.png",
    title: "Border & Coastal Security",
    description:
      "Agencies securing borders and coastlines using real-time tracking, radar surveillance, and interoperable communication networks.",
  },
  {
    id: 5,
    src: "/industries/aviation.png",
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

const IndustryCard = ({ industry }: { industry: (typeof industries)[0] }) => (
  <div className="shadow-md border border-[#ECECEC] rounded-2xl overflow-hidden bg-white flex flex-col h-full">
    <div className="flex flex-col gap-8 flex-1 pt-4">
      <div className="flex flex-col gap-8 p-4">
        <h4 className="text-2xl text-[#167F3D] font-semibold leading-tight">{industry.title}</h4>
        <p className="text-neutral-500 leading-relaxed flex-1">
          {industry.description}
        </p>
      </div>
      <div
        className="relative w-full h-[250px] bg-cover bg-[center_top_30%] flex items-center justify-center"
        style={{ backgroundImage: `url(${industry.src})` }}
      > 
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent">

        </div>
      </div>
    </div>
  </div>
);

export const Industries = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-10 px-20 py-[120px] items-center">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
          AREAS WE COVER
        </h2>
        <h3 className="text-5xl font-bold text-center">Industries we serve</h3>
        <p className="text-center max-w-4xl text-lg text-neutral-700">
          Our advanced defense technologies are trusted by critical sectors
          requiring secure, real-time communication, situational awareness, and
          mission-ready systems.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 max-w-7xl w-full mb-10">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>
    </div>
  );
};
