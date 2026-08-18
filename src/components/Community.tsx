"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart, Share2 } from "lucide-react";

export function Community() {
  const posts = [
    { user: "@Shroud", content: "Just hit Global Elite in CS:GO 2! The new smoke mechanics are absolutely insane! 💨🔫", likes: "142K", type: "Twitter" },
    { user: "Mortal", content: "Looking for a squad in PUBG Mobile for the upcoming tournament. PM me!", likes: "34K", type: "Discord" },
    { user: "@ImperialHal", content: "Apex Legends is easily the best movement shooter of the decade. Period.", likes: "89K", type: "Twitter" },
  ];

  return (
    <section id="community" className="py-24 bg-[#0b0b0f] relative overflow-hidden border-t border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-pink-500 font-display font-bold tracking-widest text-lg mb-2">JOIN THE SQUAD</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-white uppercase">COMMUNITY HUB</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="bg-[#13131a] p-8 rounded-2xl border border-white/5 flex flex-col h-full hover:-translate-y-2 transition-transform cursor-pointer"
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center font-display font-bold text-lg text-white">
                    {post.user.charAt(post.user.startsWith('@') ? 1 : 0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{post.user}</h4>
                    <p className="text-xs text-pink-500 uppercase tracking-widest font-bold">{post.type}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 font-bold leading-relaxed mb-8 flex-1">{post.content}</p>
              <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2 hover:text-pink-500 transition-colors"><Heart className="w-4 h-4" /> {post.likes}</span>
                <span className="flex items-center gap-2 hover:text-blue-500 transition-colors"><MessageSquare className="w-4 h-4" /> Reply</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors ml-auto"><Share2 className="w-4 h-4" /></span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))} className="bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase py-4 px-10 rounded-xl hover:bg-white/10 transition-colors">
            JOIN DISCORD SERVER
          </button>
        </motion.div>
      </div>
    </section>
  );
}
