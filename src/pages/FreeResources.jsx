import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const data = [
  { title: 'ISA Updates', content: `...` },
  { title: 'Changes to Dividend Taxation', content: `...` },
  { title: 'Tax returns FAQs', content: `...` },
  { title: 'Typical Tax Allowable expenses for Limited companies FAQs', content: `...` },
  { title: 'VAT FAQs', content: `...` },
  { title: 'Payroll FAQs', content: `...` },
  { title: 'Freelancers FAQs', content: `...` },
  { title: 'Subcontractors FAQs', content: `...` },
];

const FreeResources = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden bg-white">

        {/* soft premium glow (no dark gradient anymore) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F9FAFB]" />

        <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[520px] h-[520px] bg-[#0D2040]/5 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#0D6E4F] text-xs uppercase tracking-[0.25em] shadow-sm">
            <Sparkles size={14} />
            Free Resources
          </div>

          {/* title */}
          <h1 className="mt-8 text-5xl md:text-6xl font-black text-[#0D2040] leading-tight">
            Tax & Business Knowledge Hub
          </h1>

          <p className="mt-5 text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-8">
            Explore expert answers, tax updates, and essential accounting guidance
            for UK businesses and professionals.
          </p>

        </div>
      </section>

      {/* ================= ACCORDION ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 space-y-6">

          {data.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="
                  bg-white
                  rounded-3xl
                  border border-[#E5E7EB]
                  shadow-sm
                  hover:shadow-md
                  transition-all duration-300
                  overflow-hidden
                "
              >

                {/* HEADER */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="
                    w-full flex justify-between items-center
                    px-7 py-6
                    text-left
                  "
                >

                  <span className="text-lg md:text-xl font-bold text-[#0D2040]">
                    {item.title}
                  </span>

                  <ChevronDown
                    className={`
                      text-[#0D6E4F]
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    size={22}
                  />

                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="
                        px-7 pb-7
                        text-[#6B7280]
                        text-base
                        leading-7
                        whitespace-pre-line
                      "
                    >
                      <div className="border-t border-[#E5E7EB] pt-5">
                        {item.content}
                      </div>
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