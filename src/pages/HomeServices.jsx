import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Award,
} from "lucide-react";

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
    <section className="w-full bg-[#F5F7FA] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Video */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Dark overlay (better contrast) */}
        <div className="absolute inset-0 bg-[#071A2B]/30" />

        {/* Green glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0D6E4F]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0D6E4F]/25 blur-3xl rounded-full" />

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10 text-center max-w-5xl px-5"
        >
          <motion.h1
            variants={fadeUp}
            className="mt-7 text-white text-4xl sm:text-6xl font-bold leading-tight"
          >
            Trusted Accounting & Tax Advisory
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 inline-block px-4 py-2 bg-[#0D6E4F]/40 rounded-lg border border-[#0D6E4F]/60"
          >
            <h2 className="text-white text-xl sm:text-3xl font-semibold">
              for UK Businesses & Individuals
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/85 text-base sm:text-xl leading-8 max-w-3xl mx-auto"
          >
            We provide clear, compliant and commercially focused accounting
            services for businesses, landlords, contractors and professionals
            across the UK.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="
              px-9 py-3.5 rounded-xl
              bg-[#0D6E4F]
              text-white font-semibold
              hover:bg-[#0b5c42]
              transition
            ">
              Book Consultation
            </button>

            <button className="
              px-9 py-3.5 rounded-xl
              border border-white/25
              text-white
              bg-white/5
              hover:bg-white/10
              backdrop-blur-sm
              transition
            ">
              Explore Services
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* ================= STATS (UPDATED DESIGN) ================= */}
      <section className="py-14 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((s, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                py-10 px-4
                bg-[#0D6E4F]
                border border-[#0D6E4F]
                shadow-md
                transition-all duration-300
                hover:bg-white
                hover:shadow-2xl
                hover:-translate-y-1
              "
            >

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top,rgba(13,110,79,0.08),transparent_60%)]" />

              {/* VALUE */}
              <h3 className="
                relative
                text-3xl font-black
                text-white
                group-hover:text-[#0D6E4F]
                transition-colors duration-300
              ">
                {s.value}
              </h3>

              {/* LABEL */}
              <p className="
                relative
                mt-2 text-sm
                text-white/80
                group-hover:text-[#0D2040]
                transition-colors duration-300
              ">
                {s.label}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >

            <motion.div
              variants={fadeUp}
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                bg-[#0D6E4F]/15
                border border-[#0D6E4F]/30
                text-[#0D6E4F]
                text-xs font-semibold mb-5
              "
            >
              <Award size={14} />
              Trusted Financial Expertise
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-[#0D2040]"
            >
              A Modern Approach to Accounting
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[#6B7280] leading-7 text-base"
            >
              Professional accounting, taxation and advisory services designed
              for long-term growth and compliance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 space-y-4">

              {[
                "HMRC compliant accounting & tax services",
                "Support for landlords & contractors",
                "Business advisory & planning",
                "Cloud-based accounting systems",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#0D2040] font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#0D6E4F]/10 flex items-center justify-center text-[#0D6E4F] text-xs font-bold">
                    ✓
                  </div>
                  {item}
                </div>
              ))}

            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xl overflow-hidden"
          >

            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[340px] object-cover"
            />

            <div className="p-6">

              <h3 className="font-semibold text-[#0D2040] flex items-center gap-2 text-lg">
                <Building2 size={18} className="text-[#0D6E4F]" />
                Professional Advisory in Practice
              </h3>

              <p className="text-sm text-[#6B7280] mt-3">
                Clear reporting, proactive advice, and compliance-first accounting support.
              </p>

            </div>

          </motion.div>

        </div>
      </section>

    </section>
  );
};

export default HomeServices;