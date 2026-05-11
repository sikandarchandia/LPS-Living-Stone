import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#ECE5DD] text-[#0D2040] relative overflow-hidden border-t border-black/10">

      {/* soft glow */}
      <div className="absolute top-[-140px] left-[-140px] w-[260px] h-[260px] bg-[#0D6E4F]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[260px] h-[260px] bg-[#0D2040]/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid sm:grid-cols-2 gap-10">

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0D2040]">
              Quick Links
            </h3>

            <div className="w-12 h-[2px] bg-[#0D6E4F] rounded-full mt-3 mb-5" />

            <ul className="space-y-3 text-sm text-[#0D2040]/70">
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
                  <a className="hover:text-[#0D6E4F] transition font-medium cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0D2040]">
              Contact Us
            </h3>

            <div className="w-12 h-[2px] bg-[#0D6E4F] rounded-full mt-3 mb-5" />

            <div className="text-sm leading-6 space-y-3 text-[#0D2040]/70">

              <p className="font-bold text-[#0D2040] text-base">
                LPS LIVINGSTONE
              </p>

              <p>
                Wenzel House, Tolpits Lane<br />
                WD18 9AB
              </p>

              <p className="text-[#0D2040] font-semibold text-base">
                020 7278 0007
              </p>

              <p className="text-[#0D6E4F] font-medium">
                Chartered Accountants & Business Advisors
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-6">

              <a className="p-2 rounded-full bg-white border border-black/10 hover:bg-[#0D6E4F] hover:text-white transition">
                <FaFacebookF />
              </a>

              <a className="p-2 rounded-full bg-white border border-black/10 hover:bg-[#0D6E4F] hover:text-white transition">
                <FaTwitter />
              </a>

              <a className="p-2 rounded-full bg-white border border-black/10 hover:bg-[#0D6E4F] hover:text-white transition">
                <FaLinkedinIn />
              </a>

            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#0D2040]/60">
            © 2026 LPS Accountants Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-[#0D2040]/60">
            <span className="hover:text-[#0D6E4F] cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-[#0D6E4F] cursor-pointer transition">
              Terms
            </span>
          </div>

        </div>

        {/* ================= FINAL GREEN BAR ================= */}
        <div className="mt-8 bg-[#0D6E4F] text-white text-center py-3 rounded-xl text-sm font-medium tracking-wide shadow-md hover:bg-[#0b5c42] transition">
          © 2026 LPS Accountants — Built with precision, trusted by businesses worldwide. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;