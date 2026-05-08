import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import img from '../assets/flat.png';

const services = [
  'Preparation & certification of service charge accounts',
  'Financial statements for RMCs & RTMCos',
  'Corporation tax services',
  'Statutory & company secretarial services',
  'Trust tax returns',
  'Registered office & mail forwarding',
  'Accounting system implementation',
  'Assistance in management handovers',
  'Training for in-house accountants/bookkeepers',
  'Lease-based service charge advisory',
];

const ServiceChargeAccounting = () => {
  return (
    <div className="bg-[#f6f9ff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Service Charge Accounting
          </h1>

          <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 max-w-3xl mx-auto">
            Leading specialists in service charge accounting for residential and commercial properties across London and the UK.
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 text-sm md:text-base leading-7">

          <p>
            We have built our reputation as one of the leading service charge accountants in London,
            serving both commercial and residential property portfolios — from self-managed flats to major managing agents.
          </p>

          <p className="mt-4">
            We currently support over <b>600 service charge clients nationwide</b>, delivering accuracy, compliance, and clarity in every report.
          </p>

        </div>
      </section>

      {/* ================= IMAGE + SERVICES ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img}
              alt="Service Charge Accounting"
              className="rounded-3xl shadow-2xl w-full object-cover h-[420px]"
            />
          </motion.div>

          {/* SERVICES LIST */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl font-black text-[#0b2b61]">
              Complete Service Charge Solutions
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We provide a full end-to-end service charge accounting solution under one roof.
            </p>

            <div className="mt-8 space-y-4">

              {services.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="text-cyan-500 mt-1" size={18} />
                  <span className="text-slate-700 text-sm md:text-base leading-6">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= GUIDANCE ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700 text-sm md:text-base leading-7">

          <div>
            <h3 className="text-xl font-bold text-[#0b2b61] mb-3">Guidance & Standards</h3>
            <p>
              Guidance on accounting and reporting for residential service charge accounts is prepared in line with:
            </p>
            <p className="mt-2 text-gray-600">
              ACCA, ICAEW, ICAS, ARMA, and RICS joint working group standards (October 2011).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0b2b61] mb-3">Legal Framework</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Landlord and Tenant Act 1985</li>
              <li>Landlord and Tenant Act 1987</li>
              <li>Commonhold and Leasehold Reform Act 2002</li>
              <li>Service Charge Management Code (2009)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0b2b61] mb-3">Tribunal Decisions</h3>
            <p>
              We assist landlords and managing agents in understanding leasehold valuation tribunal decisions
              and their implications on service charge recovery and reporting.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-black">
            Need Expert Service Charge Support?
          </h2>

          <p className="mt-5 text-white/70">
            Speak to our specialists for accurate, compliant and efficient service charge accounting.
          </p>

          <button className="mt-8 group relative overflow-hidden px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">

            <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

            <span className="relative flex items-center justify-center gap-2">
              Book Consultation
              <ArrowRight size={18} />
            </span>

          </button>

        </div>
      </section>

    </div>
  );
};

export default ServiceChargeAccounting;