import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

import logo from '../assets/logo.png';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about-us' },
  { name: 'SERVICES', href: '/services' },
  { name: 'SERVICE CHARGE ACCOUNTS', href: '/servicecharge' },
  { name: 'FREE RESOURCES', href: '/freeresources' },
  { name: 'CONTACT US', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999]">

        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`
            transition-all duration-500 border-b
            ${isScrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-lg border-[#E5E7EB] py-3'
              : 'bg-white py-5 border-transparent'
            }
          `}
        >

          {/* subtle premium glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-100px] left-[10%] w-60 h-60 bg-[#0D6E4F]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-[-100px] right-[10%] w-60 h-60 bg-[#0D2040]/10 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-[1500px] mx-auto px-6 flex items-center justify-between">

            {/* LOGO + BRAND */}
            <a href="/" className="flex items-center gap-4">

              <img
                src={logo}
                alt="logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-16' : 'h-18'
                }`}
              />

              <div className="leading-tight">
                <h1 className="text-[#0D2040] font-black text-lg sm:text-xl tracking-wide">
                  Living Stone
                </h1>
                <p className="text-[#0D6E4F] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                  Chartered Accountants
                </p>
              </div>

            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">

              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="
                    relative px-4 py-2 text-[12px] font-semibold tracking-wide
                    text-[#0D2040]
                    hover:text-[#0D6E4F]
                    rounded-lg
                    transition-all duration-300
                    group overflow-hidden
                  "
                >
                  <span className="absolute left-4 bottom-1 w-0 h-[2px] bg-[#0D6E4F] group-hover:w-[calc(100%-32px)] transition-all duration-300 rounded-full" />

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </a>
              ))}

            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="
                  px-5 py-2.5 rounded-xl
                  bg-[#0D6E4F]
                  hover:bg-[#0b5c42]
                  text-white text-[12px] font-semibold
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                "
              >
                Book Consultation
              </a>
            </div>

            {/* MOBILE */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-[#0D6E4F] text-white transition-all duration-300"
            >
              <Menu size={22} />
            </button>

          </div>
        </motion.nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1000] bg-white"
          >

            {/* top */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-[#E5E7EB]">

              <div className="flex items-center gap-3">
                <img src={logo} className="h-12" />
                <div className="leading-tight">
                  <h1 className="text-[#0D2040] font-bold text-sm">
                    Living Stone
                  </h1>
                  <p className="text-[#0D6E4F] text-[10px] uppercase tracking-[0.15em]">
                    Chartered Accountants
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg bg-[#0D2040] text-white"
              >
                <X size={22} />
              </button>

            </div>

            {/* links */}
            <div className="px-5 py-8 space-y-3">

              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center justify-between
                    px-5 py-4 rounded-xl
                    bg-[#F5F7FA]
                    hover:bg-[#EAF5F0]
                    border border-[#E5E7EB]
                    text-[#0D2040] text-sm font-semibold
                    transition-all duration-300
                  "
                >
                  <span>{link.name}</span>

                  <ChevronRight size={18} className="text-[#0D6E4F]" />
                </a>
              ))}

            </div>

            {/* mobile CTA */}
            <div className="px-5 pb-8">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  flex items-center justify-center
                  w-full py-4 rounded-xl
                  bg-[#0D6E4F]
                  hover:bg-[#0b5c42]
                  text-white text-sm font-semibold
                  transition-all duration-300
                "
              >
                Book Consultation
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[90px]" />
    </>
  );
};

export default Navbar;