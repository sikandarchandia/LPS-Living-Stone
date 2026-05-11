import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F5F7FA] overflow-hidden">

      {/* ================= BACKGROUND GLOW (THEME MATCHED) ================= */}
      <div className="absolute top-[-220px] left-[-200px] w-[550px] h-[550px] bg-[#0D6E4F]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-220px] right-[-200px] w-[550px] h-[550px] bg-[#0D2340]/20 blur-3xl rounded-full" />

      {/* Floating dots */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-3 h-3 bg-[#0D6E4F]/40 rounded-full top-1/4 left-1/4"
      />

      <motion.div
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-2 h-2 bg-[#0D2340]/40 rounded-full bottom-1/3 right-1/4"
      />

      {/* ================= MAIN CARD ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl px-6"
      >

        {/* BIG 404 (ENHANCED) */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-[130px] sm:text-[180px]
            font-black
            leading-none
            text-[#0D2340]
            tracking-tight
          "
        >
          404
        </motion.h1>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2340] mt-2">
          Oops! Page Not Found
        </h2>

        {/* DESCRIPTION (better readability) */}
        <p className="mt-5 text-[#6B7280] text-base sm:text-lg leading-7">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* HOME */}
          <button
            onClick={() => navigate('/')}
            className="
              flex items-center justify-center gap-2
              px-7 py-3.5 rounded-xl
              bg-[#0D6E4F]
              text-white font-semibold
              hover:bg-[#0b5c42]
              shadow-lg
              hover:scale-105 active:scale-95
              transition
            "
          >
            <Home size={18} />
            Go Home
          </button>

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="
              flex items-center justify-center gap-2
              px-7 py-3.5 rounded-xl
              bg-white
              border border-[#E5E7EB]
              text-[#0D2340]
              font-semibold
              hover:bg-[#F5F7FA]
              hover:scale-105 active:scale-95
              transition
              shadow-sm
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        {/* ================= DECOR LINE ================= */}
        <motion.div
          animate={{ scaleX: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12 h-[2px] w-44 mx-auto bg-gradient-to-r from-[#0D6E4F] to-[#0D2340] rounded-full"
        />

      </motion.div>
    </div>
  );
};

export default NotFound;