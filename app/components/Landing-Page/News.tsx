import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    date: "Dec 15, 2024",
    title: "DefendiX Technologies awarded contract for next-gen radar systems",
    description:
      "DefendiX Technologies has secured a major contract to develop advanced radar technology for the national air defense program.",
    link: "#",
  },
  {
    id: 2,
    date: "Dec 10, 2024",
    title:
      "New SDR platform from DefendiX revolutionizes tactical communications",
    description:
      "The latest Software Defined Radio platform by DefendiX offers enhanced security, interoperability, and unparalleled bandwidth, setting a new standard.",
    link: "#",
  },
  {
    id: 3,
    date: "Dec 05, 2024",
    title: "DefendiX Expands C4ISR Capabilities with AI-Powered Fusion Engine",
    description:
      "DefendiX announced an upgrade to its C4ISR suite, integrating advanced AI-powered fusion engine that enhances situational awareness and decision-making speed.",
    link: "#",
  },
];

const NewsCard = ({ article }: { article: (typeof newsArticles)[0] }) => (
  <div className="border border-[#ECECEC] rounded-2xl md:rounded-4xl overflow-hidden flex flex-col h-full">
    <Image
      src="/news.png"
      alt="News article"
      width={400}
      height={240}
      className="w-full h-48 md:h-60 object-cover"
    />
    <div className="p-4 md:p-5 flex flex-col gap-3 md:gap-4 flex-1">
      <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wide">
        {article.date}
      </p>
      <h4 className="text-lg sm:text-xl font-semibold leading-tight">
        {article.title}
      </h4>
      <p className="text-neutral-600 leading-relaxed flex-1 text-sm sm:text-base">
        {article.description}
      </p>
      <Link
        href={article.link}
        className="text-[#167F3D] flex font-semibold gap-2 items-center mt-auto text-sm sm:text-base"
      >
        Read more
        <ArrowRight className="size-4 text-primary" />
      </Link>
    </div>
  </div>
);

export const News = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px] items-center">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
          STAY UPDATED
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          News & Insights
        </h3>
        <p className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700">
          Explore the latest news, technical articles, and insights from the
          world of defense technology and DefendiX.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full mb-8 md:mb-10">
        {newsArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <Link
        href="#"
        className="flex items-center justify-center gap-2.5 px-3 py-3 pr-4 rounded-xl border border-[#BBF7D0] bg-white text-primary font-semibold text-sm sm:text-base md:text-lg"
      >
        See more
      </Link>
    </div>
  );
};
