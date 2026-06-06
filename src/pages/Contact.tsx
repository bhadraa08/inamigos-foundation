/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronRight, HelpCircle, Activity, Heart, Globe } from 'lucide-react';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<'general' | 'partnership' | 'csr'>('general');
  const [formStep, setFormStep] = useState<'form' | 'success'>('form');
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cSubject, setCSubject] = useState('');
  const [cMessage, setCMessage] = useState('');

  const handleContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName || !cEmail || !cMessage) {
      alert('Kindly supply correct parameters to log your query.');
      return;
    }
    setFormStep('success');
  };

  const handleReset = () => {
    setFormStep('form');
    setCName('');
    setCEmail('');
    setCPhone('');
    setCSubject('');
    setCMessage('');
    setInquiryType('general');
  };

  return (
    <div id="contact-page" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Backing decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#253B26]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Get in Touch with Officers</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Let's Build <br />
            <span className="italic font-normal text-gradient-gold">Change Together</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            Have programmatic questions, corporate sponsorship proposals, or want to invite us to speak at your campus? Send a brief wire message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 items-start">
          
          {/* LEFT Sidebar Info and Stylized Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact details */}
            <div className="bg-[#253B26]/10 border border-[#8B976B]/15 rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="font-headings font-bold text-xs uppercase tracking-wider text-white border-b border-[#8B976B]/15 pb-2">
                Coordinators Directory
              </h3>

              <div className="flex flex-col gap-4 font-sans text-xs text-[#8B976B] leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7C7913] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Corporate Headquarters</span>
                    <span>Sector 15, Vashi, Navi Mumbai, MH, 400703, INDIA</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#8B976B]/10 pt-4">
                  <Mail className="w-4 h-4 text-[#7C7913] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Electronic Communication Inbox</span>
                    <span>General: <a href="mailto:contact@inamigos.org" className="text-white hover:underline">contact@inamigos.org</a></span>
                    <span className="block mt-0.5">Sponsorship: <a href="mailto:steward@inamigos.org" className="text-white hover:underline">steward@inamigos.org</a></span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[#8B976B]/10 pt-4">
                  <Phone className="w-4 h-4 text-[#7C7913] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-white mb-0.5">Regional Call Desk</span>
                    <span>Phone: <a href="tel:+919876543210" className="text-white hover:underline">+91 98765 43210</a></span>
                    <span className="block mt-0.5">Timing: Mon-Sat 09:00 - 18:00 IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Modern Local Vectors Map placeholder */}
            <div className="bg-black-emerald/70 border border-[#8B976B]/20 rounded-2xl p-6 relative overflow-hidden aspect-video flex flex-col justify-between shadow-inner">
              {/* Dot Grid overlay representing geometry */}
              <div className="absolute inset-0 bg-[radial-gradient(#8b976b_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              
              {/* Beautiful Abstract Contour Map Lines using mini-vector paths */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" stroke="#7C7913" strokeWidth="2">
                  <path d="M50 100 Q150 50, 200 150 T350 100" />
                  <path d="M20 120 Q120 70, 180 170 T380 90" />
                  <path d="M80 80 Q180 30, 240 130 T320 110" />
                </svg>
              </div>

              {/* Pin marker indicator */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
                <div className="w-10 h-10 rounded-full bg-[#253B26] border-2 border-[#7C7913] flex items-center justify-center animate-bounce shadow-xl">
                  <MapPin className="w-5 h-5 text-[#8B976B]" />
                </div>
                <div className="text-center">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-[#7C7913] font-bold">Mumbai Hub Coordinates</span>
                  <span className="block font-mono text-[10px] text-white/90">19.0330° N, 73.0166° E</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between font-mono text-[8px] text-[#8B976B] uppercase tracking-widest pt-4 border-t border-[#8B976B]/15">
                <span>Core Hub Pin verified</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#7C7913] animate-pulse" /> Live</span>
              </div>
            </div>

          </div>

          {/* RIGHT Contact Interactive Form Card */}
          <div className="lg:col-span-6 bg-[#253B26]/10 border border-[#8B976B]/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {formStep === 'form' ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleContactForm}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  
                  {/* Inquiry channels toggle */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                      Inquiry Target Channel
                    </label>
                    <div className="grid grid-cols-3 gap-2 bg-black-emerald/70 border border-[#8B976B]/20 p-1 rounded-xl">
                      {([
                        { id: 'general', label: 'General' },
                        { id: 'partnership', label: 'Partnership' },
                        { id: 'csr', label: 'Corporate' }
                      ] as const).map((ch) => (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => setInquiryType(ch.id)}
                          className={`py-2 rounded-lg font-headings text-[9px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                            inquiryType === ch.id
                              ? 'bg-[#253B26] border border-[#8B976B]/25 text-white'
                              : 'text-[#8B976B]/75 hover:text-white'
                          }`}
                        >
                          {ch.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Standard Form inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        Steward Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bhadra Nair"
                        value={cName}
                        onChange={(e) => setCName(e.target.value)}
                        className="w-full bg-black-emerald/45 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        Secure Contact Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="bhadra@domain.com"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full bg-black-emerald/45 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full bg-black-emerald/45 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                        Message Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Purpose of inquiry..."
                        value={cSubject}
                        onChange={(e) => setCSubject(e.target.value)}
                        className="w-full bg-black-emerald/45 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                      Brief Message Context
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share detailed particulars on what you would like to coordinate..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full bg-black-emerald/45 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-contact-submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/35 font-headings text-xs font-bold uppercase tracking-widest text-white hover:from-[#7C7913] hover:to-[#8B976B] transition-colors cursor-pointer flex items-center justify-center gap-2 group shadow-xl"
                  >
                    Transmit Information Securely
                    <ChevronRight className="w-4 h-4 text-[#8B976B] group-hover:translate-x-1.5 transition-transform" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#253B26] border border-[#8B976B]/35 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[#8B976B]" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold block mb-2">
                    Transmission complete
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    Message Decoded, {cName}!
                  </h3>
                  <p className="font-sans text-xs text-[#8B976B] leading-relaxed max-w-sm mb-8">
                    Your transmission was saved successful inside local sandbox buffers. Our communication officers will respond directly to <strong className="text-white">{cEmail}</strong> within 12 business hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl border border-[#8B976B]/30 hover:border-white font-mono text-xs uppercase cursor-pointer"
                  >
                    Open New Contact Ticket
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
