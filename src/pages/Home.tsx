/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Users, ArrowRight, ShieldCheck, Leaf, Sparkles, Award, Globe, Quote, Compass } from 'lucide-react';
import { AppPage } from '../types';
import { INITIATIVES, TESTIMONIALS } from '../data';

interface HomeProps {
  onPageChange: (page: AppPage) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  // Let us capture 3 key initiatives to feature on home
  const featuredInitiatives = INITIATIVES.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div id="homepage-root" className="relative overflow-hidden bg-[#111F18]">
      {/* Immersive cinematic glowing mesh background */}
      <div className="absolute top-0 left-0 w-full h-[110vh] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-radial from-[#253B26]/30 to-transparent blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-radial from-[#7C7913]/10 to-transparent blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-radial from-[#4B5D41]/20 to-transparent blur-3xl opacity-50" />
        
        {/* Organic overlay patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#8b976b_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        
        {/* Subtle cinematic gradient fade-out */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111F18] to-transparent" />
      </div>

      {/* 1. Fullscreen Opening Hero */}
      <section id="hero-fold" className="min-h-screen flex items-center justify-center pt-24 pb-20 relative z-10 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Elegant Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#253B26]/40 border border-[#8B976B]/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B976B] animate-spin" style={{ animationDuration: '4s' }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8F5E9] font-medium">
                InAmigos Foundation Series
              </span>
            </motion.div>

            {/* Immersive Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-none text-white drop-shadow-sm"
            >
              Uniting Minds for <br />
              <span className="italic font-normal text-gradient-gold drop-shadow-lg">Change</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-base md:text-lg text-[#8B976B]/90 font-sans leading-relaxed max-w-2xl"
            >
              Empowering communities through education, sustainability, compassion, women empowerment, animal welfare, and skill development.
            </motion.p>

            {/* High-End Action Callouts */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              <button
                id="hero-cta-primary-donate"
                onClick={() => onPageChange(AppPage.Donate)}
                className="w-full sm:w-auto overflow-hidden relative group px-8 py-4 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/40 font-headings text-xs font-bold uppercase tracking-widest text-white shadow-2xl hover:shadow-[#7C7913]/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7C7913] to-[#8B976B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
                <Heart className="w-4 h-4 text-[#8B976B] group-hover:text-white group-hover:scale-110 transition-transform" />
                Donate Now
              </button>

              <button
                id="hero-cta-secondary-volunteer"
                onClick={() => onPageChange(AppPage.Volunteer)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#8B976B]/30 hover:border-[#7C7913] bg-[#253B26]/10 backdrop-blur-md font-headings text-xs font-bold uppercase tracking-widest text-[#E8F5E9] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
              >
                Become a Volunteer
                <ArrowRight className="w-4 h-4 text-[#8B976B] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>

            {/* Interactive Stats Panel Quick Look */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-3xl mt-20 grid grid-cols-3 gap-4 border-t border-[#8B976B]/15 pt-10"
            >
              <div className="text-center">
                <span className="block font-display text-2xl sm:text-4xl font-bold text-white uppercase">124k+</span>
                <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8B976B]/80 mt-1">Lives Transformed</span>
              </div>
              <div className="text-center border-x border-[#8B976B]/15">
                <span className="block font-display text-2xl sm:text-4xl font-bold text-white uppercase">55k+</span>
                <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8B976B]/80 mt-1">Trees Planted</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-2xl sm:text-4xl font-bold text-white uppercase">96%</span>
                <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8B976B]/80 mt-1">Efficiency Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Scroll-Based Organic Storytelling (Our Unified Loop) */}
      <section id="storytelling-loop" className="py-24 relative z-10 px-6 border-t border-[#8B976B]/10 bg-radial from-[#253B26]/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#8B976B]/10">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold block mb-3">Our Core Conviction</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                We believe social empowerment is a <span className="text-gradient-gold italic font-normal">circular ecosystem</span>, not a one-direction charity.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-sans text-sm text-[#8B976B] leading-relaxed mb-4">
                We bypass traditional template methods. Every program sustains the next, turning aid recipients into conscious, independent community pillars.
              </p>
              <button
                onClick={() => onPageChange(AppPage.About)}
                className="font-headings inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B976B] hover:text-white transition-colors cursor-pointer group"
              >
                Learn Our Philosophy
                <ArrowRight className="w-3.5 h-3.5 text-[#7C7913] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Immersive 3-Step Flow Diagram (Non-Repetitive bento) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#253B26]/20 border border-[#8B976B]/15 rounded-2xl p-8 hover:border-[#7C7913]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#253B26] border border-[#8B976B]/25 flex items-center justify-center mb-6 group-hover:scale-110 duration-300 transition-transform">
                <Compass className="w-5 h-5 text-[#8B976B]" />
              </div>
              <span className="font-mono text-xs text-[#7C7913] tracking-widest uppercase font-semibold">Stage 01</span>
              <h3 className="font-headings font-bold text-lg text-white mt-2 mb-3">Compassionate Ignition</h3>
              <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed">
                By deploying nutrition models (Seva) and pediatric education nodes (Bachpanshala), we spark immediate wellness and security in vulnerable minds.
              </p>
            </div>

            <div className="bg-[#253B26]/20 border border-[#8B976B]/15 rounded-2xl p-8 hover:border-[#7C7913]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#253B26] border border-[#8B976B]/25 flex items-center justify-center mb-6 group-hover:scale-110 duration-300 transition-transform">
                <Leaf className="w-5 h-5 text-[#8B976B]" />
              </div>
              <span className="font-mono text-xs text-[#7C7913] tracking-widest uppercase font-semibold">Stage 02</span>
              <h3 className="font-headings font-bold text-lg text-white mt-2 mb-3">Sovereignty Incubation</h3>
              <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed">
                We equip older generations (Udaan Women & Vikas Tech Bootcamps) with professional micro-funding and practical tech knowledge to guarantee income.
              </p>
            </div>

            <div className="bg-[#253B26]/20 border border-[#8B976B]/15 rounded-2xl p-8 hover:border-[#7C7913]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#253B26] border border-[#8B976B]/25 flex items-center justify-center mb-6 group-hover:scale-110 duration-300 transition-transform">
                <Globe className="w-5 h-5 text-[#8B976B]" />
              </div>
              <span className="font-mono text-xs text-[#7C7913] tracking-widest uppercase font-semibold">Stage 03</span>
              <h3 className="font-headings font-bold text-lg text-white mt-2 mb-3">Ecological Balance</h3>
              <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed">
                Empowered local citizens reinvest back into nature and our silent friends (Prakriti Miyawaki Forestry & Jeev animal networks), forming a complete cycle of love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Portals (Awwwards Style Layered Cards) */}
      <section id="featured-portals" className="py-24 relative z-10 px-6 border-t border-[#8B976B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.2em] font-bold block mb-2">Our Channels in Action</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              A Glimpse of the Action Pillars
            </h2>
            <p className="font-sans text-sm text-[#8B976B] leading-relaxed mt-4">
              We coordinate six dedicated sister initiatives tailored to build complete social, physical, and ecological resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredInitiatives.map((portal, idx) => (
              <div
                key={portal.id}
                className="group relative rounded-2xl overflow-hidden bg-[#253B26]/10 border border-[#8B976B]/15 hover:border-[#7C7913]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Visual Image Banner with modern mask */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111F18] via-transparent to-transparent z-10" />
                  <img
                    src={portal.image}
                    alt={portal.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ backgroundColor: portal.color, boxShadow: `0 0 12px 3px ${portal.color}` }} />
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between relative z-20">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8B976B] block">Portal 0{idx + 1}</span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1 mb-3 group-hover:text-[#8B976B] transition-colors">{portal.title}</h3>
                    <p className="font-sans text-sm text-[#8B976B]/90 leading-relaxed mb-6">
                      {portal.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#8B976B]/10 flex items-center justify-between">
                    <div className="flex gap-4">
                      {portal.impactMetrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="block font-headings font-bold text-white text-sm">{m.value}</span>
                          <span className="block font-sans text-[9px] text-[#8B976B]/70 tracking-wider uppercase">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        onPageChange(AppPage.Initiatives);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full bg-[#253B26] group-hover:bg-[#7C7913] flex items-center justify-center text-[#8B976B] group-hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onPageChange(AppPage.Initiatives)}
              className="px-6 py-3 rounded-xl border border-[#8B976B]/30 hover:border-[#7C7913] text-[#8B976B] font-headings text-xs font-bold uppercase tracking-widest hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer"
            >
              Examine All Six Initiatives
              <ArrowRight className="w-4 h-4 text-[#7C7913] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Immersive Testimonials Matrix (Story-focused slider) */}
      <section id="home-voices" className="py-24 relative z-10 px-6 border-t border-[#8B976B]/10 bg-gradient-to-b from-[#111F18] to-[#16271a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.2em] font-bold block mb-2">Voices from the field</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Testified Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((voice) => (
              <div
                key={voice.id}
                className="bg-[#253B26]/10 border border-[#8B976B]/15 rounded-2xl p-8 relative hover:border-[#7C7913]/30 transition-colors"
              >
                <div className="absolute top-6 right-6 text-[#8B976B]/20">
                  <Quote className="w-12 h-12" />
                </div>

                <p className="font-sans text-sm text-[#E8F5E9]/90 italic leading-relaxed relative z-10 pr-6">
                  "{voice.quote}"
                </p>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#8B976B]/10 relative z-10">
                  <img
                    src={voice.avatar}
                    alt={voice.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-[#8B976B]/30"
                  />
                  <div>
                    <h4 className="font-headings font-bold text-sm text-white">{voice.name}</h4>
                    <span className="font-mono text-[10px] text-[#8B976B] tracking-wider uppercase">{voice.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Action Callout Fold */}
      <section id="home-cta-fold" className="py-24 relative z-10 px-6 border-t border-[#8B976B]/10 bg-black-emerald overflow-hidden">
        {/* Abstract glowing patterns */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-radial from-[#7C7913]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B976B]/30 to-transparent" />
        
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#253B26]/30 via-black-emerald to-[#152e20] border border-[#8B976B]/25 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold block mb-4">Immediate Alignment</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Are you prepared to ignite generational change?
            </h2>
            <p className="font-sans text-sm text-[#8B976B] mt-6 leading-relaxed">
              Every single child educated, ecological sapling rooted, and community emergency meal dispatched is powered directly by minds like yours. Stand with InAmigos today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <button
                id="cta-fold-donate"
                onClick={() => onPageChange(AppPage.Donate)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C7913] to-[#8B976B] font-headings text-xs font-bold uppercase tracking-wider text-black hover:scale-105 duration-300 cursor-pointer shadow-lg hover:shadow-[#7C7913]/20"
              >
                Launch Custom Donation
              </button>

              <button
                id="cta-fold-volunteer"
                onClick={() => onPageChange(AppPage.Volunteer)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#8B976B]/30 bg-[#253B26]/20 font-headings text-xs font-bold uppercase tracking-wider text-white hover:border-white transition-colors cursor-pointer"
              >
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
