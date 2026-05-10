import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import serviceImage from "../assets/serviceImage.png";

const serviceColumns = [
  {
    title: "Accounts & Taxation",
    icon: Landmark,
    route: "/services/accounts-taxation",
    items: [
      { name: "Accounts and Taxation", slug: "accounts-taxation" },
      { name: "Bookkeeping", slug: "bookkeeping" },
      { name: "Payroll", slug: "payroll" },
      { name: "VAT", slug: "vat" },
      { name: "Rental Income and Property Tax", slug: "rental-property-tax" },
      { name: "Contractors & Freelancers", slug: "contractors-freelancers" },
    ],
  },
  {
    title: "Business Advisory & Support",
    icon: BriefcaseBusiness,
    route: "/services/business-advisory",
    items: [
      { name: "Business Advisory", slug: "business-advisory" },
      { name: "Business Startup Advice", slug: "startup-advice" },
      { name: "HMRC Investigation / Enquiries", slug: "hmrc-investigation" },
      { name: "IR35 Review", slug: "ir35-review" },
      { name: "International Business", slug: "international-business" },
      { name: "Company Formation", slug: "company-formation" },
    ],
  },
  {
    title: "Other Services",
    icon: FileCheck2,
    route: "/services/other-services",
    items: [
      { name: "Urgent Deadlines / Same Day Services", slug: "urgent-services" },
      { name: "Registered Office & Mail Forwarding", slug: "mail-forwarding" },
      { name: "Tax Credits & Allowances", slug: "tax-credits" },
      { name: "VISA Application", slug: "visa-application" },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#f5f9ff] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#15408b]" />

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
              Premium Financial Services
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] text-white">
              Smart Business
              <span className="block text-cyan-300">Financial Solutions</span>
            </h1>

            <p className="mt-8 text-white/75 text-base md:text-lg leading-8 md:leading-9 max-w-2xl">
              We provide accounting, taxation, bookkeeping, advisory, and compliance services for modern businesses.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#services-grid"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 sm:px-9 py-4 sm:py-5 text-white font-bold uppercase tracking-[0.18em] hover:scale-[1.02] transition"
              >
                Explore Services{" "}
                <ArrowRight className="inline ml-2" size={18} />
              </a>

              <Link
                to="/contact"
                className="rounded-2xl border border-white/20 bg-white/5 px-7 sm:px-9 py-4 sm:py-5 text-white hover:bg-white/10 transition"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-10 lg:mt-0"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/10 p-4 sm:p-5 backdrop-blur-2xl">
              <img
                src={serviceImage}
                alt="Services overview"
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-[28px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16">
          
          <motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2b61]">
              Tailored Accounting & Advisory Services
            </h2>

            <div className="mt-10 space-y-5">
              {[
                "Professional Financial Planning",
                "Business Growth Strategies",
                "Tax Efficient Structures",
                "Fast & Reliable Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow hover:shadow-md transition"
                >
                  <CheckCircle2 className="text-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative bg-gradient-to-br from-[#0b2b61] to-cyan-500 p-8 sm:p-10 rounded-[40px] text-white overflow-hidden">
            <ShieldCheck size={80} className="opacity-20 absolute top-6 right-6" />
            
            <h3 className="text-3xl sm:text-4xl font-black">
              Trusted Across Industries
            </h3>

            <p className="mt-6 text-white/80 leading-7">
              We help businesses achieve compliance, stability, and growth.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 bg-white text-[#0b2b61] px-6 py-3 rounded-xl font-bold hover:scale-[1.03] transition"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid" className="py-20 md:py-24 bg-white">
        <div className="max-w-[1450px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2b61]">
            Professional Services
          </h2>
        </div>

        <div className="mt-16 md:mt-20 max-w-[1450px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceColumns.map((column, index) => {
            const Icon = column.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-[30px] shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-28 md:h-32 bg-gradient-to-r from-[#0b2b61] to-cyan-500 flex items-end p-5 md:p-6">
                  <Icon className="text-white" size={36} />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold">{column.title}</h3>

                  <div className="mt-6 space-y-3">
                    {column.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/services/${item.slug}`}
                        className="flex justify-between items-center p-3 bg-slate-50 rounded-xl hover:bg-cyan-50 transition"
                      >
                        <span className="text-sm md:text-base">{item.name}</span>
                        <ChevronRight size={16} />
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={column.route}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#0b2b61] hover:gap-3 transition"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-[#04142d] to-[#15408b]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Let’s Build Your Financial Future
        </h2>

        <p className="mt-6 text-white/70">
          Get expert financial guidance today.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-cyan-400 px-7 sm:px-8 py-4 rounded-xl font-bold text-white hover:scale-[1.03] transition"
        >
          Book Free Consultation <ArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Services;