"use client";

import { motion } from "framer-motion";

type GoldDividerProps = {
  className?: string;
};

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <motion.div
        className="absolute inset-y-0 w-32 gold-gradient opacity-60"
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
