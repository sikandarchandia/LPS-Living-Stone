import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, CheckCircle2 } from 'lucide-react';

import heroImg from '../assets/European-Union-businesses.png'; // 👈 ADD YOUR TOP IMAGE

const services = [
  'Business start-up advice',
  'Intra-EU business advisory',
  'Company formation',
  'HMRC representation',
  'Registered office address',
  'Director service address',
  'Mail forwarding services',
  'Credit control support',
  'Client meeting representation',
  'Same-day / urgent services',
  'UK bank account assistance',
  'National Insurance applications',
  'Import & export VAT advice',
  'Import & export licensing support',
];

const EUBusiness = () => {
  return (
    <div className="bg-[#f6f9ff] overflow-hidden">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">

        {/* IMAGE */}
        <img
          src={heroImg}
          alt="EU Business"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04152d]/90 via-[#0d2f68]/80 to-[#0a3d91]/70" />

        {/* CONTENT */}
        <div className="relative h-full flex items-center justify-center text-center px-6">

          <div className="max-w-4xl text-white">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-cyan-200 text-xs uppercase tracking-[0.2em]">
              <Globe2 size={14} />
              International Business Services
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-black leading-tight">
              EU Business Advisory
            </h1>

            <p className="mt-5 text-white/70 text-sm md:text-lg leading-7">
              Cross-border accounting, compliance, and company setup solutions for UK & EU businesses.
            </p>

          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 text-sm md:text-base leading-7">

          <p>
            In addition to our core accountancy and taxation services, we provide specialist support
            for business owners who operate in the UK while living abroad or managing cross-border EU operations.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0b2b61]">
              EU & International Business Services
            </h2>
            <p className="mt-4 text-gray-600">
              Complete cross-border compliance & business support
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 transition duration-500" />

                <div className="relative flex items-start gap-3">

                  <CheckCircle2 className="text-cyan-500 mt-1 group-hover:scale-110 transition" />

                  <span className="text-slate-700 font-medium leading-6">
                    {item}
                  </span>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-black">
            Expand Your Business Across Europe
          </h2>

          <p className="mt-5 text-white/70">
            Get expert EU structuring, compliance, and international tax guidance.
          </p>

          <button className="mt-8 group relative overflow-hidden px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">

            <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

            <span className="relative flex items-center justify-center gap-2">
              Book Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </span>

          </button>

        </div>
      </section>

    </div>
  );
};

export default EUBusiness;