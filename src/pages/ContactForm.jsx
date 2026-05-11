import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Accounting and Business Tax',
    message: '',
    verify: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative bg-[#F5F7FA] py-28 overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-[-180px] left-[-160px] w-[520px] h-[520px] bg-[#0D6E4F]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-180px] right-[-160px] w-[520px] h-[520px] bg-[#0D2340]/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#0D6E4F] text-xs uppercase tracking-[0.25em] shadow-sm">
            <Sparkles size={14} />
            Get in Touch
          </div>

          {/* 🔥 BIGGER TITLE */}
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0D2340]">
            Contact Our Experts
          </h2>

          {/* bigger subtitle */}
          <p className="mt-5 text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-8">
            Fill out the form and our team will respond with professional guidance tailored to your business.
          </p>

        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >

            {/* INFO CARD */}
            <div className="bg-white rounded-3xl p-7 shadow-xl border border-[#E5E7EB]">

              <h3 className="text-2xl font-black text-[#0D2340]">
                LPS Livingstone
              </h3>

              <div className="mt-6 space-y-5 text-base text-[#6B7280]">

                <div className="flex gap-3">
                  <MapPin className="text-[#0D6E4F]" />
                  <p>
                    Wenzel House<br />
                    Olds Approach, Tolpits Lane<br />
                    WD18 9AB
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-[#0D6E4F]" />
                  <p className="text-[#0D2340] font-medium">020 7278 0007</p>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-7 flex gap-3">

                <a className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#0D6E4F]/10 transition">
                  <FaFacebookF size={16} className="text-[#0D2340]" />
                </a>

                <a className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#0D6E4F]/10 transition">
                  <FaTwitter size={16} className="text-[#0D2340]" />
                </a>

              </div>

            </div>

            {/* CTA CARD */}
            <div className="bg-gradient-to-br from-[#0D2340] to-[#0D6E4F] text-white rounded-3xl p-7 shadow-xl">

              <h3 className="text-xl font-bold">
                Need Urgent Help?
              </h3>

              <p className="text-white/80 text-base mt-3">
                Call us directly for fast accounting support.
              </p>

              <p className="mt-5 text-2xl font-black">
                020 7278 0007
              </p>

            </div>

          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[32px] shadow-[0_25px_90px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-10 md:p-14"
          >

            <div className="grid md:grid-cols-2 gap-7">

              <input
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className="px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />

              <input
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />

              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              >
                <option>Accounting and Business Tax</option>
                <option>VAT Services</option>
                <option>Payroll</option>
                <option>Freelancer Support</option>
                <option>Property Tax</option>
              </select>

            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-7 px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
            />

            <div className="mt-8 grid md:grid-cols-2 gap-7 items-center">

              <input
                name="verify"
                placeholder="Verification (e.g. 12)"
                value={form.verify}
                onChange={handleChange}
                className="px-6 py-5 text-base rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />

              {/* BUTTON */}
              <button className="group px-8 py-5 rounded-xl bg-[#0D6E4F] text-white font-bold text-lg shadow-lg hover:bg-[#0b5c42] transition flex items-center justify-center gap-2">

                Send Message
                <Send size={18} />

              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ContactForm;