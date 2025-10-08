import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Renato Ferreira - Full-Stack Developer",
    template: "%s | Renato Ferreira",
  },
  description:
    "Passionate full-stack developer with a strong frontend focus, exploring the worlds of Blockchain and AI to craft impactful digital products.",
  keywords: [
    "Renato Ferreira",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "React Native",
    "Tailwind CSS",
    "Blockchain Developer",
    "AI Developer",
    "Web3",
    "JavaScript",
  ],
  authors: [{ name: "Renato Ferreira" }],
  creator: "Renato Ferreira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://renatoferreira.dev",
    siteName: "Renato Ferreira",
    title: "Renato Ferreira - Full-Stack Developer",
    description:
      "Passionate full-stack developer with a strong frontend focus, exploring the worlds of Blockchain and AI to craft impactful digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renato Ferreira - Full-Stack Developer",
    description:
      "Passionate full-stack developer with a strong frontend focus, exploring the worlds of Blockchain and AI to craft impactful digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          <div className="min-h-screen bg-black grid grid-rows-[80px_1fr_auto]">
            <Header />

            <div className="p-8 max-w-[800px] w-full mx-auto h-full">
              {children}
            </div>

            <Footer />

            <CommandPalette />
          </div>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#1f2937",
                color: "#fff",
                border: "1px solid #374151",
              },
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
