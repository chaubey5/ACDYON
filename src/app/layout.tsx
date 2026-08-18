import type { Metadata } from "next";
import { Nunito, Righteous } from "next/font/google";
import "./globals.css";
import { EasterEgg } from "@/components/EasterEgg";
import { ThemeProvider } from "next-themes";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "AETHERIA | Free-to-Play Action RPG",
  description: "Dive into a vast anime-inspired open world. Master the elements, build your party, and save the floating islands of Aetheria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${righteous.variable} bg-[#1a1a2e] text-white antialiased transition-colors duration-300 selection:bg-[#e94560] selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed inset-0 pointer-events-none bg-scanlines z-50 opacity-20" />
          {children}
          <EasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
