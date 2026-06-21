"use client";

import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="cta-heading">
      <div className="absolute inset-0 gold-gradient opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2
            id="cta-heading"
            className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Faded, Confusing Lines Are A Safety Liability.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Protect Your Visitors And Enhance Your Property&apos;s Curb Appeal With
            A Crisp, Compliant Layout.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Request A Quote
            </Button>
            <Button
              href={SITE.phoneHref}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal"
              external
            >
              Call {SITE.phoneFormatted}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
