import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Search, Download, HelpCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WebGLBackground from '../components/WebGLBackground';

export default function Portal() {
  const [sessionId, setSessionId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [view, setView] = useState('access'); // 'access' or 'support'
  const [ticketData, setTicketData] = useState({ subject: '', message: '' });
  const [ticketStatus, setTicketStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleVerify = (e) => {
    e.preventDefault();
    if (!sessionId.trim()) {
      setError('Please enter your Order ID.');
      return;
    }
    setError('');
    navigate(`/success?session_id=${sessionId.trim()}`);
  };

  const handleSupport = async (e) => {
    e.preventDefault();
    if (!sessionId.trim() || !ticketData.subject || !ticketData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setTicketStatus('sending');
    try {
      const apiBase = 'https://nexus-media-ops-api.onrender.com';
      const res = await fetch(`${apiBase}/api/support/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId.trim(),
          subject: ticketData.subject,
          message: ticketData.message
        })
      });
      if (res.ok) {
        setTicketStatus('success');
        setTicketData({ subject: '', message: '' });
      } else {
        setTicketStatus('error');
      }
    } catch (err) {
      setTicketStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-nexus-bg text-gray-200 font-sans relative overflow-hidden">
      <WebGLBackground />
      <div className="absolute inset-0 bg-nexus-bg/80 backdrop-blur-sm z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass-panel p-10 max-w-md w-full text-center relative z-10 border-2 border-nexus-accent/40 shadow-[0_0_50px_rgba(0,255,204,0.15)] rounded-2xl"
      >
        <div className="flex gap-2 justify-center mb-8 border-b border-white/10 pb-4">
          <button 
            onClick={() => setView('access')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${view === 'access' ? 'bg-nexus-accent text-nexus-bg shadow-[0_0_15px_rgba(0,255,204,0.3)]' : 'text-gray-500 hover:text-white'}`}
          >
            RESTORE ACCESS
          </button>
          <button 
            onClick={() => setView('support')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${view === 'support' ? 'bg-nexus-accent text-nexus-bg shadow-[0_0_15px_rgba(0,255,204,0.3)]' : 'text-gray-500 hover:text-white'}`}
          >
            CONTACT SUPPORT
          </button>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nexus-accent to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.4)] mx-auto mb-6">
          {view === 'access' ? <ShieldCheck size={32} className="text-nexus-bg" /> : <HelpCircle size={32} className="text-nexus-bg" />}
        </div>
        
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
          {view === 'access' ? 'Access Portal' : 'Nexus Support'}
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          {view === 'access' 
            ? 'Lost your download link? Enter your Stripe Order ID to restore access.'
            : 'Have a technical or billing issue? Verified customers can submit tickets here.'}
        </p>

        <div className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Order ID (cs_live_...)"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              className="w-full bg-black/60 border border-white/10 focus:border-nexus-accent/50 focus:ring-1 focus:ring-nexus-accent/50 rounded-xl px-5 py-4 text-white text-center shadow-inner transition-all font-mono text-sm"
            />
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>

          {view === 'support' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
              <input 
                type="text" 
                placeholder="Subject"
                value={ticketData.subject}
                onChange={(e) => setTicketData({...ticketData, subject: e.target.value})}
                className="w-full bg-black/40 border border-white/10 focus:border-nexus-accent/50 rounded-lg px-4 py-3 text-white text-sm"
              />
              <textarea 
                placeholder="How can we help?"
                rows={4}
                value={ticketData.message}
                onChange={(e) => setTicketData({...ticketData, message: e.target.value})}
                className="w-full bg-black/40 border border-white/10 focus:border-nexus-accent/50 rounded-lg px-4 py-3 text-white text-sm resize-none"
              />
            </motion.div>
          )}

          {error && <p className="text-red-400 text-xs font-medium">{error}</p>}
          
          {ticketStatus === 'success' && (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-xs flex items-center gap-2 justify-center">
              <CheckCircle size={14} /> Ticket submitted successfully. We'll reply via email.
            </div>
          )}

          <button 
            onClick={view === 'access' ? handleVerify : handleSupport}
            disabled={ticketStatus === 'sending'}
            className="w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 bg-nexus-accent text-[#030305] shadow-[0_0_20px_rgba(0,255,204,0.3)] hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            {ticketStatus === 'sending' ? 'Sending...' : (view === 'access' ? 'Verify Order' : 'Submit Ticket')} 
            {ticketStatus !== 'sending' && <ArrowRight size={20} />}
          </button>

          {view === 'support' && (
            <button 
              onClick={() => { setView('access'); setTicketStatus(''); }}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Back to Restore Access
            </button>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500">
            Link missing? Check your email for a receipt from Stripe or Nexus Media.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
