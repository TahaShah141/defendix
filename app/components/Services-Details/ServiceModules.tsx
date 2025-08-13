import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { ServiceType } from '@/lib/services'

const Module = ({flipped, icon, title, text, points, src}: ServiceType['modules'][0] & { flipped: boolean }) => {
  return (
    <div className={`flex ${flipped && "justify-end"}`}>
      <div className={`flex max-w-9/10 bg-[#F3F3F3] gap-20 p-10 items-center ${flipped && "flex-row-reverse"} ${flipped ? "rounded-l-full pr-20" : "rounded-r-full pl-20"}`}>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-4 items-center'>
            <div className='size-10 p-2 rounded-lg bg-[#167F3D] text-white'>
              {icon}
            </div>
            <p className='text-2xl font-bold'>{title}</p>
          </div>
          <p className='text-neutral-600 text-lg'>{text}</p>
          <div className='flex flex-col gap-2'>
            {points.map((p, i) => (
              <div key={i} className='flex gap-2 items-center'>
                <CheckCircle2 className='size-6 text-[#167F3D]' />
                <p className='text-neutral-600 text-lg'>{p}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={src} className='rounded-full overflow-hidden object-cover aspect-square h-96' />
      </div>
    </div>
  )
}

export const ServiceModules = ({ modules, hero }: {modules: ServiceType['modules'], hero: ServiceType['hero']}) => {
  return (
    <div className='bg-white text-black flex flex-col gap-12 py-32 items-center'>
      <h3 className='text-center text-5xl max-w-5xl'>{"Core System Modules"}</h3>
      <p className='text-center max-w-5xl text-xl text-neutral-600'>{`Integrated components that form the complete ${hero.title}`}</p>
      <div className='flex flex-col w-full gap-12'>
        {modules.map((m, i) => (
          <Module {...m} flipped={!!(i % 2)} key={i} />
        ))}
      </div>
    </div>
  )
}
