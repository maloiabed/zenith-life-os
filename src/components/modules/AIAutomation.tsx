import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Send, Sparkles, Terminal, MessageSquare, Bot } from "lucide-react";

export function AIAutomation() {
  const [prompt, setPrompt] = useState("");
  const [logs, setLogs] = useState([
    { role: "system", content: "ZENITH AI Node online. Ready for task automation." },
    { role: "system", content: "Checking connected IoT clusters... 12 devices active." }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLogs(prev => [...prev, { role: "user", content: prompt }]);
    setPrompt("");

    // Simulate AI response
    setTimeout(() => {
      setLogs(prev => [...prev, { role: "system", content: "Optimizing schedule based on your current priority 'High'. All lights will dim at 10 PM." }]);
    }, 1500);
  };

  return (
    <div className="space-y-6 flex flex-col h-[70vh]">
      <div className="flex-1 bg-slate-950/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 overflow-y-auto space-y-4 font-mono scrollbar-hide">
        <AnimatePresence initial={false}>
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${log.role === 'system' ? 'text-cyan-400' : 'text-purple-400'}`}
            >
              <div className="shrink-0 mt-1">
                {log.role === 'system' ? <Bot className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
              </div>
              <p className="text-xs leading-relaxed">
                <span className="font-bold uppercase opacity-50 mr-2">[{log.role}]</span>
                {log.content}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-xl group-focus-within:bg-cyan-500/20 transition-all" />
        <div className="relative flex gap-2">
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe an automation task..."
            className="flex-1 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all"
          />
          <button 
            type="submit"
            className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 gap-3">
        {["Optimize Energy", "Night Routine", "Focus Mode", "Clean Home"].map((preset) => (
          <button 
            key={preset}
            onClick={() => setPrompt(preset)}
            className="bg-slate-900/40 border border-white/5 px-4 py-3 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:border-cyan-500/30 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3 h-3" />
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}