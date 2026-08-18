import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#07070a] pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <Gamepad2 className="w-8 h-8 text-white" />
              <span className="font-display text-2xl tracking-wide text-white font-bold uppercase">
                GAMEON
              </span>
            </div>
            <p className="text-gray-400 max-w-sm font-semibold">
              The ultimate gaming portal. Join millions of gamers worldwide, compete in tournaments, and win exciting rewards.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-white tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-3 font-semibold text-gray-400">
              <li><a href="#games" className="hover:text-pink-500 transition-colors">Games</a></li>
              <li><a href="#tournaments" className="hover:text-pink-500 transition-colors">Tournaments</a></li>
              <li><a href="#shop" className="hover:text-pink-500 transition-colors">Shop</a></li>
              <li><a href="#blog" className="hover:text-pink-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl text-white tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-3 font-semibold text-gray-400">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-semibold text-sm text-gray-500">
          <p>© 2026 GAMEON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
