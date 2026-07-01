import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import PageHero from "@/components/ui/PageHero";
import { ContactContent } from "@/components/contact/ContactContent";
import CTASection from "@/components/home/CTASection";
import { contactMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE, IMAGES } from "@/lib/constants";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Contact", url: `${SITE.url}/contact` },
  ]);

  const webPage = webPageSchema(
    "Contact Us",
    "Contact CityChic Road Marking Services Ltd",
    `${SITE.url}/contact`
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
        title="Contact Us"
        subtitle="Get in touch for a free site assessment and no-obligation quote."
        image={IMAGES.roadCurve}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <ContactContent />
      <CTASection />
    </PageTransition>
  );
}
