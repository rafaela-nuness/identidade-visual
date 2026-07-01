import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Architectural Editorial Foundation",
    template: "%s | Portfolio",
  },
  description: "A premium, typography-centered personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Focuses on whitespace and clean layouts.",
  keywords: ["portfolio", "editorial", "minimal", "nextjs", "typescript", "tailwind"],
  authors: [{ name: "Creative Developer" }],
  openGraph: {
    title: "Portfolio — Architectural Editorial Foundation",
    description: "A premium typography-centered personal portfolio with a clean, editorial layout.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Architectural Editorial Foundation",
    description: "A premium typography-centered personal portfolio with a clean, editorial layout.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-bg text-fg min-h-full flex flex-col font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

