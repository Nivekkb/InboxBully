import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "InboxBully - Protect Your Nervous System",
  description: "A free gift for BillBully members. Smart unsubscribe defense, emotional safety filters, and human-first safety guardrails for your inbox.",
  openGraph: {
    title: "InboxBully - Protect Your Nervous System",
    description: "Smart unsubscribe defense and emotional safety filters for your inbox.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InboxBully Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InboxBully - Protect Your Nervous System",
    description: "Smart unsubscribe defense and emotional safety filters for your inbox.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
