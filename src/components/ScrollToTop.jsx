import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);

      setVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`
        fixed right-5 bottom-5 z-[999]
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
      `}
    >
      <button
        onClick={scrollTop}
        className="
          relative group
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          flex items-center justify-center

          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-2xl

          border border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]

          hover:scale-110 active:scale-95
          transition-all duration-300
        "
      >
        {/* Glow ring background */}
        <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-cyan-400/20 transition duration-300" />

        {/* Progress Ring */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="url(#grad)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset={150 - (150 * progress) / 100}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Icon */}
        <ArrowUp
          size={20}
          className="
            text-white
            group-hover:text-cyan-300
            transition
            relative z-10
            animate-[pulse_2.5s_ease-in-out_infinite]
          "
        />
      </button>
    </div>
  );
};

export default ScrollToTop;