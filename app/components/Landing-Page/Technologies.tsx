import { ArrowRight, Bolt, CheckCheckIcon, CheckCircle, CheckCircle2, HardDrive, RadioIcon, ShieldCheck, Target, Zap } from 'lucide-react';
import React, { ReactNode } from 'react'

import Link from 'next/link';

type CardProps = {
  src: string
  minimalSrc: string
  icon: ReactNode;
  title: string;
  text: string
  points: [string, string, string]
  link: string
}

const Card = ({src, icon, title, text, flipped, points, link}: CardProps & {flipped: boolean}) => (
  <div className={`flex gap-16 items-center ${flipped && "flex-row-reverse"}`}>
    <div className='flex flex-col gap-8 flex-1'>
      <div className='flex gap-4'>
        <div className='bg-[#167F3D] rounded-lg p-2 text-white size-10'>
          {icon}
        </div>
        <p className='font-semibold text-2xl'>{title}</p>
      </div>
      <p className='text-neutral-600'>{text}</p>
      <div className='w-full h-px bg-neutral-400'/>
      <div className='flex flex-col gap-3'>
        {points.map((p, i) => (
          <div key={i} className='flex gap-2'>
            <CheckCircle2 className='size-6 text-[#167F3D]' />
            <p className='flex-1'>{p.split(":").map((text, i) => (
              i === 0 ? <span key={i} className='font-bold'>{text+": "}</span> : text
            ))}</p>
          </div>
        ))}
      </div>
      <Link href={link} className='text-[#167F3D] flex font-semibold gap-2 items-center mt-8'>
        Learn More
        <ArrowRight className='size-6' />
      </Link>
    </div>
    <img src={src} className='h-full max-h-[600px] flex-1 rounded-4xl overflow-hidden' />
  </div>
)

const MinimalCard = ({minimalSrc, title, text, link}: CardProps)  => {
  return (
    <div className="flex-1 max-w-md aspect-[3/4] bg-cover bg-center rounded-2xl overflow-hidden relative"
      style={{ backgroundImage: `url(${minimalSrc})` }}>
        <div className='absolute inset-0 bg-black/40 p-5 flex flex-col justify-end'>
          <div className='backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 w-full p-4 rounded-2xl border border-white/20 flex flex-col justify-center gap-6 text-white min-h-64'>
            <p className='text-2xl font-bold'>{title}</p>
            <p>{text}</p>
            <Link href={link} className='text-[#87EEAC] flex font-semibold gap-2 items-center mt-6'>
              Learn More
              <ArrowRight className='size-6' />
            </Link>
          </div>
        </div>
    </div>
  )
}

const cards: CardProps[] = [
  {
    icon: <ShieldCheck className='size-full' />,
    title: "C4ISR",
    text: "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance systems",
    points: [
      "Multi-Band High Throughput Communication: Operates across VHF to S bands with up to 200 MHz instantaneous bandwidth, supporting simultaneous voice, video, and data transmission.",
      "Smart Threat Response: Integrated TEWA system automates threat evaluation and weapon assignment for rapid, optimized engagement.",
      "Interoperable and Scalable Architecture: MIL-STD-compliant architecture ensures seamless, scalable communication across Army, Navy, and Air Force command tiers."
    ],
    link: "/services/c4isr",
    src: "/technologies/c4isr.png",
    minimalSrc: "/technologies/min_c4isr.png"
  },
  {
    icon: <RadioIcon className='size-full' />,
    title: "Software Defined Radio",
    text: "Versatile communication platforms with dynamic waveform configuration",
    points: [
      "Multi-Band High Throughput Communication: Operates across VHF to S bands with up to 200 MHz instantaneous bandwidth, supporting simultaneous voice, video, and data transmission.",
      "Secure & Reconfigurable Architecture: Features fast frequency hopping, quantum-safe key exchange, and support for custom waveforms for robust, jam-resistant communication.",
      "Battle-Tested & MIL-STD Compliant: Field-proven SDR platform with modular design, GPS-based synchronization, and rugged build for tactical defense operations."
    ],
    link: "/services/sdr",
    src: "/technologies/radio.png",
    minimalSrc: "/technologies/min_radio.png"
  },
  {
    icon: <Zap className='size-full' />,
    title: "Electronic Warfare (EW)",
    text: "Electromagnetic spectrum dominance through detection, disruption, and denial",
    points: [
      "Electromagnetic Spectrum Dominance: Detects, disrupts, deceives, or denies enemy electronic systems—essential for modern Network Centric Warfare (NCW).",
      "Integrated ELINT Platforms: Gathers and analyzes enemy radar and communication signals to build threat libraries and enhance situational awareness.",
      "Modular & Deployable Systems: Designed for aerial and ground platforms, with integration capability for threat suppression and neutralization missions."
    ],
    link: "/services/ew",
    src: "/technologies/warfare.png",
    minimalSrc: "/technologies/min_warfare.png"
  },
  {
    icon: <Target className='size-full' />,
    title: "Phased Array Radar",
    text: "Advanced radar technologies with electronic beam steering capabilities",
    points: [
      "Multi-Function Radar Capability: Enables simultaneous surveillance, guidance, and tracking using electronic beam steering with no mechanical movement.",
      "Advanced T/R Modules & Antennas: In-house developed T/R modules and AESA antennas across S, C, X, and Ku bands for high-performance, platform-specific deployment.",
      "High-Precision Signal Processing: Features beamforming controllers, digital signal processors, and MMI for real-time target tracking, classification, and threat prioritization."
    ],
    link: "/services/part",
    src: "/technologies/radar.png",
    minimalSrc: "/technologies/min_radar.png"
  },
  {
    icon: <HardDrive className='size-full' />,
    title: "Ruggedized Control and Processing Platforms",
    text: "OpenVPX-based control and processing platforms for harsh environments",
    points: [
      "Modular OpenVPX Architecture:  High-speed OpenVPX-based backplane with FMC daughter cards and multi-FPGA modules enabling low-latency, high-bandwidth inter-module communication.",
      "Real-Time Processing & Synchronization:  Supports beamforming, pulse compression, Doppler processing, with GPS-disciplined timing, Linux-based system software, secure boot, and diagnostics.",
      "Developer-Ready & MIL-STD Compliant: Ships with Application Development Kit (ADK) for C/C++, LabVIEW, Python, and meets full MIL-STD requirements for defense environments."
    ],
    link: "/services/rcpp",
    src: "/technologies/platforms.png",
    minimalSrc: "/technologies/min_platforms.png"
  },
]

export const Technologies = ({minimal=false}: {minimal?: boolean}) => {
  return (
    <div className='bg-white text-black flex flex-col gap-14 px-20 py-32 items-center'>
      <h2 className='border-[#DCFCE7] bg-[#F0FDF4] border text-sm  tracking-wide rounded-full px-4 py-3 uppercase'>Our Core Technologies</h2>
      <h3 className='text-5xl'>Comprehensive Defense Solutions</h3>
      <p className='text-center max-w-3xl text-xl text-neutral-600'>{"Our integrated approach covers all aspects of modern warfare, from command and control to electronic warfare and radar technologies."}</p>
      {minimal ? (
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex gap-8 w-full'>
            {cards.slice(0, 3).map((c, i) => <MinimalCard {...c} key={i} />)}
          </div>
          <div className='flex gap-8 justify-center'>
            {cards.slice(3).map((c, i) => <MinimalCard {...c} key={i} />)}
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-8'>
          {cards.map((c, i) => (
            <Card {...c} key={i} flipped={!!(i % 2)} />
          ))}
        </div>
      )}
    </div>
  )
}
