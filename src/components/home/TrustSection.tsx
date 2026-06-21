"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GoldDivider from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { TRUST_PILLARS, TRUST_STATS } from "@/lib/constants";

export default function TrustSection() {
  return (
    <section className="section-padding bg-soft-gray" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Trust Us"
          title="Built on Precision, Proven by Results"
          subtitle="Enterprise-grade road marking backed by professional equipment, premium materials, and unwavering safety compliance."
        />

        <StaggerContainer className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group rounded-2xl bg-white p-8 premium-shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gold-gradient transition-transform duration-500 group-hover:scale-110">
                  <span className="material-icons text-2xl text-white" aria-hidden="true">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-charcoal">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <GoldDivider className="mb-16" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="block text-4xl font-bold gold-gradient-text md:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
