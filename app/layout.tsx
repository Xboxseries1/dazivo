import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dazivo.vercel.app"),

  title: {
    default: "DAZIVO — Website-uri care vând.",
    template: "%s | DAZIVO",
  },

  description:
    "DAZIVO construiește website-uri moderne, rapide și memorabile pentru afaceri care vor să arate profesionist și să atragă mai mulți clienți online.",

  keywords: [
    "web design",
    "website",
    "creare site",
    "site prezentare",
    "web development",
    "magazin online",
    "landing page",
    "redesign website",
    "DAZIVO",
  ],

  authors: [
    {
      name: "DAZIVO",
    },
  ],

  creator: "DAZIVO",

  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://dazivo.vercel.app",
    siteName: "DAZIVO",
    title: "DAZIVO — Website-uri care vând.",
    description:
      "Website-uri moderne pentru afaceri care vor să arate profesionist și să transforme vizitatorii în clienți.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DAZIVO — Website-uri care vând.",
    description:
      "Construim website-uri moderne pentru afaceri care vor să crească online.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}