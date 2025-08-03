import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='absolute top-0 bg-white/5 border-b border-white/10 w-full flex justify-center'>
      <div className='container flex justify-between py-2'>
        <img src={'/logo.png'} className='h-14' />
        <div className='flex gap-6 items-center'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>Who we are</Link>
          <Link href={"/services"}>What we do</Link>
          <Link href={"#"}>Resources</Link>
          <Link href={"/contact"} className='bg-primary p-2 px-3 rounded-lg text-black'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
