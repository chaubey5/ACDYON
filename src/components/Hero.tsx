"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play, Users, Trophy, Gamepad2, ArrowRight } from "lucide-react";

export function Hero() {
  const games = [
    { title: "CS:GO 2", genre: "TACTICAL SHOOTER", img: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg" },
    { title: "PUBG: BATTLEGROUNDS", genre: "BATTLE ROYALE", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Pubgbattlegrounds.png" },
    { title: "APEX LEGENDS", genre: "HERO SHOOTER", img: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg" }
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0f] overflow-hidden pt-32 pb-40">
      {/* Ambient Looping Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none mix-blend-screen">
        <iframe 
          src="https://www.youtube.com/embed/8X2kIfS6fb8?autoplay=1&mute=1&loop=1&playlist=8X2kIfS6fb8&controls=0&showinfo=0&rel=0&modestbranding=1" 
          className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Right Social Sidebar */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pink-500 font-display font-bold tracking-widest text-lg mb-4"
          >
            PLAY. COMPETE. WIN.
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            <span className="text-white block">THE ULTIMATE</span>
            <span className="text-gradient-pink-blue block">GAMING EXPERIENCE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Join millions of gamers worldwide, compete in tournaments, and win exciting rewards.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#games"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-pink-purple text-white font-bold tracking-widest uppercase py-4 px-8 rounded-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
            >
              EXPLORE GAMES
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#tournaments"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white font-bold tracking-widest uppercase py-4 px-8 rounded-xl hover:bg-white/5 transition-all"
            >
              JOIN TOURNAMENT
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Hero Image / Character */}
        <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative w-full h-full"
          >
            {/* Hexagon Neon Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-4 border-pink-500 rounded-[60px] transform rotate-45 shadow-[0_0_50px_rgba(236,72,153,0.5)] opacity-50 pointer-events-none z-0" />
            
            {/* Demo Video playing permanently in the hexagon cutout */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl border border-white/10" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <iframe 
                src="https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&mute=1&loop=1&playlist=e_E9W2vsRbQ&controls=0&showinfo=0&rel=0&modestbranding=1" 
                className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 pointer-events-none"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
              <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay pointer-events-none" />
            </div>

            <div className="absolute bottom-10 right-0 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 cursor-pointer hover:bg-black/70 transition-colors" onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}>
              <span className="font-display tracking-widest text-sm font-bold uppercase">WATCH TRAILER</span>
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                <Play className="w-4 h-4 text-white ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlapping Bottom Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 flex flex-col xl:flex-row gap-6 relative z-20">
        
        {/* Game Cards */}
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {games.map((game, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="flex-1 bg-[#13131a] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer hover:border-pink-500/50 transition-colors"
              onClick={() => window.dispatchEvent(new CustomEvent('open-modal'))}
            >
              <div className="h-40 w-full overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url(${game.img})` }} 
                />
              </div>
              <div className="p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-pink-500 transition-colors">{game.title}</h3>
                  <p className="text-pink-600 text-xs font-bold tracking-widest uppercase">{game.genre}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="xl:w-[500px] bg-[#13131a] rounded-2xl border border-pink-500/30 p-8 flex items-center justify-between"
        >
          <div className="flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-pink-500 mb-3" />
            <h4 className="font-display text-3xl font-bold mb-1">2M+</h4>
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">PLAYERS</p>
          </div>
          <div className="w-px h-16 bg-white/10" />
          <div className="flex flex-col items-center text-center">
            <Trophy className="w-8 h-8 text-pink-500 mb-3" />
            <h4 className="font-display text-3xl font-bold mb-1">150+</h4>
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">TOURNAMENTS</p>
          </div>
          <div className="w-px h-16 bg-white/10" />
          <div className="flex flex-col items-center text-center">
            <Gamepad2 className="w-8 h-8 text-pink-500 mb-3" />
            <h4 className="font-display text-3xl font-bold mb-1">500+</h4>
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">GAMES</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
