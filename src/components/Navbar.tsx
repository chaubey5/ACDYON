"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Menu, X, Search } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", href: "#", active: true },
    { name: "GAMES", href: "#games", active: false },
    { name: "TOURNAMENTS", href: "#tournaments", active: false },
    { name: "COMMUNITY", href: "#community", active: false },
    { name: "BLOG", href: "#blog", active: false },
    { name: "SHOP", href: "#shop", active: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0f]/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <Gamepad2 className="w-8 h-8 text-white" />
          <span className="font-display text-2xl tracking-wide text-white font-bold uppercase">
            GAMEON
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                link.active ? "text-pink-500" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a href="#login" className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase transition-colors">
            LOGIN
          </a>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="bg-gradient-pink-purple text-white text-sm font-bold tracking-wider uppercase py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all hover:-translate-y-0.5"
          >
            SIGN UP
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0b0b0f] border-t border-white/10 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`text-lg font-semibold tracking-wider uppercase ${
                    link.active ? "text-pink-500" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-2"></div>
              <a href="#login" className="text-lg font-semibold tracking-wider text-gray-300 uppercase" onClick={() => setMobileMenuOpen(false)}>Login</a>
              <button 
                onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-modal')); }}
                className="bg-gradient-pink-purple text-white text-lg font-bold tracking-wider uppercase py-3 rounded-lg w-full"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
