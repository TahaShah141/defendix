import React from 'react'

export const AboutHero = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-[center_top_30%] flex items-center justify-center"
      style={{ backgroundImage: "url('/about-hero.png')" }}
    >
      <div className='size-full bg-black/75 pt-20 flex flex-col gap-8 justify-center items-center'>
        <h2 className='border-[#15522D] bg-[#052E16] text-white border text-sm  tracking-wide rounded-full px-4 py-3 uppercase'>Our Story</h2>
        <h3 className='text-5xl text-white'>About Us</h3>
        <p className='text-center max-w-3xl text-xl text-neutral-300'>
          {"Learn more about our journey, our principles, and the people who make our company a leader in the industry."}
        </p>
      </div>
    </div>
  )
}
