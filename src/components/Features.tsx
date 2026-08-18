"use client";

import { motion } from "framer-motion";
import { Swords, Map, Crown, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Swords className="w-8 h-8 text-white" />,
      color: "from-red-500 to-red-800",
      title: "Real-Time Action",
      description: "Fluid combo systems, perfect dodges, and devastating ultimate attacks. Combat is fast, punishing, and incredibly rewarding.",
    },
    {
      icon: <Map className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-blue-800",
      title: "Vast Open World",
      description: "Explore the shattered floating islands of Aetheria. No loading screens, fully climbable terrain, and hidden secrets everywhere.",
    },
    {
      icon: <Crown className="w-8 h-8 text-white" />,
      color: "from-yellow-400 to-orange-600",
      title: "Epic Boss Raids",
      description: "Team up with up to 4 friends to take down colossal Void beasts. Coordinate elemental combos to break their shields.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-purple-800",
      title: "Elemental Synergy",
      description: "Combine elements to create explosive reactions. Freeze enemies with water and ice, or overload them with fire and lightning.",
    }
  ];

  return (
    <section id="world" className="py-32 relative bg-[#0f3460] overflow-hidden border-t-4 border-b-4 border-[#16213e]">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#e94560]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            A WORLD PREPARED <br/> FOR <span className="text-[#e94560]">WAR</span>
          </h2>
          <p className="text-xl text-gray-300 font-bold border-l-4 border-[#e94560] pl-4">
            The Void is consuming the realm. Only the Chosen can wield the ancestral weapons to push back the darkness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, skewX: -2 }}
              className="relative p-8 overflow-hidden bg-[#1a1a2e] border-2 border-[#16213e] hover:border-[#e94560] transition-colors group transform skew-x-[-5deg]"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.color} opacity-20 rounded-bl-full transition-opacity group-hover:opacity-50`} />
              
              <div className="relative z-10 transform skew-x-[5deg]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-display text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 font-bold leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
