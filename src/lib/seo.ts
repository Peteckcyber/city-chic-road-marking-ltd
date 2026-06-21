import type { Metadata } from "next";
import { SITE, KEYWORDS } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [...KEYWORDS],
}: PageSEO): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE.name} | Road Marking Services Lagos`
      : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_NG",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const homeMetadata = createMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export const aboutMetadata = createMetadata({
  title: "About Us — Lagos Road Marking Experts",
  description:
    "City Chic Road Marking Services Ltd — Lagos-based specialists in precision highway markings, car park layout, warehouse lining, and thermoplastic road marking. Trusted across Magodo, Alausa, and greater Lagos.",
  path: "/about",
});

export const servicesMetadata = createMetadata({
  title: "Road Marking Services Lagos",
  description:
    "Professional road marking in Lagos: highway markings, car park layout design, warehouse floor marking, thermoplastic markings, sports court marking, and line removal. Premium quality, fully compliant.",
  path: "/services",
});

export const contactMetadata = createMetadata({
  title: "Contact Us — Free Site Assessment",
  description:
    "Contact City Chic Road Marking Services Ltd in Lagos. Call 07046983893, WhatsApp us instantly, or request a free site assessment. Offices in Magodo and Alausa.",
  path: "/contact",
});
