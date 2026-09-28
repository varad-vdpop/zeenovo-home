import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: [
    { path: "../../public/fonts/plus-jakarta-sans-400.ttf", weight: "400" },
    { path: "../../public/fonts/plus-jakarta-sans-500.ttf", weight: "500" },
    { path: "../../public/fonts/plus-jakarta-sans-600.ttf", weight: "600" },
    { path: "../../public/fonts/plus-jakarta-sans-700.ttf", weight: "700" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const manrope = localFont({
  src: [
    { path: "../../public/fonts/manrope-400.ttf", weight: "400" },
    { path: "../../public/fonts/manrope-500.ttf", weight: "500" },
    { path: "../../public/fonts/manrope-600.ttf", weight: "600" },
    { path: "../../public/fonts/manrope-700.ttf", weight: "700" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZeeNovo — Better pharmacy care, every day",
  description:
    "World-class clinical tools, smart pharmacy business solutions, and the support to build your dream pharmacy practice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
