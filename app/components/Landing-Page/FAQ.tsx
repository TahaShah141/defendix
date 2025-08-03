"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import React from "react";

const faqData = [
  {
    id: "item-1",
    question: "What defense domains does DefendiX Technologies serve?",
    answer:
      "DefendiX Technologies provides comprehensive solutions across all defense domains including Air Forces, Naval Forces, Ground Forces, and Joint Command Units. Our expertise spans C4ISR systems, software-defined radio, electronic warfare, phased array radar, and ruggedized control platforms.",
  },
  {
    id: "item-2",
    question: "How does DefendiX ensure compliance with military standards?",
    answer:
      "All our systems are built to meet strict MIL-STD standards with full EMI/EMC and environmental compliance. We implement quantum-safe encryption protocols and maintain rigorous testing procedures to ensure our solutions meet the highest military specifications.",
  },
  {
    id: "item-3",
    question: "What makes DefendiX's approach to defense technology unique?",
    answer:
      "Our in-house R&D excellence sets us apart. From system design to RF hardware and algorithmic warfare, every component is developed internally, enabling full-stack control and continuous innovation. We offer rapid customization with flexible architectures for fast deployment.",
  },
  {
    id: "item-4",
    question:
      "Can DefendiX solutions be integrated with existing defense systems?",
    answer:
      "Yes, our solutions are designed with interoperability in mind. We use modular architectures and open standards that allow seamless integration with existing defense infrastructure while providing upgrade paths for future enhancements.",
  },
  {
    id: "item-5",
    question: "What support does DefendiX provide for deployed systems?",
    answer:
      "We provide comprehensive support including installation, training, maintenance, and ongoing technical assistance. Our field-proven solutions come with dedicated support teams to ensure optimal performance throughout the system lifecycle.",
  },
];

export const FAQ = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-10 px-20 py-[120px] items-center">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
          FAQ
        </h2>
        <h3 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h3>
        <p className="text-center max-w-4xl text-lg text-neutral-700">
          Get answers to common questions about our defense technology solutions
          and services.
        </p>
      </div>
      <div className="w-full">
        <Accordion type="multiple" className="flex flex-col gap-6">
          {faqData.map((faq) => (
            <AccordionItem
            key={faq.id}
            value={faq.id}
            className="flex flex-col gap-2 p-4 rounded-[20px] border-2 border-[#ECECEC] data-[state=open]:border-[#17A249] data-[state=open]:bg-[#F7FDFB] "
            >
              <AccordionTrigger className="w-full flex text-xl font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="w-full text-neutral-700 text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10">
        <Link
          href="#"
          className="flex items-center justify-center gap-2.5 px-3 py-3 pr-4 rounded-xl border border-[#BBF7D0] bg-white text-primary font-semibold text-lg"
        >
          See more
        </Link>
      </div>
    </div>
  );
};
