import { ArrowRight, Bolt, CheckCheckIcon, CheckCircle, CheckCircle2, HardDrive, RadioIcon, ShieldCheck, Target, Zap } from 'lucide-react';
import React, { ReactNode } from 'react'

import Link from 'next/link';

type CardProps = {
  src: string
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
            {p}
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

const cards: CardProps[] = [
  {
    icon: <ShieldCheck className='size-full' />,
    title: "C4ISR",
    text: "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance systems",
    points: [
      "Real-time Situational Awareness",
      "Multi-Sensor Function",
      "Threat Evaluation & Weapon Assignment"
    ],
    link: "#",
    src: "/technologies/c4isr.png"
  },
  {
    icon: <RadioIcon className='size-full' />,
    title: "Software Defined Radio",
    text: "Versatile communication platforms with dynamic waveform configuration",
    points: [
      "Multi-band Operation",
      "Fast Frequency Hopping",
      "Quantum-Safe Encryption"
    ],
    link: "#",
    src: "/technologies/radio.png"
  },
  {
    icon: <Zap className='size-full' />,
    title: "Electronic Warfare (EW)",
    text: "Electromagnetic spectrum dominance through detection, disruption, and denial",
    points: [
      "ELINT Systems",
      "Threat Suppression",
      "Signal Analysis"
    ],
    link: "#",
    src: "/technologies/warfare.png"
  },
  {
    icon: <Target className='size-full' />,
    title: "Phased Array Radar",
    text: "Advanced radar technologies with electronic beam steering capabilities",
    points: [
      "T/R Modules",
      "Beamforming Controllers",
      "Multi-Function Capabilities"
    ],
    link: "#",
    src: "/technologies/radar.png"
  },
  {
    icon: <HardDrive className='size-full' />,
    title: "Ruggedized Control and Processing Platforms",
    text: "OpenVPX-based control and processing platforms for harsh environments",
    points: [
      "MIL-STD Compliance",
      "High-Speed Processing",
      "Modular Architecture"
    ],
    link: "#",
    src: "/technologies/platforms.png"
  },
]

export const Technologies = () => {
  return (
    <div className='bg-white text-black flex flex-col gap-14 px-20 py-32 items-center'>
      <h2 className='border-[#DCFCE7] bg-[#F0FDF4] border text-sm  tracking-wide rounded-full px-4 py-3 uppercase'>Our Core Technologies</h2>
      <h3 className='text-5xl'>Comprehensive Defense Solutions</h3>
      <p className='text-center max-w-3xl text-xl text-neutral-600'>{"Our integrated approach covers all aspects of modern warfare, from command and control to electronic warfare and radar technologies."}</p>
      <div className='flex flex-col gap-8'>
        {cards.map((c, i) => (
          <Card {...c} key={i} flipped={!!(i % 2)} />
        ))}
      </div>
    </div>
  )
}
