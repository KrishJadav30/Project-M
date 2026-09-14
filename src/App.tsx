import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ReasonsGrid } from './components/ReasonsGrid';
import { PolaroidGallery } from './components/PolaroidGallery';
import { LoveLetter } from './components/LoveLetter';
import { LoveQuiz } from './components/LoveQuiz';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

export function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-rose-300 selection:text-rose-950">
      {/* Background audio synth controller */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Floating responsive navigation */}
      <Navbar isPlaying={isPlaying} toggleMusic={toggleMusic} />

      {/* Main website content */}
      <main className="flex-grow">
        <Hero />
        <Timeline />
        <ReasonsGrid />
        <PolaroidGallery />
        <LoveLetter />
        <LoveQuiz />
      </main>

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
}

export default App;
