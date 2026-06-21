"use client";

import Image from "@/lib/NextImageShim";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/constants";

type LogoProps = {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
  className?: string;
};

const sizes = {
  sm: { width: 120, height: 40, className: "h-8 w-auto" },
  md: { width: 160, height: 52, className: "h-10 w-auto sm:h-11" },
  lg: { width: 200, height: 65, className: "h-14 w-auto" },
};

export default function Logo({
  variant = "default",
  size = "md",
  showLink = true,
  className,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const img = (
    <Image
      src={IMAGES.logo}
      alt="City Chic Road Marking Services Ltd"
      width={width}
      height={height}
      className={cn(
        sizeClass,
        "object-contain transition-opacity duration-300",
        variant === "light" && "brightness-0 invert",
        className
      )}
      priority={size === "lg"}
    />
  );

  if (!showLink) return img;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="City Chic Road Marking Services Ltd — Home">
      {img}
    </Link>
  );
}
