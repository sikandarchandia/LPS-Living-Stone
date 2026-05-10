import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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

const faqs = [
  {
    q: 'Why should businesses choose LPS Livingstone?',
    a: 'We combine traditional accounting values with modern financial technology and proactive consultancy to help businesses grow confidently.',
  },
  {
    q: 'What sectors does LPS specialise in?',
    a: 'We support industries including IT, construction, retail, hospitality, medical professionals, NGOs, e-commerce, and service charge accounting.',
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#F5F7FA] overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2340] via-[#0D2340] to-[#0D6E4F]" />

        <div className="absolute -top-40 left-[-120px] w-[500px] h-[500px] rounded-full bg-[#0D6E4F]/20 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#0D6E4F]/20 blur-3xl" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D6E4F]/30 bg-[#0D6E4F]/10 px-5 py-2 text-[#0D6E4F] text-xs uppercase tracking-[0.25em]">
              <Sparkles size={14} />
              Elite Accounting Solutions
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] text-white">
              Accounting
              <span className="block text-[#0D6E4F]">
                Reimagined
              </span>
            </h1>

            <p className="mt-8 text-white/75 text-lg leading-9 max-w-2xl">
              LPS Livingstone combines modern technology...
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="group relative overflow-hidden rounded-2xl bg-[#0D6E4F] px-9 py-5 text-white shadow-lg">
                <span className="relative flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]">
                  Explore Services
                  <ArrowRight size={18} />
                </span>
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-9 py-5 text-white hover:bg-white/10 transition-all duration-300">
                Contact Our Team
              </button>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >

            <div className="absolute inset-0 bg-[#0D6E4F]/20 blur-[120px]" />

            <div className="relative rounded-[45px] border border-white/10 bg-white/10 p-10 backdrop-blur-2xl">

              <img
                src={logo}
                alt="LPS"
                className="relative z-10 w-[320px] md:w-[460px] object-contain hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="relative -mt-16 z-10">

        <div className="max-w-[1450px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            {
              title: 'Trusted Experts',
              desc: 'Decades of professional accounting experience.',
            },
            {
              title: 'Modern Technology',
              desc: 'Advanced systems for efficient business solutions.',
            },
            {
              title: 'Client Focused',
              desc: 'Tailored services designed around your goals.',
            },
            {
              title: 'Business Growth',
              desc: 'Helping businesses scale confidently.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-[#E5E7EB] bg-white p-8"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#0D6E4F]/5 transition" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-[#0D6E4F] text-white flex items-center justify-center">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#0D2340]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#6B7280]">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-28">

        <h2 className="text-center text-5xl font-black text-[#0D2340]">
          Industries We Serve
        </h2>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-[#0D6E4F] text-white flex items-center justify-center rounded-xl">
                  <CheckCircle2 size={20} />
                </div>

                <span className="font-semibold text-[#0D2340]">
                  {industry}
                </span>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-[#F5F7FA]">

        <h2 className="text-center text-5xl font-black text-[#0D2340]">
          Meet Our Professionals
        </h2>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {team.map((member, index) => {
            const Icon = member.icon;

            return (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden"
              >

                <div className="h-32 bg-[#0D2340] flex items-center justify-center">
                  <Icon className="text-[#0D6E4F]" size={30} />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0D2340]">
                    {member.name}
                  </h3>

                  <span className="text-[#0D6E4F] text-xs">
                    {member.role}
                  </span>

                  <p className="mt-4 text-[#6B7280]">
                    {member.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">

        <h2 className="text-center text-5xl font-black text-[#0D2340]">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <div className="bg-white border border-[#E5E7EB] rounded-2xl">

              <button className="w-full flex justify-between p-6">

                <span className="text-[#0D2340] font-bold">
                  {faq.q}
                </span>

                <ChevronDown className="text-[#0D6E4F]" />

              </button>

              <div className="px-6 pb-6 text-[#6B7280]">
                {faq.a}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0D2340] text-white text-center">

        <h2 className="text-5xl font-black">
          Ready To Work With Elite Accountants?
        </h2>

        <button className="mt-10 bg-[#0D6E4F] px-10 py-5 rounded-2xl font-bold">
          Contact Us Today
        </button>

      </section>

    </div>
  );
};

export default AboutUs;