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
  title: "Conqueror Foundation - Empowering Lives, One Step at a Time",
  description: "Join Conqueror Foundation in providing essential support, resources, and advocacy for individuals with sickle cell disease. Together, we make a difference.",
  keywords: [
    "Healthcare",
    "Sickle Cell Disease",
    "Support",
    "Advocacy",
    "Counseling",
    "Financial Aid",
    "Blood Drives",
    "Clinical Trials",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow"
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
        {children}
      </body>
    </html>
  );
}
