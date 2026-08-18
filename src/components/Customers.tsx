"use client";

import { motion } from "framer-motion";

export function Customers() {
  const companies = [
    "IGN: 9.5/10", "PolyGon: Must Play", "GameSpot: Masterpiece", "PCGamer: 94%", "Famitsu: 38/40", "Kotaku: Incredible"
  ];

  return (
    <section id="news" className="py-12 bg-[#0f3460] border-y-4 border-[#e94560] overflow-hidden">
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f3460] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f3460] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...companies, ...companies].map((company, idx) => (
            <div key={idx} className="text-3xl font-display text-white opacity-80 select-none tracking-widest uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
