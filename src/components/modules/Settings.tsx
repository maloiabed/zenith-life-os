import React from "react";
import { User, Shield, Bell, Moon, Globe, LogOut, ChevronRight } from "lucide-react";

export function Settings() {
  const sections = [
    { title: "Profile", items: ["Account Details", "Biometric Setup"], icon: User },
    { title: "Privacy", items: ["Data Encryption", "App Permissions"], icon: Shield },
    { title: "System", items: ["Notifications", "Dark Mode", "Network Sync"], icon: Globe },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 p-1 relative">
           <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-[2rem] animate-pulse" />
           <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Profile" 
            className="w-full h-full rounded-[1.8rem] bg-slate-900 relative z-10"
           />
           <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-cyan-500 rounded-xl border-4 border-slate-950 flex items-center justify-center text-white z-20">
             <Shield className="w-4 h-4" />
           </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">Alex Zenith</h3>
          <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">Premium Node Member</p>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2 px-2">
              <section.icon className="w-4 h-4 text-slate-500" />
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{section.title}</h4>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden">
              {section.items.map((item, j) => (
                <button 
                  key={j}
                  className={`w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors ${j !== section.items.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 py-4 rounded-3xl flex items-center justify-center gap-3 text-rose-500 font-bold transition-all">
          <LogOut className="w-5 h-5" />
          Log Out Session
        </button>
      </div>
      
      <div className="text-center py-6">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Zenith Super-App v4.2.0-stable</p>
      </div>
    </div>
  );
}