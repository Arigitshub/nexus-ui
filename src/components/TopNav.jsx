import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="h-20 w-full glass-panel border-x-0 border-t-0 rounded-none flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex-1 flex items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search datasets, telemetry, or models..." 
            className="w-full bg-white/5 border border-nexus-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse shadow-[0_0_8px_rgba(0,255,204,0.8)]"></span>
          <span className="text-xs font-medium text-nexus-accent tracking-wider uppercase">System Stable</span>
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
