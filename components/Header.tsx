import React from 'react';
import { Moon, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-indigo-900/50 sticky top-0 z-50 text-white shadow-xl shadow-indigo-900/20 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.location.reload()}>
          <div className="relative">
            <div className="bg-indigo-500/10 p-2.5 rounded-full border border-indigo-400/30 group-hover:border-yellow-400/50 transition-colors">
              <Moon className="w-6 h-6 text-yellow-300 fill-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] transition-all" />
            </div>
            <Sparkles className="w-3 h-3 text-white absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight font-sans bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
              NIRD
            </h1>
            <p className="text-xs text-indigo-300 font-medium tracking-wide">Le Village Résistant</p>
          </div>
        </div>
        <div className="flex items-center text-sm font-medium bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 shadow-inner">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></div>
          <span className="hidden sm:inline text-indigo-100">Zone Libre & Durable</span>
          <span className="sm:hidden text-indigo-100">Libre</span>
        </div>
      </div>
    </header>
  );
};

export default Header;