"use client";

import { motion } from "framer-motion";
import { GitBranch, CheckCircle2, CircleDashed, Github, ArrowRight, Activity, Terminal } from "lucide-react";
import { useState } from "react";

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState("commits");

  return (
    <section id="product" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Experience velocity.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, test, and deploy software, in one beautiful interface. No more context switching.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl md:rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
        >
          {/* Mac-like header */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 bg-[#111]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5">
              <Github className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400 font-mono">acdyon/nexus-core</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-r border-white/10 p-4 bg-[#0d0d0d] flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              <button 
                onClick={() => setActiveTab("commits")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'commits' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <GitBranch className="w-4 h-4" />
                Commits
              </button>
              <button 
                onClick={() => setActiveTab("ci")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'ci' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Activity className="w-4 h-4" />
                CI/CD Pipelines
              </button>
              <button 
                onClick={() => setActiveTab("terminal")}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'terminal' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Terminal className="w-4 h-4" />
                Console
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-hidden bg-black relative">
              {activeTab === "commits" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium mb-2">Recent Commits</h3>
                  {[
                    { msg: "feat: implement unified dashboard", author: "johndoe", time: "2m ago", status: "success", hash: "a1b2c3d" },
                    { msg: "fix: resolve memory leak in worker", author: "sarahj", time: "1h ago", status: "success", hash: "e4f5g6h" },
                    { msg: "chore: update dependencies", author: "dependabot", time: "3h ago", status: "building", hash: "i7j8k9l" },
                    { msg: "docs: add premium landing page specs", author: "alexm", time: "5h ago", status: "success", hash: "m1n2o3p" },
                  ].map((commit, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold border border-white/10">
                          {commit.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors">{commit.msg}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {commit.author} committed {commit.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-gray-500">{commit.hash}</span>
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
                    <h3 className="text-lg font-medium">Pipeline: Production Build</h3>
                    <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">Running</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
                    <div className="flex items-center justify-between w-full relative z-10 px-8">
                      {["Build", "Test", "Analyze", "Deploy"].map((step, idx) => (
                        <div key={step} className="flex flex-col items-center gap-3">
                          <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-black
                            ${idx < 2 ? 'border-green-500' : idx === 2 ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-gray-700'}`}
                          >
                            {idx < 2 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                             idx === 2 ? <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" /> :
                             <div className="w-2 h-2 rounded-full bg-gray-500" />}
                          </div>
                          <span className={`text-sm font-medium ${idx <= 2 ? 'text-white' : 'text-gray-500'}`}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "terminal" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full font-mono text-sm">
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
