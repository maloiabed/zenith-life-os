import React from "react";
import { CloudRain, Shirt, ThermometerSun, Sparkles, Wind } from "lucide-react";

export function Outfit() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
               <CloudRain className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Rainy Morning</h3>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest">London, 18°C</p>
             </div>
          </div>
          <div className="bg-slate-800 p-3 rounded-2xl">
            <Wind className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        <div className="flex gap-2">
          {["Casual", "Business", "Active", "Tech"].map((style, i) => (
            <button 
              key={style}
              className={`flex-1 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${i === 3 ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-500 hover:text-slate-300'}`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-[2.5rem] blur-2xl transition-all" />
        <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden">
          <div className="aspect-[4/5] relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c5b2e407-aa20-40c4-b15b-1332caf4a5a7/outfit-suggester-module-76a05d87-1776522253324.webp" 
              alt="Suggested Outfit" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                 <Sparkles className="w-4 h-4 text-cyan-400" />
                 <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">AI Recommendation</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Cyber-Utility Shell</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full border border-white/10">Waterproof</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full border border-white/10">Breathable</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full border border-white/10">Night Reflective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}