import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Heart, 
  Wallet, 
  Calendar, 
  Zap, 
  GraduationCap, 
  Shirt, 
  AlertTriangle,
  Activity,
  Cpu,
  Globe
} from "lucide-react";
import { ModuleType } from "../App";

interface DashboardProps {
  onSelectModule: (module: ModuleType) => void;
}

const modules = [
  { id: "smart_home", icon: Home, label: "Smart Home", color: "from-blue-500 to-cyan-400", baseRadius: 160, speed: 40, offset: 0 },
  { id: "health", icon: Heart, label: "Health", color: "from-rose-500 to-pink-400", baseRadius: 160, speed: 40, offset: 45 },
  { id: "finance", icon: Wallet, label: "Finance", color: "from-emerald-500 to-teal-400", baseRadius: 220, speed: 30, offset: 90 },
  { id: "planner", icon: Calendar, label: "Planner", color: "from-amber-500 to-orange-400", baseRadius: 220, speed: 30, offset: 135 },
  { id: "ai", icon: Zap, label: "AI Auto", color: "from-purple-500 to-indigo-400", baseRadius: 280, speed: 20, offset: 180 },
  { id: "student", icon: GraduationCap, label: "Student", color: "from-indigo-500 to-blue-400", baseRadius: 280, speed: 20, offset: 225 },
  { id: "outfit", icon: Shirt, label: "Outfit", color: "from-cyan-500 to-teal-400", baseRadius: 120, speed: 50, offset: 270 },
  { id: "emergency", icon: AlertTriangle, label: "SOS", color: "from-red-600 to-orange-600", baseRadius: 120, speed: 50, offset: 315 },
];

export function Dashboard({ onSelectModule }: DashboardProps) {
  
  // Create orbital animations for each module
  const desktopModules = useMemo(() => {
    return modules.map((mod, index) => {
      return (
        <motion.div
          key={mod.id}
          className="absolute left-1/2 top-1/2 pointer-events-auto"
          animate={{
            rotate: [mod.offset, mod.offset + 360],
          }}
          transition={{
            duration: mod.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: 0, height: 0 }}
        >
          <motion.div
            className="absolute"
            style={{ 
              x: mod.baseRadius,
              y: 0,
            }}
            animate={{
              rotate: [mod.offset, mod.offset - 360], // Counter-rotate icons so they stay upright
            }}
            transition={{
              duration: mod.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSelectModule(mod.id as ModuleType)}
              className="group -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.4)] group-hover:shadow-cyan-500/40 transition-all duration-300 ring-4 ring-slate-900/50 backdrop-blur-sm group-hover:ring-cyan-500/20`}>
                <mod.icon className="w-8 h-8" />
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400">
                  {mod.label}
                </span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      );
    });
  }, [onSelectModule]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-10 min-h-[700px] overflow-visible">
      
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[240px] h-[240px] rounded-full border border-dashed border-cyan-500/10 animate-[spin_40s_linear_infinite]" />
        <div className="w-[440px] h-[440px] rounded-full border border-dashed border-blue-500/5 animate-[spin_60s_linear_infinite_reverse]" />
        <div className="w-[560px] h-[560px] rounded-full border border-dashed border-purple-500/5 animate-[spin_80s_linear_infinite]" />
      </div>

      {/* Central Hub Logo */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="relative z-20 cursor-pointer"
      >
        <div className="w-40 h-40 rounded-full bg-slate-900 flex items-center justify-center relative group p-1">
          {/* Animated Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
          
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-l-2 border-cyan-500/40" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-r-2 border-blue-600/30" 
          />
          
          <div className="relative w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border border-white/10 shadow-inner overflow-hidden">
             <motion.div
               animate={{ 
                 scale: [1, 1.05, 1],
                 textShadow: ["0 0 10px rgba(6,182,212,0)", "0 0 20px rgba(6,182,212,0.5)", "0 0 10px rgba(6,182,212,0)"]
               }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="flex flex-col items-center"
             >
               <span className="text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 leading-none">
                 Z
               </span>
               <span className="text-[8px] font-bold tracking-[0.4em] text-cyan-500/60 uppercase mt-[-4px]">Zenith Core</span>
             </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting Modules (Mobile Grid Layout) */}
      <div className="mt-16 grid grid-cols-2 gap-4 w-full max-w-sm px-4 md:hidden relative z-30">
        {modules.map((mod, index) => (
          <motion.button
            key={mod.id}
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectModule(mod.id as ModuleType)}
            className="group flex items-center gap-4 p-4 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
              <mod.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-cyan-400 transition-colors">
                {mod.label}
              </span>
              <span className="text-[8px] text-slate-600 font-medium uppercase">Active</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Orbiting Modules (Desktop Circular Layout) */}
      <div className="hidden md:block absolute inset-0">
        {desktopModules}
      </div>
      
      {/* System Pulse Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-10 flex flex-col gap-4 hidden lg:flex pointer-events-none"
      >
        <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-white/5 p-4 rounded-2xl">
           <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-cyan-400" />
           </div>
           <div>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Biometric Pulse</p>
              <p className="text-xs font-bold text-emerald-400">72 BPM (NORMAL)</p>
           </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-white/5 p-4 rounded-2xl">
           <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400" />
           </div>
           <div>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Core Load</p>
              <p className="text-xs font-bold text-blue-400">12.4% (OPTIMIZED)</p>
           </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 right-10 flex flex-col items-end gap-2 hidden lg:flex pointer-events-none"
      >
        <div className="flex items-center gap-2 bg-slate-900/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full">
          <Globe className="w-3 h-3 text-cyan-400" />
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Global Sync Active</span>
        </div>
        <p className="text-[8px] font-medium text-slate-600 uppercase mr-4">Zenith Node: HK-882</p>
      </motion.div>
    </div>
  );
}