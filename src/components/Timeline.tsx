import React from 'react';
import { Flower2, Flower, Sparkles, Sun, Infinity as InfinityIcon } from 'lucide-react';
import { loveData } from '../data/loveData';

export const Timeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-rose-500" />;
      case 'Flower':
        return <Flower className="w-5 h-5 text-pink-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Infinity':
        return <InfinityIcon className="w-5 h-5 text-rose-600" />;
      default:
        return <Flower2 className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="story" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Flower2 className="w-3.5 h-3.5 text-rose-500" />
            <span>Our Journey in Bloom 🌸</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            How My World Learned To{' '}
            <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
              Bloom
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-rose-900/70 max-w-lg mx-auto">
            Three years of friendship, shelter in the rain, and moments etched in pure gold.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-pink-300 to-rose-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {loveData.milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Timeline Badge Center Pin Styled as a Blossom */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-rose-300 shadow-md shadow-rose-200/60 z-10 hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>

                  {/* Empty Spacer on opposite side for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Milestone Card Content */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 bg-white/85 shadow-lg shadow-rose-100/70 hover:shadow-xl hover:border-rose-300 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100 flex items-center gap-1">
                          <Flower className="w-3 h-3 text-rose-400" />
                          <span>{item.date}</span>
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-rose-950/75 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
