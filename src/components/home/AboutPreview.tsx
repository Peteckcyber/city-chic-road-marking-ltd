"use client";

import Image from "@/lib/NextImageShim";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { IMAGES } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="section-padding overflow-hidden" aria-labelledby="about-preview">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.markingCrew1}
                  alt="City Chic road marking crew applying precision pedestrian crossing"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 h-48 w-48 rounded-2xl border-2 border-gold/30" />
              <div className="absolute -top-4 -left-4 h-24 w-24 gold-gradient rounded-xl opacity-20" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
              About City Chic
            </span>
            <h2
              id="about-preview"
              className="mb-6 text-3xl font-bold leading-tight text-charcoal md:text-4xl lg:text-5xl"
            >
              Defining Spaces With{" "}
              <span className="gold-gradient-text">Precision & Purpose</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              From major highways to premium commercial developments across Lagos,
              City Chic Road Marking Services Ltd delivers high-visibility markings
              designed to maximise safety, organisation, and aesthetics.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-4">
              {[
                { icon: "verified", label: "Fully Insured" },
                { icon: "schedule", label: "24/7 Available" },
                { icon: "engineering", label: "Pro Equipment" },
                { icon: "thumb_up", label: "Guaranteed Quality" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="material-icons text-gold" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-charcoal">{item.label}</span>
                </div>
              ))}
            </div>
            <Button href="/about" variant="primary" size="md">
              Learn More
              <span className="material-icons text-lg" aria-hidden="true">arrow_forward</span>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
