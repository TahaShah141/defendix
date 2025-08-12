import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CTAProps = {
  isProduct?: boolean;
};
export const CTA = ({ isProduct = false }: CTAProps) => {
  return (
    <div className="p-6 bg-white">
      <div className="relative overflow-hidden  rounded-[120px] bg-[#167F3D] ">
        {!isProduct && (
          <Image
            src="/cta.jpg"
            alt="Defense background"
            fill
            className="object-cover"
          />
        )}
        <div
          className={`absolute inset-0  ${
            isProduct ? "" : "bg-black/70"
          } rounded-[120px]`}
        />

        <div className="relative z-10 flex flex-col items-center text-center text-white py-[120px] px-[120px]">
          <h2 className="text-7xl max-w-5xl font-semibold mb-10">
            Ready to Enhance Your Defense Capabilities?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mb-10">
            Partner with DefendiX Technologies to implement cutting-edge NCW
            solutions tailored to your specific requirements.
          </p>
          <div className="flex gap-6">
            <Link
              href="/services"
              className={`${
                isProduct
                  ? "bg-[#F0FDF4] text-primary"
                  : "bg-[#167F3D] text-white"
              } px-8 py-4 rounded-2xl font-semibold hover:bg-[#16a34a] transition-colors duration-200`}
            >
              Explore our services
              <ArrowRight className="inline size-6 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
