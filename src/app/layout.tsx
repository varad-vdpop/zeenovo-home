import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "./homepage-fidelity.css";
import "./cta-interactions.css";

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

const geistFooter = localFont({
  src: "../../public/fonts/geist-medium.woff2",
  weight: "500",
  variable: "--font-geist-footer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZeeNovo | Clinical, compliance and booking software for Canadian pharmacies",
  description:
    "Guided clinical workflows, incident reporting, a booking website and patient self-service for Canadian pharmacies. One platform, one login.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${manrope.variable} ${geistFooter.variable}`}>
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
