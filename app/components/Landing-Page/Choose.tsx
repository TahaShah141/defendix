import { CheckCircle2, Edit, Lock, ShieldCheck, Star, UserCheck } from 'lucide-react';
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
    icon: <CheckCircle2 className='size-full'/>,
    title: "Proven Field Deployments",
    text: "Our solutions are battle-tested across several countries."
  },
  {
    icon: <Edit className='size-full'/>,
    title: "End-to-End Control",
    text: "Everything from R&D to integration is done in-house."
  },
  {
    icon: <ShieldCheck className='size-full'/>,
    title: "Built for Tomorrow",
    text: "Our platforms scale as missions evolve."
  },
  {
    icon: <UserCheck className='size-full'/>,
    title: "Client-Focused Design",
    text: "We customize each system to fit real operational needs."
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
