import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ServiceType } from "@/lib/services";
import { SlidingDiv } from "../custom/SlidingDiv";

export const ServicesCTA = ({ title, description }: ServiceType["CTA"]) => {
  return (
    <SlidingDiv direction="top" px={10} className="p-4 sm:p-6 bg-white">
      <div className="bg-cover bg-[center_top_60%] bg-[url('/cta.jpg')] overflow-hidden rounded-[60px] sm:rounded-[80px] md:rounded-[100px] lg:rounded-[100px]">
        <div className="relative z-10 flex bg-black/80 flex-col items-center text-center text-white py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 sm:px-8 md:px-16 lg:px-[120px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-3xl font-bold mb-6 md:mb-8 lg:mb-10">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mb-6 md:mb-8 lg:mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-2xl justify-center items-center">
            <Link
              href="/contact"
              className={`bg-[#167F3D] flex items-center justify-center text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-colors duration-200 text-sm sm:text-base hover:bg-green-700 group`}
            >
              Schedule Technical Consultation
              <ArrowRight className="ml-2 w-0 group-hover:w-4 md:group-hover:w-6 transition-all duration-300" />
            </Link>
            {/* <Link
              href="#"
              className="border border-white text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base"
            >
              Download Technical Specs
            </Link> */}
          </div>
        </div>
      </div>
    </SlidingDiv>
  );
};
