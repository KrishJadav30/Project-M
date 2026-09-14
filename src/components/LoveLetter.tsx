import React, { useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    if (!isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fda4af', '#fb7185'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-rose-50/60 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Private & Confidential</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            A Letter From My{' '}
            <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
              Soul
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-rose-900/70 max-w-md mx-auto">
            Click the wax seal below to open and read what my heart wanted to tell you.
          </p>
        </div>

        {/* Envelope & Letter Container */}
        <div className="relative flex flex-col items-center">
          {/* Sealed Envelope Graphic if closed */}
          {!isOpen && (
            <div
              onClick={handleOpenLetter}
              className="w-full max-w-md bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-8 sm:p-12 rounded-3xl border-2 border-rose-300 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer text-center group transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Envelope flap lines */}
              <div className="absolute top-0 left-0 right-0 h-1/2 border-b-2 border-rose-300/60 bg-rose-200/40 transform origin-top" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Wax Seal */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-900/30 group-hover:scale-110 transition-transform mb-4 border-2 border-rose-300">
                  <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
                </div>

                <h3 className="font-romantic text-3xl sm:text-4xl text-rose-900 mb-1">
                  For {loveData.herName}
                </h3>
                <p className="text-xs font-semibold text-rose-700/80 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  Tap to Break Seal & Open
                </p>
              </div>
            </div>
          )}

          {/* Unfolded Love Letter */}
          {isOpen && (
            <div className="w-full max-w-2xl bg-[#fffdfa] p-7 sm:p-12 rounded-3xl shadow-2xl border border-rose-200 animate-in fade-in zoom-in-95 duration-500 relative">
              {/* Letter Top Stamp */}
              <div className="flex items-center justify-between border-b border-rose-100 pb-4 mb-6">
                <div className="flex items-center gap-2 text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500" />
                  <span className="font-bold text-xs uppercase tracking-widest text-rose-600">
                    Straight From The Heart
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold text-rose-500 hover:text-rose-700 hover:underline cursor-pointer"
                >
                  Fold back into envelope
                </button>
              </div>

              {/* Letter Salutation */}
              <p className="font-romantic text-4xl sm:text-5xl text-rose-700 mb-6">
                {loveData.letter.salutation}
              </p>

              {/* Letter Body */}
              <div className="space-y-4 text-stone-700 font-serif text-base sm:text-lg leading-relaxed">
                {loveData.letter.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex flex-col items-end text-right">
                <p className="font-romantic text-3xl sm:text-4xl text-rose-600">
                  {loveData.letter.signature}
                </p>
                <span className="text-xs text-stone-400 font-sans mt-1">
                  Sealed with devotion
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
