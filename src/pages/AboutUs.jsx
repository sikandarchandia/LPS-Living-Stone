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
    <div className="bg-[#f4f9ff] overflow-hidden">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative pt-40 pb-32 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0b2f68] to-[#15408b]" />

        {/* PREMIUM LIGHTS */}
        <div className="absolute -top-40 left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-cyan-300 text-xs uppercase tracking-[0.25em]">
              <Sparkles size={14} />
              Elite Accounting Solutions
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] text-white">
              Accounting
              <span className="block text-cyan-300">
                Reimagined
              </span>
            </h1>

            <p className="mt-8 text-white/75 text-lg leading-9 max-w-2xl">
              LPS Livingstone combines modern technology, proactive advisory,
              and decades of accounting expertise to deliver exceptional
              financial solutions tailored for modern businesses.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              {/* PRIMARY */}
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-9 py-5 text-white shadow-[0_15px_60px_rgba(34,211,238,0.35)]">

                {/* SHINE */}
                <span className="absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/30 blur-md group-hover:left-[150%] transition-all duration-1000"></span>

                <span className="relative flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]">
                  Explore Services

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>
              </button>

              {/* SECONDARY */}
              <button className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-9 py-5 text-white hover:bg-white/10 transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px]" />

            {/* GLASS CARD */}
            <div className="relative rounded-[45px] border border-white/10 bg-white/10 p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

              {/* INNER LIGHT */}
              <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-white/10 to-transparent" />

              <img
                src={logo}
                alt="LPS"
                className="relative z-10 w-[320px] md:w-[460px] object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

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
              whileHover={{ y: -12 }}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[35px] border border-white/30 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-50 to-blue-50 transition duration-500" />

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600" />

              <div className="relative">

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-xl">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#0b2b61]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* INDUSTRIES */}
      {/* ================================================= */}

      <section className="relative py-28">

        <div className="max-w-[1450px] mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-500 font-bold uppercase tracking-[0.25em] text-xs">
              Industries
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#0b2b61]">
              Industries We Serve
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              We proudly provide accounting, taxation, and advisory services
              across a wide range of industries and business sectors.
            </p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-white p-6 shadow-xl hover:shadow-cyan-100 transition-all duration-500"
              >

                {/* BG */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-50 to-blue-50 transition duration-500" />

                {/* ICON */}
                <div className="relative flex items-center gap-4">

                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg">
                    <CheckCircle2 size={20} />
                  </div>

                  <span className="font-semibold text-[#0b2b61] leading-7">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* TEAM */}
      {/* ================================================= */}

      <section className="relative py-28 bg-gradient-to-br from-[#eef6ff] to-white">

        <div className="max-w-[1450px] mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-500 font-bold uppercase tracking-[0.25em] text-xs">
              Our Team
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#0b2b61]">
              Meet Our Professionals
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our team combines decades of expertise with a proactive and
              personable approach to helping clients succeed.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {team.map((member, index) => {
              const Icon = member.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                  }}
                  className="group relative overflow-hidden rounded-[38px] bg-white border border-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
                >

                  {/* TOP GRADIENT */}
                  <div className="h-36 bg-gradient-to-br from-[#0b2b61] via-[#144a96] to-cyan-500 relative overflow-hidden">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

                    <div className="absolute -bottom-10 left-8 flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-2xl">
                      <Icon
                        size={34}
                        className="text-cyan-500"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 pt-14">

                    <h3 className="text-2xl font-black text-[#0b2b61]">
                      {member.name}
                    </h3>

                    <span className="inline-block mt-2 text-cyan-500 text-xs uppercase tracking-[0.25em] font-bold">
                      {member.role}
                    </span>

                    <p className="mt-6 text-gray-600 leading-8">
                      {member.desc}
                    </p>

                    {/* BUTTON */}
                    <button className="group/btn mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0b2b61]">

                      Read More

                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition"
                      />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <section className="relative py-28">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <span className="text-cyan-500 font-bold uppercase tracking-[0.25em] text-xs">
              FAQ
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#0b2b61]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-xl"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-7 text-left"
                >

                  <span className="text-xl font-bold text-[#0b2b61]">
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openFaq === index ? 180 : 0,
                    }}
                  >
                    <ChevronDown
                      className="text-cyan-500"
                      size={28}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <div className="px-8 pb-8 text-gray-600 text-lg leading-9">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] via-[#0d2f68] to-[#15408b]" />

        <div className="absolute -top-20 left-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Ready To Work With
            <span className="block text-cyan-300">
              Elite Accountants?
            </span>
          </h2>

          <p className="mt-8 text-white/75 text-lg leading-9">
            We help businesses move forward confidently with proactive
            accounting, taxation, and strategic advisory solutions.
          </p>

          <button className="group relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-10 py-5 text-white shadow-[0_15px_60px_rgba(34,211,238,0.35)]">

            <span className="absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/30 blur-md group-hover:left-[150%] transition-all duration-1000"></span>

            <span className="relative flex items-center gap-3 font-bold uppercase tracking-[0.2em]">
              Contact Us Today

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;