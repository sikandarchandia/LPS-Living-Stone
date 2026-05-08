import React from 'react';
import ShortServices from './ShortServices';
import Consultation from './Consultation';
import Testimonials from './Testimonials';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f6f9ff] min-h-screen w-full">

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">

        {/* ================= DESKTOP ONLY STABLE GRID ================= */}
        <div className="hidden lg:flex gap-6 py-6">

          {/* LEFT - 20% */}
          <aside className="w-[20%] shrink-0">
            <div className="sticky top-24 space-y-4">
              <ShortServices />
            </div>
          </aside>

          {/* CENTER - 60% */}
          <main className="w-[60%] min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
              {children}
            </div>
          </main>

          {/* RIGHT - 20% */}
          <aside className="w-[20%] shrink-0">
            <div className="sticky top-24 space-y-5">

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <Consultation />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <Testimonials />
              </div>

            </div>
          </aside>

        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:block lg:hidden py-6 space-y-5">

          <div className="bg-white rounded-2xl shadow-sm border p-5">
            {children}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ShortServices />
            <div className="space-y-4">
              <Consultation />
              <Testimonials />
            </div>
          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden py-6 space-y-5">

          <div className="bg-white rounded-2xl shadow-sm border p-4">
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