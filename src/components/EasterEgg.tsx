"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const konami = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
      "b", "a"
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setUnlocked(true);
          konamiIndex = 0;
          setTimeout(() => setUnlocked(false), 5000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-2xl border border-white/20 text-center"
        >
          <div className="text-4xl mb-2">🚀</div>
          <h3 className="font-bold text-lg mb-1 text-white">God Mode Unlocked</h3>
          <p className="text-sm text-white/80">You found the secret! Deploying at lightspeed.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
