"use client"

import { Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-center items-start gap-8 md:gap-10 py-16 md:py-24 lg:py-[120px] px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <SlidingDiv className="flex flex-col gap-4 md:gap-6 col-span-1 md:col-span-2 lg:col-span-1">
          <img src="/logo.png" alt="" className="w-2/3 md:w-3/5" />
          <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
            DefendiX Technologies delivers advanced solutions to military forces
            and defense organizations across all domains—air, sea, land, and
            command centers.
          </p>
        </SlidingDiv>

        <SlidingDiv delay={0.2} className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-lg font-semibold mb-2">Solutions</h4>
          <Link
            href="/services/c4isr"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            C4ISR Systems
          </Link>
          <Link
            href="/services/sdr"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Software Defined Radio
          </Link>
          <Link
            href="/services/ew"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Electronic Warfare
          </Link>
          <Link
            href="/services/part"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Phased Array Radar
          </Link>
          <Link
            href="/services/rcpp"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Control Platforms
          </Link>
        </SlidingDiv>

        <SlidingDiv delay={0.4} className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <Link
            href="/about"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            About Us
          </Link>
          <Link
            href="/news"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            News & Insights
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Contact
          </Link>
        </SlidingDiv>

        <SlidingDiv delay={0.6} className="flex flex-col gap-3 md:gap-4">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <div className="flex gap-3 items-start">
            <Mail className="size-4 md:size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <span className="text-neutral-400 text-sm sm:text-base">
              info@defendixtech.com
            </span>
          </div>
          {/* <div className="flex gap-3 items-start">
            <Phone className="size-4 md:size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <span className="text-neutral-400 text-sm sm:text-base">
              +966 114141234
            </span>
          </div> */}
          <div className="flex gap-3 items-start">
            <MapPin className="size-4 md:size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <div className="text-neutral-400 text-sm sm:text-base">
              <p>7549 Abi Bakr As Siddiq Rd, 4253, An Narjis, Riyadh 13326</p>
              {/* <p>Islamabad, Pakistan</p> */}
            </div>
          </div>
        </SlidingDiv>
      </div>

      <div className="w-full h-px bg-neutral-800" />

      <SlidingDiv direction="top" px={10} className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <p className="text-neutral-400 text-sm sm:text-base">
          © 2024 DefendiX Technologies. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6">
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base"
          >
            Terms of Service
          </Link>
        </div>
      </SlidingDiv>
    </footer>
  );
};
