"use client";
import { motion } from "framer-motion";

export default function HomeHeroAnimated() {
  return (
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-center md:text-left">
      <span className="inline-block relative">
        <span className="animate-gradient bg-gradient-to-r from-yellow-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
          Master SAP, Transform Your Career
        </span>
        <motion.div
          className="absolute left-0 top-full mt-2 w-full h-1 rounded-full bg-gradient-to-r from-yellow-400 via-indigo-500 to-pink-500 opacity-80"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </span>
    </h1>
  );
}
