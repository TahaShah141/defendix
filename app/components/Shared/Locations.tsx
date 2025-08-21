import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

import { SlidingDiv } from "../custom/SlidingDiv"

export const Locations = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <SlidingDiv direction="top" px={10} className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
        Find us
      </SlidingDiv>
      <SlidingDiv direction="top" px={10} delay={0.1} className="text-3xl sm:text-4xl md:text-5xl text-center">
        Our Location
      </SlidingDiv>
      <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600">
        {"We are located in KSA, where our dedicated team serves clients"}
      </SlidingDiv>
      <SlidingDiv className="relative w-full">
        <HoverCard defaultOpen>
          <HoverCardTrigger className="absolute top-[49%] left-[61%]">
            <div className="bg-green-200/50 size-8 rounded-full p-1">
              <div className="bg-green-300/50 size-full rounded-full p-1.5">
                <div className="bg-green-500/80 size-full rounded-full">
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent side="left" className="flex flex-col gap-2 items-center rounded-3xl">
            <img src="/ksa.png" alt="" className="size-10 rounded-full overflow-hidden border" />
            <p className="text-2xl">Riyadh, KSA</p>
            <p className="text-center">7549 Abi Bakr As Siddiq Rd, 4253, An Narjis, Riyadh 13326</p>
          </HoverCardContent>
        </HoverCard>
        {/* <HoverCard>
          <HoverCardTrigger className="absolute top-[38%] left-[66%]">
            <div className="bg-green-200/50 size-8 rounded-full p-1">
              <div className="bg-green-300/50 size-full rounded-full p-1.5">
                <div className="bg-green-500/80 size-full rounded-full">
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="flex flex-col gap-2 items-center rounded-3xl">
            <img src="/pak.png" alt="" className="size-10 rounded-full overflow-hidden border"/>
            <p className="text-2xl">Islamabad, Pakistan</p>
            <p className="text-center">NUST H-12, Islamabad, Pakistan</p>
          </HoverCardContent>
        </HoverCard> */}
        <img src={'/Map.png'} className="w-full"/>
      </SlidingDiv>
      <SlidingDiv direction="bottom" className="flex justify-around w-full">
        {/* <div className="flex flex-col gap-1 items-center">
          <p className="sm:text-xl lg:text-3xl">Call us</p>
          <p className="text-sm sm:text-base text-neutral-500">+966 114141234</p>
        </div> */}
        <div className="flex flex-col gap-1 items-center">
          <p className="sm:text-xl lg:text-3xl">Email us</p>
          <p className="text-sm sm:text-base text-neutral-500">info@defendixtech.com</p>
        </div>
      </SlidingDiv>
    </div>
  )
}
