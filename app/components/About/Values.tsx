import {
  CheckCheckIcon,
  CheckCircle,
  CheckCircle2,
  Lightbulb,
  Users,
} from "lucide-react";
import React, { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const Card = ({ icon, title, text }: CardProps) => (
  <div className="border border-[#ECECEC] flex flex-col gap-4 md:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl lg:rounded-4xl bg-white">
    {icon}
    <p className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</p>
    <p className="text-xs sm:text-sm text-neutral-600">{text}</p>
  </div>
);

const cards: CardProps[] = [
  {
    icon: <Lightbulb className="text-[#167F3D] size-8 md:size-10" />,
    title: "Innovation",
    text: "We constantly seek new and better ways to solve problems and create value.",
  },
  {
    icon: <CheckCircle className="text-[#167F3D] size-8 md:size-10" />,
    title: "Excellence",
    text: "We are committed to delivering the highest quality in everything we do.",
  },
  {
    icon: <Users className="text-[#167F3D] size-8 md:size-10" />,
    title: "Customer Focus",
    text: "Our customers are at the heart of our business, and their success is our priority.",
  },
];

export const Values = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
        Our Values
      </h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl text-center">
        Principles that drive us
      </h3>
      <p className="text-center max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600">
        {
          "These principles guide our actions and define who we are as a company."
        }
      </p>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-7xl">
        {cards.map((c, i) => (
          <Card {...c} key={i} />
        ))}
      </div>
    </div>
  );
};
