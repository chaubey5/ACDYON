"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0f3460]">
      {/* Anime-style massive background gradient/sunburst */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,69,96,0.4)_0%,transparent_70%)] opacity-60 mix-blend-screen" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(233,69,96,0.1) 10deg, transparent 20deg, rgba(233,69,96,0.1) 30deg, transparent 40deg, rgba(233,69,96,0.1) 50deg, transparent 60deg, rgba(233,69,96,0.1) 70deg, transparent 80deg, rgba(233,69,96,0.1) 90deg, transparent 100deg, rgba(233,69,96,0.1) 110deg, transparent 120deg, rgba(233,69,96,0.1) 130deg, transparent 140deg, rgba(233,69,96,0.1) 150deg, transparent 160deg, rgba(233,69,96,0.1) 170deg, transparent 180deg, rgba(233,69,96,0.1) 190deg, transparent 200deg, rgba(233,69,96,0.1) 210deg, transparent 220deg, rgba(233,69,96,0.1) 230deg, transparent 240deg, rgba(233,69,96,0.1) 250deg, transparent 260deg, rgba(233,69,96,0.1) 270deg, transparent 280deg, rgba(233,69,96,0.1) 290deg, transparent 300deg, rgba(233,69,96,0.1) 310deg, transparent 320deg, rgba(233,69,96,0.1) 330deg, transparent 340deg, rgba(233,69,96,0.1) 350deg, transparent 360deg)'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          className="relative inline-block mb-6"
        >
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 text-[#f9a826]"
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display text-white tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '3px #e94560' }}>
            AETHERIA
          </h1>
          <h2 className="text-3xl md:text-5xl font-display text-[#f9a826] mt-[-10px] md:mt-[-20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1px #000' }}>
            ECHOES OF THE VOID
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-white mb-10 max-w-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/30 p-4 rounded-xl backdrop-blur-sm border-l-4 border-[#e94560]"
        >
          Master the elements. Build your ultimate anime squad. Save the floating islands from the encroaching darkness.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="btn-game w-full sm:w-auto flex items-center justify-center gap-3 text-xl py-4 px-10 shadow-[0_0_30px_rgba(233,69,96,0.6)]"
          >
            <Download className="w-6 h-6" />
            Download PC Client
          </button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="btn-game-outline w-full sm:w-auto flex items-center justify-center gap-3 text-xl py-4 px-10 backdrop-blur-md bg-[#16213e]/50"
          >
            Pre-Register Mobile
          </button>
        </motion.div>
      </div>

      {/* Stylized slanted bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#1a1a2e] transform skew-y-2 origin-bottom-left z-20 border-t-4 border-[#e94560]"></div>
    </section>
  );
}
