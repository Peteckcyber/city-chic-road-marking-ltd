"use client";

import Image from "@/lib/NextImageShim";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export default function PageHero({
  title,
  subtitle,
  image = IMAGES.heroHighway,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24 pb-16 md:min-h-[55vh] md:pb-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="material-icons text-xs" aria-hidden="true">
                      chevron_right
                    </span>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="transition-colors hover:text-gold">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-gold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
