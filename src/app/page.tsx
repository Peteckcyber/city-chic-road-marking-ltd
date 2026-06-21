import PageTransition from "@/components/layout/PageTransition";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectGallery from "@/components/home/ProjectGallery";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectGallery />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
