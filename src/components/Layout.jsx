import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import WebGLBackground from './WebGLBackground';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-nexus-bg text-white font-sans relative">
      <WebGLBackground />
      
      {/* UI Layer */}
      <div className="flex w-full h-full z-10 relative">
        <Sidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
