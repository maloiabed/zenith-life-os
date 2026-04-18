import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Fingerprint, 
  ShieldCheck, 
  Loader2, 
  Mail, 
  Lock, 
  Phone, 
  ArrowRight,
  UserPlus,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";

interface LoginProps {
  onLogin: () => void;
  isScanning: boolean;
}

export function Login({ onLogin, isScanning }: LoginProps) {
  const [activeTab, setActiveTab] = useState("login");
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      toast.success("Authenticated successfully", {
        description: "Welcome to the ZENITH ecosystem."
      });
    }, 1500);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false);
      setShowOTP(true);
      toast.info("Verification code sent", {
        description: "Please enter the 6-digit code sent to your device."
      });
    }, 1500);
  };

  const handleOTPComplete = (value: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOTP(false);
      setActiveTab("login");
      toast.success("Account verified!", {
        description: "You can now log in with your credentials."
      });
    }, 1500);
  };

  const handleBiometricClick = () => {
    if (!isScanning) {
      onLogin();
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-500">
      {/* Decorative inner glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full" />
      
      <div className="text-center mb-8 relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-cyan-500/20"
        >
          <span className="text-4xl font-black italic tracking-tighter text-white">Z</span>
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">ZENITH</h2>
        <p className="text-slate-400 text-sm">Experience the future of personal management.</p>
      </div>

      <AnimatePresence mode="wait">
        {!showOTP ? (
          <motion.div
            key="forms"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700/50 rounded-xl mb-8">
                <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300 ml-1">Email or Phone</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        id="email" 
                        placeholder="name@example.com" 
                        className="pl-10 bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <Label htmlFor="pass" className="text-slate-300">Password</Label>
                      <button type="button" className="text-xs text-cyan-400 hover:underline">Forgot?</button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        id="pass" 
                        type="password" 
                        placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" 
                        className="pl-10 bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-900/20" disabled={isLoading || isScanning}>
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <LogIn className="w-5 h-5 mr-2" />}
                    Authenticate
                  </Button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-700/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-900/60 px-2 text-slate-500">Or continue with biometrics</span>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl scale-110 blur-xl group-hover:bg-cyan-500/10 transition-all duration-500" />
                  <div 
                    className="relative bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex items-center justify-between cursor-pointer overflow-hidden transition-all active:scale-[0.98] hover:border-cyan-500/30" 
                    onClick={handleBiometricClick}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {isScanning ? (
                          <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                        ) : (
                          <Fingerprint className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {isScanning && (
                          <motion.div 
                            initial={{ y: -20 }}
                            animate={{ y: 20 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"
                          />
                        )}
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-bold text-white">Biometric Sign-In</span>
                        <p className="text-[10px] text-slate-500">Fast and secure access</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-6">
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-slate-300 ml-1">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        id="reg-email" 
                        type="email"
                        placeholder="name@example.com" 
                        className="pl-10 bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-phone" className="text-slate-300 ml-1">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <Input 
                        id="reg-phone" 
                        placeholder="+1 (555) 000-0000" 
                        className="pl-10 bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="reg-pass" className="text-slate-300 ml-1 text-xs">Password</Label>
                      <Input 
                        id="reg-pass" 
                        type="password" 
                        placeholder="\u2022\u2022\u2022\u2022\u2022\u2022" 
                        className="bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-pass-conf" className="text-slate-300 ml-1 text-xs">Confirm</Label>
                      <Input 
                        id="reg-pass-conf" 
                        type="password" 
                        placeholder="\u2022\u2022\u2022\u2022\u2022\u2022" 
                        className="bg-slate-800/40 border-slate-700/50 text-white rounded-xl focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 mt-4" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <UserPlus className="w-5 h-5 mr-2" />}
                    Create Account
                  </Button>
                </form>
                <p className="text-center text-[10px] text-slate-500 px-6">
                  By continuing, you agree to ZENITH's Terms of Service and Privacy Policy.
                </p>
              </TabsContent>
            </Tabs>
          </motion.div>
        ) : (
          <motion.div
            key="otp"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-6 text-center space-y-8 relative z-10"
          >
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Verify Identity</h3>
              <p className="text-slate-400 text-sm">We've sent a 6-digit code to your email.</p>
            </div>

            <div className="space-y-6">
              <InputOTP 
                maxLength={6} 
                onComplete={handleOTPComplete}
                autoFocus
                disabled={isLoading}
              >
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot index={0} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                  <InputOTPSlot index={1} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                  <InputOTPSlot index={2} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                  <InputOTPSlot index={3} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                  <InputOTPSlot index={4} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                  <InputOTPSlot index={5} className="w-12 h-14 text-xl border-slate-700 bg-slate-800/40 text-white rounded-xl" />
                </InputOTPGroup>
              </InputOTP>

              <div className="flex flex-col gap-4">
                <Button 
                  variant="ghost" 
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-xl"
                  onClick={() => toast.success("Code resent!")}
                >
                  Resend Code
                </Button>
                <Button 
                  variant="link" 
                  className="text-slate-500 text-xs"
                  onClick={() => setShowOTP(false)}
                >
                  Change details
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mt-10 text-center text-[10px] text-slate-600 uppercase tracking-widest relative z-10">
        &copy; 2024 ZENITH ECOSYSTEM &bull; Secured by AES-256
      </div>
    </div>
  );
}