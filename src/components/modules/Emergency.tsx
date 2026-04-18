import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Phone, Activity, MapPin, ChevronRight, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export function Emergency() {
  const [isActivating, setIsActivating] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const triggerSOS = () => {
    setIsActivating(true);
    let count = 3;
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        toast.error("SOS ALERT TRANSMITTED TO EMERGENCY SERVICES", { duration: 5000 });
        setIsActivating(false);
        setCountdown(3);
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="relative py-12 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full" />
        
        <AnimatePresence mode="wait">
          {!isActivating ? (
            <motion.button
              key="sos-idle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerSOS}
              className="relative w-48 h-48 rounded-full bg-slate-900 border-4 border-red-600/30 flex flex-col items-center justify-center group z-10"
            >
              <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping group-hover:animate-none" />
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-600 to-rose-700 flex flex-col items-center justify-center text-white shadow-[0_0_50px_rgba(220,38,38,0.4)]">
                <AlertTriangle className="w-12 h-12 mb-2" />
                <span className="text-2xl font-black tracking-tighter italic">SOS</span>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="sos-active"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-48 h-48 rounded-full bg-red-600 flex items-center justify-center text-white text-6xl font-black"
            >
              {countdown}
            </motion.div>
          )}
        </AnimatePresence>
        
        <p className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Hold for 3 seconds to cancel</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Medical Profile</h4>
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 space-y-4">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Blood Type</p>
              <p className="text-lg font-bold text-white">O Positive (O+)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Allergies</p>
              <p className="text-lg font-bold text-white">Penicillin, Peanuts</p>
            </div>
          </div>
        </div>

        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 pt-2">Emergency Contacts</h4>
        {[
          { name: "Dr. Sarah Smith", role: "Primary Physician", phone: "+1 (555) 902-1234" },
          { name: "Elena Gilbert", role: "Emergency Contact", phone: "+1 (555) 231-9988" }
        ].map((contact, i) => (
          <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{contact.name}</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">{contact.role}</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}