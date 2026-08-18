"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Standard Edition",
      price: "Free",
      color: "from-gray-500 to-gray-700",
      border: "border-gray-600",
      features: ["Full Base Game", "Multiplayer Access", "Weekly Live Events", "Basic Starter Pack"],
      cta: "Download Free",
      popular: false
    },
    {
      name: "Founder's Pack",
      price: "$29.99",
      color: "from-[#e94560] to-red-800",
      border: "border-[#e94560]",
      features: ["Full Base Game", "Exclusive 'Crimson' Skin", "Early Access to New Heroes", "1,000 Premium Currency", "Battle Pass Season 1"],
      cta: "Buy Founder's Pack",
      popular: true
    },
    {
      name: "Ultimate Edition",
      price: "$69.99",
      color: "from-yellow-400 to-yellow-600",
      border: "border-yellow-500",
      features: ["Everything in Founder's Pack", "Exclusive 'Golden' Weapon Set", "5,000 Premium Currency", "Digital Artbook & OST", "Lifetime Battle Pass"],
      cta: "Buy Ultimate Edition",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#1a1a2e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
          >
            PRE-ORDER EDITIONS
          </motion.h2>
          <p className="text-xl text-[#e94560] font-display tracking-widest">
            UNLOCK EXCLUSIVE REWARDS BEFORE LAUNCH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative bg-[#0f3460] border-4 ${plan.border} p-1 transform skew-x-[-2deg] ${plan.popular ? 'md:-mt-8 md:mb-8 shadow-[0_0_30px_rgba(233,69,96,0.3)]' : ''}`}
            >
              <div className="bg-[#1a1a2e] h-full p-8 flex flex-col relative overflow-hidden">
                {plan.popular && (
                  <div className="absolute top-4 right-[-40px] bg-[#e94560] text-white font-display text-xs px-12 py-1 transform rotate-45 shadow-md">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${plan.color}`} />
                
                <h3 className="text-3xl font-display text-white mb-2 mt-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className={`text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                    {plan.price}
                  </span>
                </div>
                
                <ul className="space-y-4 flex-1 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-300 font-bold">
                      <Star className={`w-5 h-5 flex-shrink-0 text-transparent fill-current text-${plan.color.split(' ')[0].replace('from-', '')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
                  className={`w-full py-4 font-display text-xl tracking-widest uppercase transition-all transform hover:scale-105 skew-x-[-5deg] ${plan.popular ? 'bg-[#e94560] text-white shadow-[0_0_15px_rgba(233,69,96,0.5)]' : 'bg-[#16213e] text-white hover:bg-gray-700'}`}
                >
                  <span className="inline-block transform skew-x-[5deg]">{plan.cta}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
