import React from "react";
import Image from "next/image";

const serve = [
  {
    id: 1,
    title: "Air Forces",
    description:
      "Ensure dominance in the skies with advanced radar, secure communications, and electronic warfare systems tailored for aircraft and drones.",
  },
  {
    id: 2,
    title: "Naval Forces",
    description:
      "Equip fleets with real-time situational awareness, maritime surveillance, and EW capabilities built for dynamic environments.",
  },
  {
    id: 3,
    title: "Ground Forces",
    description:
      "Support troops with ruggedized platforms, networked C41SR systems, and secure tactical communication for field superiority.",
  },
  {
    id: 4,
    title: "Joint Command Units",
    description:
      "Enable unified command and control across domains with interoperable platforms that enhance coordination and decision-making.",
  },
];

const ServeCard = ({ article }: { article: (typeof serve)[0] }) => (
  <div className="border border-[#ECECEC] rounded-4xl overflow-hidden flex flex-col h-full">
    <Image
      src="/products/serve.jpg"
      alt="Serve article"
      width={400}
      height={240}
      className="w-full h-60 object-cover"
    />
    <div className="p-5 flex flex-col gap-4 flex-1">
      <h4 className="text-xl font-semibold leading-tight">{article.title}</h4>
      <p className="text-neutral-600 leading-relaxed flex-1">
        {article.description}
      </p>
    </div>
  </div>
);

export const Serve = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-10 px-20 py-[120px] items-center">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
          WHO WE HELP
        </h2>
        <h3 className="text-5xl font-bold text-center">
          Empowering Those Who Defend
        </h3>
        <p className="text-center max-w-4xl text-lg text-neutral-700">
          DefendiX Technologies delivers advanced solutions to military forces
          and defense organizations across all domains—air, sea, land, and
          command centers.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-7xl w-full mb-10">
        {serve.map((article) => (
          <ServeCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
