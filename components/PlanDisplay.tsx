import React from 'react';
import { AdviceResult } from '../types';
import { RefreshCw, Download, Scroll, CheckCircle, Feather, Moon } from 'lucide-react';

interface PlanDisplayProps {
  result: AdviceResult;
  onReset: () => void;
}

const PlanDisplay: React.FC<PlanDisplayProps> = ({ result, onReset }) => {
  
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-indigo-900 mt-6 mb-4 font-sans border-b-2 border-indigo-100 pb-2">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-indigo-800 mt-8 mb-4 flex items-center font-sans"><Feather className="w-6 h-6 mr-2 text-indigo-600 fill-indigo-100"/>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-indigo-700 mt-6 mb-2 font-sans">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <li key={index} className="ml-6 list-disc text-slate-700 mb-2 pl-2 marker:text-indigo-500">{line.replace(/^- |^\* /, '')}</li>;
      }
      if (line.match(/^\d+\. /)) {
         return <li key={index} className="ml-6 list-decimal text-slate-700 mb-2 pl-2 marker:text-indigo-700 marker:font-bold">{line.replace(/^\d+\. /, '')}</li>;
      }
      if (line.trim() === '') {
        return <div key={index} className="h-3"></div>;
      }
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={index} className="text-slate-700 leading-relaxed mb-3 text-lg">
          {parts.map((part, i) => {
             if (part.startsWith('**') && part.endsWith('**')) {
               return <strong key={i} className="font-bold text-indigo-900">{part.slice(2, -2)}</strong>;
             }
             return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
      <div className="bg-[#fdfbf7] rounded-xl shadow-2xl shadow-indigo-900/10 border border-slate-300 overflow-hidden relative">
        
        {/* Paper texture effect overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%239C92AC\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

        {/* Header */}
        <div className="bg-slate-900 px-8 py-6 flex justify-between items-center text-white relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-16 -mt-32 blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center space-x-4 relative">
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20">
              <Scroll className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-sans">Le Conseil a parlé</h2>
              <p className="text-indigo-200 text-sm">Voici la voie de la sagesse</p>
            </div>
          </div>
          <button 
            onClick={onReset}
            className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-600"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Nouvelle Consultation
          </button>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 relative z-10">
          <div className="prose prose-indigo prose-lg max-w-none">
            {renderContent(result.markdown)}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <div className="flex items-center text-sm text-slate-500 italic">
            <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
            Certifié Libre & Éthique par le Druide IA
          </div>
          <div className="flex space-x-3">
             <button 
                className="flex items-center px-5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition-colors shadow-sm"
                onClick={() => alert("Le PDF arrive bientôt à dos de pigeon voyageur !")}
             >
              <Download className="w-4 h-4 mr-2" />
              Garder une trace
            </button>
             <button 
                className="flex items-center px-5 py-2.5 bg-yellow-400 rounded-lg text-yellow-950 font-bold hover:bg-yellow-300 transition-colors shadow-md shadow-yellow-200/50"
                onClick={onReset}
             >
              <RefreshCw className="w-4 h-4 mr-2" />
              Autre Question
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlanDisplay;