"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Gamepad2 } from "lucide-react";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSuccess(false);
    };
    window.addEventListener("open-modal", handleOpen);
    return () => window.removeEventListener("open-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50, skewX: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0, skewX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50, skewX: -5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md bg-[#16213e] border-4 border-[#e94560] p-1 shadow-[0_0_50px_rgba(233,69,96,0.5)] overflow-hidden"
          >
            <div className="bg-[#0f3460] h-full relative">
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-30 z-0" />

              <div className="flex justify-between items-center p-6 border-b-2 border-[#1a1a2e] relative z-10 bg-[#0a192f]">
                <h3 className="text-2xl font-display text-white uppercase tracking-widest flex items-center gap-3">
                  <Gamepad2 className="text-[#e94560]" />
                  {success ? "MISSION ACCOMPLISHED" : "PRE-REGISTER"}
                </h3>
                <button 
                  onClick={() => !loading && setIsOpen(false)}
                  className="text-gray-400 hover:text-[#e94560] transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 relative z-10">
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#e94560] mb-6 drop-shadow-[0_0_15px_rgba(233,69,96,0.8)]" />
                    <p className="text-2xl font-display text-white mb-2">YOU ARE IN!</p>
                    <p className="text-gray-400 font-bold">Check your email for the beta client download link.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs font-display text-gray-400 uppercase tracking-widest mb-2">Agent Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="player@world.com"
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-2 border-[#0a192f] text-white focus:outline-none focus:border-[#e94560] transition-colors font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display text-gray-400 uppercase tracking-widest mb-2">Select Platform</label>
                      <select className="w-full px-4 py-3 bg-[#1a1a2e] border-2 border-[#0a192f] text-white focus:outline-none focus:border-[#e94560] transition-colors font-bold appearance-none">
                        <option>PC (Windows)</option>
                        <option>PlayStation 5</option>
                        <option>Mobile (iOS/Android)</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="btn-game w-full mt-4 flex items-center justify-center py-4"
                    >
                      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "JOIN THE VANGUARD"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
