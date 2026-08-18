"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For small teams starting their journey.",
      price: annual ? "$0" : "$0",
      features: ["Up to 3 users", "Basic CI/CD minutes", "Community support", "Shared runners"],
      cta: "Start free",
      popular: false
    },
    {
      name: "Pro",
      description: "For growing teams that need more power.",
      price: annual ? "$24" : "$29",
      features: ["Up to 20 users", "Unlimited CI/CD minutes", "Priority support", "Dedicated runners", "Advanced analytics"],
      cta: "Start 14-day trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with strict requirements.",
      price: "Custom",
      features: ["Unlimited users", "Custom CI/CD capacity", "24/7 phone support", "Self-hosted option", "SSO & SAML", "SOC2 Compliance"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Start for free, upgrade when you need to.
          </p>
          
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <button 
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-white dark:bg-white/10 shadow-sm text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-white dark:bg-white/10 shadow-sm text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
            >
              Annually <span className="text-xs text-blue-600 dark:text-blue-400 ml-1">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10 bg-white dark:bg-[#0a0a0a]' : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400 text-sm">/user/month</span>}
              </div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
                className={`w-full py-3 rounded-full font-medium transition-colors mb-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'}`}
              >
                {plan.cta}
              </button>
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
