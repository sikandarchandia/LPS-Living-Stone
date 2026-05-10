import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

import img1 from '../../assets/accounts1.png';
import img2 from '../../assets/accounts2.png';

const features = [
  'Choosing a tax-efficient business structure',
  'VAT planning and advice',
  'Corporation tax advice',
  'Maximising tax relief on acquisitions',
  'Minimising tax on disposals',
  'Tax schemes & allowances optimisation',
  'HMRC compliance & investigations support',
];

const AccountsTaxation = () => {
  return (
    <div className="bg-[#f5f8ff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 md:py-32 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-cyan-400/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-blue-500/20 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-5 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs md:text-sm">
            <Landmark size={14} />
            Accounts & Taxation Services
          </div>

          <h1 className="mt-6 md:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Elite Financial
            <span className="block text-cyan-300">Control System</span>
          </h1>

          <p className="mt-5 md:mt-6 text-white/70 text-sm md:text-lg max-w-3xl mx-auto leading-7 md:leading-8">
            Strategic accounting and taxation services designed to give you full control over your business performance and compliance.
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-2 text-cyan-600 font-semibold text-sm md:text-base">
              <TrendingUp size={16} />
              Year-End Strategic Accounting
            </div>

            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-black text-[#0b2b61] leading-snug">
              We Don’t Just Prepare Accounts
              <span className="block text-cyan-500">We Engineer Growth</span>
            </h2>

            <p className="mt-5 text-gray-600 text-sm md:text-base leading-7">
              At LPS, accounts are used as a real-time decision tool to control costs and improve profitability throughout the year.
            </p>

            <p className="mt-3 text-gray-600 text-sm md:text-base leading-7">
              We stay actively involved so your decisions are always financially optimized.
            </p>

            {/* FEATURES */}
            <div className="mt-8 md:mt-10 grid gap-3 md:gap-4">

              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition"
                >
                  <CheckCircle2 className="text-cyan-500 mt-1" size={18} />
                  <span className="text-slate-700 text-sm md:text-base font-medium leading-6">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative space-y-6 md:space-y-8"
          >

            <div className="rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl">
              <img
                src={img1}
                alt="Accounts overview"
                className="w-full h-56 md:h-[320px] object-cover"
              />
            </div>

            <div className="rounded-2xl md:rounded-[30px] overflow-hidden shadow-xl">
              <img
                src={img2}
                alt="Taxation support"
                className="w-full h-56 md:h-[320px] object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 md:left-10 bg-white/90 backdrop-blur-xl shadow-lg px-4 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="text-cyan-500" size={16} />
              Trusted Experts
            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-5 text-center text-white">

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-snug">
            Build a Smarter Financial Future
          </h2>

          <p className="mt-5 text-white/70 text-sm md:text-base leading-7">
            Book a free consultation with our expert accountants today.
          </p>

          <button className="mt-8 md:mt-10 w-full sm:w-auto group relative overflow-hidden px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold hover:scale-[1.02] transition">

            <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

            <span className="relative flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
              Free Consultation
              <ArrowRight size={18} />
            </span>

          </button>

          <p className="mt-5 text-white/60 text-sm">
            Call: 020 7278 0007
          </p>

        </div>
      </section>

    </div>
  );
};

export default AccountsTaxation;