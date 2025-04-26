import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleTagManager } from "@next/third-parties/google"
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

export const metadata: Metadata = {
  title: "Neil Millard",
  description: "Blog, Speaker, Author, Contracting and DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta property="og:title" content="Neil Millard" />
      <meta property="og:description" content="Neil Millard. Blog, Speaker, Author, Contracting and DevOps" />
      <meta property="og:url" content="https://www.neilmillard.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Neil Millard" />
      <title>Neil Millard, Speaker, Author, DevOps</title>
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <NavBar/>
    <div className='h-10'></div>
    {children}
    <Footer/>
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </body>
    </html>
  );
}
