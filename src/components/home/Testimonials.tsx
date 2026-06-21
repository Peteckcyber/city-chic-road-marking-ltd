"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TESTIMONIALS, TESTIMONIAL_METRICS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-icons text-sm ${i < rating ? "text-gold" : "text-white/20"}`}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl glass p-8 premium-shadow">
      <div className="mb-4 flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <span className="flex items-center gap-1 rounded-full bg-gold/10 px-2 py-1 text-[10px] font-bold text-gold uppercase">
          <span className="material-icons text-xs" aria-hidden="true">verified</span>
          Verified Client
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-white/80 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-sm font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/50">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="relative overflow-hidden section-padding bg-charcoal"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,#C9A227_0%,transparent_50%)]" />
        <div className="absolute right-0 bottom-0 h-full w-full bg-[radial-gradient(circle_at_70%_80%,#C9A227_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
            Client Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Trusted Across Lagos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Real feedback from estate managers, developers, and commercial clients
            we&apos;ve served across Lagos.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 gold-gradient rounded-full" />
        </div>

        <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TESTIMONIAL_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                className="block text-3xl font-bold gold-gradient-text"
              />
              <p className="mt-2 text-xs font-medium text-white/50">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <div className="testimonial-track">
            {doubled.map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
