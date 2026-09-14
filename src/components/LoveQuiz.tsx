import React, { useState } from 'react';
import { Flower2, PartyPopper, ShieldCheck, ArrowLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LoveQuiz: React.FC = () => {
  const [decision, setDecision] = useState<'unanswered' | 'yes' | 'no'>('unanswered');

  const handleYes = () => {
    setDecision('yes');

    // Giant fireworks celebration with flower petal colors
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#fb7185', '#f472b6', '#fda4af', '#fecdd3', '#fff0f5', '#fed7aa', '#fef08a'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleNo = () => {
    setDecision('no');
  };

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-rose-200/90 bg-white/90 shadow-2xl shadow-rose-200/50 text-center relative overflow-hidden">
          {decision === 'unanswered' && (
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Flower2 className="w-3.5 h-3.5 text-rose-500" />
                <span>The Eternal Promise 🌸</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
                Will you walk with me through every happy & sad moment, and let me be{' '}
                <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
                  your umbrella forever?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-rose-950/75 mb-6 max-w-xl mx-auto leading-relaxed">
                Whatever happens in life, I will always be with you till my very last breath.
              </p>

              {/* Heartfelt reassurance box */}
              <div className="mb-8 p-4 rounded-2xl bg-rose-50/70 border border-rose-100 max-w-xl mx-auto text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                <p className="flex items-center justify-center gap-1.5 text-rose-600 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                  <span>Always Respecting Your Heart & Comfort</span>
                </p>
                Even if your answer is No, I will always respect your decision with all my heart and never give you any problems or burden. And if any problem or difficulty comes in our lives, you will never be alone — we will figure it out together, and we will solve it together.
              </div>

              {/* Decision Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-[70px]">
                {/* YES BUTTON */}
                <button
                  onClick={handleYes}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full font-extrabold text-base sm:text-lg text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 shadow-xl shadow-rose-300 hover:shadow-rose-400 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
                >
                  <Flower2 className="w-6 h-6 text-white group-hover:rotate-45 transition-transform" />
                  <span>YES, Forever & Till Last Breath! 🌸</span>
                </button>

                {/* RESPECTFUL NO BUTTON */}
                <button
                  onClick={handleNo}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 border border-stone-200 cursor-pointer transition-all hover:text-stone-900"
                >
                  If Your Heart Says No...
                </button>
              </div>
            </>
          )}

          {decision === 'yes' && (
            <div className="animate-in zoom-in-90 duration-500 py-6">
              <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4 border border-rose-200">
                <PartyPopper className="w-10 h-10 text-rose-600" />
              </div>

              <h2 className="font-romantic text-5xl sm:text-7xl text-rose-600 mb-2">
                Forever In Bloom! 🌸
              </h2>

              <p className="text-base sm:text-xl text-stone-800 font-bold mb-3">
                I will get wet in the rain, but you will always be sheltered under my umbrella.
              </p>

              <p className="text-sm sm:text-base text-rose-700/90 max-w-lg mx-auto font-medium leading-relaxed">
                I will work endlessly hard for your freedom, happiness, and every dream you ever hold in your heart. You changed my life forever.
              </p>

              <button
                onClick={() => setDecision('unanswered')}
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-800 underline cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to question</span>
              </button>
            </div>
          )}

          {decision === 'no' && (
            <div className="animate-in zoom-in-90 duration-500 py-6 text-center">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-4 border border-rose-200">
                <ShieldCheck className="w-8 h-8 text-rose-500" />
              </div>

              <h2 className="font-romantic text-4xl sm:text-6xl text-rose-700 mb-3">
                I Respect Your Decision, Always 🌸
              </h2>

              <p className="text-base sm:text-lg text-stone-800 font-bold mb-4 max-w-md mx-auto leading-relaxed">
                Your happiness, comfort, and choices will always come first for me.
              </p>

              <div className="space-y-3 max-w-lg mx-auto text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                <p>
                  I will never force you, burden you, or give you any trouble or problems ever. My care for you is pure and unconditional.
                </p>
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-rose-950 font-medium">
                  <span className="font-bold flex items-center justify-center gap-1.5 text-rose-600 mb-1">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                    <span>Our Promise Together</span>
                  </span>
                  Whenever any problem or difficult situation comes in our lives, remember that you are never alone. We will figure it out together, and we will solve it together as true companions.
                </div>
              </div>

              <button
                onClick={() => setDecision('unanswered')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 shadow-sm transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Question</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
