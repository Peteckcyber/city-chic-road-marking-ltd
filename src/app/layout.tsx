import React, { useEffect } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import SocialBar from "@/components/layout/SocialBar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { homeMetadata } from "@/lib/seo";
import {
  organizationSchema,
  localBusinessSchema,
  servicesSchema,
} from "@/lib/schema";

function applyMetadata(metadata: any) {
  try {
    if (metadata?.title) document.title = metadata.title;
    if (metadata?.description) {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement('meta');
        desc.setAttribute('name', 'description');
        document.head.appendChild(desc);
      }
      desc.setAttribute('content', metadata.description || '');
    }

    const og = metadata?.openGraph;
    if (og) {
      const setMeta = (propName: string, value?: string) => {
        if (!value) return;
        let el = document.querySelector(`meta[property="${propName}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', propName);
          document.head.appendChild(el);
        }
        el.setAttribute('content', value);
      };

      setMeta('og:title', og.title as unknown as string);
      setMeta('og:description', og.description as unknown as string);
      setMeta('og:url', og.url as unknown as string);
      setMeta('og:site_name', og.siteName as unknown as string);
      if (og.images && og.images.length > 0) setMeta('og:image', (og.images[0] as any).url as string);
    }

    const canonical = metadata?.alternates?.canonical as string | undefined;
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  } catch (e) {
    // defensive
    // console.warn('applyMetadata', e);
  }
}

function insertSchemas(schemas: any[]) {
  // remove previously injected managed schema scripts
  document.querySelectorAll('script[data-managed="true"]').forEach((s) => s.remove());
  schemas.forEach((schema) => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-managed', 'true');
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyMetadata(homeMetadata as any);
    const schemas = [organizationSchema(), localBusinessSchema(), servicesSchema()];
    insertSchemas(schemas);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <LoadingScreen />
      <Header />
      <SocialBar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
