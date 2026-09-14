import React, { useState } from 'react';
import { Camera, Flower2, X, ZoomIn } from 'lucide-react';
import { loveData, type PolaroidPhoto } from '../data/loveData';

export const PolaroidGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidPhoto | null>(null);

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Memories In Frames</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Our Polaroid{' '}
            <span className="font-romantic text-4xl sm:text-6xl text-rose-600">
              Gallery
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-rose-900/70 max-w-md mx-auto">
            Moments frozen in time, filled with warmth, smiles, and butterflies.
          </p>
        </div>

        {/* Polaroids Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loveData.photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`group bg-white p-4 pb-6 rounded-2xl shadow-md hover:shadow-2xl border border-rose-100 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer ${photo.rotation}`}
            >
              {/* Cute Washi Tape effect */}
              <div className="w-16 h-4 bg-rose-200/60 mx-auto -mt-6 mb-3 rounded-sm shadow-sm backdrop-blur-xs rotate-[-1deg]" />

              {/* Photo Image Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-rose-50 mb-4">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/90 shadow-md text-rose-600">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Polaroid Caption */}
              <div className="text-center px-1">
                <p className="font-handwriting text-2xl text-stone-800 leading-snug">
                  {photo.caption}
                </p>
                <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block mt-1">
                  {photo.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white p-5 pb-8 rounded-3xl shadow-2xl border border-rose-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors z-10"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-rose-50 shadow-inner">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <p className="font-handwriting text-3xl text-stone-900 mb-1">
                {selectedPhoto.caption}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-rose-600 font-semibold">
                <Flower2 className="w-3.5 h-3.5 text-rose-500" />
                <span>{selectedPhoto.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
