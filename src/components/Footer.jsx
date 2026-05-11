import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#0D2040] relative overflow-hidden border-t border-[#E5E7EB]">

      {/* soft glow */}
      <div className="absolute top-[-140px] left-[-140px] w-[260px] h-[260px] bg-[#0D6E4F]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[260px] h-[260px] bg-[#0D2040]/10 blur-3xl rounded-full" />

      {/* overlay subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F8FAFC]" />

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
                  <a
                    href="#"
                    className="
                      hover:text-[#0D6E4F]
                      transition-all duration-300
                      font-medium
                    "
                  >
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

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">

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

      </div>
    </footer>
  );
};

export default Footer;