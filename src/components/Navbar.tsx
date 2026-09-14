import React, { useState } from 'react';
import { Heart, Music, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { loveData } from '../data/loveData';

interface NavbarProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPlaying, toggleMusic }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Why I Love You', href: '#reasons' },
    { name: 'Memories', href: '#memories' },
    { name: 'Love Letter', href: '#letter' },
    { name: 'Question', href: '#quiz' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl border border-rose-200/70 bg-white/85 backdrop-blur-md">
        {/* Brand / Name */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 shadow-md shadow-rose-300 group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-romantic text-2xl sm:text-3xl text-rose-600 tracking-wide leading-none font-bold">
              {loveData.nickname}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-rose-400 font-bold">
              Forever Yours
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-rose-900/80 hover:text-rose-600 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-rose-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Music & Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMusic}
            title={isPlaying ? 'Pause Melody' : 'Play Romantic Melody'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            {isPlaying ? (
              <>
                <Music className="w-3.5 h-3.5 text-rose-500 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="hidden sm:inline">Melody Playing</span>
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 h-full bg-rose-500 animate-pulse" />
                  <span className="w-0.5 h-2/3 bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 h-4/5 bg-rose-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-card rounded-2xl p-4 border border-rose-200 bg-white/95 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-rose-900 hover:bg-rose-50 hover:text-rose-600 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
