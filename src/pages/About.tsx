/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Compass, Heart, Shield, Users, Sprout, Handshake, Zap, ChevronRight, Award } from 'lucide-react';
import { MILESTONES } from '../data';

export default function About() {
  const coreValues = [
    { title: 'Compassion', icon: Heart, desc: 'We act with absolute tenderness, active empathy and respect towards all breathing beings and ecosystems.', color: '#44201C' },
    { title: 'Integrity', icon: Shield, desc: 'Operational accountability, radical fiscal transparency, and measurable execution records hold us true.', color: '#253B26' },
    { title: 'Empowerment', icon: Users, desc: 'We do not cultivate dependence. We design models that transition recipients into fully-sovereign community leaders.', color: '#7C7913' },
    { title: 'Sustainability', icon: Sprout, desc: 'Every solution we deploy is built for environmental durability and local community self-governance.', color: '#4B5D41' },
    { title: 'Collaboration', icon: Handshake, desc: 'Aligning with civic bodies, global scientific analysts, and local activists to double outcome velocity.', color: '#8B976B' },
    { title: 'Innovation', icon: Zap, desc: 'Applying modern technology, data audits, computer labs, and micro-credits to solve systemic generational deficits.', color: '#7C7913' }
  ];

  return (
    <div id="about-page-root" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Immersive radial glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#253B26]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Who We Are</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Architecting <br />
            <span className="italic font-normal text-gradient-gold">Sustainable Hope</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            InAmigos Foundation is an agency of active change. We bridge socioeconomic gaps through rigorous, scientific, and deeply compassionate local intervention programs.
          </p>
        </div>

        {/* 1. Foundation Story (Cinematic grid split) */}
        <section id="foundation-story-sec" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-24 border-b border-[#8B976B]/10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-headings font-bold text-2xl uppercase tracking-wider text-white">Our Origin Story</h2>
            <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed">
              We did not start in high-rise corporate rooms or as a standard marketing project. InAmigos was ignited in the grassroots alleys of Mumbai, where a small cohort of passionate friends witnessed the immense socio-economic imbalances left behind during rapid urban expansions. We saw children out of school, families in extreme health crises, and animals suffering on roads with zero supportive grids.
            </p>
            <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed">
              We decided that standard charitable structures were temporary, ineffective, and lacked analytical feedback. We merged our skills in technology, business, design, and direct local activism to map a continuous circular model. Today, InAmigos coordinates six localized operations across districts—transforming thousands of lives yearly with the absolute highest financial productivity and care.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-[#253B26]/25 border border-[#8B976B]/15 px-6 py-4 rounded-xl">
                <span className="font-display text-3xl font-bold text-white block">100%</span>
                <span className="font-sans text-xs text-[#8B976B] mt-1 block">Transparent Audit Record</span>
              </div>
              <div className="bg-[#253B26]/25 border border-[#8B976B]/15 px-6 py-4 rounded-xl">
                <span className="font-display text-3xl font-bold text-[#7C7913] block">6 Regions</span>
                <span className="font-sans text-xs text-[#8B976B] mt-1 block">Active District Chapters</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#7C7913]/30 via-transparent to-[#4B5D41]/30 blur-md" />
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#8B976B]/30 bg-[#253B26]/30">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
                alt="Foundation Story Storytellers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 duration-700 transition-all"
              />
            </div>
          </div>
        </section>

        {/* 2. Mission & Vision block (Awwwards design split) */}
        <section id="mission-vision-sec" className="py-24 border-b border-[#8B976B]/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#253B26]/30 via-[#253B26]/10 to-transparent border border-[#8B976B]/15 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 duration-700 transition-all text-[#8B976B]">
              <Target className="w-48 h-48" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#253B26] border border-[#8B976B]/25 flex items-center justify-center mb-6 text-[#8B976B]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-headings font-bold text-xl uppercase tracking-wider text-white mb-4">Our Core Mission</h3>
            <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed relative z-10">
              To create sustainable social impact by empowering individuals and communities through education, skill development, women empowerment, environmental responsibility, animal welfare, and humanitarian initiatives.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#253B26]/30 via-[#253B26]/10 to-transparent border border-[#8B976B]/15 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 duration-700 transition-all text-[#8B976B]">
              <Compass className="w-48 h-48" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#253B26] border border-[#8B976B]/25 flex items-center justify-center mb-6 text-[#8B976B]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-headings font-bold text-xl uppercase tracking-wider text-white mb-4">Our Vision</h3>
            <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed relative z-10">
              To build a compassionate, inclusive, and sustainable society where every individual has access to opportunities for learning, growth, well-being, and success.
            </p>
          </div>
        </section>

        {/* 3. Core Values Grid */}
        <section id="values-sec" className="py-24 border-b border-[#8B976B]/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold block mb-2">Our Foundation Code</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Core Human Values</h2>
            <p className="font-sans text-sm text-[#8B976B] leading-relaxed mt-4">
              We live and design by six mathematical values that align each decision we finalize in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#253B26]/10 border border-[#8B976B]/15 rounded-2xl p-8 hover:border-[#7C7913]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-[#8B976B]/20 bg-[#253B26]/40 text-[#8B976B] group-hover:scale-110 group-hover:text-white transition-all">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="font-headings font-bold text-lg text-white mb-2">{val.title}</h3>
                <p className="font-sans text-xs text-[#8B976B]/90 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Timeline Milestones Block */}
        <section id="milestones-sec" className="py-24">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold block mb-2">Chronicle of Action</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Our Major Milestones</h2>
            <p className="font-sans text-sm text-[#8B976B] leading-relaxed mt-4">
              Tracing our path from an emergency response group in 2020 to building scalable national models today.
            </p>
          </div>

          {/* Interactive Responsive Timeline Line */}
          <div className="relative max-w-3xl mx-auto pl-8 sm:pl-0">
            {/* Center line for desktop */}
            <div className="absolute left-[31px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C7913] via-[#4B5D41] to-[#8B976B] opacity-40 transform sm:-translate-x-1/2" />

            <div className="flex flex-col gap-12 sm:gap-16">
              {MILESTONES.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Circle Node indicator */}
                    <div className="absolute left-[-29px] sm:left-1/2 w-4 h-4 rounded-full bg-[#111F18] border-2 border-[#7C7913] transform sm:-translate-x-1/2 z-20 top-1.5 shadow-xl hover:scale-150 duration-300 transition-transform cursor-pointer" />

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-[45%] ${isEven ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                      <span className="font-display text-2xl font-black text-gradient-gold block tracking-wider">
                        {milestone.year}
                      </span>
                      <h4 className="font-headings font-bold text-lg text-white mt-1 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-sans text-sm text-[#8B976B] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Space filler for tablet/desktop */}
                    <div className="hidden sm:block w-[10%] pb-1" />
                    <div className="hidden sm:block w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
