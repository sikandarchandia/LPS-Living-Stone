import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronRight,
  Globe,
} from 'lucide-react';

import logo from '../assets/logo.png';
import icaew from '../assets/icaew.png';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about-us' },
  { name: 'SERVICES', href: '/services' },
  { name: 'SERVICE CHARGE ACCOUNTS', href: '/servicecharge' },
  { name: 'EU BUSINESS', href: '/eubusiness' },
  { name: 'FREE RESOURCES', href: '/freeresources' },
  { name: 'CONTACT US', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-[999]">

        {/* ================= TOP BAR ================= */}
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isScrolled
              ? 'max-h-0 opacity-0'
              : 'max-h-32 opacity-100'
          }`}
        >
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#021126] via-[#0a2c5e] to-[#15408b]">

            {/* PREMIUM GLOWS */}
            <div className="absolute -top-32 left-[10%] w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-32 right-[10%] w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* LIGHT */}
            <div className="absolute inset-0 bg-white/[0.03]"></div>

            <div className="relative max-w-[1450px] mx-auto px-4 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">

              {/* LEFT */}
              <div className="flex items-center gap-3 text-white/90">
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">

                {/* ICAEW MOBILE FIXED */}
                <div className="group relative flex items-center rounded-2xl border border-white/10 bg-white px-4 sm:px-5 py-2 shadow-[0_10px_40px_rgba(255,255,255,0.08)] overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Shine */}
                  <div className="absolute top-0 left-[-120%] h-full w-[40%] bg-white/30 rotate-12 blur-md group-hover:left-[150%] transition-all duration-1000"></div>

                  <img
                    src={icaew}
                    alt="ICAEW"
                    className="relative z-10 h-8 sm:h-10 w-auto object-contain"
                  />
                </div>

                {/* CLIENT PORTAL */}
                <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/50">

                  {/* Hover */}
                  <span className="absolute inset-0 scale-x-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                  {/* Shine */}
                  <span className="absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/20 blur-md group-hover:left-[150%] transition-all duration-1000"></span>

                  <span className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    Client Portal
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= NAVBAR ================= */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative transition-all duration-700 ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-white/20 py-3'
              : 'bg-white py-4'
          }`}
        >

          {/* GLOWS */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute top-[-80px] left-[10%] w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-80px] right-[10%] w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-[1450px] mx-auto px-4 lg:px-8 flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <a
              href="/"
              className="relative flex items-center group"
            >
              <img
                src={logo}
                alt="Logo"
                className={`relative z-10 object-contain transition-all duration-700 ${
                  isScrolled
                    ? 'h-11 md:h-12'
                    : 'h-14 md:h-16'
                }`}
              />

              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">

              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <a
                    href={link.href}
                    className="group relative flex items-center justify-center overflow-hidden rounded-2xl px-3 xl:px-4 py-3"
                  >

                    {/* NEW PREMIUM HOVER */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl bg-gradient-to-r from-[#0b2b61] via-[#144a96] to-cyan-500"></span>

                    {/* LIGHT SWEEP */}
                    <span className="absolute top-0 left-[-120%] h-full w-[45%] bg-white/30 blur-md rotate-12 group-hover:left-[140%] transition-all duration-1000"></span>

                    {/* INNER GLOW */}
                    <span className="absolute inset-[1px] rounded-2xl border border-cyan-300/0 group-hover:border-cyan-300/30 transition-all duration-500"></span>

                    {/* TEXT */}
                    <span className="relative z-10 whitespace-nowrap text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b2b61] transition-all duration-500 group-hover:text-white group-hover:scale-105">
                      {link.name}
                    </span>

                    {/* BOTTOM LIGHT */}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-300 transition-all duration-500 group-hover:w-[70%]"></span>
                  </a>

                  {/* ACTIVE LINE */}
                  <motion.div
                    animate={{
                      width: activeHover === index ? '100%' : '0%',
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="mx-auto h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-[#0b2b61]"
                  />
                </div>
              ))}
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#071d44] to-[#15408b] p-3 shadow-xl">

                <div className="absolute inset-0 bg-cyan-400/20 blur-xl"></div>

                <div className="relative text-white">
                  {mobileMenuOpen ? (
                    <X size={24} />
                  ) : (
                    <Menu size={24} />
                  )}
                </div>
              </div>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: '100%',
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: '100%',
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-gradient-to-br from-[#03142f] via-[#0b2f63] to-[#102d5c]"
          >

            {/* GLOW */}
            <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

            <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

            {/* CONTENT */}
            <div className="relative min-h-screen flex flex-col px-6 pt-28 pb-10">

              {/* MOBILE ICAEW */}
              <div className="mb-8 flex justify-center">
                <div className="rounded-2xl bg-white px-5 py-3 shadow-2xl">
                  <img
                    src={icaew}
                    alt="ICAEW"
                    className="h-10 object-contain"
                  />
                </div>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-3">

                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{
                      opacity: 0,
                      x: 80,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 80,
                    }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.5,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl"
                  >

                    {/* Hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 transition duration-500 group-hover:opacity-100"></span>

                    {/* Shine */}
                    <span className="absolute top-0 left-[-120%] h-full w-[50%] rotate-12 bg-white/20 blur-md group-hover:left-[150%] transition-all duration-1000"></span>

                    <div className="relative flex items-center justify-between">

                      <span className="text-base sm:text-lg font-semibold uppercase tracking-[0.18em] text-white transition duration-300 group-hover:text-cyan-300">
                        {link.name}
                      </span>

                      <ChevronRight
                        size={22}
                        className="text-white/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-cyan-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 py-4 text-white shadow-2xl">

                  {/* Shine */}
                  <span className="absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/30 blur-md group-hover:left-[160%] transition-all duration-1000"></span>

                  <span className="relative flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em]">
                    Client Portal

                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACER */}
      <div className="h-[140px]"></div>
    </>
  );
};

export default Navbar;