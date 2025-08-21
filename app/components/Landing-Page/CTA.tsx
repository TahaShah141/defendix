import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

type CTAProps = {
  isProduct?: boolean;
};
export const CTA = ({ isProduct = false }: CTAProps) => {
  return (
    <SlidingDiv direction="bottom" className="p-3 sm:p-4 md:p-6 bg-white">
      <div className="relative overflow-hidden rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] bg-[#167F3D]">
        <Image
          src="/cta.jpg"
          alt="Defense background"
          fill
          className="object-cover"
        />
        <div
          className={`absolute inset-0 bg-black/70 rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px]`}
        />

        <div className="relative z-10 flex flex-col items-center text-center text-white py-12 sm:py-16 md:py-20 lg:py-[120px] px-6 sm:px-12 md:px-20 lg:px-[120px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl max-w-5xl font-semibold mb-6 md:mb-8 lg:mb-10">
            Ready to Enhance Your Defense Capabilities?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mb-6 md:mb-8 lg:mb-10">
            Partner with DefendiX Technologies to implement cutting-edge NCW
            solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              href="/services"
              className={`bg-[#167F3D] flex text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-colors duration-200 text-sm sm:text-base hover:bg-green-700 group`}
            >
              Explore our services
              <ArrowRight className="ml-2 w-0 group-hover:w-4 md:group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </SlidingDiv>
  );
};
