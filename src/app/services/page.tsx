import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";
import FAQSection from "@/components/ui/FAQSection";
import CTASection from "@/components/home/CTASection";
import { servicesMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/schema";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
  ]);

  const webPage = webPageSchema(
    "Road Marking Services Lagos",
    "Professional road marking services in Lagos, Nigeria",
    `${SITE.url}/services`
  );

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />

      <PageHero
        title="Professional Road Marking Services"
        subtitle="Comprehensive marking solutions for highways, car parks, warehouses, sports facilities, and estate developments across Lagos."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 1 ? "bg-soft-gray" : ""}`}
          aria-labelledby={`service-${service.id}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <Reveal direction={index % 2 === 0 ? "left" : "right"}>
                <div className="lg:[direction:ltr]">
                  <ParallaxImage
                    src={service.image}
                    alt={service.title}
                    parallax={service.id === "car-park"}
                  />
                </div>
              </Reveal>

              <Reveal
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.1}
                className="lg:[direction:ltr]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gold-gradient">
                  <span className="material-icons text-2xl text-white" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
                <h2
                  id={`service-${service.id}`}
                  className="mb-4 text-3xl font-bold text-charcoal md:text-4xl"
                >
                  {service.title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted">
                  {service.shortDescription}
                </p>

                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">
                  Key Benefits
                </h3>
                <ul className="mb-8 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-muted">
                      <span className="material-icons mt-0.5 text-sm text-gold" aria-hidden="true">
                        check_circle
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">
                  Our Process
                </h3>
                <ol className="mb-8 space-y-3">
                  {service.process.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-muted">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <Button href="/contact" variant="primary" size="md">
                  Request A Quote
                  <span className="material-icons text-lg" aria-hidden="true">arrow_forward</span>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <FAQSection />
      <CTASection />
    </PageTransition>
  );
}
