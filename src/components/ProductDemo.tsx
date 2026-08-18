"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flame, Droplets, Wind } from "lucide-react";

export function ProductDemo() {
  const [activeChar, setActiveChar] = useState(0);
  
  const characters = [
    {
      name: "Kaelen",
      title: "The Crimson Vanguard",
      element: "Fire",
      icon: <Flame className="w-5 h-5" />,
      color: "from-red-600 to-orange-500",
      desc: "A hot-headed swordsman with a burning desire to protect his friends. Specializes in close-quarters burst damage.",
      stats: { atk: 95, def: 60, spd: 80 }
    },
    {
      name: "Lyra",
      title: "Azure Tides",
      element: "Water",
      icon: <Droplets className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-400",
      desc: "Graceful and elegant. Lyra uses hydro-magic to heal allies and trap enemies in crushing whirlpools.",
      stats: { atk: 65, def: 85, spd: 70 }
    },
    {
      name: "Zephyr",
      title: "Gale Walker",
      element: "Wind",
      icon: <Wind className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-400",
      desc: "Fastest rogue in the floating islands. He strikes unseen and vanishes before the enemy hits the ground.",
      stats: { atk: 80, def: 40, spd: 100 }
    }
  ];

  return (
    <section id="characters" className="py-32 relative bg-[#1a1a2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
          >
            CHOOSE YOUR FIGHTER
          </motion.h2>
          <div className="w-24 h-2 bg-[#e94560] mx-auto transform skew-x-[-20deg]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          {/* Character Selection Menu */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3">
            {characters.map((char, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05, x: 10 }}
                onClick={() => setActiveChar(idx)}
                className={`relative overflow-hidden p-6 text-left border-2 transform skew-x-[-10deg] transition-all duration-300 ${activeChar === idx ? 'border-[#e94560] shadow-[0_0_20px_rgba(233,69,96,0.4)]' : 'border-[#0f3460] bg-[#16213e]/80 hover:border-gray-500'}`}
              >
                {activeChar === idx && (
                  <motion.div layoutId="activeHighlight" className={`absolute inset-0 bg-gradient-to-r ${char.color} opacity-20`} />
                )}
                <div className="relative z-10 transform skew-x-[10deg] flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-white">{char.name}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{char.title}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${char.color} shadow-lg`}>
                    {char.icon}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Character Display Area */}
          <div className="w-full lg:w-2/3 h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChar}
                initial={{ opacity: 0, x: 100, skewX: -10 }}
                animate={{ opacity: 1, x: 0, skewX: 0 }}
                exit={{ opacity: 0, x: -100, skewX: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 rounded-3xl bg-[#16213e] border-4 border-[#0f3460] p-8 overflow-hidden shadow-2xl flex flex-col justify-center"
              >
                {/* Background Element Logo */}
                <div className={`absolute -right-20 -bottom-20 w-[400px] h-[400px] opacity-10 bg-gradient-to-br ${characters[activeChar].color} rounded-full blur-[100px]`} />
                
                <div className="relative z-10 max-w-lg">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r ${characters[activeChar].color} mb-6 transform skew-x-[-15deg]`}
                  >
                    <div className="transform skew-x-[15deg] text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      {characters[activeChar].icon}
                      {characters[activeChar].element} Element
                    </div>
                  </motion.div>
                  
                  <h3 className="text-5xl font-display text-white mb-4 drop-shadow-md">{characters[activeChar].name}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed font-bold mb-10 border-l-4 border-white pl-4">
                    {characters[activeChar].desc}
                  </p>

                  <div className="space-y-4">
                    {Object.entries(characters[activeChar].stats).map(([stat, val], i) => (
                      <div key={stat} className="flex items-center gap-4">
                        <span className="w-12 text-sm font-bold uppercase text-gray-400">{stat}</span>
                        <div className="flex-1 h-4 bg-[#0f3460] rounded-full overflow-hidden transform skew-x-[-10deg]">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${val}%` }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, type: "spring" }}
                            className={`h-full bg-gradient-to-r ${characters[activeChar].color}`}
                          />
                        </div>
                        <span className="w-8 text-right font-display text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
