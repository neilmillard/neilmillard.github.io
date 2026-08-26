import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google"
import {NavBar} from "@/app/components/NavBar";
import {Footer} from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.neilmillard.com";
const DEFAULT_OG_IMAGE = "/img/2024-03-14-DevOps_Excellence_Awards_NeilMillard_Large.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Neil Millard",
  description: "Neil Millard is a DevOps speaker, author and consultant helping engineering teams build automated, resilient cloud infrastructure and ship with confidence.",
  openGraph: {
    title: "Neil Millard",
    description: "Neil Millard. Blog, Speaker, Author, Contracting and DevOps",
    url: SITE_URL,
    siteName: "Neil Millard",
    type: "website",
    images: [{url: DEFAULT_OG_IMAGE, width: 1024, height: 683}],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <NavBar/>
    <div className='h-10'></div>
    {children}
    <Footer/>
    <GoogleAnalytics gaId="G-C5CKFSXQSX" />
    </body>
    </html>
  );
}
