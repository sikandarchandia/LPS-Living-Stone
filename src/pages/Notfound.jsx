import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-[#f6f9ff] overflow-hidden"
      aria-label="404 Not Found Page"
    >

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-300/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Floating Particles */}
      <motion.div
        role="img"
        aria-label="floating decoration"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-3 h-3 bg-cyan-400/40 rounded-full top-1/4 left-1/4 pointer-events-none"
      />

      <motion.div
        role="img"
        aria-label="floating decoration"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-2 h-2 bg-blue-400/40 rounded-full bottom-1/3 right-1/4 pointer-events-none"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl px-6"
      >

        {/* BIG 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[120px] sm:text-[160px] font-black text-[#0b2b61] leading-none"
        >
          404
        </motion.h1>

        {/* TEXT */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 text-sm sm:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Go Home */}
          <button
            onClick={() => navigate('/')}
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              bg-gradient-to-r from-cyan-400 to-blue-600
              text-white font-semibold
              shadow-lg
              hover:scale-105 active:scale-95
              transition
            "
          >
            <Home size={18} />
            Go Home
          </button>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              bg-white border border-slate-200
              text-[#0b2b61] font-semibold
              shadow-sm
              hover:bg-slate-50 hover:scale-105 active:scale-95
              transition
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        {/* Floating Line Animation */}
        <motion.div
          animate={{ scaleX: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-10 h-[2px] w-40 mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full pointer-events-none"
        />

      </motion.div>
    </div>
  );
};

export default NotFound;