import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SeoSchema from "./seo-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dazivoweb.com"),

  title: {
    default: "DAZIVO | Web Design & Creare Site-uri",
    template: "%s | DAZIVO",
  },

  description:
  "DAZIVO creează website-uri moderne, rapide și personalizate pentru afaceri din România. Web design, site-uri de prezentare, landing pages, magazine online și redesign.",
  keywords: [
  "web design România",
  "creare site România",
  "creare website România",
  "web development România",
  "site de prezentare",
  "creare site de prezentare",
  "landing page",
  "magazin online",
  "web design",
  "dezvoltare website",
  "redesign website",
  "DAZIVO",
],

  authors: [
    {
      name: "DAZIVO",
    },
  ],

  creator: "DAZIVO",
  publisher: "DAZIVO",

  alternates: {
    canonical: "https://dazivoweb.com/",
  },

  
  openGraph: {
  type: "website",
  locale: "ro_RO",
  url: "https://dazivoweb.com/",
  siteName: "DAZIVO",
  title: "DAZIVO | Web Design & Creare Site-uri",
  description:
    "Website-uri moderne, rapide și personalizate pentru afaceri care vor să crească online.",
  images: [
    {
      url: "/dazivo-og-image.png",
      width: 1200,
      height: 630,
      alt: "DAZIVO — Web Design & Creare Site-uri",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "DAZIVO | Web Design & Creare Site-uri",
  description:
    "Creăm website-uri moderne și rapide pentru afaceri din România.",
  images: ["/dazivo-og-image.png"],
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <SeoSchema />
      </body>
    </html>
  );
}
