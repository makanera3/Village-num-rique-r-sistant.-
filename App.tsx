import React, { useState } from 'react';
import Header from './components/Header';
import ProjectInput from './components/ProjectInput';
import PlanDisplay from './components/PlanDisplay';
import Spinner from './components/Spinner';
import { AppStep, ConsultationData, AdviceResult } from './types';
import { getDruidAdvice } from './services/geminiService';
import { AlertTriangle, Map, Users, Star, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.HOME);
  const [result, setResult] = useState<AdviceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConsultationSubmit = async (data: ConsultationData) => {
    setStep(AppStep.ANALYZING);
    setError(null);

    try {
      const markdown = await getDruidAdvice(
        data.role,
        data.context
      );

      setResult({
        markdown,
        timestamp: Date.now()
      });
      setStep(AppStep.RESULT);
    } catch (err) {
      console.error(err);
      setError("Le Druide n'a pas pu entendre votre appel à travers la nuit. Vérifiez votre connexion spirituelle (clé API) et réessayez.");
      setStep(AppStep.INPUT);
    }
  };

  const handleReset = () => {
    setResult(null);
    setStep(AppStep.INPUT);
    setError(null);
  };

  const goToInput = () => setStep(AppStep.INPUT);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-200 selection:text-indigo-900">
      <Header />

      <main className="flex-grow">
        
        {error && (
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-3xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg flex items-start text-red-700 animate-in fade-in shadow-sm">
              <AlertTriangle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          </div>
        )}

        {step === AppStep.HOME && (
           <div className="relative overflow-hidden bg-slate-900 text-white pb-20">
             
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black opacity-80"></div>
             
             {/* Stars Animation */}
             <div className="absolute top-10 left-10 text-yellow-100 opacity-50 animate-twinkle delay-100"><Star className="w-3 h-3 fill-white" /></div>
             <div className="absolute top-20 right-20 text-yellow-100 opacity-40 animate-twinkle delay-500"><Star className="w-2 h-2 fill-white" /></div>
             <div className="absolute top-40 left-1/4 text-indigo-200 opacity-60 animate-twinkle delay-200"><Star className="w-4 h-4" /></div>
             <div className="absolute bottom-1/3 right-10 text-white opacity-30 animate-twinkle delay-700"><Star className="w-2 h-2 fill-white" /></div>

             <div className="container mx-auto px-4 pt-16 sm:pt-24 relative z-10">
               <div className="max-w-5xl mx-auto text-center space-y-10 animate-in fade-in duration-1000 slide-in-from-bottom-8">
                 
                 {/* The Floating Moon */}
                 <div className="flex justify-center mb-8">
                   <div className="relative animate-float">
                     <div className="w-32 h-32 sm:w-40 sm:h-40 bg-yellow-100 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.4)] flex items-center justify-center relative overflow-hidden">
                       <div className="absolute w-8 h-8 bg-yellow-200/50 rounded-full top-6 left-6 blur-sm"></div>
                       <div className="absolute w-4 h-4 bg-yellow-200/50 rounded-full bottom-10 right-8 blur-sm"></div>
                       <div className="absolute w-12 h-12 bg-yellow-200/30 rounded-full top-1/2 right-4 blur-md"></div>
                     </div>
                     <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-indigo-900/80 px-4 py-1 rounded-full text-xs font-mono text-indigo-200 border border-indigo-700/50 whitespace-nowrap backdrop-blur-sm">
                       La Nuit de l'Info
                     </div>
                   </div>
                 </div>

                 <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight font-sans drop-shadow-lg">
                   Dans la nuit numérique, <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-emerald-200">
                     Le Village s'éveille.
                   </span>
                 </h1>
                 
                 <p className="text-lg sm:text-xl text-indigo-100/90 max-w-2xl mx-auto leading-relaxed font-light">
                   Goliath dort, mais le <strong>Druide</strong> veille. Face à l'obsolescence et à la surveillance, rejoignez le mouvement pour un numérique sobre, libre et résilient.
                 </p>
                 
                 <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                   <button 
                      onClick={goToInput}
                      className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/50 overflow-hidden"
                   >
                     <span className="relative z-10 flex items-center">
                       Consulter le Druide <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </button>
                   <a 
                      href="#" 
                      className="px-8 py-4 bg-slate-800/50 text-indigo-100 border border-indigo-500/30 rounded-full font-bold text-lg hover:bg-slate-800 transition-all backdrop-blur-sm"
                      onClick={(e) => { e.preventDefault(); alert("En savoir plus sur la démarche NIRD..."); }}
                   >
                     Découvrir le manifeste
                   </a>
                 </div>

               </div>

               {/* Features Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-24 max-w-6xl mx-auto">
                  <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-colors group">
                    <div className="w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-4 text-indigo-300 group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">Résistance Nocturne</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Le support de Windows 10 s'éteint ? Allumez la flamme de Linux. Ne jetez rien, transformez tout.</p>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-colors group">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 text-emerald-300 group-hover:scale-110 transition-transform">
                      <Map className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">Territoire Libre</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Nextcloud, LibreOffice, BigBlueButton... Des outils souverains pour cartographier votre indépendance.</p>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-colors group">
                    <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mb-4 text-purple-300 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">Le Clan NIRD</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Une alliance d'enseignants et de citoyens. Ensemble, nous sommes plus forts que les géants.</p>
                  </div>
               </div>
             </div>
             
             {/* Bottom Fade */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-20"></div>
           </div>
        )}

        {step === AppStep.INPUT && (
          <div className="container mx-auto px-4 py-12 space-y-8">
            <button onClick={() => setStep(AppStep.HOME)} className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center transition-colors">
              ← Retour sous les étoiles
            </button>
            <div className="text-center max-w-2xl mx-auto mb-8">
               <h2 className="text-3xl font-bold text-slate-900 font-sans">Consultation du Druide</h2>
               <p className="text-slate-600 mt-2">Confiez votre problème aux astres. Obtenez une solution libre.</p>
            </div>
            <ProjectInput onSubmit={handleConsultationSubmit} isLoading={false} />
          </div>
        )}

        {step === AppStep.ANALYZING && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Spinner label="Le Druide observe la lune et compile les sources libres..." />
            <p className="text-slate-500 mt-6 max-w-md text-center text-sm italic">
              "La lumière du libre ne s'éteint jamais."
            </p>
          </div>
        )}

        {step === AppStep.RESULT && result && (
          <div className="container mx-auto px-4 py-8">
            <PlanDisplay result={result} onReset={handleReset} />
          </div>
        )}
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="font-medium mb-2">NIRD - Numérique Inclusif, Responsable et Durable</p>
          <p>Hackathon "Nuit de l'Info" &copy; {new Date().getFullYear()} - Licence Libre (MIT/GPL)</p>
        </div>
      </footer>
    </div>
  );
};

export default App;