import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <ProductDemo />
      <Features />
      
      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to accelerate?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of engineering teams building the future on Nexus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white/20 hover:bg-white/5 transition-colors group">
              {/* Konami code easter egg hint in class name but invisible, maybe a console.log on click? */}
              <span className="hidden konami-target">↑↑↓↓←→←→BA</span>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
