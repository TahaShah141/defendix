import {
  ArrowRight,
  Bolt,
  CheckCheckIcon,
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  RadioIcon,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import React, { ReactNode, useState } from "react";

import Link from "next/link";
import { SlidingDiv } from "../custom/SlidingDiv";

type CardProps = {
  src: string;
  minimalSrc: string;
  icon: ReactNode;
  title: string;
  text: string;
  points: [string, string, string];
  link: string;
};

const Card = ({
  src,
  icon,
  title,
  text,
  flipped,
  points,
  link,
}: CardProps & { flipped: boolean }) => (
  <SlidingDiv
    className={`flex flex-col-reverse ${
      flipped ? "lg:flex-row-reverse items-center" : "lg:flex-row items-center"
    } gap-8 lg:gap-16 items-center`}
  >
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
      <div className="flex gap-3 md:gap-4">
        <div className="bg-[#167F3D] rounded-lg p-1.5 md:p-2 text-white size-8 md:size-10">
          {icon}
        </div>
        <p className="font-semibold text-lg sm:text-xl md:text-2xl">{title}</p>
      </div>
      <p className="text-neutral-600 text-sm sm:text-base">{text}</p>
      <div className="w-full h-px bg-neutral-400" />
      <div className="flex flex-col gap-2 md:gap-3">
        {points.map((p, i) => (
          <div key={i} className="flex gap-2">
            <CheckCircle2 className="size-5 md:size-6 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <p className="flex-1 text-sm sm:text-base">
              {p.split(":").map((text, i) =>
                i === 0 ? (
                  <span key={i} className="font-bold">
                    {text + ": "}
                  </span>
                ) : (
                  text
                )
              )}
            </p>
          </div>
        ))}
      </div>
      <Link
        href={link}
        className="text-[#167F3D] flex font-semibold gap-2 items-center mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base group transition-all duration-300 hover:text-green-700"
      >
        Explore More
        <ArrowRight className="w-0 group-hover:w-4 md:group-hover:w-6 transition-all duration-300" />
      </Link>
    </div>
    <div className="flex-1 flex justify-center items-center h-96">
      <img
        src={src}
        className="w-full rounded-2xl lg:rounded-4xl overflow-hidden object-cover"
        />
    </div>
  </SlidingDiv>
);

const MinimalCard = ({ minimalSrc, title, text, link, animate=true }: CardProps & { animate?: boolean }) => {
  return (
    <SlidingDiv
      px={!animate ? 0 : 50}
      className="flex-1 min-w-[280px] w-full sm:max-w-md aspect-[3/4] bg-cover bg-center rounded-xl md:rounded-2xl overflow-hidden relative"
      style={{ backgroundImage: `url(${minimalSrc})` }}
    >
      <div className="absolute inset-0 bg-black/40 p-3 md:p-5 flex flex-col justify-end">
        <div className="backdrop-blur-md hover:shadow-sm shadow-primary transition-all duration-300 bg-gradient-to-br from-white/5 to-white/10 w-full p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/20 flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 text-white min-h-48 md:min-h-56 lg:min-h-64">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
          <p className="text-sm sm:text-base">{text}</p>
          <Link
            href={link}
            className="text-[#87EEAC] flex font-semibold gap-2 items-center mt-3 md:mt-4 lg:mt-6 text-sm sm:text-base group transition-all duration-300 hover:text-green-300"
          >
            Explore More
            <ArrowRight className="w-0 group-hover:w-5 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </SlidingDiv>
  );
};

const cards: CardProps[] = [
  {
    icon: <ShieldCheck className="size-full" />,
    title: "C4ISR",
    text: "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance systems",
    points: [
      "Unified Battlespace View: Fuses data from radar, UAVs, EW, and IR sensors to generate a real-time Recognized Air Picture (RAP), tracking up to 10,000 targets simultaneously.",
      "Smart Threat Response: Integrated TEWA system automates threat evaluation and weapon assignment for rapid, optimized engagement.",
      "Interoperable and Scalable Architecture: MIL-STD-compliant architecture ensures seamless, scalable communication across Army, Navy, and Air Force command tiers.",
    ],
    link: "/services/c4isr",
    src: "/technologies/c4isr.png",
    minimalSrc: "/technologies/min_c4isr.png",
  },
  {
    icon: <RadioIcon className="size-full" />,
    title: "Software Defined Radio",
    text: "Versatile communication platforms with dynamic waveform configuration",
    points: [
      "Multi-Band High Throughput Communication: Operates across VHF to S bands with up to 200 MHz instantaneous bandwidth, supporting simultaneous voice, video, and data transmission.",
      "Secure & Reconfigurable Architecture: Features fast frequency hopping, quantum-safe key exchange, and support for custom waveforms for robust, jam-resistant communication.",
      "Battle-Tested & MIL-STD Compliant: Field-proven SDR platform with modular design, GPS-based synchronization, and rugged build for tactical defense operations.",
    ],
    link: "/services/sdr",
    src: "/technologies/radio.png",
    minimalSrc: "/technologies/min_radio.png",
  },
  {
    icon: <Zap className="size-full" />,
    title: "Electronic Warfare (EW)",
    text: "Electromagnetic spectrum dominance through detection, disruption, and denial",
    points: [
      "Electromagnetic Spectrum Dominance: Detects, disrupts, deceives, or denies enemy electronic systems—essential for modern Network Centric Warfare (NCW).",
      "Integrated ELINT Platforms: Gathers and analyzes enemy radar and communication signals to build threat libraries and enhance situational awareness.",
      "Modular & Deployable Systems: Designed for aerial and ground platforms, with integration capability for threat suppression and neutralization missions.",
    ],
    link: "/services/ew",
    src: "/technologies/warfare.jpeg",
    minimalSrc: "/technologies/min_warfare.png",
  },
  {
    icon: <Target className="size-full" />,
    title: "Phased Array Radar Technologies",
    text: "Advanced radar technologies with electronic beam steering capabilities",
    points: [
      "Electronic Scanning & Control: Radar system engineering and modeling, with beamforming controllers, signal processors, and MMI for precise target detection, tracking, and control without mechanical movement.",
      "Advanced T/R Modules & Antennas: In-house developed T/R modules and AESA antennas across S, C, X, and Ku bands for high-performance, platform-specific deployment.",
      "High-Precision Signal Processing: Features beamforming controllers, digital signal processors, and MMI for real-time target tracking, classification, and threat prioritization.",
    ],
    link: "/services/part",
    src: "/technologies/radar.png",
    minimalSrc: "/technologies/min_radar.png",
  },
  {
    icon: <HardDrive className="size-full" />,
    title: "Ruggedized Control and Processing Platforms",
    text: "OpenVPX-based control and processing platforms for harsh environments",
    points: [
      "Modular OpenVPX Architecture:  High-speed OpenVPX-based backplane with FMC daughter cards and multi-FPGA modules enabling low-latency, high-bandwidth inter-module communication.",
      "Real-Time Processing & Synchronization: Supports multiple domains such as radar for beam forming, pulse compression, Doppler processing etc.",
      "Developer-Ready & MIL-STD Compliant: Ships with Application Development Kit (ADK) for C/C++, LabVIEW, Python, and meets full MIL-STD requirements for defense environments.",
    ],
    link: "/services/rcpp",
    src: "/technologies/platforms.png",
    minimalSrc: "/technologies/min_platforms.png",
  },
];

const MinimalCarousel = ({ cards }: { cards: CardProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-full flex items-center justify-center gap-2">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 z-10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="w-full max-w-[300px] sm:max-w-[350px] overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, i) => (
              <div className="w-full flex-shrink-0 px-1" key={i}>
                <MinimalCard {...card} animate={false} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 z-10"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === i ? "bg-neutral-800" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Technologies = ({ minimal = false }: { minimal?: boolean }) => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <SlidingDiv
        direction="top"
        px={10}
        className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase"
      >
        Our Core Technologies
      </SlidingDiv>
      <SlidingDiv
        direction="top"
        px={10}
        delay={0.1}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
      >
        Comprehensive Defense Solutions
      </SlidingDiv>
      <SlidingDiv
        direction="top"
        px={10}
        delay={0.2}
        className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600"
      >
        {
          "Our integrated approach covers all aspects of modern warfare, from command and control to electronic warfare and radar technologies."
        }
      </SlidingDiv>
      {minimal ? (
        <>
          <div className="md:hidden w-full">
            <MinimalCarousel cards={cards} />
          </div>

          <div className="hidden md:flex flex-col gap-6 md:gap-8 w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full justify-center items-center">
              {cards.slice(0, 3).map((c, i) => (
                <MinimalCard {...c} key={i} />
              ))}
            </div>
            <div className="flex overflow-hidden lg:translate-x-1/6 flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center">
              {cards.slice(3).map((c, i) => (
                <MinimalCard {...c} key={i} />
              ))}
              <div className="flex-1 hidden lg:flex h-full bg-red-500" />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full max-w-7xl">
          {cards.map((c, i) => (
            <Card {...c} key={i} flipped={!!(i % 2)} />
          ))}
        </div>
      )}
    </div>
  );
};
