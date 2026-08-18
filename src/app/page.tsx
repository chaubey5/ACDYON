"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Customers } from "@/components/Customers";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200">
      <Navbar />
      <Hero />
      <Customers />
      <ProductDemo />
      <Features />
      <Pricing />
      
      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#16213e] border-t-4 border-[#e94560]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#e94560]/20 to-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display tracking-widest text-white mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '2px #0f3460' }}>
            THE VOID AWAITS
          </h2>
          <p className="text-2xl text-gray-300 font-bold mb-10 max-w-2xl mx-auto">
            Pre-register now to unlock the exclusive "Crimson Vanguard" skin at launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="btn-game w-full sm:w-auto text-xl py-5 px-12 shadow-[0_0_30px_rgba(233,69,96,0.6)]"
            >
              PRE-REGISTER NOW
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="btn-game-outline w-full sm:w-auto text-xl py-5 px-12 bg-[#0a192f]"
            >
              <span className="hidden konami-target">↑↑↓↓←→←→BA</span>
              WATCH TRAILER
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <Modal />
    </main>
  );
}
