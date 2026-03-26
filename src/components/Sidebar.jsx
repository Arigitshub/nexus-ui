import React from 'react';
import { LayoutDashboard, Database, Activity, Settings, User } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Data Pipeline', icon: <Database size={20} /> },
    { name: 'Live Telemetry', icon: <Activity size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 h-full glass-panel flex flex-col p-6 rounded-none border-y-0 border-l-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 rounded-lg bg-nexus-accent shadow-[0_0_15px_rgba(0,255,204,0.5)] flex items-center justify-center text-nexus-bg font-bold">
          N
        </div>
        <h1 className="text-xl font-bold tracking-wider text-white">NEXUS<span className="text-nexus-accent">UI</span></h1>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${item.active ? 'bg-white/10 text-nexus-accent border border-nexus-accent/30 shadow-[0_0_10px_rgba(0,255,204,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-nexus-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
            <User size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">Pro License</p>
          </div>
        </div>
      </div>
    </div>
  );
}
