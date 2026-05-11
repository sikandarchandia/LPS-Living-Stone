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
    <div className="bg-white overflow-hidden font-['Neogrotesk']">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 md:py-32 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#041b3a] via-[#0a2d6b] to-[#0097C2]" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[360px] md:w-[520px] h-[360px] md:h-[520px] bg-[#0097C2]/25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[360px] md:w-[520px] h-[360px] md:h-[520px] bg-[#0A2D6B]/25 blur-[130px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-5 text-center">

          {/* ICON BIGGER */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-sm md:text-base">
            <Landmark size={20} />
            Accounts & Taxation Services
          </div>

          <h1 className="mt-8 md:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Elite Financial
            <span className="block text-[#0097C2]">Control System</span>
          </h1>

          <p className="mt-6 text-white/80 text-base md:text-xl max-w-3xl mx-auto leading-8">
            Strategic accounting and taxation services designed to give you full control over business performance and compliance.
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3 text-[#0A2D6B] font-semibold text-base md:text-lg">
              <TrendingUp size={20} className="text-[#0097C2]" />
              Year-End Strategic Accounting
            </div>

            <h2 className="mt-4 text-3xl md:text-5xl font-black text-[#0A2D6B] leading-snug">
              We Don’t Just Prepare Accounts
              <span className="block text-[#0097C2]">We Engineer Growth</span>
            </h2>

            {/* TEXT NOW BLUE/GREEN (NO GREY) */}
            <p className="mt-6 text-[#0A2D6B] leading-8 text-base md:text-lg">
              At LPS, accounts are used as a real-time decision tool to improve profitability throughout the year.
            </p>

            <p className="mt-4 text-[#0097C2] leading-8 text-base md:text-lg">
              We stay actively involved so your financial decisions are always optimized.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-4">

              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition"
                >
                  <CheckCircle2 className="text-[#0097C2] mt-1" size={20} />
                  <span className="text-[#0A2D6B] text-base md:text-lg font-medium leading-7">
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

            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <img src={img1} className="w-full h-64 md:h-[360px] object-cover" />
            </div>

            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <img src={img2} className="w-full h-64 md:h-[360px] object-cover" />
            </div>

            {/* BADGE BIGGER */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl shadow-lg px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 text-[#0A2D6B]">
              <ShieldCheck className="text-[#0097C2]" size={18} />
              Trusted Experts
            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2D6B] to-[#0097C2]" />

        <div className="relative max-w-3xl mx-auto px-5 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-black leading-snug">
            Build a Smarter Financial Future
          </h2>

          <p className="mt-6 text-white/80 text-base md:text-lg leading-7">
            Book a free consultation with our expert accountants today.
          </p>

          <button className="mt-10 w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-[#0A2D6B] font-bold hover:scale-105 transition flex items-center justify-center gap-3">

            Free Consultation
            <ArrowRight size={18} />

          </button>

          <p className="mt-6 text-white/70 text-sm">
            Call: 020 7278 0007
          </p>

        </div>
      </section>

    </div>
  );
};

export default AccountsTaxation;