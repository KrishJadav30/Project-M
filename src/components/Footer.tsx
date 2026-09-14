import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { loveData } from '../data/loveData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-rose-200/80 bg-white/70 backdrop-blur-md relative">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Heart message */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-romantic text-2xl sm:text-3xl text-rose-600 font-bold">
              {loveData.nickname}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
              • Forever & Always
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-medium flex items-center gap-1.5">
            <span>Handcrafted with endless love for the prettiest girl in the universe</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse inline-block" />
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
