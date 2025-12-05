import React, { useState } from 'react';
import { ConsultationData } from '../types';
import { ArrowRight, MessageSquare, User, Sparkles } from 'lucide-react';

interface ProjectInputProps {
  onSubmit: (data: ConsultationData) => void;
  isLoading: boolean;
}

const ProjectInput: React.FC<ProjectInputProps> = ({ onSubmit, isLoading }) => {
  const [role, setRole] = useState('Enseignant');
  const [context, setContext] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role.trim() && context.trim()) {
      onSubmit({ role, context });
    }
  };

  const roles = [
    "Enseignant / Équipe Éducative",
    "Direction d'établissement",
    "Parent d'élève",
    "Collectivité / Mairie",
    "Élève / Étudiant",
    "Citoyen curieux"
  ];

  return (
    <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-xl shadow-indigo-900/5 border border-indigo-100 overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 opacity-70 z-0"></div>

        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 to-indigo-50/30 border-b border-indigo-100 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-slate-900 font-sans">Le Conseil des Druides</h2>
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <p className="text-slate-600">
            Face à l'obsolescence et aux coûts cachés, ne restez pas seul dans le noir. Expliquez votre situation au Druide.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8 relative z-10">
          
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center">
              <User className="w-4 h-4 mr-2 text-indigo-600" />
              Qui êtes-vous dans le village ?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roles.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all border ${
                    role === r
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-[1.02]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-indigo-300'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Context Input */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-indigo-600" />
              Quelle est votre problématique ?
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Ex: Notre école a 50 PC sous Windows 10 qui fonctionnent bien, mais on nous dit de tout jeter car le support s'arrête. Nous n'avons pas le budget pour tout changer. Que faire ?"
              className="w-full h-40 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-500 focus:ring-0 transition-colors resize-none bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
            <p className="text-xs text-slate-500 italic">
              Soyez précis sur votre matériel et vos contraintes pour une meilleure potion.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !context}
              className={`
                flex items-center px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg transition-all
                ${isLoading || !context
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30 hover:-translate-y-1 active:translate-y-0'
                }
              `}
            >
              {isLoading ? 'Consultation en cours...' : 'Consulter le Druide'}
              {!isLoading && <ArrowRight className="ml-2 w-6 h-6" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectInput;