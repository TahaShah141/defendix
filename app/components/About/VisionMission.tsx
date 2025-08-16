import React from "react";
import { SlidingDiv } from "../custom/SlidingDiv";

export const VisionMission = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center justify-between">
        <div className="flex flex-col gap-3 md:gap-4 text-neutral-600 flex-1">
          <SlidingDiv className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 md:mb-6 lg:mb-8">
            Defending the Future,
            <br />
            Today.
          </SlidingDiv>
          <SlidingDiv className="text-sm sm:text-base md:text-lg lg:text-xl">
            {
              "Modern warfare demands multi-domain strategy where relatively less superior weaponry when networked in an efficient way can beat the state of the art standalone war machines. The central component powering such a multi-domain strategy is Network Centric Warfare (NCW). "
            }
          </SlidingDiv>
          <SlidingDiv delay={0.1} className="text-sm sm:text-base md:text-lg lg:text-xl">
            {
              "With our 2 decades of experience in design, development and deployment of NCW solutions, DefendiX team is rightly positioned to design and build innovative solutions with critical technologies including but not limited to NCW Architecture, C4I (Command, Control, Communication and Computer), Software Defined Radio (SDR), Electronic Warfare (EW) and Phased Array Radar Technologies."
            }
          </SlidingDiv>
        </div>
        <SlidingDiv direction="right" className="w-full lg:w-[50%]">
          <img
            src="/about-overview.png"
            alt=""
            className="rounded-2xl lg:rounded-4xl object-cover w-full aspect-[4/3]"
          />
        </SlidingDiv>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 md:gap-8 lg:gap-10">
        <SlidingDiv className='flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 rounded-2xl lg:rounded-4xl overflow-hidden bg-[url("/about-vision.png")] bg-center bg-cover text-white'>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-12 size-full bg-black/50">
            <svg
              className="size-8 md:size-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M24 12a1.25 1.25 0 0 0-1.25-1.25h-1.59a9.27 9.27 0 0 0-7.91-7.91V1.25a1.25 1.25 0 0 0-2.5 0v1.59a9.27 9.27 0 0 0-7.91 7.91H1.25a1.25 1.25 0 0 0 0 2.5h1.59a9.25 9.25 0 0 0 7.91 7.9v1.6a1.25 1.25 0 0 0 2.5 0v-1.6a9.25 9.25 0 0 0 7.91-7.9h1.59A1.25 1.25 0 0 0 24 12m-10.44 6.56a.23.23 0 0 1-.21 0a.24.24 0 0 1-.1-.19v-1.12a1.25 1.25 0 0 0-2.5 0v1.07a.24.24 0 0 1-.1.19a.23.23 0 0 1-.21 0a6.74 6.74 0 0 1-5-5a.28.28 0 0 1 0-.22a.25.25 0 0 1 .2-.09h1.11a1.25 1.25 0 0 0 0-2.5H5.68a.25.25 0 0 1-.24-.31a6.76 6.76 0 0 1 5-5a.26.26 0 0 1 .21.05a.26.26 0 0 1 .1.2v1.11a1.25 1.25 0 0 0 2.5 0V5.68a.26.26 0 0 1 .1-.2a.26.26 0 0 1 .21-.05a6.76 6.76 0 0 1 5 5a.25.25 0 0 1-.24.31h-1.07a1.25 1.25 0 0 0 0 2.5h1.07a.25.25 0 0 1 .2.09a.28.28 0 0 1 0 .22a6.74 6.74 0 0 1-4.96 5.01"
              />
            </svg>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Our Vision
            </h4>
            <p className="text-sm sm:text-base md:text-lg">
              {
                "To be a global leader in providing Network Centric Warfare (NCW) solutions, empowering armed forces with seamless, real-time connectivity and decision superiority across all domains of battle."
              }
            </p>
          </div>
        </SlidingDiv>
        <SlidingDiv direction="right" className='flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 rounded-2xl lg:rounded-4xl overflow-hidden bg-[url("/about-mission.png")] bg-center bg-cover text-white'>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-12 size-full bg-black/50">
            <svg
              className="size-8 md:size-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                <path d="M12 7a5 5 0 1 0 5 5" />
                <path d="M13 3.055A9 9 0 1 0 20.941 11" />
                <path d="M15 6v3h3l3-3h-3V3zm0 3l-3 3" />
              </g>
            </svg>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Our Mission
            </h4>
            <p className="text-sm sm:text-base md:text-lg">
              {
                "Our mission is to design, develop, and deliver cutting-edge NCW solutions that integrate advanced communications, radar, data fusion, and real-time intelligence to enhance operational effectiveness and strategic advantage."
              }
            </p>
          </div>
        </SlidingDiv>
      </div>
    </div>
  );
};
