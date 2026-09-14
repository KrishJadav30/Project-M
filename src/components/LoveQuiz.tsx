import React, { useState } from 'react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LoveQuiz: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [hasAccepted, setHasAccepted] = useState(false);

  const playfulMessages = [
    "No",
    "Are you sure? 🥺",
    "Think again! 💖",
    "Cupid says no to this button! 🏹",
    "Nice try, you can't click this! 😉",
    "Wrong choice, try the pink one! ✨",
    "Still running away from you! 🏃‍♀️",
  ];

  const handleNoInteraction = () => {
    // Pick a random offset within safe mobile bounds
    const randomX = (Math.random() - 0.5) * 240;
    const randomY = (Math.random() - 0.5) * 160;

    setNoButtonPosition({ x: randomX, y: randomY });
    setNoCount((prev) => Math.min(prev + 1, playfulMessages.length - 1));
  };

  const handleYes = () => {
    setHasAccepted(true);

    // Giant fireworks celebration
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#f43f5e', '#ec4899', '#fbcfe8', '#fb7185', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-rose-200/90 bg-white/90 shadow-2xl shadow-rose-200/50 text-center relative overflow-hidden">
          {!hasAccepted ? (
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Most Important Question</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
                Will you stay by my side and let me{' '}
                <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
                  love you forever?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-rose-900/70 mb-10 max-w-md mx-auto">
                Take your time to think, but remember there is only one true answer in my universe!
              </p>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-[120px] relative">
                {/* YES BUTTON (Grows as No is attempted) */}
                <button
                  onClick={handleYes}
                  style={{ transform: `scale(${1 + noCount * 0.08})` }}
                  className="flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full font-extrabold text-lg text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 shadow-xl shadow-rose-300 hover:shadow-rose-400 transition-transform cursor-pointer group z-20"
                >
                  <Heart className="w-6 h-6 text-white fill-white group-hover:scale-125 transition-transform" />
                  <span>YES, A Million Times YES! 💖</span>
                </button>

                {/* PLAYFUL RUNAWAY NO BUTTON */}
                <button
                  onMouseEnter={handleNoInteraction}
                  onClick={handleNoInteraction}
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    transition: 'transform 0.2s ease-out',
                  }}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 border border-stone-200 cursor-pointer select-none transition-colors sm:absolute sm:right-10"
                >
                  {playfulMessages[noCount]}
                </button>
              </div>
            </>
          ) : (
            <div className="animate-in zoom-in-90 duration-500 py-6">
              <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4 border border-rose-200">
                <PartyPopper className="w-10 h-10 text-rose-600" />
              </div>

              <h2 className="font-romantic text-5xl sm:text-7xl text-rose-600 mb-2">
                I Knew You Loved Me!
              </h2>

              <p className="text-base sm:text-xl text-stone-800 font-semibold mb-3">
                You just made me the happiest person alive in the entire universe.
              </p>

              <p className="text-sm sm:text-base text-rose-700/80 max-w-lg mx-auto font-medium">
                I promise to cherish you, make you laugh, and protect your precious smile every single day of my life.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
