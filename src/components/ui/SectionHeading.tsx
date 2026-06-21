"use client";

import { motion } from "framer-motion";

type MaterialIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export default function MaterialIcon({
  name,
  className = "",
  size = 24,
}: MaterialIconProps) {
  return (
    <span
      className={`material-icons ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl ${light ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 gold-gradient rounded-full ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
