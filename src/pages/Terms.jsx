import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-nexus-bg text-gray-200 font-sans p-8 lg:p-16">
      <div className="max-w-4xl mx-auto glass-panel p-10 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-nexus-accent hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Terms of Service & Refund Policy</h1>
        </div>

        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>Last Updated: March 2026</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">1. Digital Goods Agreement</h2>
          <p>
            By purchasing, accessing, or downloading "The Joy Protocol" (the "Product"), you are entering into a binding agreement with Nexus Media. The Product is delivered entirely as a digital PDF download.
          </p>

          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-lg mt-6 mb-6">
            <h2 className="text-xl font-bold text-red-400 mb-3">2. Digital Goods & Refund Policy (EU Compliance)</h2>
            <p className="text-red-200/80 font-medium">
              Because this Product is a direct digital download containing proprietary intellectual property, <strong>ALL SALES ARE FINAL AND NON-REFUNDABLE.</strong><br/><br/>
              <strong>Consumer Rights & Withdrawal Waiver:</strong> By checking the agreement box during checkout, you provide your express consent for immediate access to the digital content and you explicitly acknowledge that you lose your right of withdrawal (including the EU 14-day cooling-off period) once the download is initiated.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">3. Intellectual Property</h2>
          <p>
            The Joy Protocol is protected by international copyright laws. Your purchase grants you a single, non-exclusive, non-transferable personal license to view the document. You may not distribute, reproduce, upload, or sell this document in any form.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">4. FTC Medical & Results Disclaimer</h2>
          <p>
            <strong>Not Medical Advice:</strong> The information contained in The Joy Protocol is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any psychological or physical condition. It is not a substitute for professional medical advice, diagnosis, or therapy. Always seek the advice of your physician or qualified mental health provider with any questions you may have.
            <br/><br/>
            <strong>No Guarantee of Results:</strong> Any testimonials or examples of success are not intended to represent or guarantee that anyone will achieve the same or similar results. Your individual outcomes depend entirely on your own background, dedication, and implementation.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">5. Jurisdiction</h2>
          <p>
            These terms shall be governed by and construed in accordance with standard international digital commerce laws. Any disputes arising from the violation of the No-Refund Policy will be resolved holding the user to the digital evidence of their explicit waiver at checkout.
          </p>
        </div>
      </div>
    </div>
  );
}
