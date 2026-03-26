import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, ArrowRight, Star, PlayCircle } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import WebGLBackground from '../components/WebGLBackground';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [hasElite, setHasElite] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function verify() {
      if (!sessionId) {
        setLoading(false);
        setErrorMsg('No session ID found.');
        return;
      }
      try {
        const apiBase = 'https://nexus-media-ops-api.onrender.com';
        const res = await fetch(`${apiBase}/api/verify-session?session_id=${sessionId}`);
        const data = await res.json();
        
        if (data.ok) {
          setVerified(true);
          setHasAudio(data.audio);
          setHasElite(data.elite);
        } else {
          setErrorMsg('Payment could not be verified.');
        }
      } catch (err) {
        console.error('Error verifying session:', err);
        setErrorMsg('Error connecting to verification server.');
      } finally {
        setLoading(false);
      }
    }
    
    verify();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-nexus-bg text-gray-200 font-sans relative">
      <WebGLBackground />
      <div className="absolute inset-0 bg-nexus-bg/80 backdrop-blur-sm z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass-panel p-10 max-w-xl w-full text-center relative z-10 border-2 border-nexus-accent/40 shadow-[0_0_50px_rgba(0,255,204,0.15)] rounded-2xl"
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-16 h-16 rounded-full border-t-4 border-r-4 border-nexus-accent mb-6"
            />
            <h2 className="text-xl font-bold text-white">Verifying Secure Payment...</h2>
            <p className="text-gray-400 mt-2">Connecting to Stripe.</p>
          </div>
        ) : verified ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <CheckCircle2 size={40} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Payment Successful.</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-sm mx-auto">
              Welcome to the 1%. Your brain is about to undergo a massive transformation.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <a 
                href={`https://nexus-media-ops-api.onrender.com/api/download/joy_protocol.pdf?session_id=${sessionId}`}
                download="The_Joy_Protocol_V2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 font-bold text-lg rounded-xl flex items-center justify-center gap-3 bg-gradient-to-r from-nexus-accent to-blue-400 text-[#030305] shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:shadow-[0_0_40px_rgba(0,255,204,0.7)] transition-all transform hover:scale-105"
              >
                <Download size={24} /> Download The Protocol Book
              </a>

              {hasAudio && (
                <a 
                  href={`https://nexus-media-ops-api.onrender.com/api/download/The_Joy_Protocol_Audiobook.m4a?session_id=${sessionId}`}
                  download="The_Joy_Protocol_Audiobook.m4a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 font-bold text-lg rounded-xl flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all transform hover:scale-105"
                >
                  <PlayCircle size={24} /> Download The Audiobook
                </a>
              )}

              {hasElite && (
                <a 
                  href={`https://nexus-media-ops-api.onrender.com/api/download/digest_vol_1.pdf?session_id=${sessionId}`}
                  download="The_Deep_Data_Digest_Vol_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 font-bold text-lg rounded-xl flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all transform hover:scale-105"
                >
                  <Download size={24} /> Download Deep Data Digest Vol 1
                </a>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-left">
              <h3 className="text-sm font-bold text-white mb-3 text-nexus-accent">Troubleshooting:</h3>
              <p className="text-xs text-gray-500 mb-4 bg-white/5 p-3 rounded-lg border border-white/10">
                If the file downloads with a weird name (like a long string of letters) and no icon: 
                <strong className="text-white block mt-1">Right-click the file → Rename → add ".pdf" or ".m4a" at the end.</strong>
              </p>
              <h3 className="text-sm font-bold text-white mb-3">Next Steps:</h3>
              <ul className="text-sm text-gray-400 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-nexus-accent font-bold">1.</span> Save the files to your device.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nexus-accent font-bold">2.</span> Read Pages 4-9 for the reset protocol.
                </li>
                {hasElite && (
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">VIP.</span> Your first monthly digest is included above.
                  </li>
                )}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-500 text-xs mb-4 px-6 leading-relaxed">
                <strong>SAVE THIS PAGE:</strong> If you close this browser before downloading, you can retrieve your access anytime at the <Link to="/portal" className="text-nexus-accent hover:underline">Access Portal</Link> using your Stripe Session ID.
              </p>
            </div>
            
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              Return to Homepage <ArrowRight size={14} />
            </Link>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="text-4xl font-black">!</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Verification Failed.</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-sm mx-auto">
              {errorMsg} If you were charged, please contact support via the <Link to="/portal" className="text-nexus-accent hover:underline">Support Portal</Link>.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 mt-8 text-sm text-gray-500 hover:text-white transition-colors">
              Return to Homepage <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
