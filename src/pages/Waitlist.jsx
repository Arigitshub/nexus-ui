import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Bell, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebGLBackground from '../components/WebGLBackground';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const apiBase = 'https://nexus-media-ops-api.onrender.com';
      await fetch(`${apiBase}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Waitlist error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-nexus-bg text-gray-200 font-sans relative">
      <WebGLBackground />
      <div className="absolute inset-0 bg-nexus-bg/80 backdrop-blur-sm z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-10 max-w-lg w-full text-center relative z-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl"
      >
        {!submitted ? (
          <>
            <div className="w-16 h-16 bg-nexus-accent/10 rounded-full flex items-center justify-center text-nexus-accent mx-auto mb-6 shadow-inner border border-nexus-accent/20">
              <Bell size={28} />
            </div>
            
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">Join the Intelligence Loop.</h1>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
              We drop aggressive, clinical health strategies and dopamine-reset protocols in the <strong>Deep Data Digest</strong>. Enter your email to get notified when Vol 2. drops.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-nexus-accent transition-colors"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 font-bold text-lg rounded-xl flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 transition-colors"
              >
                {loading ? 'Securing Spot...' : 'Get Lifetime Updates'}
              </motion.button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600 font-mono">
              <ShieldCheck size={14} className="text-nexus-accent"/>
              Zero spam. Zero sellouts. Unsubscribe anytime.
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6 shadow-inner border border-green-500/30">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">You're on the list.</h2>
            <p className="text-gray-400 mb-8">
              Keep an eye on your inbox. We respect your attention span, so you'll only hear from us when it matters.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-nexus-accent hover:text-white transition-colors border border-nexus-accent/30 bg-nexus-accent/10 py-3 px-6 rounded-lg">
              Return to The Joy Protocol <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
