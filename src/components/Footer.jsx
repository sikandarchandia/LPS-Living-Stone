import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../assets/logo.png';
import logo2 from '../assets/paste64.jpg';
import logo3 from '../assets/paste66.jpg';
import logo4 from '../assets/paste65.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#04152d] text-white relative overflow-hidden">

      {/* glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ================= TOP ROW (KEEP SAME: 2 COL ALWAYS) ================= */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12">

          {/* LINKS */}
          <div className="text-left">

            <h3 className="text-base sm:text-lg font-bold mb-5">
              Links
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-white/70">

              {[
                'Home',
                'About Us',
                'Services',
                'Free Resources',
                'Careers',
                'Useful Links',
                'Contact Us',
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-300 transition">
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div className="text-left">

            <h3 className="text-base sm:text-lg font-bold mb-5">
              Contact Us
            </h3>

            <div className="text-white/70 text-xs sm:text-sm leading-6 space-y-2">

              <p className="font-semibold text-white">
                LPS LIVINGSTONE
              </p>

              <p>
                Wenzel House<br />
                Olds Approach, Tolpits Lane<br />
                WD18 9AB
              </p>

              <p className="text-cyan-300 font-medium pt-2">
                Tel: 020 7278 0007
              </p>

              <p className="text-white/50 text-xs pt-3">
                Powered By SM
              </p>

            </div>

          </div>

        </div>

        {/* ================= AFFILIATIONS ================= */}
        <div className="mt-12 sm:mt-16">

          <h3 className="text-lg font-bold text-center mb-6">
            Affiliations
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">

            {[logo1, logo2, logo3, logo4].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-center w-full max-w-[110px]"
              >
                <img
                  src={img}
                  className="h-6 sm:h-10 object-contain"
                />
              </motion.div>
            ))}

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-white/50">

          Copyright © 2026 LPS Accountants Limited

        </div>

      </div>
    </footer>
  );
};

export default Footer;