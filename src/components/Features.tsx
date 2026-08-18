"use client";

import { motion } from "framer-motion";
import { Zap, Shield, GitMerge, LayoutGrid } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Instant Previews",
      description: "Every branch gets a live preview environment instantly. Review code in context, not just text.",
    },
    {
      icon: <GitMerge className="w-6 h-6 text-blue-400" />,
      title: "Automated Merging",
      description: "Define strict merge criteria. When tests pass and reviews are approved, Nexus merges automatically.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Enterprise Security",
      description: "SOC2 compliant, SSO, and granular role-based access control built in from day one.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-purple-400" />,
      title: "Unified Workflow",
      description: "Stop jumping between your git host, CI provider, and issue tracker. It's all connected here.",
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Designed for speed.</h2>
            <p className="text-gray-400 text-lg">
              Nexus eliminates the friction between writing code and shipping it. We rebuilt the developer lifecycle from the ground up to be insanely fast.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
