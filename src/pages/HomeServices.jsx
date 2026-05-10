import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, TrendingUp, Users, Award } from "lucide-react";

import heroBg from "../assets/background.jpeg";
import heroVideo from "../assets/20260209_1219_New Video_simple_compose_01kh0mam37fjz90gyjrc9xp11q.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { label: "UK Businesses Supported", value: "500+" },
  { label: "Years Combined Experience", value: "20+" },
  { label: "Compliance Accuracy", value: "100%" },
  { label: "Client Retention", value: "95%" },
];

const HomeServices = () => {
  return (
    <section className="w-full bg-[#F6F8FC] overflow-hidden">

      {/* ================= HERO (PREMIUM CORPORATE STYLE) ================= */}
      <div className="relative min-h-[72vh] flex items-center justify-center">

        <img
          src={heroBg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* professional overlay */}
        <div className="absolute inset-0 bg-[#0B1F3B]/70" />

        {/* subtle glow */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10 text-center max-w-4xl px-5"
        >

          {/* badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs tracking-wide"
          >
            <ShieldCheck size={14} />
            Chartered-Style Accounting & Advisory Services
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-white text-3xl sm:text-5xl font-semibold leading-tight"
          >
            Trusted Accounting & Tax Advisory
            <span className="block text-cyan-300 font-bold">
              for UK Businesses & Individuals
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/75 text-sm sm:text-lg leading-7"
          >
            We provide clear, compliant and commercially focused accounting services
            for businesses, landlords, contractors and professionals across the UK.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button className="px-7 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-white transition">
              Book Consultation
            </button>

            <button className="px-7 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">
              Explore Services
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* ================= TRUST STATS ================= */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((s, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B2B61]">
                {s.value}
              </h3>
              <p className="text-xs md:text-sm text-slate-500">
                {s.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT (CLEAN CORPORATE STYLE) ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >

            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-4xl font-semibold text-[#0B2B61]"
            >
              A Modern Approach to Accounting
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-slate-600 leading-7"
            >
              LPS Livingstone delivers professional accounting, taxation and advisory services
              designed to support long-term business growth and financial compliance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-slate-600 leading-7"
            >
              We combine technical expertise with practical business insight to help clients
              make informed financial decisions with confidence.
            </motion.p>

            {/* bullets */}
            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-3 text-sm text-slate-700"
            >
              <p>✔ HMRC compliant accounting & tax services</p>
              <p>✔ Specialist support for landlords & contractors</p>
              <p>✔ Business advisory & financial planning</p>
              <p>✔ Cloud-based accounting systems</p>
            </motion.div>

          </motion.div>

          {/* visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border shadow-lg overflow-hidden"
          >

            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[320px] object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold text-[#0B2B61] flex items-center gap-2">
                <Building2 size={18} />
                Professional Advisory in Practice
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Clear reporting, proactive advice, and compliance-first accounting support.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-[#0B1F3B] text-white text-center">

        <h2 className="text-2xl md:text-4xl font-semibold">
          Speak With a Qualified Accountant
        </h2>

        <p className="mt-4 text-white/70 text-sm md:text-base">
          Get tailored advice for your business, tax and financial structure.
        </p>

        <button className="mt-7 px-8 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-white transition">
          Book Free Consultation
        </button>

      </section>

    </section>
  );
};

export default HomeServices;