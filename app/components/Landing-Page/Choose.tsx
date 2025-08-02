import { Edit, Lock, ShieldCheck, Star } from 'lucide-react';
import React, { ReactNode } from 'react'

type CardProps = {
  icon: ReactNode;
  title: string;
  text: string
}

const Card = ({icon, title, text}: CardProps) => (
  <div className='rounded-4xl p-8 flex flex-col gap-10 border border-[#ECECEC]'>
    <div className='bg-[#167F3D] rounded-lg p-2.5 text-white size-12'>
      {icon}
    </div>
    <div className='flex flex-col gap-2'>
      <p className='font-semibold text-3xl'>{title}</p>
      <p className='text-neutral-600'>{text}</p>
    </div>
  </div>
)

const cards: CardProps[] = [
  {
    icon: <Lock className='size-full'/>,
    title: "Proven Field Deployments",
    text: "Our solutions are battle-hardened and field-proven across air, land, and sea — ensuring reliability in mission-critical environments."
  },
  {
    icon: <Edit className='size-full'/>,
    title: "Rapid Customization",
    text: "We tailor every system to mission-specific needs with flexible architectures and modular platforms for fast deployment and integration."
  },
  {
    icon: <ShieldCheck className='size-full'/>,
    title: "Secure & Compliant",
    text: "All systems are built to meet strict MIL-STD standards, with quantum-safe encryption and full EMI/EMC and environmental compliance."
  },
  {
    icon: <Star className='size-full'/>,
    title: "In-House R&D Excellence",
    text: "From system design to RF hardware algorithmic warfare, every component is developed in-house - enabling full-stack control &  innovation."
  },
]

export const Choose = () => {
  return (
    <div className='bg-white text-black flex flex-col gap-14 px-20 py-32 items-center'>
      <h2 className='border-[#DCFCE7] bg-[#F0FDF4] border text-sm  tracking-wide rounded-full px-4 py-3 uppercase'>Why Choose Us</h2>
      <h3 className='text-5xl'>Why Choose Defendix Technologies?</h3>
      <div className='grid grid-cols-2 gap-8'>
        {cards.map((c, i) => <Card {...c} key={i} />)}
      </div>
    </div>
  )
}
