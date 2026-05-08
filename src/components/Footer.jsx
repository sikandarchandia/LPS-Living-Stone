import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#04152d] text-white relative overflow-hidden">

      {/* glow (reduced intensity) */}
      <div className="absolute top-[-140px] left-[-140px] w-[220px] h-[220px] bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[220px] h-[220px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-2 gap-6">

          {/* LINKS */}
          <div>

            <h3 className="text-sm font-semibold mb-3">
              Links
            </h3>

            <ul className="space-y-1 text-xs text-white/70">

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
                  <a
                    href="#"
                    className="hover:text-cyan-300 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-semibold mb-3">
              Contact Us
            </h3>

            <div className="text-white/70 text-xs leading-4 space-y-1">

              <p className="font-semibold text-white">
                LPS LIVINGSTONE
              </p>

              <p>
                Wenzel House, Tolpits Lane<br />
                WD18 9AB
              </p>

              <p className="text-cyan-300 font-medium">
                020 7278 0007
              </p>

            </div>

          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}
        <div className="mt-6 pt-3 border-t border-white/10 text-center text-[10px] text-white/40">

          © 2026 LPS Accountants Limited

        </div>

      </div>
    </footer>
  );
};

export default Footer;