"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Games() {
  const allGames = [
    { title: "COUNTER-STRIKE 2", desc: "The next era of the world's premier tactical shooter.", img: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg", tag: "TACTICAL" },
    { title: "PUBG: BATTLEGROUNDS", desc: "Land, loot, survive. The original battle royale experience.", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Pubgbattlegrounds.png", tag: "SURVIVAL" },
    { title: "APEX LEGENDS", desc: "Master an expanding roster of legendary characters.", img: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg", tag: "SHOOTER" },
    { title: "CYBERPUNK 2077", desc: "An open-world, action-adventure RPG set in Night City.", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", tag: "RPG" }
  ];

  return (
    <section id="games" className="py-24 bg-[#0b0b0f] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-pink-500 font-display font-bold tracking-widest text-lg mb-2">OUR CATALOG</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-white uppercase">FEATURED GAMES</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allGames.map((game, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="group cursor-pointer relative rounded-2xl overflow-hidden h-[400px]"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${game.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded w-fit mb-4 uppercase tracking-widest">{game.tag}</span>
                <h4 className="text-3xl font-display font-bold text-white mb-2">{game.title}</h4>
                <p className="text-gray-300 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 line-clamp-2 mb-4">
                  {game.desc}
                </p>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-pink-500 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
