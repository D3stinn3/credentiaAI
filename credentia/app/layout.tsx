import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://credentia.ai"),
  title: "Credentia AI™ | Intelligent Healthcare Automation",
  description:
    "Credentia AI™ modernizes healthcare operations with intelligent automation. Sentinel AI™ transforms behavioral healthcare delivery—reducing burnout and improving access at enterprise scale.",
  openGraph: {
    title: "Credentia AI™ | Intelligent Healthcare Automation",
    description:
      "Human-centered AI for healthcare operations, prior authorization, utilization management, and behavioral health transformation.",
    images: [{ url: "/images/Logo.png", width: 1200, height: 630, alt: "Credentia AI" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSans.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
