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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-[999]">

        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`
            relative transition-all duration-500
            ${isScrolled
              ? 'bg-white/80 backdrop-blur-2xl shadow-md border-b border-white/20 py-3'
              : 'bg-white py-4'
            }
          `}
        >

          {/* glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-80px] left-[10%] w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-[-80px] right-[10%] w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-[1450px] mx-auto px-4 lg:px-8 flex items-center justify-between">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-10 sm:h-11' : 'h-12 sm:h-14'
                }`}
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-2">

              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="
                    relative px-4 py-2 text-[11px] font-bold uppercase tracking-wider
                    text-[#0b2b61]
                    hover:text-white
                    rounded-xl
                    transition-all duration-300
                    overflow-hidden
                    group
                  "
                >
                  {/* background hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0b2b61] to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </a>
              ))}

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-[#0b2b61] to-cyan-500 text-white"
            >
              <Menu size={22} />
            </button>

          </div>
        </motion.nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[1000] bg-[#071d3a] overflow-y-auto"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <img src={logo} className="h-10" />

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/10 text-white"
              >
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}
            <div className="px-5 py-8 space-y-3">

              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    flex items-center justify-between
                    bg-white/5 hover:bg-white/10
                    border border-white/10
                    rounded-xl px-5 py-4
                    text-white text-sm font-semibold
                    uppercase tracking-wider
                    transition
                  "
                >
                  {link.name}
                  <ChevronRight size={18} />
                </a>
              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* spacer */}
      <div className="h-[90px]" />
    </>
  );
};

export default Navbar;