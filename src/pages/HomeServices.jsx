import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/MTD_LPS-768x549.png';
import img2 from '../assets/xero-certified-advisor.png';
import img3 from '../assets/business.jpg';
import img4 from '../assets/Makeup-1-768x512.jpg';
import img5 from '../assets/landlords.jpg';
import img6 from '../assets/Contractor.jpg';
import img7 from '../assets/business.jpg';
import img8 from '../assets/urgent-delivery.jpg';
import img9 from '../assets/service-charge.jpg';

const services = [
  { title: 'Small Businesses', img: img1 },
  { title: 'Contractors / Freelancers', img: img2 },
  { title: 'Make-Up Artists', img: img3 },
  { title: 'Urgent Deadlines', img: img4 },
  { title: 'Same Day Services', img: img5 },
  { title: 'Landlords', img: img6 },
  { title: 'Service Charge Accounts', img: img7 },
  { title: 'Tax Planning', img: img8 },
  { title: 'Business Growth Support', img: img9 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const HomeServices = () => {
  return (
    <section className="relative bg-[#f6f9ff] py-20 sm:py-24 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-cyan-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0b2b61] leading-tight">
            Welcome to LPS Livingstone
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-7">
            Known as <b>Small Business Specialists</b>, we offer personalised,
            professional and fixed price accounting services tailored to your needs.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid gap-5 sm:gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[190px] sm:h-[220px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-400/10" />

              {/* TEXT */}
              <div className="absolute bottom-0 w-full p-4 sm:p-5">

                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>

                <div className="h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-500 mt-2" />
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-24 relative rounded-3xl overflow-hidden"
        >

          <div className="absolute inset-0 bg-gradient-to-r from-[#04152d] via-[#0b2b61] to-[#0a3d91]" />

          <div className="relative text-center px-5 sm:px-10 py-14 sm:py-16 text-white">

            <h3 className="text-xl sm:text-3xl md:text-4xl font-black">
              Let’s Discuss Your Requirements
            </h3>

            <p className="mt-5 text-white/70 max-w-3xl mx-auto text-sm sm:text-base leading-7">
              We'd love to hear from you. Call us on{' '}
              <span className="text-white font-semibold">02072780007</span>
              {' '}or book a FREE consultation with our expert accountants.
            </p>

            <button className="mt-8 px-7 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-white transition">
              Book Free Consultation
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HomeServices;