import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D6E4F] text-white relative overflow-hidden">

      {/* soft glow */}
      <div className="absolute top-[-140px] left-[-140px] w-[260px] h-[260px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[260px] h-[260px] bg-white/10 blur-3xl rounded-full" />

      {/* overlay texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid sm:grid-cols-2 gap-10">

          {/* LINKS */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <div className="w-12 h-[2px] bg-white/80 rounded-full mt-3 mb-5" />

            <ul className="space-y-3 text-sm text-white/85">

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
                      hover:text-white
                      hover:underline
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

            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
            </h3>

            <div className="w-12 h-[2px] bg-white/80 rounded-full mt-3 mb-5" />

            <div className="text-white/85 text-sm leading-6 space-y-3">

              <p className="font-bold text-white text-base">
                LPS LIVINGSTONE
              </p>

              <p>
                Wenzel House, Tolpits Lane<br />
                WD18 9AB
              </p>

              <p className="text-white font-semibold text-base">
                020 7278 0007
              </p>

              <p className="text-white/70">
                Chartered Accountants & Business Advisors
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/70">
            © 2026 LPS Accountants Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/70">

            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;