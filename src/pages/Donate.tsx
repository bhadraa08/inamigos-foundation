/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Activity, CheckCircle, ShieldCheck, HelpCircle, Star, Sparkles, Receipt, CreditCard, ArrowRight } from 'lucide-react';

export default function Donate() {
  const [frequency, setFrequency] = useState<'once' | 'monthly' | 'corporate'>('monthly');
  const [amount, setAmount] = useState<number | string>(1000);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [customActive, setCustomActive] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'processing' | 'success'>('form');

  // Interactive pre-sets
  const presets = [500, 1000, 2500, 5000];

  const getImpactMessage = (amt: number) => {
    if (amt <= 0) return 'Support InAmigos essential operations.';
    if (amt < 500) return `Supports raw material supplies for 1 community nutrition kit.`;
    if (amt < 1000) return `Guarantees holistic educational kits & digital support for 1 child at Bachpanshala.`;
    if (amt < 2500) return `Guarantees comprehensive community feeding support and diagnostic clinical care for 2 families.`;
    if (amt < 5000) return `Empowers 1 Udaan woman leader with direct vocational incubation, legal tutoring + plants 5 native trees.`;
    return `Will plant ${Math.floor(amt / 100)} native saplings in Miyawaki Forest OR sponsor 2 mobile animal trauma runs.`;
  };

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomActive(false);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    if (rawVal === '') {
      setAmount('');
      setCustomActive(true);
      return;
    }
    const val = parseInt(rawVal, 10);
    setAmount(isNaN(val) ? 0 : val);
    setCustomActive(true);
  };

  const currentAmountNum = typeof amount === 'number' ? amount : parseInt(amount, 10) || 0;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) {
      alert('Kindly supply your name and email to generate secure receipts.');
      return;
    }
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 2000);
  };

  const handleRestart = () => {
    setCheckoutStep('form');
    setDonorName('');
    setDonorEmail('');
    setAmount(1000);
    setCustomActive(false);
  };

  return (
    <div id="donate-page-root" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative backing glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4B5D41]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C7913]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl text-center md:text-left mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Empowering Generational Stewardship</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Secure Funding <br />
            <span className="italic font-normal text-gradient-gold">Infrastructure</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            Sponsor critical food pathways, children's classrooms, women entrepreneurs, or re-forestation campaigns with deep financial integrity.
          </p>
        </div>

        {/* Outer Split Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Calculator and Checkout Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#253B26]/20 border border-[#8B976B]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">

              <AnimatePresence mode="wait">
                {checkoutStep === 'form' && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Frequency Toggles */}
                    <div className="grid grid-cols-3 gap-2 bg-black-emerald/80 p-1.5 rounded-xl border border-[#8B976B]/15 mb-8">
                      {(['once', 'monthly', 'corporate'] as const).map((mode) => (
                        <button
                          key={mode}
                          id={`btn-freq-${mode}`}
                          onClick={() => setFrequency(mode)}
                          className={`py-3 rounded-lg font-headings text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer ${
                            frequency === mode
                              ? 'bg-[#253B26] border border-[#8B976B]/25 text-white'
                              : 'text-[#8B976B]/70 hover:text-white border border-transparent'
                          }`}
                        >
                          {mode === 'once' ? 'One-time' : mode === 'monthly' ? 'Monthly' : 'Corporate'}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-6">
                      
                      {/* Presets and custom entries */}
                      <div>
                        <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-3">
                          Select Investment Value (INR)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                          {presets.map((val) => {
                            const isSelect = currentAmountNum === val && !customActive;
                            return (
                              <button
                                key={val}
                                type="button"
                                id={`btn-preset-${val}`}
                                onClick={() => handlePresetSelect(val)}
                                className={`py-4 rounded-xl border font-headings font-extrabold text-base transition-all cursor-pointer ${
                                  isSelect
                                    ? 'bg-[#4B5D41] border-[#8B976B] text-white shadow-lg'
                                    : 'bg-[#253B26]/30 border-[#8B976B]/15 text-[#8B976B] hover:text-white hover:border-[#8B976B]/55'
                                }`}
                              >
                                ₹{val}
                              </button>
                            );
                          })}
                        </div>

                        {/* Custom Entry Input */}
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 font-headings font-bold text-sm text-[#8B976B]">₹</span>
                          <input
                            type="number"
                            placeholder="Type custom allocation value..."
                            value={amount === 0 ? '' : amount}
                            onChange={handleCustomChange}
                            min="100"
                            className="w-full bg-[#253B26]/30 border border-[#8B976B]/20 rounded-xl py-3.5 pl-8 pr-4 text-sm font-headings font-bold text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Real-Time Impact Calculator Screen */}
                      <div className="bg-[#253B26]/30 border border-[#8B976B]/20 rounded-2xl p-5 relative overflow-hidden">
                        <div className="absolute right-4 top-4 text-[#7C7913] opacity-25">
                          <Activity className="w-12 h-12 stroke-1" />
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-[#7C7913] font-bold block mb-1">
                          Real-time Impact Calculator
                        </span>
                        <p className="font-sans text-xs italic text-[#E8F5E9]/90 font-medium leading-relaxed max-w-[90%]">
                          {getImpactMessage(currentAmountNum)}
                        </p>
                      </div>

                      {/* Donor Information Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                            Steward Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Bhadra Nair"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B976B] mb-2">
                            Secure Dispatch Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="bhadra@domain.com"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            className="w-full bg-black-emerald/40 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/40 focus:outline-none focus:border-[#7C7913] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Secure CTA Button */}
                      <button
                        type="submit"
                        id="btn-trigger-payment"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C7913] to-[#8B976B] border border-[#8B976B]/20 font-headings text-xs font-bold uppercase tracking-widest text-[#111F18] shadow-lg hover:shadow-[#7C7913]/25 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#111F18]" />
                        Contribute Securely (₹{currentAmountNum})
                      </button>

                      {/* Safeguarding assurances */}
                      <div className="flex items-center justify-center gap-4 pt-2 font-mono text-[9px] text-[#8B976B]/75 uppercase">
                        <span className="flex items-center gap-1">🛡️ SSL 256-Bit</span>
                        <span>•</span>
                        <span>📄 80G Tax Deductible (India)</span>
                        <span>•</span>
                        <span>🔒 Encrypted Core</span>
                      </div>

                    </form>
                  </motion.div>
                )}

                {checkoutStep === 'processing' && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center flex flex-col items-center justify-center"
                  >
                    <div className="animate-spin rounded-full w-12 h-12 border-2 border-[#7C7913] border-t-transparent mb-6" />
                    <h3 className="font-headings font-bold text-lg text-white uppercase tracking-wider mb-2">
                      Encrypting Stewardship Ledger...
                    </h3>
                    <p className="font-sans text-xs text-[#8B976B] max-w-sm">
                      We are routing your mock secure sandbox transaction directly through InAmigos digital token pipelines.
                    </p>
                  </motion.div>
                )}

                {checkoutStep === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#253B26] border border-[#8B976B]/40 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#8B976B]" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C7913] font-bold block mb-2">
                      Allocation Established
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                      Thank You for Standing with Us, {donorName}!
                    </h3>

                    <p className="font-sans text-xs text-[#8B976B] leading-relaxed max-w-md mb-8">
                      Your mock transaction of <strong className="text-white">₹{currentAmountNum}</strong> was simulated successfully. A certified receipt summary has been mock-dispatched to <strong className="text-white">{donorEmail}</strong> under standard IRS / 80G tax rules.
                    </p>

                    {/* Receipt breakdown */}
                    <div className="w-full max-w-md bg-black-emerald/70 border border-[#8B976B]/20 rounded-xl p-6 text-left font-mono text-[10px] uppercase text-[#8B976B] leading-relaxed mb-8">
                      <div className="flex items-center justify-between border-b border-[#8B976B]/15 pb-2 mb-3">
                        <span className="font-bold text-white">Steward Ledger Spec</span>
                        <Receipt className="w-4 h-4 text-[#7C7913]" />
                      </div>
                      <div className="flex justify-between"><span>Donor Code</span><span className="text-white">IAM-{Math.floor(Math.random() * 90000) + 10000}</span></div>
                      <div className="flex justify-between"><span>Allocation</span><span className="text-white">{frequency}</span></div>
                      <div className="flex justify-between"><span>Amount</span><span className="text-white">₹{currentAmountNum}</span></div>
                      <div className="flex justify-between"><span>Operation Status</span><span className="text-[#8B976B]">SUCCESS / SANDBOX</span></div>
                    </div>

                    <button
                      onClick={handleRestart}
                      className="px-6 py-3 rounded-lg border border-[#8B976B]/30 hover:border-white text-xs font-mono uppercase text-white transition-all cursor-pointer"
                    >
                      Make Another Allocation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Allocation Transparency visual indexes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#253B26]/10 border border-[#8B976B]/10 rounded-2xl p-6 sm:p-8">
              <h3 className="font-headings font-bold text-sm uppercase tracking-wider text-white mb-6 border-b border-[#8B976B]/15 pb-2">
                Operational Ledger Allocations
              </h3>

              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between font-mono text-[10px] uppercase text-[#8B976B] mb-2">
                    <span>Direct Program Execution</span>
                    <span className="text-white font-bold">85%</span>
                  </div>
                  <div className="w-full bg-black-emerald h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#8B976B] h-full rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="block text-[9px] text-[#8B976B]/70 font-sans mt-1 leading-relaxed">
                    Sustains direct local services (food materials, education supplies, emergency medical vet kits).
                  </span>
                </div>

                <div>
                  <div className="flex justify-between font-mono text-[10px] uppercase text-[#8B976B] mb-2">
                    <span>Rigorous Auditing & Tracking</span>
                    <span className="text-white font-bold">10%</span>
                  </div>
                  <div className="w-full bg-black-emerald h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#7C7913] h-full rounded-full" style={{ width: '10%' }} />
                  </div>
                  <span className="block text-[9px] text-[#8B976B]/70 font-sans mt-1 leading-relaxed">
                    Ensures strict local data capture, auditing, transparent reporting, and digital logs.
                  </span>
                </div>

                <div>
                  <div className="flex justify-between font-mono text-[10px] uppercase text-[#8B976B] mb-2">
                    <span>Administrative Support</span>
                    <span className="text-white font-bold">5%</span>
                  </div>
                  <div className="w-full bg-black-emerald h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#44201C] h-full rounded-full" style={{ width: '5%' }} />
                  </div>
                  <span className="block text-[9px] text-[#8B976B]/70 font-sans mt-1 leading-relaxed">
                    Minimal administration footprint to manage secure hosting, communication rails, and legal filings.
                  </span>
                </div>
              </div>
            </div>

            {/* Corporate/Matching Gifts support card */}
            <div className="bg-[#253B26]/10 border border-[#8B976B]/10 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-[#7C7913] opacity-20">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="font-headings font-bold text-xs uppercase tracking-wider text-white mb-2">
                Matching & Corporate CSR
              </h4>
              <p className="font-sans text-xs text-[#8B976B] leading-relaxed">
                Does your enterprise align with matching gifts programs? We configure custom, automated CSV dashboards that track employee contributions with absolute transparency. Reach out to <strong className="text-white">csr@inamigos.org</strong>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
