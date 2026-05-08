import React from 'react';

const Consultation = () => {
  return (
    <div className="bg-gradient-to-br from-[#04152d] to-[#0b2b61] text-white rounded-2xl p-6 shadow-lg">

      <h2 className="text-lg font-bold">
        Book a Free Consultation
      </h2>

      <p className="text-white/70 text-xs mt-3 leading-5">
        Book a FREE, no-obligation consultation with us today and you’ll get:
      </p>

      <ul className="mt-4 text-xs space-y-2 text-white/80">
        <li>✔ A review of where you are now</li>
        <li>✔ A plan to where you want to be</li>
        <li>✔ Free advice on how to grow your business</li>
      </ul>

      <button className="mt-5 w-full py-3 bg-cyan-400 text-black font-bold rounded-xl hover:bg-white transition">
        Book Now
      </button>

    </div>
  );
};

export default Consultation;