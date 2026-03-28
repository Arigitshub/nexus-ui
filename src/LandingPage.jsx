import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, BatteryCharging, ShieldCheck, CheckCircle2, ArrowRight, Star, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebGLBackground from './components/WebGLBackground';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';

export default function LandingPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderBump, setOrderBump] = useState(false);
  const [membershipUpgrade, setMembershipUpgrade] = useState(false);
  const [copiesLeft, setCopiesLeft] = useState(14);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <SEO description="A practical, 48-hour protocol to reset your dopamine baseline and architect deep joy in the digital age. Get instant access today." />
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden bg-nexus-bg text-gray-200 font-sans relative selection:bg-nexus-accent/30 selection:text-nexus-accent">
      <WebGLBackground />
      
      {/* Urgency Banner */}
      <AnimatePresence>
        {timeLeft > 0 && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-red-500/10 border-b border-red-500/30 text-red-50 relative z-50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>SPECIAL OFFER: Price increases to $197 in</span>
              <span className="font-mono bg-red-500/20 px-2 py-0.5 rounded text-red-400 font-bold">{formatTime(timeLeft)}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10">
        {/* Nav */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center p-4 md:p-6 lg:px-12 backdrop-blur-md border-b border-white/5"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-wider text-white">NEXUS<span className="text-nexus-accent">MEDIA</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-white transition-colors">The Protocol</a>
            <a href="#checkout" className="px-5 py-2 text-sm font-medium bg-white text-nexus-bg hover:bg-gray-200 transition-colors rounded-lg">Get Access</a>
          </div>
        </motion.nav>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 md:mt-20 px-6 md:px-8 lg:px-24 max-w-7xl mx-auto gap-12">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nexus-accent/30 bg-nexus-accent/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse"></span>
              <span className="text-xs font-medium text-nexus-accent">Bestselling Digital Guide</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9] uppercase">
              Reclaim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent via-blue-400 to-purple-500 animate-pulse">Bio-State.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed font-light">
              Stop letting algorithms drain your neuro-baseline. Our 48-hour dopamine reset protocol is the definitive weapon to starve addiction and hijack your focus back.
            </motion.p>
            
            {/* Trust Bar */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-10 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Secure Verification:</span>
              <div className="flex items-center gap-4 grayscale brightness-200">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-5" />
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                  <ShieldCheck size={14} className="text-nexus-accent" /> SSL SECURED
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-nexus-bg bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=1a1a1a`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs text-gray-400 mt-1">Join <span className="text-white font-bold">2,408+</span> readers who reset their brains</span>
              </div>
            </motion.div>
            
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#checkout" 
              className="w-full sm:w-auto px-10 py-5 bg-nexus-accent text-[#050508] font-black rounded-xl cosmic-glow transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-lg"
            >
              Unlock The Protocol
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
             className="flex-1 w-full max-w-md relative group"
          >
            <div className="absolute inset-0 bg-nexus-accent blur-[100px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/joy_protocol_cover.png" 
              alt="The Joy Protocol Cover" 
              className="relative z-10 w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </motion.div>

        </div>

        {/* Loss Aversion / Problem Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-24 md:mt-32 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Every day you wait, your <span className="text-red-400">attention span shrinks.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Tech companies spend billions engineering your feeds to hijack your dopamine system. They are stealing your time, your focus, and your baseline happiness. You are competing against supercomputers, and without a protocol, <span className="text-white font-semibold">you will lose.</span>
          </motion.p>
        </motion.div>

        {/* Features Matrix */}
        <motion.div 
          id="features" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="glass-panel p-8 hover:bg-white/5 transition-colors duration-300">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl mb-6 flex items-center justify-center text-nexus-accent">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">The Dopamine Deficit</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Understand the exact neurological mechanisms algorithms use to hijack your attention and drain your joy.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-panel p-8 hover:bg-white/5 transition-colors duration-300">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl mb-6 flex items-center justify-center text-nexus-accent">
              <BatteryCharging size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">The 48-Hour Reset</h3>
            <p className="text-gray-400 text-sm leading-relaxed">A rigid, step-by-step biological detox framework to restore baseline dopamine receptor sensitivity.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass-panel p-8 border-t-2 border-t-nexus-accent/50 hover:bg-white/5 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-accent/10 blur-[50px] rounded-full"></div>
            <div className="w-12 h-12 bg-nexus-accent/10 border border-nexus-accent/20 rounded-xl mb-6 flex items-center justify-center text-nexus-accent relative z-10">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Architecting Friction</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">Learn the environmental design secrets to making cheap pleasure difficult and deep joy effortless.</p>
          </motion.div>
        </motion.div>

        {/* Pricing & Checkout with Legal Gates */}
        <motion.div 
          id="checkout" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-40 mb-32 max-w-lg mx-auto px-6 relative"
        >
          {/* Scarcity Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold w-[90%] md:w-auto px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 border border-white/20 whitespace-nowrap">
            <AlertCircle size={14} className="shrink-0" /> Only {copiesLeft} copies left at this price
          </div>

          <div className="glass-panel p-6 md:p-10 border-2 border-nexus-accent/50 relative overflow-hidden shadow-[0_0_50px_rgba(0,255,204,0.15)] rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-nexus-accent to-blue-500"></div>
            
            <h2 className="text-3xl font-bold text-white mb-2 text-center mt-2">Take Back Control</h2>
            <p className="text-center text-gray-400 mb-6">Stop scrolling. Start living.</p>
            
            {/* Value Stack & Price Anchoring */}
            <div className="mb-6 border border-white/10 rounded-xl p-5 bg-black/20">
              <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider text-center">What You Get Today</h4>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-200 flex items-center gap-2"><CheckCircle2 size={16} className="text-nexus-accent" /> The 48-Hour Biological Reset</span>
                  <span className="text-gray-500 line-through">$99 Value</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-200 flex items-center gap-2"><CheckCircle2 size={16} className="text-nexus-accent" /> Architecting Friction Guide</span>
                  <span className="text-gray-500 line-through">$49 Value</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-200 flex items-center gap-2"><CheckCircle2 size={16} className="text-nexus-accent" /> Lifetime Protocol Updates</span>
                  <span className="text-gray-500 line-through">$49 Value</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center font-bold">
                <span className="text-white">Total Value</span>
                <span className="text-red-400/80 line-through">$197</span>
              </div>
            </div>

            {/* Charm Pricing & Daily Equivalency */}
            <div className="flex flex-col items-center mb-6">
              <div className="text-sm text-nexus-accent font-bold tracking-wider uppercase mb-1 drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]">Today's Price</div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-extrabold text-white tracking-tight">${47 + (orderBump ? 17 : 0) + (membershipUpgrade ? 19 : 0)}</span>
              </div>
              <div className="text-xs text-gray-400 mt-2 font-medium bg-white/5 py-1 px-3 rounded-full border border-white/10">
                {membershipUpgrade ? "Includes first month of Deep Data Digest ($19/mo after)" : "One-time payment. Zero subscriptions."}
              </div>
            </div>
            
            <div className="text-center text-nexus-accent font-medium text-sm mb-8 flex items-center justify-center gap-2 bg-nexus-accent/10 py-2.5 rounded-lg border border-nexus-accent/20 shadow-[0_0_15px_rgba(0,255,204,0.1)]">
              <Clock size={16} className="animate-pulse" /> Price increases to $197 when timer ends
            </div>

            {/* Order Bump Section */}
            <div className={`p-5 rounded-xl border-dashed border-2 mb-8 transition-all duration-300 ${orderBump ? 'bg-nexus-accent/10 border-nexus-accent/50 text-nexus-accent shadow-[0_0_20px_rgba(0,255,204,0.2)]' : 'bg-black/30 border-gray-700/50 hover:border-gray-500'}`}>
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="mt-1">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-nexus-accent focus:ring-nexus-accent cursor-pointer transition-all"
                    checked={orderBump}
                    onChange={(e) => setOrderBump(e.target.checked)}
                  />
                </div>
                <div>
                  <h4 className={`text-base font-bold ${orderBump ? 'text-nexus-accent' : 'text-gray-200'}`}>
                    Yes! Add the Neuro-Acoustic Audio Variant (+$17)
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Get the professionally recorded M4A so you can install the protocol on commutes, workouts, and walks. Instant access.
                  </p>
                </div>
              </label>
            </div>

            {/* Membership Continuity Section */}
            <div className={`p-5 rounded-xl border-dashed border-2 mb-8 transition-all duration-300 ${membershipUpgrade ? 'bg-purple-500/10 border-purple-500/50 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-black/30 border-gray-700/50 hover:border-gray-500'}`}>
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="mt-1">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-purple-500 focus:ring-purple-500 cursor-pointer transition-all"
                    checked={membershipUpgrade}
                    onChange={(e) => setMembershipUpgrade(e.target.checked)}
                  />
                </div>
                <div>
                  <h4 className={`text-base font-bold ${membershipUpgrade ? 'text-purple-400' : 'text-gray-200'}`}>
                    Yes! Add The Deep Data Digest (+$19/mo)
                  </h4>
                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <img src="/monthly_digest_cover.png" alt="Deep Data Digest" className="w-24 h-auto rounded shadow-lg border border-purple-500/30 self-start" />
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Go deeper. Every 30 days, we aggregate raw data, new case studies, and advanced friction strategies into an elite, highly-illustrated 20-page digital magazine delivered straight to your inbox. Stay ahead of the curve. Renews monthly at $19. Cancel anytime.
                    </p>
                  </div>
                </div>
              </label>
            </div>

            {/* Legal / Terms Gate */}
            <div className={`p-4 bg-black/40 border rounded-xl mb-8 transition-all duration-300 ${termsAccepted ? 'border-nexus-accent/50 shadow-[0_0_15px_rgba(0,255,204,0.1)]' : 'border-white/10'}`}>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-start pt-1">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-nexus-accent focus:ring-nexus-accent focus:ring-offset-gray-900 cursor-pointer accent-nexus-accent transition-all"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>
                <span className="text-xs text-gray-400 leading-relaxed transition-colors group-hover:text-gray-300">
                  I explicitly agree to the <Link to="/terms" className="text-nexus-accent hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-nexus-accent hover:underline">Privacy Policy</Link>. I consent to immediate access to the digital content and acknowledge I lose my right of withdrawal (<strong>Strict No-Refund Policy</strong>).
                </span>
              </label>
            </div>

            <motion.button 
              disabled={!termsAccepted || isProcessing}
              whileHover={termsAccepted && !isProcessing ? { scale: 1.02 } : {}}
              whileTap={termsAccepted && !isProcessing ? { scale: 0.98 } : {}}
              onClick={async () => {
                if(termsAccepted && !isProcessing) {
                  setIsProcessing(true);
                  try {
                    const apiBase = 'https://nexus-media-ops-api.onrender.com';
                    const res = await fetch(`${apiBase}/api/create-checkout-session`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ priceId: 'price_1TBMMRFUkdXDZAsc7u9J7bp5', orderBump, membershipUpgrade })
                    });
                    const data = await res.json();
                    if (data.url) {
                      window.location.href = data.url;
                    } else {
                      setIsProcessing(false);
                      console.error("No URL returned from checkout session", data);
                    }
                  } catch (err) {
                    setIsProcessing(false);
                    console.error("Error initiating checkout:", err);
                  }
                }
              }}
              className={`w-full py-6 font-black text-xl rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-widest ${
                termsAccepted 
                  ? 'bg-gradient-to-r from-nexus-accent via-blue-400 to-purple-500 text-[#030305] cosmic-glow cursor-pointer' 
                  : 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
              }`}
            >
              {!termsAccepted ? (
                'Accept Terms to Unlock'
              ) : isProcessing ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Provisioning Access...
                </>
              ) : (
                <>
                  Get The Protocol Now
                  <ArrowRight size={24} />
                </>
              )}
            </motion.button>
            <p className="text-center text-xs text-gray-500 mt-4">
              {membershipUpgrade
                ? 'Instant download + email receipt - $19/mo starting next month - Cancel anytime'
                : 'Instant download + email receipt - One-time payment - No subscription'}
            </p>
          </div>
        </motion.div>

        {/* Professional Footer */}
        <footer className="mt-20 pb-10 border-t border-white/5 pt-10 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/waitlist" className="text-xs font-bold text-nexus-accent hover:text-white transition-colors tracking-widest uppercase animate-pulse">Join Free Waitlist</Link>
            <Link to="/portal" className="text-xs font-bold text-gray-500 hover:text-nexus-accent transition-colors tracking-widest uppercase">Restore Access</Link>
            <Link to="/portal" className="text-xs font-bold text-gray-500 hover:text-nexus-accent transition-colors tracking-widest uppercase">Support</Link>
            <Link to="/terms" className="text-xs font-bold text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Terms</Link>
            <Link to="/privacy" className="text-xs font-bold text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Privacy</Link>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            &copy; 2026 Nexus Media Ops. All Rights Reserved. Not medical advice.
          </p>
        </footer>

      </div>
    </div>
    </>
  );
}
