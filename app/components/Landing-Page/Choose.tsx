import {
  CheckCircle2,
  Edit,
  Lock,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";
import React, { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const Card = ({ icon, title, text }: CardProps) => (
  <div className="rounded-2xl md:rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 lg:gap-10 border border-[#ECECEC]">
    <div className="bg-[#167F3D] rounded-lg p-2 md:p-2.5 text-white size-10 md:size-12">
      {icon}
    </div>
    <div className="flex flex-col gap-1 md:gap-2">
      <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {title}
      </p>
      <p className="text-neutral-600 text-sm sm:text-base">{text}</p>
    </div>
  </div>
);

const cards: CardProps[] = [
  {
    icon: <CheckCircle2 className="size-full" />,
    title: "Proven Field Deployments",
    text: "Our solutions are battle-tested across several countries.",
  },
  {
    icon: <Edit className="size-full" />,
    title: "End-to-End Control",
    text: "Everything from R&D to integration is done in-house.",
  },
  {
    icon: <ShieldCheck className="size-full" />,
    title: "Built for Tomorrow",
    text: "Our platforms scale as missions evolve.",
  },
  {
    icon: <UserCheck className="size-full" />,
    title: "Client-Focused Design",
    text: "We customize each system to fit real operational needs.",
  },
];

export const Choose = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-12 lg:gap-14 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 items-center">
      <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
        Why Choose Us
      </h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Why Choose Defendix Technologies?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {cards.map((c, i) => (
          <Card {...c} key={i} />
        ))}
      </div>
    </div>
  );
};
