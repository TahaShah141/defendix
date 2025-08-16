import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const ContactHero = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-[center_top_30%] flex items-center justify-center"
      style={{ backgroundImage: "url('/about-hero.png')" }}
    >
      <div className="size-full bg-black/75 pt-20 flex flex-col gap-8 justify-center items-center">
        <SlidingDiv direction="top" px={10}  className="border-[#15522D] bg-[#052E16] text-white border text-sm  tracking-wide rounded-full px-4 py-3 uppercase">
          Get In Touch
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-5xl text-white">Contact Us</SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-3xl text-xl text-neutral-300">
          {
            "We'd love to hear from you! Reach out to us with your inquiries, partnership opportunities, or any questions you may have."
          }
        </SlidingDiv>
      </div>
    </div>
  );
};
