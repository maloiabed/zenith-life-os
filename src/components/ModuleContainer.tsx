import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { ModuleType } from "../App";
import { SmartHome } from "./modules/SmartHome";
import { Health } from "./modules/Health";
import { Finance } from "./modules/Finance";
import { Planner } from "./modules/Planner";
import { AIAutomation } from "./modules/AIAutomation";
import { Student } from "./modules/Student";
import { Outfit } from "./modules/Outfit";
import { Emergency } from "./modules/Emergency";
import { Settings } from "./modules/Settings";

interface ModuleContainerProps {
  module: ModuleType;
  onBack: () => void;
}

export function ModuleContainer({ module, onBack }: ModuleContainerProps) {
  const renderModule = () => {
    switch (module) {
      case "smart_home": return <SmartHome />;
      case "health": return <Health />;
      case "finance": return <Finance />;
      case "planner": return <Planner />;
      case "ai": return <AIAutomation />;
      case "student": return <Student />;
      case "outfit": return <Outfit />;
      case "emergency": return <Emergency />;
      case "settings": return <Settings />;
      default: return <div className="p-10 text-center text-slate-500 italic">Module development in progress...</div>;
    }
  };

  const getTitle = () => {
    return module.replace("_", " ").toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-4 mb-2">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-sm font-black tracking-[0.2em] text-cyan-400 uppercase">{getTitle()}</h2>
        </div>
      </div>

      <div className="pb-24">
        {renderModule()}
      </div>
    </motion.div>
  );
}