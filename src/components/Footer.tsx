import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-[#e94560] bg-[#0a192f] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-display text-3xl tracking-widest mb-6 flex items-center gap-3 text-white uppercase">
              <div className="w-10 h-10 rounded-full bg-[#e94560] flex items-center justify-center shadow-[0_0_15px_#e94560]">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              Aetheria
            </div>
            <p className="text-gray-400 font-bold max-w-sm">
              The ultimate anime-inspired action RPG. Master the elements, defeat the Void, and save the floating islands.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-white tracking-widest uppercase mb-6">Game</h4>
            <ul className="space-y-3 font-bold text-gray-400">
              <li><a href="#" className="hover:text-[#e94560] transition-colors">World Map</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Characters</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Patch Notes</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl text-white tracking-widest uppercase mb-6">Community</h4>
            <ul className="space-y-3 font-bold text-gray-400">
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Reddit</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t-2 border-[#16213e] flex flex-col md:flex-row items-center justify-between gap-4 font-bold text-sm text-gray-500">
          <p>© 2026 Nexus Studio. Aetheria is a trademark of Nexus Studio.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
