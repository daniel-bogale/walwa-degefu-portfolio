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
  title: "Waluwa Degefu - Graphics Designer & UI/UX Designer",
  description: "Detail-oriented graphic designer passionate about creating visually appealing content. Skilled in Illustrator, Photoshop, WordPress, and Figma.",
  keywords: ["graphic design", "UI/UX design", "Adobe Illustrator", "Photoshop", "Figma", "WordPress", "brand design"],
  authors: [{ name: "Waluwa Degefu" }],
  creator: "Waluwa Degefu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
