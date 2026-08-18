"use client";

import { motion } from "framer-motion";

export function Customers() {
  const companies = [
    "ACME Corp", "Globex", "Soylent", "Initech", "Umbrella", "Massive Dynamic", "Stark Ind.", "Wayne Ent."
  ];

  return (
    <section id="customers" className="py-20 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by fast-moving teams</p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...companies, ...companies].map((company, idx) => (
            <div key={idx} className="text-2xl font-bold text-gray-300 dark:text-gray-700 select-none">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
