import React from 'react';
import ShortServices from './ShortServices';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen w-full">

      <div className="max-w-[1650px] mx-auto px-2 sm:px-2 lg:px-2">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex gap-2 py-3">

          {/* LEFT - SERVICES */}
          <aside className="w-[20%]">
            <div className="sticky top-14 space-y-2">
              <ShortServices />
            </div>
          </aside>

          {/* CENTER */}
          <main className="w-[80%] min-w-0">
            <div className="bg-white border border-[#E5E7EB]">
              {children}
            </div>
          </main>
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:block lg:hidden">

          <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EB]">
            {children}
          </div>

          <div className="grid grid-cols-2 gap-1">
            <ShortServices />
            <div className="space-y-1">
            </div>
          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">

          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB]">
            {children}
          </div>

          <ShortServices />

        </div>

      </div>
    </div>
  );
};

export default Layout;