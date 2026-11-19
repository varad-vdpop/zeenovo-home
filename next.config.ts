import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// The YBM feedback widget loads only where NEXT_PUBLIC_FEEDBACK_PROJECT is set (the review site).
// Leave the variable unset on the production site: the widget and its allowance below both disappear.
const feedbackOrigin = process.env.NEXT_PUBLIC_FEEDBACK_PROJECT ? " https://feedback.ybmos.app" : "";

// The site is statically generated, so scripts cannot carry a per-request nonce and Next.js needs
// 'unsafe-inline' for its own inline bootstrap. Everything else is locked to this origin.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${feedbackOrigin}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${feedbackOrigin}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

// Hosts that only ever serve review builds. Search engines are told not to index them.
const stagingHosts = [".*\\.vercel\\.app", ".*\\.amplifyapp\\.com"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      ...stagingHosts.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      })),
    ];
  },
};

export default nextConfig;
