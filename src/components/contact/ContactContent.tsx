"use client";

import { FormEvent } from "react";
import { SITE, SOCIAL_LINKS, SERVICES, LOCATIONS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SocialLink, buildWhatsAppMessage } from "@/components/ui/SocialIcons";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const serviceSelect = form.querySelector("#service") as HTMLSelectElement;
    const service = serviceSelect.options[serviceSelect.selectedIndex]?.text || "";
    const location = (data.get("location") as string).trim();
    const message = (data.get("message") as string).trim();

    const text = buildWhatsAppMessage({ name, phone, service, location, message });
    window.open(`${SITE.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            placeholder="07046983893"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-charcoal">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium text-charcoal">
          Project Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="e.g. Magodo, Lekki, Victoria Island"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Submit via WhatsApp
        <span className="material-icons text-lg" aria-hidden="true">send</span>
      </Button>
    </form>
  );
}

export function ContactContent() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <h2 className="mb-2 text-2xl font-bold text-charcoal">Request A Quote</h2>
              <p className="mb-8 text-muted">
                Complete the form below and your enquiry will be sent directly to us
                on WhatsApp for a fast response.
              </p>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="rounded-2xl gold-gradient p-8 text-white premium-shadow-gold">
                  <h3 className="mb-2 text-xl font-bold">Request A Free Site Assessment</h3>
                  <p className="mb-6 text-sm text-white/80">
                    Get a no-obligation quote with a comprehensive on-site evaluation
                    from our Lagos-based experts.
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:scale-[1.02]"
                  >
                    <span className="material-icons text-gold" aria-hidden="true">phone</span>
                    {SITE.phoneFormatted}
                  </a>
                </div>

                <div className="rounded-2xl bg-white p-8 premium-shadow">
                  <h3 className="mb-6 text-lg font-bold text-charcoal">{SITE.name}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-gold" aria-hidden="true">phone</span>
                      <div>
                        <p className="text-sm font-medium text-charcoal">Phone</p>
                        <a href={SITE.phoneHref} className="text-sm text-muted hover:text-gold">
                          {SITE.phoneFormatted}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-gold" aria-hidden="true">email</span>
                      <div>
                        <p className="text-sm font-medium text-charcoal">Email</p>
                        <a href={`mailto:${SITE.email}`} className="text-sm text-muted hover:text-gold">
                          {SITE.email}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-8 premium-shadow">
                  <h3 className="mb-4 text-lg font-bold text-charcoal">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((social) => (
                      <SocialLink
                        key={social.name}
                        name={social.name}
                        href={social.href}
                        platform={social.platform}
                        variant="dark"
                        size={18}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location cards */}
      <section className="bg-soft-gray py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
                Our Locations
              </span>
              <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
                Visit Us in Lagos
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Magodo, Lagos, Nigeria — serving commercial, industrial, and estate
                clients across the greater Lagos area.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 0.1}>
                <div className="group rounded-2xl border border-charcoal/5 bg-white p-8 premium-shadow transition-all duration-500 hover:border-gold/20 hover:shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gold-gradient transition-transform duration-500 group-hover:scale-105">
                    <span className="material-icons text-2xl text-white" aria-hidden="true">
                      location_on
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-charcoal">{loc.label}</h3>
                  <address className="space-y-1 not-italic text-sm leading-relaxed text-muted">
                    {loc.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Emergency */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-charcoal/5 p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-charcoal">
                  <span className="material-icons text-gold" aria-hidden="true">schedule</span>
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((row) => (
                    <li key={row.day} className="flex justify-between text-sm">
                      <span className="font-medium text-charcoal">{row.day}</span>
                      <span className="text-muted">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-charcoal">
                  <span className="material-icons text-red-500" aria-hidden="true">
                    emergency
                  </span>
                  Emergency Contact
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  For urgent road marking emergencies requiring immediate attention,
                  call our 24/7 emergency line.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-lg font-bold text-red-600 transition-colors hover:text-red-700"
                >
                  <span className="material-icons" aria-hidden="true">phone</span>
                  {SITE.phoneFormatted}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
