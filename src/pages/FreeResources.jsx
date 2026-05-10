import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const data = [
  {
    title: 'ISA Updates',
    content: `...`
  },
  {
    title: 'Changes to Dividend Taxation',
    content: `...`
  },
  {
    title: 'Tax returns FAQs',
    content: `...`
  },
  {
    title: 'Typical Tax Allowable expenses for Limited companies FAQs',
    content: `...`
  },
  {
    title: 'VAT FAQs',
    content: `...`
  },
  {
    title: 'Payroll FAQs',
    content: `...`
  },
  {
    title: 'Freelancers FAQs',
    content: `...`
  },
  {
    title: 'Subcontractors FAQs',
    content: `...`
  },
];

const FreeResources = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
      <section className="relative py-24 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2340] via-[#0D2340] to-[#0D6E4F]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#0D6E4F] text-xs uppercase tracking-[0.2em]">
            <Sparkles size={14} />
            Free Resources
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-black">
            Tax & Business Knowledge Hub
          </h1>

        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 space-y-5">

          {data.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="bg-white rounded-3xl border border-[#E5E7EB] shadow"
              >

                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full flex justify-between p-6 font-bold text-[#0D2340]"
                >

                  {item.title}

                  <ChevronDown
                    className={`text-[#0D6E4F] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />

                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-sm text-[#6B7280] whitespace-pre-line"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </section>

    </div>
  );
};

export default FreeResources;