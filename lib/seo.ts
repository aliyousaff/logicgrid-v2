import type { Metadata } from "next";

export const SITE_URL = "https://logicgridops.com";
export const SITE_NAME = "LogicGrid Ops";
export const SITE_DESCRIPTION = "Business websites, workflow automation and AI integrations for clients in Pakistan and worldwide. Build systems you own with LogicGrid Ops.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const shareTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: shareTitle,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "LogicGrid Ops — websites, automation and AI integrations" }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "growth@logicgridops.com",
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Pakistan", "Worldwide"],
  };
}

export function schemaJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
