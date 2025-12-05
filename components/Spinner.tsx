import React from 'react';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-700">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Loader2 className="w-16 h-16 text-emerald-600 animate-spin relative z-10" />
      </div>
      {label && <p className="text-xl text-stone-700 font-medium mt-8 font-sans">{label}</p>}
    </div>
  );
};

export default Spinner;