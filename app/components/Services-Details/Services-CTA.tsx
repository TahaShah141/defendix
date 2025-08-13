import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ServiceType } from "@/lib/services";

export const ServicesCTA = ({ title, description }: ServiceType["CTA"]) => {
  return (
    <div className="p-6 bg-white">
      <div className="bg-cover bg-[center_top_60%] bg-[url('/cta.jpg')] overflow-hidden rounded-[120px] ">
        <div className="relative z-10 flex bg-black/80 flex-col items-center text-center text-white py-[120px] px-[120px]">
          <h2 className="text-7xl max-w-3xl font-bold mb-10">{title}</h2>
          <p className="text-xl text-white/90 max-w-3xl mb-10">{description}</p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className={`bg-[#167F3D] text-white px-8 py-4 rounded-2xl font-semibold transition-colors duration-200`}
            >
              Schedule Technical Consultation
              <ArrowRight className="inline size-6 ml-2" />
            </Link>
            <Link
              href="#"
              className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Download Technical Specs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
