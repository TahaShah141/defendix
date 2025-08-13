"use client"

import React, { useEffect, useState } from 'react'

import Link from 'next/link'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center transition-colors duration-300 ${
        scrolled ? 'bg-white border-b border-black/10 shadow-sm' : 'bg-white/5 border-b border-white/10'
      }`}
    >
      <div className='container flex justify-between items-center py-2 px-4'>
        <img src={scrolled ? '/logoBlack.png' : '/logo.png'} className='h-14 transition-opacity duration-300' alt='Defendix logo' />
        <div className={`flex gap-6 items-center transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>Who we are</Link>
          <Link href={'/services'}>What we do</Link>
          <Link href={'#'}>Resources</Link>
          <Link
            href={'/contact'}
            className={`p-2 px-3 rounded-lg transition-colors duration-300 ${
              scrolled ? 'bg-[#167F3D] text-white' : 'bg-primary text-black'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
