import React from "react";
import { GraduationCap, MapPin, Clock, BookOpen, UserCheck } from "lucide-react";

export function Student() {
  const schedule = [
    { class: "Advanced Robotics", time: "09:00 - 10:30", room: "Lab 402", active: true },
    { class: "Data Structures", time: "11:00 - 12:30", room: "Hall B", active: false },
    { class: "Philosophy of AI", time: "14:00 - 15:30", room: "Online", active: false },
  ];

  return (
    <div className="space-y-6">
       <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-6 flex items-center justify-between">
         <div className="flex items-center gap-4">
           <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
             <GraduationCap className="w-8 h-8" />
           </div>
           <div>
             <h3 className="text-lg font-bold text-white">Academic Status</h3>
             <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-tighter">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
               Currently in Class
             </div>
           </div>
         </div>
         <div className="text-right">
           <p className="text-xl font-black text-white">92%</p>
           <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Attendance</p>
         </div>
       </div>

       <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Today's Schedule</h4>
          {schedule.map((item, i) => (
            <div key={i} className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 relative overflow-hidden ${item.active ? 'ring-2 ring-cyan-500/50' : ''}`}>
              {item.active && <div className="absolute top-0 right-0 p-2"><div className="bg-cyan-500 text-[8px] font-black text-white px-2 py-0.5 rounded-full uppercase">Now</div></div>}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-bold text-white mb-1">{item.class}</p>
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase">{item.room}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-3 h-3" />
                  View Notes
                </button>
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <UserCheck className="w-3 h-3" />
                  Check In
                </button>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
}