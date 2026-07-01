import React, { useEffect } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import SocialBar from "@/components/layout/SocialBar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { useLocation } from "react-router-dom";
import { aboutMetadata, contactMetadata, homeMetadata, servicesMetadata } from "@/lib/seo";
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

    const setMetaProperty = (propName: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[property="${propName}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', propName);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const setMetaName = (name: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const og = metadata?.openGraph;
    if (og) {
      setMetaProperty('og:title', og.title as unknown as string);
      setMetaProperty('og:description', og.description as unknown as string);
      setMetaProperty('og:url', og.url as unknown as string);
      setMetaProperty('og:site_name', og.siteName as unknown as string);
      if (og.images && og.images.length > 0) {
        const img = og.images[0] as any;
        setMetaProperty('og:image', img.url as string);
        setMetaProperty('og:image:width', img.width ? String(img.width) : undefined);
        setMetaProperty('og:image:height', img.height ? String(img.height) : undefined);
        setMetaProperty('og:image:alt', img.alt as string);
      }
    }

    const tw = metadata?.twitter;
    if (tw) {
      setMetaName('twitter:card', tw.card as string);
      setMetaName('twitter:title', tw.title as string);
      setMetaName('twitter:description', tw.description as string);
      const img =
        (Array.isArray(tw.images) ? tw.images[0] : tw.images) ??
        (og?.images && og.images.length > 0 ? (og.images[0] as any).url : undefined);
      if (typeof img === 'string') setMetaName('twitter:image', img);
      else if (img?.url) setMetaName('twitter:image', img.url as string);
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
  const { pathname } = useLocation();

  useEffect(() => {
    const routeMetadata =
      pathname === "/about"
        ? aboutMetadata
        : pathname === "/services"
          ? servicesMetadata
          : pathname === "/contact"
            ? contactMetadata
            : homeMetadata;

    applyMetadata(routeMetadata as any);
    const schemas = [organizationSchema(), localBusinessSchema(), servicesSchema()];
    insertSchemas(schemas);
  }, [pathname]);

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
