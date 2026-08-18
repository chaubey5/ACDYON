"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Command, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
            <Command className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Nexus</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">Product</a>
          <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">Features</a>
          <a href="#customers" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">Customers</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <a href="#login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Log in</a>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm"
          >
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button 
            className="text-gray-600 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 py-4 px-6 md:hidden flex flex-col gap-4 shadow-lg"
        >
          <a href="#product" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#features" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#customers" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Customers</a>
          <a href="#pricing" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <div className="h-px bg-gray-200 dark:bg-white/10 w-full my-2"></div>
          <a href="#login" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Log in</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-modal')); }}
            className="text-base font-medium bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full mt-2 shadow-sm"
          >
            Get Started
          </button>
        </motion.div>
      )}
    </header>
  );
}
