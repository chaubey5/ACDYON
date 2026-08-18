import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EasterEgg } from "@/components/EasterEgg";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus | The Operating System for Modern Engineering Teams",
  description: "Integrate your code, CI/CD, and issues into a single unified platform. Ship faster, together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-white dark:bg-black text-gray-900 dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <EasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
