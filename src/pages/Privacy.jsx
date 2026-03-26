import React from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-nexus-bg text-gray-200 font-sans p-8 lg:p-16">
      <div className="max-w-4xl mx-auto glass-panel p-10 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-nexus-accent hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-nexus-accent/10 border border-nexus-accent/30 text-nexus-accent rounded-xl">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>Last Updated: March 2026</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">1. Data Collection</h2>
          <p>
            When you purchase "The Joy Protocol", we collect the minimum amount of information necessary to process your transaction and deliver the digital product. This includes your email address and payment processing details (handled securely via Stripe).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">2. How We Use Your Data</h2>
          <p>
            Your email is used strictly to deliver the product PDF, send you a receipt, and provide customer support if requested. We do not sell your personal data to third-party data brokers.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">3. Download Tracking</h2>
          <p>
            To enforce our digital goods refund policy, we log download attempts and IP addresses solely for the purpose of verifying that the digital file has been successfully delivered and accessed.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-nexus-border pb-2">5. User Rights (GDPR / CCPA)</h2>
          <p>
            You have the right to request access to the personal data we have collected about you, request corrections to any inaccuracies, or request the deletion of your personal data. To exercise your "Right to be Forgotten" under GDPR, or your deletion rights under CCPA, please contact our support team. We will process your request within 30 days. Note that transaction records must be retained for legal tax and accounting purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
