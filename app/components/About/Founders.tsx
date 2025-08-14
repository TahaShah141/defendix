import { Linkedin, Twitter } from "lucide-react";

import Link from "next/link";
import React from "react";

type CardProps = {
  src: string;
  text: string;
  name: string;
  designation: string;
  linkedIn: string;
  twitter: string;
};

const Card = ({ text, name, designation, linkedIn, twitter }: CardProps) => (
  <div className="flex flex-col gap-3 md:gap-4 items-center bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-5 max-w-[350px] w-full">
    <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-center">
      {name}
    </h4>
    <p className="text-[#167F3D] text-center text-sm sm:text-base">
      {designation}
    </p>
    <p className="text-neutral-600 text-center text-xs sm:text-sm">{text}</p>
    <div className="flex gap-2 items-center text-neutral-700">
      <Link href={linkedIn}>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 md:size-5"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      </Link>
      <Link href={twitter}>
        <svg
          fill="currentColor"
          className="size-3 md:size-4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </Link>
    </div>
  </div>
);

const cards: [CardProps[], CardProps[]] = [
  [
    {
      name: "Dr. Yazeed Alaskar",
      designation: "Founder, CEO/CFO",
      src: "/founders/yazeed.png",
      text: "Co-founder Takhleeq.io and Elements Learning",
      twitter: "https://x.com",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Dr. Abid Rafique",
      designation: "Founder, CSO/CDO",
      src: "/founders/abid.png",
      text: "Co-founder Takhleeq.io and Elements Learning",
      twitter: "https://x.com",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Dr. Ahmad Alfafi",
      designation: "Founder, COO/CCO",
      src: "/founders/ahmad.png",
      text: "Co-founder Takhleeq.io and Elements Learning",
      twitter: "https://x.com",
      linkedIn: "https://linkedin.com",
    },
  ],
  [
    {
      name: "Dr. Imran Raouf Malik",
      designation: "Founder, CTO",
      src: "/founders/imran.png",
      text: "Co-founder Takhleeq.io and Elements Learning",
      twitter: "https://x.com",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Dr. Jawad Qureshi",
      designation: "Founder, Dir RF Systems",
      src: "/founders/jawad.png",
      text: "Co-founder Takhleeq.io and Elements Learning",
      twitter: "https://x.com",
      linkedIn: "https://linkedin.com",
    },
  ],
];

export const Founders = () => {
  return (
    <div className="bg-[#FDFDFD] text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
        Our Team
      </h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl text-center">
        Meet Our Founders
      </h3>
      <p className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600">
        {
          "Our leadership team brings together decades of experience in defense technology, research, and innovation."
        }
      </p>
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-7xl">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center w-full">
          {cards[0].map((c, i) => (
            <Card {...c} key={i} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center">
          {cards[1].map((c, i) => (
            <Card {...c} key={i + 3} />
          ))}
        </div>
      </div>
    </div>
  );
};
