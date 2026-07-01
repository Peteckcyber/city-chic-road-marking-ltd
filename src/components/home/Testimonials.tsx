"use client";

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

function TestimonialCard({ rating, text }: { rating: number; text: string }) {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl glass p-10 premium-shadow">
      <div className="mb-6 flex items-center justify-between">
        <StarRating rating={rating} />
        <span className="flex items-center gap-1 rounded-full bg-gold/10 px-2 py-1 text-[10px] font-bold text-gold uppercase">
          <span className="material-icons text-xs" aria-hidden="true">verified</span>
          Verified Client
        </span>
      </div>
      <p className="text-base leading-relaxed text-white/80 italic">
        &ldquo;{text}&rdquo;
      </p>

      <p className="mt-8 text-right text-xs tracking-wide text-white/60">
        signed by magodo estate management
      </p>
    </div>
  );
}

export default function Testimonials() {
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
        <div className="mb-12 text-center">
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

        <TestimonialCard
          rating={5}
          text="CityChic repainted our entire estate car park — every bay, arrow, and pedestrian crossing is crisp and compliant. Residents noticed the difference within days."
        />
      </div>
    </section>
  );
}
