"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Under Construction</h1>
        <p className="text-xl text-gray-400 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-colors duration-300"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
