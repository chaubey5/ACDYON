import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { EasterEgg } from "@/components/EasterEgg";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "GAMEON | The Ultimate Gaming Experience",
  description: "Join millions of gamers worldwide, compete in tournaments, and win exciting rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} bg-[#0b0b0f] text-white antialiased selection:bg-pink-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <EasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
