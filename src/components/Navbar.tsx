"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Menu, X } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b-4 ${
        scrolled
          ? "bg-[#16213e]/90 backdrop-blur-md border-[#e94560] py-2"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#e94560] flex items-center justify-center shadow-[0_0_15px_#e94560]">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-display text-2xl tracking-widest text-white uppercase drop-shadow-[0_2px_2px_rgba(233,69,96,0.5)]">
            Aetheria
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#world" className="text-sm font-display tracking-widest text-gray-300 hover:text-[#e94560] transition-colors uppercase">World</a>
          <a href="#characters" className="text-sm font-display tracking-widest text-gray-300 hover:text-[#e94560] transition-colors uppercase">Characters</a>
          <a href="#combat" className="text-sm font-display tracking-widest text-gray-300 hover:text-[#e94560] transition-colors uppercase">Combat</a>
          <a href="#news" className="text-sm font-display tracking-widest text-gray-300 hover:text-[#e94560] transition-colors uppercase">News</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="btn-game text-sm py-2 px-6"
          >
            Play Free Now
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            className="absolute top-full left-0 right-0 bg-[#0f3460] border-b-4 border-[#e94560] overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              <a href="#world" className="text-xl font-display text-center text-white hover:text-[#e94560]" onClick={() => setMobileMenuOpen(false)}>World</a>
              <a href="#characters" className="text-xl font-display text-center text-white hover:text-[#e94560]" onClick={() => setMobileMenuOpen(false)}>Characters</a>
              <a href="#combat" className="text-xl font-display text-center text-white hover:text-[#e94560]" onClick={() => setMobileMenuOpen(false)}>Combat</a>
              <a href="#news" className="text-xl font-display text-center text-white hover:text-[#e94560]" onClick={() => setMobileMenuOpen(false)}>News</a>
              <button 
                onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-modal')); }}
                className="btn-game w-full"
              >
                Play Free Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
