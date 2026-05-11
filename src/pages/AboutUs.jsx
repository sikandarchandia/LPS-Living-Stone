import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Users2,
} from 'lucide-react';

import logo from '../assets/logo.png';

const industries = [
  'Press & Television Media',
  'Fashion & Design',
  'Medical Professionals',
  'IT Consultants',
  'Games & Recreation Stores',
  'NGOs',
  'Security & Man-Guarding',
  'Educational Establishments',
  'Import & Export',
  'E-Commerce',
  'Retail & General',
  'Restaurant Franchises',
  'Construction',
  'Service Charge Accounting',
];

const team = [
  {
    name: 'Shahbaz Ahmed',
    role: 'ACA',
    icon: ShieldCheck,
    desc: 'Managing Director with extensive expertise in SME accounting, tax planning, service charge accounting, and HMRC compliance.',
  },
  {
    name: 'Ronnie Jacob',
    role: 'FCA',
    icon: Building2,
    desc: 'Over 40 years of experience specialising in taxation, family businesses, valuations, and financial strategy.',
  },
  {
    name: 'Philippa Aaronson',
    role: 'BSc FFA',
    icon: Sparkles,
    desc: 'Experienced pensions actuary with expertise in retirement planning and investment advisory.',
  },
  {
    name: 'Sibtain Aslam',
    role: 'ACCA',
    icon: Users2,
    desc: 'Practice Manager focused on payroll, pensions, HMRC compliance, and operational excellence.',
  },
];

const AboutUs = () => {
  const [openFaq] = useState(0);

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-44 pb-36 overflow-hidden bg-white">

        {/* soft background glow only */}
        <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] rounded-full bg-[#0D6E4F]/5 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[520px] h-[520px] rounded-full bg-[#0D2040]/5 blur-3xl" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D6E4F]/20 bg-[#0D6E4F]/5 px-5 py-2 text-[#0D6E4F] text-xs uppercase tracking-[0.25em]">
              <Sparkles size={14} />
              Elite Accounting Solutions
            </div>

            <h1 className="mt-10 text-6xl md:text-7xl font-black leading-[1.05] text-[#0D2040]">
              Accounting
              <span className="block text-[#0D6E4F]">
                Reimagined
              </span>
            </h1>

            <p className="mt-10 text-[#6B7280] text-lg md:text-xl leading-9 max-w-2xl">
              LPS Livingstone combines modern technology with decades of financial expertise
              to deliver precision-driven accounting and advisory services.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-[#0D6E4F] px-10 py-5 text-white font-bold flex items-center gap-3 hover:bg-[#0b5c42] transition">
                Explore Services <ArrowRight size={18} />
              </button>

              <button className="rounded-2xl border border-[#E5E7EB] bg-white px-10 py-5 text-[#0D2040] hover:bg-[#F5F7FA] transition">
                Contact Our Team
              </button>

            </div>

          </motion.div>

          {/* LOGO CARD */}
          <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}>

            <div className="relative rounded-[45px] border border-[#E5E7EB] bg-white shadow-sm p-12">

              <img
                src={logo}
                alt="LPS"
                className="w-[360px] md:w-[520px] mx-auto object-contain hover:scale-105 transition duration-700"
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative -mt-20 z-10 bg-white">

        <div className="max-w-[1450px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            { title: 'Trusted Experts', desc: 'Decades of professional accounting experience.' },
            { title: 'Modern Technology', desc: 'Advanced systems for efficient business solutions.' },
            { title: 'Client Focused', desc: 'Tailored services designed around your goals.' },
            { title: 'Business Growth', desc: 'Helping businesses scale confidently.' },
          ].map((item, index) => (
            <div key={index} className="group rounded-[30px] bg-white border border-[#E5E7EB] p-9 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-[#0D6E4F] text-white flex items-center justify-center">
                <CheckCircle2 size={26} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#0D2040]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#6B7280]">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-32 bg-white">

        <h2 className="text-center text-5xl md:text-6xl font-black text-[#0D2040]">
          Industries We Serve
        </h2>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {industries.map((industry, index) => (
            <div key={index} className="bg-white border border-[#E5E7EB] p-6 rounded-2xl hover:shadow-sm transition">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 bg-[#0D6E4F] text-white flex items-center justify-center rounded-xl">
                  <CheckCircle2 size={18} />
                </div>

                <span className="font-semibold text-[#0D2040] text-base">
                  {industry}
                </span>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-32 bg-[#F9FAFB]">

        <h2 className="text-center text-5xl md:text-6xl font-black text-[#0D2040]">
          Meet Our Professionals
        </h2>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {team.map((member, index) => {
            const Icon = member.icon;

            return (
              <div key={index} className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden hover:shadow-md transition">

                <div className="h-32 bg-[#0D2040] flex items-center justify-center">
                  <Icon className="text-[#0D6E4F]" size={30} />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-[#0D2040]">
                    {member.name}
                  </h3>

                  <span className="text-[#0D6E4F] text-sm">
                    {member.role}
                  </span>

                  <p className="mt-4 text-[#6B7280] leading-7">
                    {member.desc}
                  </p>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-white text-center border-t border-[#E5E7EB]">

        <h2 className="text-5xl md:text-6xl font-black text-[#0D2040]">
          Ready To Work With Elite Accountants?
        </h2>

        <button className="mt-12 bg-[#0D6E4F] px-12 py-6 rounded-2xl font-bold text-lg text-white hover:bg-[#0b5c42] transition">
          Contact Us Today
        </button>

      </section>

    </div>
  );
};

export default AboutUs;