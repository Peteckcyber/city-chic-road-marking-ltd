import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import CTASection from "@/components/home/CTASection";
import { aboutMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CORE_VALUES, IMAGES, SITE } from "@/lib/constants";
import Image from "@/lib/NextImageShim";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "About", url: `${SITE.url}/about` },
  ]);

  const webPage = webPageSchema(
    "About CityChic Road Marking",
    "Learn about CityChic Road Marking Services Ltd",
    `${SITE.url}/about`
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

      <PageHero
        title="About CityChic Road Marking"
        subtitle="Precision road marking excellence built on decades of expertise, innovation, and unwavering commitment to safety."
        image={IMAGES.markingMachine}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Company Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-charcoal md:text-4xl">
                A Legacy of Precision
              </h2>
              <p className="mb-4 leading-relaxed text-muted">
                Founded with a vision to transform the road marking industry,
                CityChic Road Marking Services Ltd has grown from a specialist
                contractor into a nationally recognized premium marking services
                provider.
              </p>
              <p className="leading-relaxed text-muted">
                We serve commercial developers, local authorities, industrial
                facilities, and educational institutions with marking solutions
                that combine technical precision with aesthetic excellence.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.zebraCrossing}
                  alt="CityChic precision road marking work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-soft-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl bg-white p-10 premium-shadow">
                <span className="material-icons mb-4 text-3xl text-gold" aria-hidden="true">
                  flag
                </span>
                <h3 className="mb-4 text-2xl font-bold text-charcoal">Mission</h3>
                <p className="leading-relaxed text-muted">
                  To deliver precision road marking solutions that enhance safety,
                  optimize traffic flow, and elevate the professional appearance of
                  every space we mark — using premium materials and cutting-edge
                  technology.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-white p-10 premium-shadow">
                <span className="material-icons mb-4 text-3xl text-gold" aria-hidden="true">
                  visibility
                </span>
                <h3 className="mb-4 text-2xl font-bold text-charcoal">Vision</h3>
                <p className="leading-relaxed text-muted">
                  To be Lagos&apos;s most trusted premium road marking brand —
                  recognized for flawless execution, regulatory excellence, and
                  transformative impact on public and private infrastructure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Core Values
            </span>
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
              What Drives Everything We Do
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-charcoal/5 p-6 text-center transition-all hover:border-gold/30 hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl gold-gradient transition-transform group-hover:scale-110">
                    <span className="material-icons text-2xl text-white" aria-hidden="true">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 font-bold text-charcoal">{value.title}</h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Why Different */}
      <section className="section-padding bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
                Why We&apos;re Different
              </span>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Not Your Average Contractor
              </h2>
              <p className="mb-6 leading-relaxed text-white/60">
                While others focus on speed, we focus on precision. While others
                use standard materials, we invest in premium thermoplastic and
                high-friction resins. While others work 9-to-5, we offer 24/7
                flexible scheduling.
              </p>
              <p className="leading-relaxed text-white/60">
                Every project receives the same meticulous attention — whether
                it&apos;s a single car park bay or a multi-lane highway
                infrastructure project.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.markingCrew2}
                  alt="Professional road marking team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-soft-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Technology
            </span>
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
              Equipment & Technology
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "precision_manufacturing",
                title: "Thermoplastic Applicators",
                desc: "State-of-the-art heated application systems for durable, high-visibility markings.",
              },
              {
                icon: "straighten",
                title: "Laser-Guided Layout",
                desc: "Precision laser alignment tools ensuring exact measurements on every project.",
              },
              {
                icon: "cleaning_services",
                title: "Line Removal Systems",
                desc: "Advanced grinding and hydro-blasting equipment for clean surface restoration.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-8 premium-shadow">
                  <span className="material-icons mb-4 text-3xl text-gold" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-charcoal">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="material-icons mb-4 text-4xl text-gold" aria-hidden="true">
              health_and_safety
            </span>
            <h2 className="mb-6 text-3xl font-bold text-charcoal md:text-4xl">
              Safety Commitment
            </h2>
            <p className="leading-relaxed text-muted">
              Safety is non-negotiable. Every member of our team holds current
              safety certifications. We maintain comprehensive insurance, conduct
              rigorous risk assessments, and implement traffic management plans
              that exceed regulatory requirements on every project.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
