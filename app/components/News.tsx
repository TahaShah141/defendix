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
  <div className="border border-[#ECECEC] rounded-4xl overflow-hidden flex flex-col h-full">
    <Image
      src="/news.png"
      alt="News article"
      width={400}
      height={240}
      className="w-full h-60 object-cover"
    />
    <div className="p-5 flex flex-col gap-4 flex-1">
      <p className="text-sm text-neutral-500 uppercase tracking-wide">
        {article.date}
      </p>
      <h4 className="text-xl font-semibold leading-tight">{article.title}</h4>
      <p className="text-neutral-600 leading-relaxed flex-1">
        {article.description}
      </p>
      <Link
        href={article.link}
        className="text-[#167F3D] flex font-semibold gap-2 items-center mt-auto"
      >
        Read more
        <ArrowRight className="size-4 text-primary" />
      </Link>
    </div>
  </div>
);

export const News = () => {
  return (
    <div className="bg-white text-black flex flex-col gap-10 px-20 py-[120px] items-center">
      <div className="flex flex-col items-center gap-10 mb-10">
        <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-sm tracking-wide rounded-full px-4 py-3 uppercase">
          STAY UPDATED
        </h2>
        <h3 className="text-5xl font-bold text-center">News & Insights</h3>
        <p className="text-center max-w-4xl text-lg text-neutral-700">
          Explore the latest news, technical articles, and insights from the
          world of defense technology and DefendiX.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-7xl w-full mb-10">
        {newsArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <Link
        href="#"
        className="flex items-center justify-center gap-2.5 px-3 py-3 pr-4 rounded-xl border border-[#BBF7D0] bg-white text-primary font-semibold text-lg"
      >
        See more
      </Link>
    </div>
  );
};
