import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus | The Operating System for Modern Engineering Teams",
  description: "Integrate your code, CI/CD, and issues into a single unified platform. Ship faster, together.",
};

import { EasterEgg } from "@/components/EasterEgg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-black text-white antialiased`}>
        {children}
        <EasterEgg />
      </body>
    </html>
  );
}
