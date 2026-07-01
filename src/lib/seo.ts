import type { Metadata } from "next";
import { SITE, KEYWORDS } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const OG_IMAGE_URL =
  "https://www.image2url.com/r2/default/images/1782874348039-6f1b09e8-3a02-4d2f-8c27-f11a23ba3f90.jpeg";

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

  const ogImage = {
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: `${SITE.name} — Road Marking Services Lagos`,
  };

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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_URL],
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
  title: "About CityChic Road Marking",
  description:
    "CityChic Road Marking Services Ltd — Lagos-based specialists in precision highway markings, car park layout, warehouse lining, and thermoplastic road marking. Trusted across commercial, industrial, and estate projects throughout Lagos.",
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
    "Contact CityChic Road Marking Services Ltd in Lagos. Call 07046983893, WhatsApp us instantly, or request a free site assessment at our Magodo GRA Phase II corporate office.",
  path: "/contact",
});
