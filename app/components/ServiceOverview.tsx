import React from 'react'
import { ServiceType } from '@/lib/services'

const Card = ({icon, iconColor, title, text}: ServiceType['overview']['points'][0]) => (
  <div className='border border-[#ECECEC] flex flex-1 flex-col gap-4 p-8 rounded-4xl bg-white'>
    <div className='size-10 rounded-lg p-2 text-white' style={{ backgroundColor: iconColor}}>
      {icon}
    </div>
    <p className='text-2xl font-semibold'>{title}</p>
    <p className='text-neutral-600'>{text}</p>
  </div>
)

export const ServiceOverview = ({heading, description, points}: ServiceType['overview']) => {
  return (
    <div className='bg-white text-black flex flex-col gap-14 px-20 py-32 items-center'>
      <h3 className='text-center text-5xl max-w-5xl'>{heading}</h3>
      <p className='text-center max-w-5xl text-xl text-neutral-600'>{description}</p>
      <div className='flex w-full gap-6'>
        {points.map((p, i) => (
          <Card {...p} key={i} />
        ))}
      </div>
    </div>
  )
}
