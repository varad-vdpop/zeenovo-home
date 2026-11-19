import type { Metadata } from "next";

// The site-wide share image (app/opengraph-image.png). Pages that set their own Open Graph fields replace the
// inherited file-based image, so it is listed here explicitly.
const alt = "ZeeNovo: clinical services, safety and booking in one platform for Canadian pharmacies.";
const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt, type: "image/png" };
const twitterImage = { url: "/twitter-image.png", width: 1200, height: 630, alt };

/** Adds share-card fields (Open Graph and Twitter) from a page's own title and description, so links shared on
    LinkedIn, Facebook, Slack or X show the page's headline. The image is the site-wide app/opengraph-image.png. */
export function shareMeta<T extends Metadata>(meta: T): Metadata {
  const title = typeof meta.title === "string" ? meta.title : undefined;
  const description = meta.description ?? undefined;
  return {
    ...meta,
    openGraph: { siteName: "ZeeNovo", type: "website", locale: "en_CA", title, description, images: [ogImage], ...meta.openGraph },
    twitter: { card: "summary_large_image", title, description, images: [twitterImage], ...meta.twitter },
  };
}
