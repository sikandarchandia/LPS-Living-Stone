import React from 'react';
import ShortServices from './ShortServices';
import Consultation from './Consultation';
import Testimonials from './Testimonials';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f6f9ff] min-h-screen w-full">

      <div className="max-w-[1650px] mx-auto px-3 sm:px-5 lg:px-8">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex gap-6 py-6">

          {/* LEFT - SERVICES */}
          <aside className="w-[20%]">
            <div className="sticky top-24 space-y-5">
              <ShortServices />
            </div>
          </aside>

          {/* CENTER */}
          <main className="w-[60%] min-w-0">
            <div className="bg-white border-slate-100">
              {children}
            </div>
          </main>

          {/* RIGHT */}
          <aside className="w-[20%]">
            <div className="sticky top-14 space-y-1">

              <Consultation />
              <Testimonials />

            </div>
          </aside>

        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:block lg:hidden">

          <div className="bg-white rounded-3xl shadow-sm border">
            {children}
          </div>

          <div className="grid grid-cols-2 gap-1">
            <ShortServices />
            <div className="space-y-1">
              <Consultation />
              <Testimonials />
            </div>
          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">

          <div className="bg-white rounded-2xl shadow-sm border">
            {children}
          </div>

          <ShortServices />
          <Consultation />
          <Testimonials />

        </div>

      </div>
    </div>
  );
};

export default Layout;