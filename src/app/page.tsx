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
      <section className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Ready to accelerate?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Join thousands of engineering teams building the future on Nexus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 dark:bg-white text-white dark:text-black font-semibold hover:bg-blue-700 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-blue-500/20 dark:shadow-none"
            >
              Get Started for Free
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-transparent text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group shadow-sm dark:shadow-none"
            >
              <span className="hidden konami-target">↑↑↓↓←→←→BA</span>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <Modal />
    </main>
  );
}
