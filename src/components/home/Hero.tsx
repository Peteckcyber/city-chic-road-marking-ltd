"use client";

import Image from "@/lib/NextImageShim";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE, IMAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={IMAGES.heroHighway}
          alt="Professional highway road marking with precision lines in Lagos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/55 to-charcoal/90" />
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full overflow-hidden opacity-10">
        <div className="animate-stripe h-1.5 w-[200%] bg-[repeating-linear-gradient(90deg,#fff_0,#fff_40px,transparent_40px,transparent_80px)]" />
      </div>

      <motion.div
        className="pointer-events-none absolute top-1/3 right-[12%] hidden h-16 w-16 rounded-lg border border-gold/15 md:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-12 gold-gradient" />
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase">
            {SITE.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Precision Road Markings That Define Space, Improve Safety, and Enhance
          Property Value
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          At City Chic Road Marking Services Ltd, we don&apos;t just paint lines.
          We create safer roads, better traffic flow, and professional spaces
          through precision marking solutions across Lagos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Get Free Quote
          </Button>
          <Button href={SITE.phoneHref} variant="outline" size="lg" external>
            <span className="material-icons text-lg" aria-hidden="true">phone</span>
            Call Now
          </Button>
        </motion.div>

        <motion.a
          href={SITE.phoneHref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 inline-flex items-center gap-3 text-gold transition-colors hover:text-gold-light"
        >
          <span className="material-icons" aria-hidden="true">phone_in_talk</span>
          <span className="text-2xl font-bold tracking-wide">{SITE.phoneFormatted}</span>
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="material-icons text-white/30" aria-hidden="true">
          keyboard_arrow_down
        </span>
      </motion.div>
    </section>
  );
}
