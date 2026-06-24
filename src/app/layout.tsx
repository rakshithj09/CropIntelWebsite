import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CropIntel — Diagnose crop disease from a single photo",
  description:
    "Point your phone at a leaf. CropIntel names the disease, rates the severity, and tells you what to do — in seconds, even offline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Satoshi is loaded at runtime; system fonts keep builds network-free. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
