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
    <div className="relative bg-[#f6f9ff] py-24 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-[-160px] left-[-140px] w-[450px] h-[450px] bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-160px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border text-cyan-600 text-xs uppercase tracking-[0.2em] shadow-sm">
            <Sparkles size={14} />
            Get in Touch
          </div>

          <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#0b2b61]">
            Contact Our Experts
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Fill out the form and our team will respond shortly with professional guidance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              <h3 className="text-xl font-black text-[#0b2b61]">
                LPS Livingstone
              </h3>

              <div className="mt-5 space-y-4 text-sm text-slate-600">

                <div className="flex gap-3">
                  <MapPin className="text-cyan-500" />
                  <p>
                    Wenzel House<br />
                    Olds Approach, Tolpits Lane<br />
                    WD18 9AB
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-cyan-500" />
                  <p>020 7278 0007</p>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-6 flex gap-3">
                <a className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 transition">
               <FaFacebookF size={16} />

                </a>
                <a className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 transition">
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>

            {/* CTA CARD */}
            <div className="bg-gradient-to-br from-[#0b2b61] to-cyan-500 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-bold">Need Urgent Help?</h3>
              <p className="text-white/80 text-sm mt-2">
                Call us directly for fast accounting support.
              </p>
              <p className="mt-4 text-lg font-bold">020 7278 0007</p>
            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[30px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className="px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-6 px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">

              <input
                name="verify"
                placeholder="Verification (e.g. 12)"
                value={form.verify}
                onChange={handleChange}
                className="px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold shadow-lg">

                <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition" />
                </span>

              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ContactForm;