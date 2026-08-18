"use client";

import { motion } from "framer-motion";
import { Search, Trophy, Users, Calendar } from "lucide-react";

export function Tournaments() {
  const tournaments = [
    { title: "CS:GO 2 Major Championship", game: "CS:GO 2", prize: "$1,250,000", date: "Oct 15 - 20", status: "Registration Open" },
    { title: "Apex Legends Global Series", game: "Apex Legends", prize: "$2,000,000", date: "Oct 25 - 30", status: "Starting Soon" },
    { title: "PUBG Mobile World Invitational", game: "PUBG Mobile", prize: "$3,000,000", date: "Nov 5 - 10", status: "Qualifiers" },
  ];

  return (
    <section id="tournaments" className="py-24 bg-[#0b0b0f] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-pink-500 font-display font-bold tracking-widest text-lg mb-2">COMPETITIVE SCENE</h2>
            <h3 className="text-5xl font-display font-bold text-white uppercase">UPCOMING TOURNAMENTS</h3>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            className="mt-6 md:mt-0 text-white font-bold tracking-widest uppercase border-b-2 border-pink-500 pb-1 hover:text-pink-500 transition-colors"
          >
            VIEW ALL EVENTS
          </motion.button>
        </div>

        <div className="flex flex-col gap-6">
          {tournaments.map((tourney, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-between bg-[#13131a] p-8 rounded-2xl border border-white/5 hover:border-pink-500/50 transition-colors group"
            >
              <div className="flex-1 mb-6 md:mb-0">
                <h4 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">{tourney.title}</h4>
                <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-pink-500" /> {tourney.game}</span>
                  <span className="flex items-center gap-2"><Search className="w-4 h-4 text-pink-500" /> {tourney.prize} PRIZE POOL</span>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div className="text-left md:text-right flex-1 md:flex-none">
                  <p className="text-white font-bold text-lg">{tourney.date}</p>
                  <p className="text-pink-500 font-bold text-sm tracking-widest uppercase">{tourney.status}</p>
                </div>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))} className="bg-white/5 hover:bg-gradient-pink-purple text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-all">
                  JOIN
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
