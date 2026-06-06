/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Sprout, Heart, Flame, Calendar, Users, Eye, Sparkles } from 'lucide-react';
import { IMPACT_DASHBOARD } from '../data';

export default function Impact() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState<'all' | 'recent'>('all');

  // Let us model chronological stats for our beautiful SVG-based interactive chart
  const annualData = [
    { year: '2020', lives: 20000, trees: 5000, funds: 1200000 },
    { year: '2021', lives: 45000, trees: 15000, funds: 2800000 },
    { year: '2022', lives: 72000, trees: 28000, funds: 4900000 },
    { year: '2023', lives: 91000, trees: 40000, funds: 7500000 },
    { year: '2024', lives: 108000, trees: 48000, funds: 10500000 },
    { year: '2025', lives: 124500, trees: 55000, funds: 14500000 }
  ];

  const filteredData = activeTimeline === 'all' ? annualData : annualData.slice(3);

  // SVG chart sizing calculations
  const chartHeight = 200;
  const chartWidth = 560;
  const paddingY = 20;
  const paddingX = 40;

  // Find max value to calibrate scales
  const maxLives = Math.max(...annualData.map(d => d.lives));
  const maxTrees = Math.max(...annualData.map(d => d.trees));

  // Compute points for SVG Paths
  const getLinePoints = (field: 'lives' | 'trees' | 'funds') => {
    return filteredData.map((d, index) => {
      const maxVal = field === 'lives' ? maxLives : field === 'trees' ? maxTrees : 15000000;
      const x = paddingX + (index / (filteredData.length - 1)) * (chartWidth - paddingX * 2);
      const val = d[field];
      const y = chartHeight - paddingY - (val / maxVal) * (chartHeight - paddingY * 2);
      return `${x},${y}`;
    }).join(' ');
  };

  const livesPointsStr = getLinePoints('lives');
  const treesPointsStr = getLinePoints('trees');

  return (
    <div id="impact-page-root" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background Overlays */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#253B26]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Our Transparency Portal</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            {IMPACT_DASHBOARD.headline}
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            {IMPACT_DASHBOARD.subheading}
          </p>
        </div>

        {/* 1. Lifetime Impact Banner Hero Counters */}
        <section id="counters-block" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#253B26]/20 border border-[#8B976B]/20 p-8 rounded-2xl glow-emerald relative overflow-hidden">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B976B]/90 block mb-2">Total Individuals Served</span>
            <span className="font-display text-4xl sm:text-5xl font-black text-white block">124,500+</span>
            <span className="font-sans text-xs text-[#8B976B] mt-2 block flex items-center gap-1.5 text-[#7C7913]">
              <TrendingUp className="w-3.5 h-3.5 animate-bounce" /> Verified Direct Audited Output
            </span>
          </div>

          <div className="bg-[#253B26]/20 border border-[#8B976B]/20 p-8 rounded-2xl relative overflow-hidden">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B976B]/90 block mb-2">Children Educated</span>
            <span className="font-display text-4xl sm:text-5xl font-black text-white block">4,500+</span>
            <span className="font-sans text-xs text-[#8B976B] mt-2 block">Inside Bachpanshala Center hives</span>
          </div>

          <div className="bg-[#253B26]/20 border border-[#8B976B]/20 p-8 rounded-2xl relative overflow-hidden">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B976B]/90 block mb-2">Micro-credit Businesses</span>
            <span className="font-display text-4xl sm:text-5xl font-black text-white block">140+</span>
            <span className="font-sans text-xs text-[#8B976B] mt-2 block">Sustainable enterprise hubs</span>
          </div>

          <div className="bg-[#253B26]/20 border border-[#8B976B]/20 p-8 rounded-2xl relative overflow-hidden">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B976B]/90 block mb-2">Native Miyawaki Trees</span>
            <span className="font-display text-4xl sm:text-5xl font-black text-white block">55,000+</span>
            <span className="font-sans text-xs text-[#8B976B] mt-2 block">Prakriti environmental buffers</span>
          </div>
        </section>

        {/* 2. Double Splitted interactive charts module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Chart Board */}
          <div className="lg:col-span-7 bg-[#253B26]/10 border border-[#8B976B]/15 rounded-3xl p-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#8B976B]/10 pb-4">
              <div>
                <h3 className="font-headings font-bold text-lg text-white">Consolidated Growth History</h3>
                <span className="font-mono text-[10px] text-[#8B976B] uppercase tracking-wider block">Empowerment timeline trends (2020-2025)</span>
              </div>

              {/* Filtering Toggles */}
              <div className="flex items-center bg-black-emerald/80 px-2 py-1 rounded-md border border-[#8B976B]/10">
                <button
                  onClick={() => setActiveTimeline('all')}
                  className={`px-3 py-1 rounded text-[10px] tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                    activeTimeline === 'all' ? 'text-white bg-[#253B26]' : 'text-[#8B976B]'
                  }`}
                >
                  All Years
                </button>
                <button
                  onClick={() => setActiveTimeline('recent')}
                  className={`px-3 py-1 rounded text-[10px] tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                    activeTimeline === 'recent' ? 'text-white bg-[#253B26]' : 'text-[#8B976B]'
                  }`}
                >
                  Post-2022
                </button>
              </div>
            </div>

            {/* SVG Visual Chart */}
            <div className="relative h-60 w-full">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
                {/* Y-axis helping lines */}
                <line x1={paddingX} y1={paddingY} x2={chartWidth - paddingX} y2={paddingY} stroke="rgba(139, 151, 107, 0.1)" strokeDasharray="3,3" />
                <line x1={paddingX} y1={chartHeight / 2} x2={chartWidth - paddingX} y2={chartHeight / 2} stroke="rgba(139, 151, 107, 0.1)" strokeDasharray="3,3" />
                <line x1={paddingX} y1={chartHeight - paddingY} x2={chartWidth - paddingX} y2={chartHeight - paddingY} stroke="rgba(139, 151, 107, 0.1)" strokeDasharray="3,3" />

                {/* Vertical help grids */}
                {filteredData.map((_, i) => {
                  const x = paddingX + (i / (filteredData.length - 1)) * (chartWidth - paddingX * 2);
                  return (
                    <line key={i} x1={x} y1={paddingY} x2={x} y2={chartHeight - paddingY} stroke="rgba(139, 151, 107, 0.05)" />
                  );
                })}

                {/* Line Path 1: Lives Transformed (Gold Accent) */}
                <polyline
                  fill="none"
                  stroke="#8B976B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={livesPointsStr}
                  className="transition-all duration-700 ease-in-out"
                />

                {/* Line Path 2: Trees Planted (Green Accent) */}
                <polyline
                  fill="none"
                  stroke="#7C7913"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4,4"
                  points={treesPointsStr}
                  className="transition-all duration-700 ease-in-out"
                />

                {/* Scatter markers on data nodes */}
                {filteredData.map((d, index) => {
                  const x = paddingX + (index / (filteredData.length - 1)) * (chartWidth - paddingX * 2);
                  const yLives = chartHeight - paddingY - (d.lives / maxLives) * (chartHeight - paddingY * 2);
                  return (
                    <g key={index} className="group/node cursor-pointer">
                      <circle cx={x} cy={yLives} r="5" fill="#111F18" stroke="#8B976B" strokeWidth="2.5" />
                      <circle cx={x} cy={yLives} r="10" fill="#8B976B" className="opacity-0 group-hover/node:opacity-35 transition-opacity" />
                    </g>
                  );
                })}

                {/* Labels at base */}
                {filteredData.map((d, index) => {
                  const x = paddingX + (index / (filteredData.length - 1)) * (chartWidth - paddingX * 2);
                  return (
                    <text key={index} x={x} y={chartHeight - 4} fill="#8B976B" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.8">
                      {d.year}
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Legend Labels */}
            <div className="flex items-center justify-center gap-6 mt-4 font-mono text-[10px] text-[#8B976B]">
              <span className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#8B976B] inline-block" />
                <span>Direct Lives Handled (Scale Max: 124,500)</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#7C7913] border-dashed border-t inline-block" />
                <span>Trees Planted (Scale Max: 55,000)</span>
              </span>
            </div>
          </div>

          {/* Dynamic Interactive Metrics breakdown per Pillar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#253B26]/10 border border-[#8B976B]/10 rounded-2xl p-6">
              <h3 className="font-headings font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-[#8B976B]/15 pb-2">
                Analysis Per Program Pillar
              </h3>

              <div className="flex flex-col gap-3">
                {IMPACT_DASHBOARD.categories.map((cat, idx) => {
                  const isSelected = idx === selectedCategory;
                  return (
                    <button
                      key={idx}
                      id={`btn-impact-cat-${idx}`}
                      onClick={() => setSelectedCategory(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#253B26] border-[#8B976B]/30 text-white'
                          : 'bg-[#253B26]/10 border-transparent text-[#8B976B] hover:bg-[#253B26]/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headings font-semibold text-xs tracking-wide uppercase">{cat.title}</span>
                        <span className="font-mono text-xs font-black" style={{ color: cat.color }}>{cat.metric}</span>
                      </div>
                      
                      {isSelected && (
                        <p className="font-sans text-[11px] text-[#8B976B] mt-2 mb-3 leading-relaxed">
                          {cat.text}
                        </p>
                      )}

                      {/* Performance Bar */}
                      <div className="w-full bg-black-emerald/75 h-1 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${cat.percent}%`, backgroundColor: cat.color }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* 3. Operational Integrity Callout Box */}
        <section id="integrity-block" className="bg-[#253B26]/20 border border-[#8B976B]/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold">Audit Standard</span>
              <h4 className="font-headings font-bold text-lg text-white">Absolute Open Book Ledger</h4>
              <p className="font-sans text-xs text-[#8B976B]/90 leading-relaxed">
                Every single donation is tracked down to the physical recipient kit or hour logged, ensuring zero resource waste. We publish digital ledger reports monthly.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:border-x md:border-[#8B976B]/15 md:px-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold">Local Autonomy</span>
              <h4 className="font-headings font-bold text-lg text-white">Self-Governing Circles</h4>
              <p className="font-sans text-xs text-[#8B976B]/90 leading-relaxed">
                Rather than deploying centralized workers, we create and train localized local councils, certifying regional ladies to take autonomous charge of the budgets.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:pl-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold">Sustainable Exit</span>
              <h4 className="font-headings font-bold text-lg text-white">Exit within 36 Months</h4>
              <p className="font-sans text-xs text-[#8B976B]/90 leading-relaxed">
                Our programmatic target is self-sufficiency. Once a regional slum or village reaches independent economic and food security levels, we exit to support new areas.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
