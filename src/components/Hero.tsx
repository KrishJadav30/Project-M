import React, { useState, useEffect } from 'react';
import { Flower2, Flower, Send, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';

export const Hero: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate live relationship / friendship timer
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

  // Generate drifting flower petals once on initial render
  const [driftingPetals] = useState<
    Array<{ id: number; left: number; size: number; duration: number; delay: number; rotation: number }>
  >(() =>
    Array.from({ length: 22 }, (_, index) => ({
      id: index,
      left: Math.random() * 96,
      size: Math.floor(Math.random() * 16) + 14,
      duration: Math.floor(Math.random() * 6) + 8,
      delay: Math.random() * 6,
      rotation: Math.floor(Math.random() * 360),
    }))
  );

  const triggerPetalShower = () => {
    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#fb7185', '#f472b6', '#fda4af', '#fecdd3', '#fff0f5', '#fed7aa', '#fef08a'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 35, startVelocity: 55, shapes: ['circle'] });
    fire(0.2, { spread: 70, shapes: ['circle'] });
    fire(0.35, { spread: 100, decay: 0.92, scalar: 1.1 });
    fire(0.1, { spread: 130, startVelocity: 25, decay: 0.94, scalar: 1.3 });
    fire(0.1, { spread: 130, startVelocity: 45 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Drifting Flower Petals Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {driftingPetals.map((petal) => (
          <div
            key={petal.id}
            className="absolute text-rose-300/60 transition-all"
            style={{
              left: `${petal.left}%`,
              top: '-30px',
              animation: `petalFall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            {/* Delicate Flower Petal SVG */}
            <svg
              width={petal.size}
              height={petal.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-70 drop-shadow-sm"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <path
                d="M12 0C18 8 24 16 20 25C16 32 8 32 4 25C0 16 6 8 12 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Dreamy Pastel Floral Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[580px] h-[320px] sm:h-[580px] bg-gradient-to-tr from-pink-200/40 via-rose-200/35 to-amber-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Cute Top Floral Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm animate-bounce">
          <Flower2 className="w-4 h-4 text-rose-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Whatever The Situation, You Stood By Me • 3 Years of Beautiful Friendship 🌸</span>
          <Flower className="w-3.5 h-3.5 text-pink-500" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-3 leading-tight">
          Beyond Outer Beauty, Your <br />
          <span className="font-romantic text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent text-glow-pink">
            Character Won My Heart
          </span>
        </h1>

        <p className="text-base sm:text-xl text-rose-950/80 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          {loveData.heroSubtitle}
        </p>

        {/* Live Counter */}
        <div className="w-full max-w-xl glass-card rounded-3xl p-5 sm:p-7 mb-10 border border-rose-200/80 bg-white/80 shadow-xl shadow-rose-100 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-rose-600 font-bold uppercase tracking-wider mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-500" />
              <span>Cherishing Every Single Second With You</span>
            </div>
            <span className="hidden sm:inline text-rose-300">•</span>
            <span className="text-rose-500 font-semibold normal-case tracking-normal">Since 14 December 2022 🌸</span>
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

        {/* Floral Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={triggerPetalShower}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-300 hover:shadow-rose-400 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
          >
            <Flower2 className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
            <span>Shower Her With Petals 🌸</span>
          </button>

          <a
            href="#letter"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 shadow-sm hover:shadow transition-all transform hover:-translate-y-1"
          >
            <Send className="w-4 h-4 text-rose-500" />
            <span>Read My Soul's Letter</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) translateX(70px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
