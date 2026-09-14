import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Send, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';

export const Hero: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [floatingHearts, setFloatingHearts] = useState<
    Array<{ id: number; left: number; size: number; duration: number; delay: number }>
  >([]);

  // Calculate live relationship / love timer
  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(loveData.startDate).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - start);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating background pastel hearts
  useEffect(() => {
    const hearts = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      left: Math.random() * 95,
      size: Math.floor(Math.random() * 24) + 14,
      duration: Math.floor(Math.random() * 6) + 6,
      delay: Math.random() * 5,
    }));
    setFloatingHearts(hearts);
  }, []);

  const triggerLoveBlast = () => {
    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#fb7185', '#fda4af', '#ffccd5', '#ffffff'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, shapes: ['circle'] });
    fire(0.2, { spread: 60, shapes: ['square'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Animated Floating Pastel Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-rose-400/40"
            style={{
              left: `${heart.left}%`,
              bottom: '-30px',
              animation: `floatUp ${heart.duration}s linear infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart
              style={{ width: `${heart.size}px`, height: `${heart.size}px` }}
              className="fill-rose-300/30 text-rose-400/50"
            />
          </div>
        ))}
      </div>

      {/* Dreamy Pastel Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-gradient-to-tr from-pink-300/35 via-rose-200/40 to-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Cute Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-200 text-rose-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm animate-bounce">
          <Sparkles className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: '5s' }} />
          <span>Crafted Exclusively For You, With All My Love</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-3 leading-tight">
          To The Girl Who Holds <br />
          <span className="font-romantic text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent text-glow-pink">
            My Entire Heart
          </span>
        </h1>

        <p className="text-base sm:text-xl text-rose-950/80 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          {loveData.heroSubtitle}
        </p>

        {/* Live Love Counter */}
        <div className="w-full max-w-xl glass-card rounded-3xl p-5 sm:p-7 mb-10 border border-rose-200/80 bg-white/80 shadow-xl shadow-rose-100 backdrop-blur-xl">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-rose-600 font-bold uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4 text-rose-500" />
            <span>Counting Every Second Loving You</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-rose-50/70 border border-rose-100 shadow-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {timeElapsed.days}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-600/90 uppercase font-semibold mt-1">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-rose-50/70 border border-rose-100 shadow-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {timeElapsed.hours}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-600/90 uppercase font-semibold mt-1">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-rose-50/70 border border-rose-100 shadow-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {timeElapsed.minutes}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-600/90 uppercase font-semibold mt-1">
                Mins
              </span>
            </div>
            <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-rose-50/70 border border-rose-100 shadow-sm">
              <span className="text-2xl sm:text-4xl font-extrabold text-rose-600 tracking-tight animate-pulse">
                {timeElapsed.seconds}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-600 uppercase font-bold mt-1">
                Secs
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={triggerLoveBlast}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-300 hover:shadow-rose-400 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
          >
            <Heart className="w-5 h-5 text-white fill-white group-hover:scale-125 transition-transform" />
            <span>Shower Me With Love ✨</span>
          </button>

          <a
            href="#letter"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 shadow-sm hover:shadow transition-all transform hover:-translate-y-1"
          >
            <Send className="w-4 h-4 text-rose-500" />
            <span>Read My Love Letter</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(1.1) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
