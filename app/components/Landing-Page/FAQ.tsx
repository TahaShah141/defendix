"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";

import Link from "next/link";
import { SlidingDiv } from "../custom/SlidingDiv";

const faqData = [
  {
    id: "item-1",
    question: "Where is DefendiX Technologies located?",
    answer:
      "DefendiX Technologies is a KSA-based company with its headquarters in Riyadh.",
  },
  {
    id: "item-2",
    question: "What are the core business areas of DefendiX Technologies?",
    answer:
      "Core Business Areas include C4ISR, Software Defined Radio, Electronic Warfare, Phased Array Radar Technologies and Ruggedized OpenVPX based Control and Signal Processing Backplane.",
  },
  {
    id: "item-3",
    question: "Are your systems developed in compliance with military standards?",
    answer:
      "Yes, all our solutions are MIL-STD compliant, including MIL-STD-810 for environmental conditions and MIL-STD-461 for EMI/EMC. We also follow DO-178 and DO-254 guidelines where applicable for safety-critical systems.",
  },
  {
    id: "item-4",
    question: "Do you offer indigenous solutions as per specific requirements?",
    answer:
      "Yes, we are committed to self-reliance through indigenous R&D and product development. DefendiX team has over 60 years of combined experience in design and development of defense products. Our systems are developed entirely in-house, including system design, RF hardware, digital hardware, firmware, software, and algorithmic warfare.",
  },
  {
    id: "item-5",
    question: "What C4ISR capabilities do you offer?",
    answer:
      "Our C4ISR systems include sensor fusion engines, battlefield communication nodes, real-time situational awareness displays, threat evaluation modules, weapon assignment software, and secure data links, all integrated into a unified NCW framework.",
  },
  {
    id: "item-6",
    question: "Are your C4ISR systems interoperable with legacy and NATO systems?",
    answer:
      "Yes, we support standard communication protocols, data formats (NATO STANAG), and open APIs to ensure interoperability with existing command and control infrastructures.",
  },
  {
    id: "item-7",
    question: "What frequency bands and waveforms are supported in your SDRs?",
    answer:
      "Our SDRs support multi-band operation from VHF to C-band and are capable of fast frequency hopping, GPS-based synchronization, voice/data/video transmission, and customizable waveforms.",
  },
  {
    id: "item-8",
    question: "Do you offer encryption and anti-jamming features?",
    answer:
      "Yes, our SDR platforms support both hardware-based and software-based encryption modules and incorporate spread-spectrum and frequency agility techniques for enhanced electronic protection.",
  },
  {
    id: "item-9",
    question: "What kind of EW systems do you provide?",
    answer:
      "We offer both offensive and defensive EW solutions, including digital receivers, DRFM-based jammers, radar warning receivers (RWR), and ELINT/COMINT systems with wideband RF capture and real-time signal analysis.",
  },
  {
    id: "item-10",
    question: "Can your EW systems be customized for platform-specific deployment?",
    answer:
      "Absolutely. Our systems are modular and can be tailored for airborne, naval, and ground vehicle integration, with support for size, weight, and power (SWaP) constraints.",
  },
  {
    id: "item-11",
    question: "What radar bands and modes are supported by your phased array technologies?",
    answer:
      "We cover all radar bands including S-band, C-band, X-band and KU-band. Additionally, we also cover mm-Wave bands as well for our T/R and antenna subsystems.",
  },
  {
    id: "item-12",
    question: "Do you provide fabrication and characterization of the RF components as well?",
    answer:
      "Yes, we not only do designing, modeling and simulation but also complete fabrication and characterization of RF subsystems (T/R Modules, Splitter/Combiner, Digital DownConverters, Exciters) as per requirements.",
  },
  {
    id: "item-13",
    question: "What makes your OpenVPX platforms suitable for defense applications?",
    answer:
      "Our OpenVPX-based Ruggedize platform uses conduction-cooled chassis, MIL-grade connectors, and are compliant with MIL-STD-810 and 461. They feature modular FPGA-based processing, varying data rate interconnects (Serial RapidIO, PCIe), and GPS-synchronized timing for multi-board systems.",
  },
  {
    id: "item-14",
    question: "What software support do you provide for your platforms?",
    answer:
      "We offer a complete software development kit (SDK) including Linux OS support, device drivers, C/C++ and Python APIs, LabVIEW interfaces, diagnostic tools, and built-in test (BIT) utilities.",
  },
  {
    id: "item-15",
    question: "Do you support system-level customization and integration?",
    answer:
      "Yes, we provide end-to-end support from requirement capture and design to system integration and field trials. Customization for specific platforms or mission profiles is a key strength.",
  },
  {
    id: "item-16",
    question: "What is your product support and lifecycle management policy?",
    answer:
      "We offer long-term product support, obsolescence management, in-field upgrades, and full documentation as part of our integrated lifecycle management services.",
  },
];

const PAGE_SIZE = 4;

export const FAQ = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(faqData.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentFaqs = faqData.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px] items-center">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
        <SlidingDiv direction="top" px={10} className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
          FAQ
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.1} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Frequently Asked Questions
        </SlidingDiv>
        <SlidingDiv direction="top" px={10} delay={0.2} className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700">
          Get answers to common questions about our defense technology solutions
          and services.
        </SlidingDiv>
      </div>
      <SlidingDiv className="w-full max-w-5xl">
        <Accordion type="multiple" className="flex flex-col gap-4 md:gap-6">
          {currentFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="flex flex-col gap-2 p-3 md:p-4 rounded-2xl md:rounded-[20px] border-2 border-[#ECECEC] data-[state=open]:border-[#17A249] data-[state=open]:bg-[#F7FDFB] transition-all duration-300"
            >
              <AccordionTrigger className="w-full flex text-base sm:text-lg md:text-xl font-semibold text-left hover:no-underline transition-all duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="w-full text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlidingDiv>

      <SlidingDiv direction="bottom" px={10} className="mt-6 md:mt-8 lg:mt-10 w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-2 rounded-lg border border-[#ECECEC] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`px-3 py-2 rounded-lg border ${
                p === page
                  ? "bg-[#17A249] text-white border-[#17A249]"
                  : "border-[#ECECEC] bg-white"
              }`}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-lg border border-[#ECECEC] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        <p className="text-sm text-neutral-600">
          Showing {start + 1}
          –{Math.min(start + PAGE_SIZE, faqData.length)} of {faqData.length}
        </p>
      </SlidingDiv>
    </div>
  );
};
