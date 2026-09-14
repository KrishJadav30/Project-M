import React from 'react';
import { Flower2, Flower, Sparkles, Sun, Shield, Crown, Infinity as InfinityIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';

export const ReasonsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-rose-500" />;
      case 'Flower':
        return <Flower className="w-6 h-6 text-pink-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-orange-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-emerald-500" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-amber-500" />;
      case 'Infinity':
        return <InfinityIcon className="w-6 h-6 text-purple-500" />;
      default:
        return <Flower2 className="w-6 h-6 text-rose-500" />;
    }
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 22,
      spread: 50,
      origin: { x, y },
      colors: ['#f472b6', '#fda4af', '#fecdd3', '#fff0f5', '#fed7aa'],
      ticks: 120,
    });
  };

  return (
    <section id="reasons" className="py-20 px-4 sm:px-6 relative scroll-mt-20 bg-gradient-to-b from-transparent via-rose-50/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Flower2 className="w-3.5 h-3.5 text-rose-500" />
            <span>Pure Admiration & Devotion 🌸</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Why My Soul Holds You In{' '}
            <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
              Highest Reverence
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-rose-900/70 max-w-xl mx-auto">
            Beyond your physical beauty, these are the truths that made me dedicate my entire life to you.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {loveData.reasons.map((reason, index) => (
            <div
              key={reason.id}
              onClick={handleCardClick}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 bg-white/80 shadow-lg shadow-rose-100/60 hover:shadow-xl hover:border-rose-300 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Corner floral blossom sparkle decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-rose-400">
                <Flower className="w-4 h-4 text-pink-400" />
              </div>

              {/* Number Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 group-hover:rotate-12 transition-transform shadow-sm">
                  {getIcon(reason.icon)}
                </div>
                <span className="text-xs font-extrabold text-rose-300 group-hover:text-rose-500 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-2.5 group-hover:text-rose-600 transition-colors">
                {reason.title}
              </h3>

              <p className="text-sm text-rose-950/75 leading-relaxed font-normal">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
