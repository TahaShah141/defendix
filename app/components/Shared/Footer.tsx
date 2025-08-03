import { Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-center items-start gap-10 py-[120px] px-20">
      <div className="w-full grid grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          {/* <Image
            src="/logo.png"
            alt="DefendiX Technologies"
            width={208}
            height={56}
            className="h-14 w-auto"
          /> */}
          <img src="/logo.png" alt="" className="w-3/5" />
          <p className="text-neutral-400 leading-relaxed">
            DefendiX Technologies delivers advanced solutions to military forces
            and defense organizations across all domains—air, sea, land, and
            command centers.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-2">Solutions</h4>
          <Link
            href="/services/c4isr"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            C4ISR Systems
          </Link>
          <Link
            href="/services/sdr"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Software Defined Radio
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Electronic Warfare
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Phased Array Radar
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Control Platforms
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            News & Insights
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Careers
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <div className="flex gap-3 items-start">
            <Mail className="size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <span className="text-neutral-400">
              info@defendixtechnologies.com
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <Phone className="size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <span className="text-neutral-400">+1 (123) 456-7890</span>
          </div>
          <div className="flex gap-3 items-start">
            <MapPin className="size-5 text-[#167F3D] mt-0.5 flex-shrink-0" />
            <div className="text-neutral-400">
              <p>Riyadh, Saudi Arabia</p>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-800" />

      <div className="w-full flex justify-between items-center">
        <p className="text-neutral-400">
          © 2024 DefendiX Technologies. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
