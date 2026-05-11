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
    <div className="bg-[#F5F7FA] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2340] via-[#0D2340] to-[#0D6E4F]" />

        {/* glow */}
        <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/20 blur-3xl rounded-full" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[#0D6E4F] text-xs uppercase tracking-[0.25em]">
              <Sparkles size={14} />
              Premium Financial Services
            </div>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] text-white">
              Smart Business
              <span className="block text-[#0D6E4F]">
                Financial Solutions
              </span>
            </h1>

            <p className="mt-8 text-white/75 text-lg leading-8 max-w-2xl">
              We provide accounting, taxation, bookkeeping, advisory, and compliance services
              built for modern businesses and professionals.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#services-grid"
                className="rounded-2xl bg-[#0D6E4F] hover:bg-[#0b5c42] px-8 py-4 text-white font-bold uppercase tracking-[0.15em] transition"
              >
                Explore Services <ArrowRight className="inline ml-2" size={18} />
              </a>

              <Link
                to="/contact"
                className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-white hover:bg-white/10 transition"
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
          >
            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/10 p-4 backdrop-blur-2xl">
              <img
                src={serviceImage}
                alt="Services overview"
                className="w-full h-[400px] md:h-[520px] object-cover rounded-[30px]"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0D2340]">
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
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm"
                >
                  <CheckCircle2 className="text-[#0D6E4F]" />
                  <span className="text-[#0D2340] font-medium">{item}</span>
                </div>
              ))}

            </div>

          </div>

          <div className="relative bg-gradient-to-br from-[#0D2340] to-[#0D6E4F] p-10 rounded-[40px] text-white overflow-hidden">

            <ShieldCheck size={90} className="opacity-20 absolute top-6 right-6" />

            <h3 className="text-3xl md:text-4xl font-black">
              Trusted Across Industries
            </h3>

            <p className="mt-6 text-white/75 leading-7">
              We help businesses achieve compliance, stability, and long-term growth
              with expert financial guidance.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 bg-white text-[#0D2340] px-6 py-3 rounded-xl font-bold"
            >
              Learn More <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section id="services-grid" className="py-24 bg-[#F5F7FA]">

        <div className="max-w-[1450px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2340]">
            Professional Services
          </h2>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1450px] mx-auto px-6">

          {serviceColumns.map((column, index) => {
            const Icon = column.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[30px] shadow-lg overflow-hidden hover:shadow-xl transition"
              >

                <div className="h-32 bg-gradient-to-r from-[#0D2340] to-[#0D6E4F] flex items-end p-6">
                  <Icon className="text-white" size={38} />
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0D2340]">
                    {column.title}
                  </h3>

                  <div className="mt-6 space-y-3">

                    {column.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/services/${item.slug}`}
                        className="flex justify-between items-center p-3 bg-[#F5F7FA] rounded-xl hover:bg-[#EAF3EE] transition"
                      >
                        <span className="text-sm md:text-base text-[#0D2340]">
                          {item.name}
                        </span>
                        <ChevronRight size={16} className="text-[#0D6E4F]" />
                      </Link>
                    ))}

                  </div>

                  <Link
                    to={column.route}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#0D6E4F]"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-[#0D2340] to-[#0D6E4F] text-white">

        <h2 className="text-4xl md:text-5xl font-black">
          Let’s Build Your Financial Future
        </h2>

        <p className="mt-6 text-white/75">
          Get expert accounting and advisory support today.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-[#0D6E4F] px-8 py-4 rounded-xl font-bold hover:bg-[#0b5c42]"
        >
          Book Free Consultation <ArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default Services;