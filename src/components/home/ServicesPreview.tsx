"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { SERVICES } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-charcoal" aria-labelledby="services-preview">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Marking Solutions"
          subtitle="From highways to warehouses, we deliver precision marking services tailored to your environment."
          light
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
              >
                <div className="absolute top-0 left-0 h-1 w-0 gold-gradient transition-all duration-500 group-hover:w-full" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 transition-all duration-500 group-hover:gold-gradient group-hover:border-transparent">
                  <span
                    className="material-icons text-2xl text-gold transition-colors group-hover:text-white"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {service.shortDescription}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <span className="material-icons text-xs text-gold" aria-hidden="true">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  Explore Service
                  <span className="material-icons text-base transition-transform group-hover:translate-x-1" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
