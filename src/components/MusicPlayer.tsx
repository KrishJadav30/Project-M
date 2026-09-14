import React, { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying }) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Gentle romantic music box / harp chord progression notes (Hz)
  // Progression: Cmaj7 - Am7 - Fmaj7 - G7
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // C, E, G, B
    [220.00, 261.63, 329.63, 392.00], // A, C, E, G
    [174.61, 220.00, 261.63, 329.63], // F, A, C, E
    [196.00, 246.94, 293.66, 349.23], // G, B, D, F
  ];

  const playNote = (ctx: AudioContext, freq: number, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sine wave creates a dreamy music box / celesta tone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Soft attack and smooth gentle decay
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.06, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 2.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 2.2);
  };

  useEffect(() => {
    if (isPlaying) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let chordIndex = 0;
      let noteIndex = 0;

      const scheduleNotes = () => {
        if (!ctx) return;
        const currentChord = chords[chordIndex];
        const freq = currentChord[noteIndex];
        playNote(ctx, freq, ctx.currentTime);

        noteIndex++;
        if (noteIndex >= currentChord.length) {
          noteIndex = 0;
          chordIndex = (chordIndex + 1) % chords.length;
        }
      };

      timerRef.current = window.setInterval(scheduleNotes, 420);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.suspend();
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  return null;
};
