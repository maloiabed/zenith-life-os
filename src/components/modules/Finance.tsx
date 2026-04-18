import React from "react";
import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ArrowDownLeft, Plus, CreditCard, PieChart } from "lucide-react";

export function Finance() {
  const transactions = [
    { name: "Apple Store", date: "Today, 14:20", amount: "-$1,299.00", icon: ArrowDownLeft, color: "text-rose-500" },
    { name: "Salary Deposit", date: "Yesterday", amount: "+$4,500.00", icon: ArrowUpRight, color: "text-emerald-500" },
    { name: "Netflix", date: "2 days ago", amount: "-$15.99", icon: ArrowDownLeft, color: "text-rose-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <CreditCard className="w-32 h-32 rotate-12" />
        </div>
        <div className="relative z-10 space-y-6">
          <div>
            <p className="text-indigo-100/60 text-xs font-bold tracking-widest uppercase mb-1">Total Balance</p>
            <h3 className="text-4xl font-bold text-white tracking-tight">$12,450.85</h3>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-bold">Add Money</span>
            </button>
            <button className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center transition-all">
              <PieChart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">Recent Activity</h4>
          <button className="text-xs font-bold text-cyan-400">View All</button>
        </div>
        
        {transactions.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <t.icon className={`w-5 h-5 ${t.color}`} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-[10px] text-slate-500">{t.date}</p>
              </div>
            </div>
            <p className={`text-sm font-black ${t.color}`}>{t.amount}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}