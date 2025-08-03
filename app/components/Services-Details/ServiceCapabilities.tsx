import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { ServiceType } from '@/lib/services'

const Card = ({icon, points, title}: ServiceType['capabilities'][0]) => {
  return (
    <div className='p-14 flex-1 rounded-3xl border border-[#ECECEC] shadow-xl flex flex-col gap-10'>
      <div className='flex gap-2 items-center'>
        <div className='size-8'>
          {icon}
        </div>
        <p className='text-2xl font-bold'>{title}</p>
      </div>
      <div className='flex flex-col gap-4'>
        {points.map((p, i) => (
          <div key={i} className={`flex gap-3 ${p.type === 'list' && "justify-between"} items-center`}>
            {p.type === "list" ? (
              <>
              <p className='font-bold'>{p.name}</p>
              <p className='text-neutral-600'>{p.value}</p>
              </>
            ) : (
              <>
              <CheckCircle2 className='text-[#167F3D] size-4' />
              <p className='text-neutral-600'>{p.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )  
}

export const ServiceCapabilities = ({ capabilities }: {capabilities: ServiceType['capabilities']}) => {
  return (
    <div className='bg-white text-black flex flex-col gap-12 py-32 items-center'>
      <h3 className='text-center text-5xl max-w-5xl'>{"Technical Capabilities"}</h3>
      <div className='flex w-4/5 gap-10'>
        {capabilities.map((c, i) => (
          <Card {...c} key={i} />
        ))}
      </div>
    </div>
  )
}
