/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, Compass, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'bachpanshala', label: 'Bachpanshala' },
    { id: 'seva', label: 'Seva' },
    { id: 'udaan', label: 'Udaan' },
    { id: 'jeev', label: 'Jeev' },
    { id: 'prakriti', label: 'Prakriti' },
    { id: 'vikas', label: 'Vikas' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.initiative === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div id="gallery-page" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#253B26]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Immersive Visual Ledger</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Moments of <br />
            <span className="italic font-normal text-gradient-gold">Empowerment</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            A carefully curated repository documenting the laughter of child scholars, the focus of our female leaders, and green restoration zones.
          </p>
        </div>

        {/* Custom Category Horizontal Bar Scrollable */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#8B976B]/15 max-w-full">
          {categories.map((cat) => {
            const isMatch = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`btn-photo-cat-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full font-headings text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  isMatch
                    ? 'bg-[#253B26] border-[#8B976B]/45 text-white'
                    : 'bg-[#253B26]/10 border-transparent text-[#8B976B] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Layout grid utilizing pure CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:balance] transition-all">
          {filteredItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden bg-[#253B26]/20 border border-[#8B976B]/15 hover:border-[#7C7913]/40 group cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.03] duration-500 transition-transform"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111F18] via-[#111F18]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#7C7913] mb-1 font-bold">
                    {item.initiative}
                  </span>
                  <h4 className="font-headings font-bold text-sm text-white">{item.title}</h4>
                  <p className="font-sans text-[11px] text-[#8B976B] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black-emerald border border-[#8B976B]/20 flex items-center justify-center text-white text-xs">
                    <Eye className="w-4 h-4 text-[#8B976B]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && currentItem && (
            <div
              className="fixed inset-0 bg-black-emerald/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/60 text-[#8B976B] hover:text-white border border-[#8B976B]/20 transition-all cursor-pointer z-[60]"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox actual visual container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-[16/9] bg-black-emerald/50 border border-[#8B976B]/20 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
                  <img
                    src={currentItem.url}
                    alt={currentItem.title || 'InAmigos Gallery image'}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Left / Right Nav Controllers inside image */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 border border-[#8B976B]/20 rounded-full text-[#8B976B] hover:text-white transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 border border-[#8B976B]/20 rounded-full text-[#8B976B] hover:text-white transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption panel below picture */}
                <div className="text-center mt-6 max-w-2xl px-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7C7913] font-bold block mb-1">
                    {currentItem.initiative}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {currentItem.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#8B976B] leading-relaxed">
                    {currentItem.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
