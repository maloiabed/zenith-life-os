import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { ModuleContainer } from "./components/ModuleContainer";
import { motion, AnimatePresence } from "framer-motion";

export type ModuleType = 
  | "home" 
  | "smart_home" 
  | "health" 
  | "finance" 
  | "planner" 
  | "ai" 
  | "student" 
  | "outfit" 
  | "emergency"
  | "settings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleType>("home");
  const [isScanning, setIsScanning] = useState(false);

  // Simulate initial load / check session
  useEffect(() => {
    const timer = setTimeout(() => {
      // Could check localStorage here
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsLoggedIn(true);
      setActiveModule("home");
    }, 2500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveModule("home");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-600/10 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex items-center justify-center p-6"
            >
              <Login onLogin={handleLogin} isScanning={isScanning} />
            </motion.div>
          ) : (
            <motion.div
              key="app-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col h-full overflow-hidden"
            >
              {/* Header */}
              <header className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <span className="font-bold text-xl tracking-tighter">Z</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold tracking-tight">ZENITH</h1>
                    <p className="text-[10px] text-cyan-400 font-medium tracking-[0.2em] uppercase">Super-App ecosystem</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                </button>
              </header>

              {/* Dynamic Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-32">
                <AnimatePresence mode="wait">
                  {activeModule === "home" ? (
                    <Dashboard key="dashboard" onSelectModule={setActiveModule} />
                  ) : (
                    <ModuleContainer 
                      key="module-container"
                      module={activeModule} 
                      onBack={() => setActiveModule("home")} 
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Navigation */}
              <Navigation activeModule={activeModule} onNavigate={setActiveModule} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
}

export default App;