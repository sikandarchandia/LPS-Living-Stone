import React from "react";
import { motion } from "framer-motion";

import heroBg from "../assets/background.jpeg";
import heroVideo from "../assets/20260209_1219_New Video_simple_compose_01kh0mam37fjz90gyjrc9xp11q.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const HomeServices = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f6f9ff]">
      {/* ================= HERO ================= */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src={heroBg}
          className="absolute inset-0 w-full h-full object-cover scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#04152d]/40 via-[#0b2b61]/40 to-[#04152d]/75" />

        <div className="absolute -top-40 -left-40 w-[380px] h-[380px] bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[380px] h-[380px] bg-blue-500/20 blur-3xl rounded-full" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white text-3xl sm:text-5xl font-black"
          >
            Welcome to <span className="text-cyan-300">LPS Livingstone</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-white/75 text-sm sm:text-lg"
          >
            Known as <b>Small Business Specialists</b>, we deliver personalised,
            fixed-price accounting services tailored to your needs.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button className="px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-white transition">
              Get Started
            </button>

            <button className="px-6 py-2.5 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[320px] h-[320px] bg-cyan-300/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b2b61]">
              About LPS Livingstone
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 sm:p-7 space-y-4"
          >
            <p className="text-gray-700 leading-7">
              We are a specialist firm of accountants with a strong focus on
              <b className="text-[#0b2b61]"> service charge accounting</b>,
              supporting managing agents, resident management companies, and
              property developments across the UK.
            </p>

            <p className="text-gray-700 leading-7">
              Alongside our service charge expertise, we provide accountancy,
              taxation, and business support services for companies and
              individuals.
            </p>

            <p className="text-gray-700 leading-7">
              In today’s fast-moving environment, clients need timely,
              practical, and reliable financial support. We combine traditional
              service values with modern technology to deliver clear reporting
              and professional advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b2b61]">
              How We Work
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Modern accounting made simple.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[220px] sm:h-[360px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#04152d]/60 to-transparent" />

            <div className="absolute bottom-0 p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-2xl font-bold">
                Modern Accounting. Real Results.
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Fast, accurate financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#04152d] via-[#0b2b61] to-[#0a3d91] py-10 text-center text-white">
        <h3 className="text-2xl sm:text-3xl font-black">
          Ready to Grow Your Business?
        </h3>

        <p className="mt-2 text-white/70 text-sm">
          Speak with our expert accountants today.
        </p>

        <button className="mt-5 px-7 py-2.5 bg-cyan-400 text-black font-bold rounded-xl hover:bg-white transition">
          Book Free Consultation
        </button>
      </section>
    </section>
  );
};

export default HomeServices;
