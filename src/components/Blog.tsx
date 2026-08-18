"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const articles = [
    { title: "Season 5 is Here: What's New in PUBG Mobile", date: "OCT 12, 2026", category: "UPDATE", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Pubgbattlegrounds.png" },
    { title: "Developer Diary: Building the World of Cyberpunk 2077", date: "OCT 05, 2026", category: "DEV BLOG", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg" },
  ];

  return (
    <section id="blog" className="py-24 bg-[#0b0b0f] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <h2 className="text-pink-500 font-display font-bold tracking-widest text-lg mb-2">LATEST NEWS</h2>
            <h3 className="text-5xl font-display font-bold text-white uppercase">THE GAMEON BLOG</h3>
          </div>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))} className="mt-6 md:mt-0 text-white font-bold tracking-widest uppercase border-b-2 border-pink-500 pb-1 hover:text-pink-500 transition-colors">
            READ ALL ARTICLES
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="group cursor-pointer bg-[#13131a] rounded-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${article.img})` }} />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold bg-pink-500/20 text-pink-500 px-2 py-1 rounded">{article.category}</span>
                  <span className="text-xs font-bold text-gray-500 tracking-widest">{article.date}</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-pink-500 transition-colors leading-tight">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase mt-auto">
                  READ MORE <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
