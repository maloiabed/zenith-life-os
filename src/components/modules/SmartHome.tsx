import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Thermometer, Shield, Power, Radio, Fan } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export function SmartHome() {
  const [lights, setLights] = useState(true);
  const [ac, setAc] = useState(false);
  const [security, setSecurity] = useState(true);

  const toggleDevice = (device: string, current: boolean, setter: (val: boolean) => void) => {
    setter(!current);
    toast.success(`${device} turned ${!current ? 'ON' : 'OFF'}`);
  };

  return (
    <div className="space-y-6">
      {/* Hero Card */}
      <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] group">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c5b2e407-aa20-40c4-b15b-1332caf4a5a7/smart-home-module-55609a48-1776522252086.webp" 
          alt="Smart Home" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div>
            <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">Living Room</p>
            <h3 className="text-2xl font-bold text-white">Home Atmosphere</h3>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <Thermometer className="w-4 h-4 text-cyan-400" />
            <span className="text-lg font-bold text-white">22°C</span>
          </div>
        </div>
      </div>

      {/* Control Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${lights ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-800 text-slate-500'}`}>
              <Lightbulb className="w-6 h-6" />
            </div>
            <Switch checked={lights} onCheckedChange={() => toggleDevice('Lights', lights, setLights)} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Smart Lighting</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">4 Devices Active</p>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${ac ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
              <Fan className="w-6 h-6 animate-spin-slow" />
            </div>
            <Switch checked={ac} onCheckedChange={() => toggleDevice('Climate Control', ac, setAc)} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Air Condition</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Stable 22°C</p>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${security ? 'bg-emerald-500/20 text-emerald-500' : 'bg-slate-800 text-slate-500'}`}>
              <Shield className="w-6 h-6" />
            </div>
            <Switch checked={security} onCheckedChange={() => toggleDevice('Security System', security, setSecurity)} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Home Security</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Arming: Stay</p>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
              <Radio className="w-6 h-6" />
            </div>
            <Power className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Entertainment</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Last: Spotify</p>
          </div>
        </div>
      </div>
    </div>
  );
}