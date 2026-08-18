"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GitBranch, CheckCircle2, CircleDashed, ArrowRight, Activity, Terminal } from "lucide-react";
import { useState, MouseEvent } from "react";

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState("commits");
  
  // Mouse tracking effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="product" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Experience velocity.</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, test, and deploy software, in one beautiful interface. No more context switching.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMouseMove}
          className="group relative rounded-2xl md:rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Glowing Mouse Spotlight (only visible on hover, mostly in dark mode) */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Mac-like header */}
          <div className="h-12 border-b border-gray-200 dark:border-white/10 flex items-center px-4 bg-gray-50 dark:bg-[#111] relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/5 rounded-md border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">acdyon/nexus-core</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[500px] relative z-10 bg-white dark:bg-transparent">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-r border-gray-200 dark:border-white/10 p-4 bg-gray-50/50 dark:bg-[#0d0d0d] flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              <button 
                onClick={() => setActiveTab("commits")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'commits' ? 'bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-sm dark:shadow-none' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
              >
                <GitBranch className="w-4 h-4" />
                Commits
              </button>
              <button 
                onClick={() => setActiveTab("ci")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'ci' ? 'bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-sm dark:shadow-none' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
              >
                <Activity className="w-4 h-4" />
                CI/CD Pipelines
              </button>
              <button 
                onClick={() => setActiveTab("terminal")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'terminal' ? 'bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-sm dark:shadow-none' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
              >
                <Terminal className="w-4 h-4" />
                Console
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-hidden bg-white dark:bg-black relative">
              {activeTab === "commits" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Recent Commits</h3>
                  {[
                    { msg: "feat: implement unified dashboard", author: "johndoe", time: "2m ago", status: "success", hash: "a1b2c3d" },
                    { msg: "fix: resolve memory leak in worker", author: "sarahj", time: "1h ago", status: "success", hash: "e4f5g6h" },
                    { msg: "chore: update dependencies", author: "dependabot", time: "3h ago", status: "building", hash: "i7j8k9l" },
                    { msg: "docs: add premium landing page specs", author: "alexm", time: "5h ago", status: "success", hash: "m1n2o3p" },
                  ].map((commit, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-sm transition-all group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-white border border-gray-200 dark:border-white/10">
                          {commit.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{commit.msg}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {commit.author} committed {commit.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{commit.hash}</span>
                        {commit.status === "success" ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <CircleDashed className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "ci" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pipeline: Production Build</h3>
                    <span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-500/20">Running</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0" />
                    <div className="flex items-center justify-between w-full relative z-10 px-4 md:px-8">
                      {["Build", "Test", "Analyze", "Deploy"].map((step, idx) => (
                        <div key={step} className="flex flex-col items-center gap-3 bg-white dark:bg-black px-2">
                          <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-white dark:bg-black
                            ${idx < 2 ? 'border-green-500' : idx === 2 ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-gray-300 dark:border-gray-700'}`}
                          >
                            {idx < 2 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                             idx === 2 ? <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" /> :
                             <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500" />}
                          </div>
                          <span className={`text-sm font-medium ${idx <= 2 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "terminal" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full font-mono text-sm bg-gray-900 dark:bg-transparent p-4 rounded-xl text-gray-300">
                  <div className="text-green-400 mb-2">$ nexus deploy --production</div>
                  <div className="text-gray-400 mb-1">&gt; Analyzing dependencies...</div>
                  <div className="text-gray-400 mb-1">&gt; Building targets... [24/24]</div>
                  <div className="text-gray-400 mb-1">&gt; Running tests... <span className="text-green-400">PASS</span></div>
                  <div className="text-gray-400 mb-4">&gt; Creating deployment...</div>
                  <div className="text-blue-400 animate-pulse">Waiting for instances to boot...</div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
