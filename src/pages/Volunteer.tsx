/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, Heart, Users, MapPin, CheckCircle2, ChevronRight, HelpCircle, Activity } from 'lucide-react';
import { VOLUNTEER_OPPORTUNITIES } from '../data';

export default function Volunteer() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(VOLUNTEER_OPPORTUNITIES[0].id);
  const [vFormStep, setVFormStep] = useState<'form' | 'success'>('form');
  const [vName, setVName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vMessage, setVMessage] = useState('');

  const activeOp = VOLUNTEER_OPPORTUNITIES.find(o => o.id === selectedOpportunity) || VOLUNTEER_OPPORTUNITIES[0];

  const handleVolunteerForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vName || !vEmail || !vPhone) {
      alert('Kindly fill in all contact markers to process your volunteer alignment.');
      return;
    }
    setVFormStep('success');
  };

  const handleReset = () => {
    setVFormStep('form');
    setVName('');
    setVEmail('');
    setVPhone('');
    setVMessage('');
  };

  const journeySteps = [
    { title: 'Core Alignment', desc: 'Select your preferred action channel and complete the basic digital profile.' },
    { title: 'Empowering Briefing', desc: 'Participate in a 1-hour alignment seminar with regional leads to learn the field protocols.' },
    { title: 'Field Synchronization', desc: 'Co-lead your initial projects on the ground, matched safely with seasoned green or socio-educator leads.' },
    { title: 'Leadership Certification', desc: 'Log 60+ continuous hours to receive our certified "Steward of Change" national gold badge.' }
  ];

  return (
    <div id="volunteer-page" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Absolute visual atmospheric glow cells */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#253B26]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Join The Vanguard of Stewardship</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Co-Write the <br />
            <span className="italic font-normal text-gradient-gold">Next Chapter</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            We do not seek passive spectators. We configure active, accountable roles for planners, educators, tech designers, and environmentalists.
          </p>
        </div>

        {/* 1. Core Opportunities Columns Selector */}
        <section id="opportunity-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 animate-fade-in">
          
          {/* Menu selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#8B976B]/50 block border-b border-[#8B976B]/15 pb-2 mb-2">
              Select Your Area of Competence
            </span>

            <div className="flex flex-col gap-3">
              {VOLUNTEER_OPPORTUNITIES.map((opp) => {
                const isSelected = opp.id === selectedOpportunity;
                return (
                  <button
                    key={opp.id}
                    id={`btn-opp-${opp.id}`}
                    onClick={() => setSelectedOpportunity(opp.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#253B26] border-[#8B976B]/30 text-white'
                        : 'bg-[#253B26]/10 border-transparent text-[#8B976B] hover:bg-[#253B26]/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-headings font-bold text-sm tracking-wide">{opp.title}</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-sm bg-black-emerald border border-[#8B976B]/10 uppercase text-[#8B976B]">
                        {opp.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Role Specifications panel */}
          <div className="lg:col-span-7 bg-[#253B26]/10 border border-[#8B976B]/15 rounded-3xl p-8 sm:p-10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C7913]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8B976B]">{activeOp.category} Unit</span>
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeOp.title}
                </h3>

                <p className="font-sans text-sm text-[#8B976B] leading-relaxed mb-6">
                  {activeOp.description}
                </p>

                {/* Specific Requirements list */}
                <div className="border-t border-[#8B976B]/15 pt-6 mb-6">
                  <h4 className="font-headings font-bold text-xs uppercase tracking-wider text-white mb-3">
                    Steward Prerequisite Criteria
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeOp.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#8B976B] mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-xs text-[#8B976B]/90">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline terms */}
                <div className="flex items-center justify-between border-t border-[#8B976B]/15 pt-4 text-xs font-mono">
                  <span className="text-[#8B976B]">Expected Alignment term:</span>
                  <span className="text-white font-bold uppercase">{activeOp.duration}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </section>

        {/* 2. Core Interactive Registration Wizard Form */}
        <section id="registration-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-[#8B976B]/10">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold">Steward Integration Flow</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to take direct action? Complete the Briefing Request.
            </h2>
            <p className="font-sans text-sm text-[#8B976B]">
              Our regional coordinators read every single profile submissions within 48 hours to design and coordinate appropriate matching positions.
            </p>

            <div className="flex flex-col gap-3 mt-4 border-t border-[#8B976B]/10 pt-6 font-mono text-[10px] text-[#8B976B] uppercase">
              <span className="flex items-center gap-2">✔ High-Speed Sync with Field coordinators</span>
              <span className="flex items-center gap-2">✔ Priority Access to regional summits</span>
              <span className="flex items-center gap-2">✔ Official Certificate of Impact</span>
            </div>
          </div>

          {/* Form actual card */}
          <div className="lg:col-span-7 bg-[#253B26]/10 border border-[#8B976B]/15 rounded-3xl p-6 sm:p-10 shadow-xl">
            <AnimatePresence mode="wait">
              {vFormStep === 'form' ? (
                <motion.form
                  key="vform"
                  onSubmit={handleVolunteerForm}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bhadra Nair"
                        value={vName}
                        onChange={(e) => setVName(e.target.value)}
                        className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        Primary Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="bhadra@domain.com"
                        value={vEmail}
                        onChange={(e) => setVEmail(e.target.value)}
                        className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                      WhatsApp Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={vPhone}
                      onChange={(e) => setVPhone(e.target.value)}
                      className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                      Why do you want to join InAmigos? (Special skillsets/interest)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details on your skillsets, interests or availability..."
                      value={vMessage}
                      onChange={(e) => setVMessage(e.target.value)}
                      className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-volunteer-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/35 font-headings text-xs font-bold uppercase tracking-widest text-white shadow-xl hover:from-[#7C7913] hover:to-[#8B976B] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    Submit Alignment Request
                    <ChevronRight className="w-4 h-4 text-[#8B976B] group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="vsuccess"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#253B26] border border-[#8B976B]/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#8B976B]" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold block mb-2">
                    Briefing Logged
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    Welcome to the Circle, {vName}!
                  </h3>
                  <p className="font-sans text-xs text-[#8B976B] leading-relaxed max-w-sm mb-8">
                    Your profile request was securely logged in our sandbox datastore. One of our regional coordinators will reach out to you at <strong className="text-white">{vEmail}</strong> or via WhatsApp within 48 hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl border border-[#8B976B]/30 hover:border-white font-mono text-xs uppercase text-white transition-all cursor-pointer"
                  >
                    Register new profile
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </section>

        {/* 3. Volunteer Journey Steps Line */}
        <section id="journey-timeline" className="py-16 border-t border-[#8B976B]/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#7C7913] uppercase tracking-widest font-bold block mb-2">Operational Stages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">The Volunteer Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="bg-[#253B26]/10 border border-[#8B976B]/10 rounded-2xl p-6 relative group">
                <span className="font-display text-3xl font-black text-[#7C7913] block mb-3 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                  0{idx + 1}
                </span>
                <h4 className="font-headings font-bold text-sm text-white mb-2">{step.title}</h4>
                <p className="font-sans text-xs text-[#8B976B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
