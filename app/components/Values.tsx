import { CheckCheckIcon, CheckCircle, CheckCircle2, Lightbulb, Users } from 'lucide-react'
import React, { ReactNode } from 'react'

type CardProps = {
  icon: ReactNode
  title: string
  text: string
}

const Card = ({icon, title, text}: CardProps) => (
  <div className='border border-[#ECECEC] flex flex-col gap-6 p-8 rounded-4xl bg-white'>
    {icon}
    <p className='text-2xl font-semibold'>{title}</p>
    <p className='text-sm text-neutral-600'>{text}</p>
  </div>
)

const cards: CardProps[] = [
  {
    icon: <Lightbulb className='text-[#167F3D] size-10' />,
    title: "Innovation",
    text: "We constantly seek new and better ways to solve problems and create value."
  },
  {
    icon: <CheckCircle className='text-[#167F3D] size-10' />,
    title: "Excellence",
    text: "We are committed to delivering the highest quality in everything we do."
  },
  {
    icon: <Users className='text-[#167F3D] size-10' />,
    title: "Customer Focus",
    text: "Our customers are at the heart of our business, and their success is our priority."
  },
]

export const Values = () => {
  return (
    <div className='bg-white text-black flex flex-col gap-14 px-20 py-32 items-center'>
      <h2 className='border-[#DCFCE7] bg-[#F0FDF4] border text-sm  tracking-wide rounded-full px-4 py-3 uppercase'>Our Values</h2>
      <h3 className='text-5xl'>Principles that drive us</h3>
      <p className='text-center max-w-3xl text-xl text-neutral-600'>{"These principles guide our actions and define who we are as a company."}</p>
      <div className='flex gap-6'>
        {cards.map((c, i) => (
          <Card {...c} key={i} />
        ))}
      </div>
    </div>
  )
}
