"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export function Shop() {
  const items = [
    { name: "Fnatic Pro Esports Hoodie", price: "$79.99", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" },
    { name: "Razer Huntsman Mini 60%", price: "$129.99", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80" },
    { name: "Logitech G PRO X Superlight", price: "$159.99", img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80" }
  ];

  return (
    <section id="shop" className="py-24 bg-[#0b0b0f] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-pink-500 font-display font-bold tracking-widest text-lg mb-2">MERCH & GEAR</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-white uppercase">THE SHOP</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="group bg-[#13131a] rounded-2xl border border-white/5 overflow-hidden hover:border-pink-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-display font-bold text-white mb-2">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">{item.price}</span>
                  <button onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))} className="bg-white/10 hover:bg-gradient-pink-purple text-white p-3 rounded-xl transition-all">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
