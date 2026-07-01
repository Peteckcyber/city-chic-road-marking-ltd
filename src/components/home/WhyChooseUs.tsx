"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="section-padding" aria-labelledby="why-choose-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The CityChic Difference"
          subtitle="We combine premium materials, flexible scheduling, and flawless execution to deliver marking solutions that exceed expectations."
        />

        <StaggerContainer className="grid gap-8 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex gap-6 rounded-2xl border border-charcoal/5 bg-white p-8 premium-shadow transition-all duration-500 hover:border-gold/20 hover:shadow-xl">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gold-gradient transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="material-icons text-2xl text-white" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-charcoal">{item.title}</h3>
                  <p className="leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-charcoal/5 pt-12">
          {[
            { icon: "workspace_premium", label: "ISO Compliant" },
            { icon: "health_and_safety", label: "Health & Safety Certified" },
            { icon: "eco", label: "Eco-Friendly Materials" },
            { icon: "support_agent", label: "Dedicated Support" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-muted">
              <span className="material-icons text-gold" aria-hidden="true">
                {badge.icon}
              </span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
