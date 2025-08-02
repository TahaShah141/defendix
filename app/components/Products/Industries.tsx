import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Defense Forces",
    description:
      "Army, Navy, Air Force, and Joint Commands relying on integrated CZIISR, radar, and EW systems for real-time operational superiority.",
  },
  {
    id: 2,
    title: "Military R&D Facilities",
    description:
      "Institutes focused on development, integration, and simulation of next-generation NCW capabilities in secure environments.",
  },
  {
    id: 3,
    title: "National Security",
    description:
      "National security agencies and defense ministries requiring secure communication, surveillance, and threat detection systems.",
  },
  {
    id: 4,
    title: "Border & Coastal Security",
    description:
      "Agencies securing borders and coastlines using real-time tracking, radar surveillance, and interoperable communication networks.",
  },
  {
    id: 5,
    title: "Aerospace & Aviation",
    description:
      "Airborne platforms demanding lightweight, multi-function radar systems, SDRs, and electronic warfare solutions for mission-critical operations.",
  },
  {
    id: 6,
    title: "Defense OEMs & Integrators",
    description:
      "Global defense manufacturers integrating our ruggedized subsystems and RF components into airborne, ground, and naval systems.",
  },
];

const IndustryCard = ({ industry }: { industry: (typeof industries)[0] }) => (
  <div className="border border-[#ECECEC] rounded-4xl overflow-hidden flex flex-col h-full">
    <div className="p-5 flex flex-col gap-4 flex-1">
      <h4 className="text-xl font-semibold leading-tight">{industry.title}</h4>
      <p className="text-neutral-600 leading-relaxed flex-1">
        {industry.description}
      </p>
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

      <div className="grid grid-cols-3 gap-6 max-w-7xl w-full mb-10">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>
    </div>
  );
};
