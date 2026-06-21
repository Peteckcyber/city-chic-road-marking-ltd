"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
};

const variants = {
  primary:
    "gold-gradient text-white hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5",
  secondary:
    "bg-charcoal text-white hover:bg-charcoal-light hover:-translate-y-0.5",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-white hover:-translate-y-0.5",
  ghost: "text-gold hover:bg-gold/10",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
