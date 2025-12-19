import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

// Using Geist as fallback for Open Sauce One (similar characteristics)
const openSauce = Geist({
  variable: "--font-open-sauce",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://canvasandpixels.com'),
  title: "Canvas&Pixels - Where Ideas Come to Life | Ontario, Canada",
  description: "A software studio based in Ontario, Canada, helping businesses in North America and Europe build innovative products. Expert guidance through every stage of product development. Serving USD and Euro clients.",
  keywords: ["software studio", "product design", "mobile development", "web development", "AI solutions", "software development", "Ontario", "Canada", "North America", "Europe", "USD", "EUR"],
  authors: [{ name: "Canvas&Pixels" }],
  openGraph: {
    title: "Canvas&Pixels - Where Ideas Come to Life",
    description: "Ontario-based software studio helping businesses in North America and Europe build innovative products that drive impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas&Pixels - Where Ideas Come to Life",
    description: "Ontario-based software studio helping businesses in North America and Europe build innovative products.",
  },
};

import Analytics from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geist.variable} ${playfair.variable} ${openSauce.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}


