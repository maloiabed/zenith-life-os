import React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Droplets, Footprints, Flame } from "lucide-react";

export function Health() {
  const stats = [
    { label: "Steps", value: "8,432", goal: "10,000", icon: Footprints, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Calories", value: "420", goal: "600", icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10" },
    { label: "Water", value: "1.2L", goal: "2.5L", icon: Droplets, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Chart Visualization */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c5b2e407-aa20-40c4-b15b-1332caf4a5a7/health---wellness-module-5c995477-1776522251872.webp" 
            alt="Health" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase">Live Metrics</p>
              <h3 className="text-2xl font-bold text-white">Cardio Recovery</h3>
            </div>
            <div className="flex items-center gap-2 bg-rose-500/20 px-3 py-1.5 rounded-full border border-rose-500/20">
              <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="text-sm font-bold text-rose-500">72 BPM</span>
            </div>
          </div>
          
          <div className="h-24 flex items-end gap-1.5">
            {[40, 60, 45, 80, 55, 90, 70, 60, 85, 45, 65, 55, 75, 50].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400/50 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</p>
                <p className="text-xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-600 font-bold uppercase mb-1">Target</p>
              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500`}
                  style={{ width: '70%' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}