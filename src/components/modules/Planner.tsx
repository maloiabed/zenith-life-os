import React from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Circle } from "lucide-react";

export function Planner() {
  const tasks = [
    { title: "Design Review", time: "10:00 AM", status: "completed", priority: "high" },
    { title: "Smart Home Setup", time: "01:30 PM", status: "pending", priority: "medium" },
    { title: "Workout Session", time: "05:00 PM", status: "pending", priority: "low" },
    { title: "Grocery Shopping", time: "07:00 PM", status: "pending", priority: "medium" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
               <CalendarIcon className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">August 12</h3>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest">Monday, 2024</p>
             </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-white">4</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Tasks left</p>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] text-slate-600 font-bold mb-2">{d}</p>
              <div className={`w-8 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:bg-slate-800'}`}>
                {11 + i}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <button className="text-slate-600 hover:text-cyan-400 transition-colors">
                {task.status === 'completed' ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Circle className="w-6 h-6" />}
              </button>
              <div>
                <p className={`text-sm font-bold ${task.status === 'completed' ? 'text-slate-500 line-through' : 'text-white'}`}>{task.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="text-[10px] text-slate-500 uppercase font-bold">{task.time}</span>
                </div>
              </div>
            </div>
            <div className={`w-1.5 h-6 rounded-full ${task.priority === 'high' ? 'bg-rose-500' : task.priority === 'medium' ? 'bg-amber-500' : 'bg-cyan-500'}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}