import React from "react";
import { motion } from "framer-motion";
import { Home, Heart, Wallet, Calendar, Settings, Grid } from "lucide-react";
import { ModuleType } from "../App";

interface NavigationProps {
  activeModule: ModuleType;
  onNavigate: (module: ModuleType) => void;
}

export function Navigation({ activeModule, onNavigate }: NavigationProps) {
  const tabs = [
    { id: "home", icon: Grid, label: "Home" },
    { id: "planner", icon: Calendar, label: "Planner" },
    { id: "health", icon: Heart, label: "Health" },
    { id: "finance", icon: Wallet, label: "Finance" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-20 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-around px-4 shadow-2xl z-50">
      {tabs.map((tab) => {
        const isActive = activeModule === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as ModuleType)}
            className="relative flex flex-col items-center gap-1 group"
          >
            <div className={`relative p-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>
              <tab.icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-2xl"
                />
              )}
            </div>
            <span className={`text-[10px] font-bold tracking-tight uppercase ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}