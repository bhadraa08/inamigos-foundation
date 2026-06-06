/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, Sprout, Heart, Flame, ShieldAlert, Award, Star, Compass, ArrowRight } from 'lucide-react';
import { INITIATIVES } from '../data';
import { Initiative } from '../types';

export default function Initiatives() {
  const [selectedId, setSelectedId] = useState(INITIATIVES[0].id);

  const activeInitiative = INITIATIVES.find((item) => item.id === selectedId) || INITIATIVES[0];

  // Map icon component per initiative
  const getInitiativeIcon = (id: string, color?: string) => {
    const classStr = "w-5 h-5";
    switch (id) {
      case 'bachpanshala':
        return <BookOpen className={classStr} style={{ color }} />;
      case 'seva':
        return <Flame className={classStr} style={{ color }} />;
      case 'udaan':
        return <Sparkles className={classStr} style={{ color }} />;
      case 'jeev':
        return <Heart className={classStr} style={{ color }} />;
      case 'prakriti':
        return <Sprout className={classStr} style={{ color }} />;
      case 'vikas':
        return <Star className={classStr} style={{ color }} />;
      default:
        return <Compass className={classStr} style={{ color }} />;
    }
  };

  return (
    <div id="initiatives-page-root" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Absolute floating atmospheric cells */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-[#253B26]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial from-[#4B5D41]/10 to-transparent blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Our Action Channels</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Six Pillars of <br />
            <span className="italic font-normal text-gradient-gold">Lasting Legacy</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            Each initiative targets a critical socioeconomic or ecological deficit. Hover, click, and explore each specialized action model below.
          </p>
        </div>

        {/* Dynamic Dual Grid Interface (Docks on left, details render animate-present on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT Sidebar Index Dock */}
          <div className="lg:col-span-4 flex flex-col gap-3 sticky top-28 bg-[#253B26]/10 p-5 rounded-2xl border border-[#8B976B]/10 backdrop-blur-md">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#8B976B]/50 block px-3 pb-2 border-b border-[#8B976B]/10">
              Active Portals Menu
            </span>
            {INITIATIVES.map((item) => {
              const works = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  id={`btn-pillar-${item.id}`}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full flex items-center justify-between text-left p-4 rounded-xl font-headings text-sm font-bold tracking-wide uppercase transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    works
                      ? 'text-white border border-[#8B976B]/30 bg-[#253B26]'
                      : 'text-[#8B976B]/70 hover:text-white border border-transparent hover:bg-[#253B26]/30'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    {getInitiativeIcon(item.id, works ? item.color : '#8B976B')}
                    <span>{item.title}</span>
                  </div>
                  
                  {/* Subtle Indicator Node */}
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-transform ${
                      works ? 'scale-125' : 'scale-50 opacity-0'
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                  
                  {/* Glass indicator background */}
                  {works && (
                    <span className="absolute bottom-0 left-0 top-0 w-1" style={{ backgroundColor: item.color }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT Cinematic Content Block */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInitiative.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#253B26]/10 border border-[#8B976B]/15 rounded-3xl overflow-hidden shadow-2xl relative"
              >
                {/* Visual Imagery Banner */}
                <div className="h-80 sm:h-96 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111F18] via-transparent to-transparent z-10" />
                  <img
                    src={activeInitiative.image}
                    alt={activeInitiative.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-[8s] transition-transform"
                  />
                  {/* Floating Action Badge */}
                  <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-md text-xs font-mono tracking-widest uppercase text-white bg-black-emerald/70 border border-[#8B976B]/20">
                    Active Pillar System
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeInitiative.color }} />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#8B976B]">
                      {activeInitiative.tagline}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                    {activeInitiative.title}
                  </h2>

                  <p className="font-sans text-sm text-[#8B976B] leading-relaxed mb-8">
                    {activeInitiative.story}
                  </p>

                  {/* Impact Matrix Counters Block */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#8B976B]/15 my-8">
                    {activeInitiative.impactMetrics.map((met, metIdx) => (
                      <div key={metIdx} className="text-center md:text-left">
                        <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white" style={{ color: activeInitiative.color }}>
                          {met.value}
                        </span>
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-[#8B976B]/70 mt-1">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Highlights checklist */}
                  <div>
                    <h4 className="font-headings font-bold text-xs uppercase tracking-wider text-white mb-4">
                      Program Operational Blueprint
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeInitiative.highlights.map((item, key) => (
                        <li key={key} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center bg-black-emerald border border-[#8B976B]/20 flex-shrink-0 mt-0.5 text-xs text-white"
                            style={{ color: activeInitiative.color }}
                          >
                            ✓
                          </div>
                          <span className="font-sans text-xs text-[#8B976B]/90 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
